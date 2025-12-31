import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, Platform, Text, TextStyle, View } from "react-native";

type GradientTextProps = {
  text: string;
  colors?: [ColorValue, ColorValue, ...ColorValue[]];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: TextStyle;
  className?: string;
  fontSize?: number;
};

export function GradientText({
  text,
  colors = ["#1D293D", "#FF6868", "#7F22FE"],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0.5 },
  style,
  className = "",
  fontSize = 18,
}: GradientTextProps) {
  const textStyle: TextStyle = {
    fontSize,
    fontWeight: "500",
    textAlign: "center",
    ...style,
  };

  // Web fallback - MaskedView doesn't work on web
  if (Platform.OS === "web") {
    return (
      <Text
        style={[
          textStyle,
          {
            // @ts-ignore - web-only CSS property
            backgroundImage: `linear-gradient(124deg, ${colors.join(", ")})`,
            // @ts-ignore
            WebkitBackgroundClip: "text",
            // @ts-ignore
            WebkitTextFillColor: "transparent",
            // @ts-ignore
            backgroundClip: "text",
          },
        ]}
      >
        {text}
      </Text>
    );
  }

  // Native implementation with MaskedView
  return (
    <MaskedView
      maskElement={
        <View style={{ backgroundColor: "transparent" }}>
          <Text style={[textStyle, { backgroundColor: "transparent" }]}>
            {text}
          </Text>
        </View>
      }
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        locations={[0.526, 0.766, 0.887]}
      >
        <Text style={[textStyle, { opacity: 0 }]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
}
