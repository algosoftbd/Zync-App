import { Stack } from 'expo-router';

export default function NewsfeedLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen 
        name="Feed" 
        options={{ 
          presentation: 'fullScreenModal',
          animation: 'slide_from_bottom',
          gestureEnabled: true,
          gestureDirection: 'vertical'
        }} 
      />
    </Stack>
  );
}
