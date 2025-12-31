import { GradientButton } from "@/components/onboarding/GradientButton";
import  GradientBackground  from "@/components/ui/GradientBackground";
import { useOnboarding } from "@/hooks/useOnboarding";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function NotificationsScreen() {
  const { completeOnboarding } = useOnboarding();

  const handleEnableNotifications = async () => {
    // Request notification permissions here
    // Example: await Notifications.requestPermissionsAsync();
    await finishOnboarding();
  };

  const finishOnboarding = async () => {
    await completeOnboarding();
    router.replace("/"); // Navigate to main app
  };

  return (
    <GradientBackground>
      <View className="flex-1 justify-center items-center px-6">
        {/* Illustration */}
        <View className="mb-10">
          <View className="w-32 h-32 bg-white/10 rounded-full justify-center items-center">
            <Text className="text-6xl">🔔</Text>
          </View>
        </View>

        {/* Content */}
        <View className="items-center mb-12">
          <Text className="text-white text-3xl font-bold mb-4 text-center">
            Stay Updated
          </Text>
          <Text className="text-textsecondary text-base text-center leading-6">
            Enable notifications to get the latest news and updates delivered
            right to you.
          </Text>
        </View>

        {/* Buttons */}
        <View className="w-full items-center">
          <GradientButton
            title="Enable Notifications"
            onPress={handleEnableNotifications}
            imageSource={null}
          />
          <TouchableOpacity onPress={finishOnboarding} className="mt-4">
            <Text className="text-textsecondary text-base">Maybe Later</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientBackground>
  );
}
