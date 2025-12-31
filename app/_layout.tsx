import { OnboardingProvider } from "@/context/OnboardingContext";
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import { useEffect } from 'react';
import './globals.css';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'DM-Sans-Regular': require('../assets/fonts/DM_Sans/static/DMSans-Regular.ttf'),
    'DM-Sans-Medium': require('../assets/fonts/DM_Sans/static/DMSans-Medium.ttf'),
    'DM-Sans-SemiBold': require('../assets/fonts/DM_Sans/static/DMSans-SemiBold.ttf'),
    'DM-Sans-Bold': require('../assets/fonts/DM_Sans/static/DMSans-Bold.ttf'),
    'DM-Sans-Light': require('../assets/fonts/DM_Sans/static/DMSans-Light.ttf'),
    'DM-Sans-Italic': require('../assets/fonts/DM_Sans/static/DMSans-Italic.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <OnboardingProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </OnboardingProvider>
  );
}

