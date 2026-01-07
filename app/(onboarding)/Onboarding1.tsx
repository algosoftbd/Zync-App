import { BackButton } from "@/components/onboarding/BackButton";
import { QuestionCard } from "@/components/onboarding/QuestionCard";
import { QuestionContainer } from "@/components/onboarding/QuestionContainer";
import { GradientText } from "@/components/ui/GradientText";
import { useColorScheme } from '@/hooks/useColorScheme';
import { router } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Image, ScrollView, StatusBar, View } from "react-native";

const { width, height } = Dimensions.get("window");

const OPTIONS = [
  { icon: require("../../assets/icons/trending.png"), label: "Trending & pop culture" },
  { icon: require("../../assets/icons/in-depth.png"), label: "In-depth analysis" },
  { icon: require("../../assets/icons/balanced.png"), label: "Balanced mix" },
];

export default function Onboarding1Screen() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const cardIcon = require('@/assets/icons/QuestionCard.png');

  const handlePress = () => {
    router.back();
  };

  // Select background image and color based on color scheme
  const backgroundImage = isDark
    ? require('@/assets/Background/Dark.png')
    : require('@/assets/Background/Light.png');
  const backgroundColor = isDark ? '#020618' : '#FFFFFF';

  return (
    <View style={{ flex: 1, backgroundColor }}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* Background Image */}
      <Image
        source={backgroundImage}
        style={{
          position: 'absolute',
          width: width,
          height: height,
          top: 0,
          left: 0,
        }}
        resizeMode="cover"
      />

      {/* Header */}
      <View style={{ paddingHorizontal: 20, paddingTop: 80, paddingBottom: 14 }}>
        <BackButton onPress={handlePress} size={24} />
      </View>

      {/* Title */}
      <View style={{ marginTop: 24, alignItems: 'center' }}>
        <GradientText
          text="Just a few steps"
          colors={isDark ? ["#FFFFFF", "#FF6868", "#FFFFFF"] : ["#1D293D", "#FF6868", "#7F22FE"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      </View>

      {/* Main Content */}
      <View style={{ flex: 1, marginTop: 24 }}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 0,
            paddingBottom: 40,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ alignItems: 'center' }}>
            <View style={{ zIndex: 1, position: 'absolute', marginTop: selectedOption != null ? 150 : 200 }}>
              <QuestionCard iconSource={cardIcon} />
            </View>
            <View style={{ marginTop: selectedOption != null ? 160 : 210 }}>
              <QuestionContainer
                currentStep={1}
                totalSteps={3}
                question="What kind of news mix do you prefer?"
                options={OPTIONS}
                selectedOption={selectedOption}
                onOptionSelect={setSelectedOption}
                showContinueButton={selectedOption !== null}
                onContinue={() => router.push('/(onboarding)/Onboarding2')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}