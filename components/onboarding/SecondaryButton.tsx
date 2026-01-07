import { useColorScheme } from '@/hooks/useColorScheme';
import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";

type SecondaryButtonProps = {
  title: string;
  onPress: () => void;
  className?: string;
  style?: ViewStyle;
};

export function SecondaryButton({ title, onPress, className, style }: SecondaryButtonProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Theme-aware colors matching Figma designs with glassmorphism
  const backgroundColor = isDark 
    ? 'rgba(255, 255, 255, 0.06)' // Very subtle white overlay in dark mode
    : 'rgba(0, 0, 0, 0.06)'; // Light gray in light mode
  
  const borderColor = isDark
    ? 'rgba(255, 255, 255, 0.1)' // Subtle white border in dark mode
    : 'rgba(0, 0, 0, 0.08)'; // Subtle dark border in light mode
  
  const textColor = isDark 
    ? '#FFFFFF' // White text in dark mode
    : '#1D293D'; // Dark slate text in light mode

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={className}
      style={[
        {
          flexDirection: 'row',
          paddingVertical: 16,
          paddingHorizontal: 24,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 6,
          alignSelf: 'stretch',
          borderRadius: 9999,
          backgroundColor,
          borderWidth: 1,
          borderColor,
          // Glassmorphism shadow effects
          shadowColor: isDark ? '#000' : '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: isDark ? 0.3 : 0.05,
          shadowRadius: 8,
          elevation: 2,
        },
        style,
      ]}
    >
      <Text 
        style={{ 
          fontSize: 16, 
          fontFamily: 'DM-Sans-Medium',
          lineHeight: 20,
          color: textColor,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
