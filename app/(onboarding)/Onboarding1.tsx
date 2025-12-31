import { GradientButton } from "@/components/onboarding/GradientButton";
import Option from "@/components/onboarding/Option";
import { GradientText } from "@/components/ui/GradientText";
import { router } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const { width, height } = Dimensions.get("window");

const OPTIONS = [
  { icon: require("../../assets/icons/trending.png"), label: "Trending & pop culture" },
  { icon: require("../../assets/icons/in-depth.png"), label: "In-depth analysis" },
  { icon: require("../../assets/icons/balanced.png"), label: "Balanced mix" },
];

export default function Onboarding1Screen() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handlePress = () => {
    router.back();
  };

  // Responsive dimensions
  const backButtonSize = width * 0.1; // ~10% of screen width
  const backIconSize = width * 0.06; // ~6% of screen width
  const questionCardSize = width * 0.3; // ~30% of screen width

  return (
    <View className="flex flex-col bg-white" style={{ height: height, width: width }}>
      {/* Header */}
      <View 
        className="w-full px-4 justify-center"
        style={{ height: height * 0.1 }}
      >
        <TouchableOpacity
          onPress={handlePress}
          activeOpacity={0.7}
          style={{
            width: backButtonSize,
            height: backButtonSize,
            borderRadius: backButtonSize / 2,
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 2,
            borderWidth: 1,
            borderColor: "#F0F0F0",
          }}
        >
          <Image
            style={{ height: backIconSize, width: backIconSize }}
            source={require("@/assets/icons/Back-button.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <View style={{ marginTop: height * 0.02 }} className="flex justify-start items-center">
        <GradientText
          text="Just a few steps"
          colors={["#1D293D", "#FF6868", "#7F22FE"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0.5 }}
        />
      </View>

      {/* Main Content - Scrollable for smaller screens */}
      <ScrollView 
        contentContainerStyle={{ 
          flexGrow: 1,
          paddingHorizontal: width * 0.04,
          paddingBottom: height * 0.05,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View 
          className="flex flex-col w-full justify-start items-center"
          style={{ marginTop: selectedOption != null ? height * 0.08 : height * 0.12 }}
        >
          <Image 
            style={{ height: questionCardSize, width: questionCardSize }} 
            source={require('../../assets/icons/QuestionCard.png')} 
            resizeMode="contain"
          />
          
          <View 
            className="flex flex-col w-full" 
            style={{ marginTop: height * 0.04 }}
          >
            <Text className="text-textsecondary font-dm-sans">1 of 3</Text>
            
            <View className="flex w-full justify-center" style={{ marginTop: height * 0.015 }}>
              <Text 
                className='font-bold font-dm-sans-bold'
                style={{ fontSize: width * 0.055 }}
              >
                What kind of news mix do you prefer
              </Text>
            </View>
            
            <View style={{ marginTop: height * 0.03, gap: height * 0.015, marginBottom: height * 0.03 }}>
              {OPTIONS.map((option, index) => (
                <Option
                  key={index}
                  icon={option.icon}
                  label={option.label}
                  selected={selectedOption === index}
                  onPress={() => setSelectedOption(index)}
                />
              ))}
            </View>
            
            {selectedOption != null && (
              <GradientButton
                title="Continue"
                onPress={() => router.push('/(onboarding)/Onboarding2')}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}