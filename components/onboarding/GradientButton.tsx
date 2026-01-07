import { useColorScheme } from '@/hooks/useColorScheme';
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";

const { width, height } = Dimensions.get('window');

type GradientButtonProps = {
  title: string;
  onPress: () => void;
  imageSource?: any;
  className?: string;
  style?: ViewStyle;
};

export function GradientButton({ title, onPress, imageSource, className, style }: GradientButtonProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  // Responsive dimensions
  const buttonHeight = height * 0.065; // ~6.5% of screen height
  const borderRadius = buttonHeight / 2;
  const fontSize = 16; // Fixed 16px
  const iconSize = 18; // Fixed 18px
  
  // Theme-aware colors
  const gradientColors = isDark 
    ? ["#FFFFFF", "#FFFFFF"] as any // White background in dark mode
    : ["#000000", "#1D293D"] as any; // Gradient in light mode
  
  const textColor = isDark ? "#1E293B" : "#FFFFFF"; // Slate/800 in dark, white in light

  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
      style={[
        styles.gradient,
        {
          height: buttonHeight,
          borderRadius: borderRadius,
          width: style?.width || '100%',
        },
        style
      ]}
    >
      <View style={[styles.container, { borderRadius: borderRadius }]}>
        <TouchableOpacity
          style={[styles.button, { borderRadius: borderRadius }]}
          onPress={onPress}
          activeOpacity={0.8}
        >
          <Text style={[styles.text, { fontSize, color: textColor }]}>{title}</Text>
          {imageSource && <Image style={{ width: iconSize, height: iconSize }} source={imageSource} />}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    padding: 2,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  text: {
    fontFamily: 'DM-Sans-Medium',
    lineHeight: 20,
  },
}); 