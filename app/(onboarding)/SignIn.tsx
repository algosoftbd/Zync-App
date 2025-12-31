import { GradientButton } from "@/components/onboarding/GradientButton";
import { SecondaryButton } from "@/components/onboarding/SecondaryButton";
import { GradientText } from '@/components/ui/GradientText';
import { router } from 'expo-router';
import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const SignIn = () => {
  const handlePress = () => {
    router.back();
  };

  // Responsive dimensions
  const backButtonSize = width * 0.1;
  const backIconSize = width * 0.06;
  const signInCardSize = width * 0.23;
  const thunderIconSize = width * 0.06;
  return (
    <View className='flex flex-col bg-white' style={{ height: height, width: width }}>
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

      {/* Main Content - Scrollable */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: width * 0.04,
          paddingBottom: height * 0.05,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex flex-col w-full justify-start items-center" style={{ marginTop: height * 0.02 }}>
          <GradientText
            text="Let's wrap up!"
            colors={["#1D293D", "#FF6868", "#7F22FE"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.5 }}
          />
          
          <View style={{ marginTop: height * 0.1 }}>
            <Image 
              style={{ height: signInCardSize, width: signInCardSize }} 
              source={require('../../assets/icons/signinCard.png')} 
              resizeMode="contain"
            />
          </View>
          
          <View className='flex flex-col' style={{ marginTop: height * 0.06 }}>
            <Text 
              className='text-center text-textsecondary font-dm-sans'
              style={{ fontSize: width * 0.04, marginTop: height * 0.02 }}
            >
              Let's get into the world of
            </Text>
            <View className='flex flex-row justify-center items-center'>
              <Text 
                className='text-center text-textsecondary font-dm-sans'
                style={{ fontSize: width * 0.04 }}
              >
                exciting news
              </Text>
              <Image 
                style={{ height: thunderIconSize, width: thunderIconSize, marginLeft: 4 }} 
                source={require('../../assets/icons/thunder.png')} 
                resizeMode="contain"
              />
            </View>
          </View>
          
          <View 
            className='flex flex-col w-full justify-center items-center'
            style={{ marginTop: 'auto', gap: height * 0.015, paddingTop: height * 0.1 }}
          >
            <GradientButton 
              title='Continue with Google'
              className='w-full'
              imageSource={require('../../assets/icons/Google.png')}
            />
            <SecondaryButton
              title="Skip for now"
              onPress={() => router.push({pathname: '/(newsfeed)/Feed'}) }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignIn