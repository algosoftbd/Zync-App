import { BackButton } from "@/components/onboarding/BackButton";
import { GradientButton } from "@/components/onboarding/GradientButton";
import { QuestionCard } from "@/components/onboarding/QuestionCard";
import { SecondaryButton } from "@/components/onboarding/SecondaryButton";
import { GradientText } from '@/components/ui/GradientText';
import { Colors } from "@/constants/Colors";
import { useColorScheme } from '@/hooks/useColorScheme';
import { router } from 'expo-router';
import React from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, StatusBar, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const SignIn = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;
  const cardIcon = require('../../assets/icons/signinCard.png')

  // Select background image and color based on color scheme
  const backgroundImage = isDark
    ? require('@/assets/Background/Dark.png')
    : require('@/assets/Background/Light.png');
  const backgroundColor = isDark ? Colors.dark.background.primary : Colors.light.background.primary;

  const handlePress = () => {
    router.back();
  };

  // Responsive dimensions
  const signInCardSize = width * 0.23;
  const thunderIconSize = width * 0.06;

  return (
    <View style={{ height: height, width: width, backgroundColor }}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* Background Image */}
      <ImageBackground
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
          <View style={{ marginTop: 24, alignItems: 'center' }}>
            <GradientText
              text="Let's Wrap up!"
              colors={isDark ? ["#FFFFFF", "#FF6868", "#FFFFFF"] : ["#1D293D", "#FF6868", "#7F22FE"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
          </View>

          <View style={{ marginTop: height * 0.1 }}>
            <View style={{ zIndex: 1 }} >
              <QuestionCard iconSource={cardIcon} />
            </View>
          </View>

          <View className='flex flex-col' style={{ marginTop: height * 0.04 }}>
            <Text
              className="text-body-md font-dm-sans-medium text-center" style={{ color: colors.text.secondary }}
            >
              Let's get into the world of
            </Text>
            <View className='flex flex-row justify-center items-center'>
              <Text
                className="text-body-md font-dm-sans-medium text-center" style={{ color: colors.text.secondary }}
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
            className='flex  flex-col w-full justify-center items-center  '
            style={{ marginTop: '150', gap: height * 0.015, paddingTop: height * 0.1 }}
          >
            <GradientButton
              title='Continue with Google'
              className='w-full'
              imageSource={require('../../assets/icons/Google.png')}
            />
            <SecondaryButton
              title="Skip for now"
              onPress={() => router.push({ pathname: '/(newsfeed)/Feed' })}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignIn