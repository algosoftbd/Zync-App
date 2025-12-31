import { useOnboarding } from "@/hooks/useOnboarding";
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { isOnboardingComplete, isLoading } = useOnboarding();

  // Show loading while checking onboarding status
  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-black">
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  // Redirect based on onboarding status
  if (!isOnboardingComplete) {
    return <Redirect href="/(onboarding)/welcome" />;
  }

  // Main app content (after onboarding)
  return (
    <View className="flex-1 justify-center items-center bg-black">
      {/* Your main app content goes here */}
    </View>
  );
}
