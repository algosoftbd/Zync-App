import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

// =============================================
// 🎨 DESIGN PLAYGROUND
// Import and render any component/screen here
// =============================================

// Example: Import your screen or component to test
// import InterestsScreen from "./(onboarding)/interests";
// import { GradientButton } from "@/components/onboarding/GradientButton";

export default function Playground() {
  return (
    <View className="flex-1 bg-black">
      {/* Quick navigation to all screens */}
      <View className="p-6 pt-16">
        <Text className="text-white text-2xl font-bold mb-6">
          🎨 Design Playground
        </Text>

        <Text className="text-gray-400 mb-4">Quick Links:</Text>
        
        <TouchableOpacity
          className="bg-white/10 p-4 rounded-lg mb-3"
          onPress={() => router.push("/(onboarding)/welcome")}
        >
          <Text className="text-white">→ Welcome Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white/10 p-4 rounded-lg mb-3"
          onPress={() => router.push("/(onboarding)/Onboarding1")}
        >
          <Text className="text-white">→ Interests Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white/10 p-4 rounded-lg mb-3"
          onPress={() => router.push("/(onboarding)/notifications")}
        >
          <Text className="text-white">→ Notifications Screen</Text>
        </TouchableOpacity>
      </View>

      {/* 
        =============================================
        👇 PASTE YOUR DESIGN HERE FOR QUICK TESTING
        =============================================
      */}
      
      {/* Example:
      <View className="flex-1 p-6">
        <GradientButton title="Test" onPress={() => {}} imageSource={null} />
      </View>
      */}
    </View>
  );
}
