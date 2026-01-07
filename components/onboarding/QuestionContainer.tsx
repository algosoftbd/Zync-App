import { GradientButton } from "@/components/onboarding/GradientButton";
import Option from "@/components/onboarding/Option";
import { StepIndicator } from "@/components/onboarding/StepIndicator";
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from "react";
import { ImageSourcePropType, Text, View } from "react-native";

type OptionType = {
  icon: ImageSourcePropType;
  label: string;
};

type QuestionContainerProps = {
  currentStep: number;
  totalSteps: number;
  question: string;
  options: OptionType[];
  selectedOption: number | null;
  onOptionSelect: (index: number) => void;
  showContinueButton: boolean;
  onContinue: () => void;
};

export function QuestionContainer({
  currentStep,
  totalSteps,
  question,
  options,
  selectedOption,
  onOptionSelect,
  showContinueButton,
  onContinue,
}: QuestionContainerProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View
      style={{
        marginTop: 32,
        width: '100%',
        backgroundColor: isDark ? Colors.dark.background.primary : '#FFFFFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingTop: 56,
        paddingHorizontal: 16,
        paddingBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.05,
        shadowRadius: 17,
        elevation: 8,
      }}
    >
      {/* Step Indicator */}
      <View style={{ marginBottom: 12, width: '13%' }}>
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
      </View>

      {/* Question */}
      <View style={{ marginBottom: 24 }}>
        <Text
          style={{
            fontFamily: 'DM-Sans-Bold',
            fontSize: 24,
            lineHeight: 32,
            color: isDark ? Colors.dark.text.primary : Colors.light.text.primary,
            letterSpacing: -0.42,
          }}
        >
          {question}
        </Text>
      </View>

      {/* Options */}
      <View style={{ gap: 12, marginBottom: 24 }}>
        {options.map((option, index) => (
          <Option
            key={index}
            icon={option.icon}
            label={option.label}
            selected={selectedOption === index}
            onPress={() => onOptionSelect(index)}
          />
        ))}
      </View>

      {/* Continue Button */}
      {showContinueButton && (
        <View>
          <GradientButton
            title="Continue"
            onPress={onContinue}
          />
        </View>
      )}
    </View>
  );
}
