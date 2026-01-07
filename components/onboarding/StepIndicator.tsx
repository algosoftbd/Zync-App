import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type StepIndicatorProps = {
  currentStep: number;
  totalSteps: number;
};

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark 
            ? Colors.dark.card.base 
            : '#FFFFFF',
          borderColor: isDark 
            ? 'rgba(203, 213, 225, 0.1)' 
            : '#E2E8F0',
        }
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: isDark ? Colors.dark.text.secondary : Colors.light.text.secondary }
        ]}
      >
        {currentStep} of {totalSteps}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 9999,
    borderWidth: 0.8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    fontFamily: 'DM-Sans-Regular',
    fontSize: 12,
    lineHeight: 16,
  },
});
