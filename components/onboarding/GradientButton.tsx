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
  // Responsive dimensions
  const buttonHeight = height * 0.065; // ~6.5% of screen height
  const borderRadius = buttonHeight / 2;
  const fontSize = width * 0.04; // ~4% of screen width
  const iconSize = width * 0.06; // ~6% of screen width

  return (
    <LinearGradient
      colors={["#000000", "#1D293D"]}
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
          <Text style={[styles.text, { fontSize: fontSize }]}>{title}</Text>
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
    gap: 8,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
}); 