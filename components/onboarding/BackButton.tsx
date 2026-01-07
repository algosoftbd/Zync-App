import { useColorScheme } from '@/hooks/useColorScheme';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity } from 'react-native';

type BackButtonProps = {
  onPress: () => void;
  size?: number;
};

export function BackButton({ onPress, size = 24 }: BackButtonProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const iconSize = size * 0.667; // 16px for 24px button
  const iconSource = isDark 
    ? require('@/assets/icons/Back-button-Dark.png')
    : require('@/assets/icons/Back-button-Light.png');

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.button, 
        { 
          width: size, 
          height: size, 
          borderRadius: size / 2,
          backgroundColor: 'rgba(0, 0, 0, 0.06)',
        }
      ]}
    >
      {Platform.OS === 'ios' && (
        <BlurView
          intensity={20}
          tint={isDark ? 'dark' : 'light'}
          style={StyleSheet.absoluteFill}
        />
      )}
      <Image
        style={{ height: iconSize, width: iconSize, zIndex: 1 }}
        source={iconSource}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
