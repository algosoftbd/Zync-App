import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";

type SecondaryButtonProps = {
  title: string;
  onPress: () => void;
  className?: string;
  style?: ViewStyle;
};

export function SecondaryButton({ title, onPress, className, style }: SecondaryButtonProps) {
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
          gap: 8,
          alignSelf: 'stretch',
          borderRadius: 9999,
          backgroundColor: 'rgba(0, 0, 0, 0.06)',
        },
        style,
      ]}
    >
      <Text style={{ fontSize: 16, fontWeight: '500', color: '#1F2937' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
