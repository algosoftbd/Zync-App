import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

type QuestionCardProps = {
  iconSource?: any;
  size?: number;
};

export function QuestionCard({ 
  iconSource = require('@/assets/icons/QuestionCard.png'),
  size = 102 
}: QuestionCardProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View
        style={[
          styles.card,
          {
            backgroundColor: isDark ? Colors.dark.card.base : '#FFFFFF',
            borderColor: isDark 
              ? 'rgba(203, 213, 225, 0.1)' 
              : '#E2E8F0',
            transform: [{ rotate: '6.94deg' }],
          }
        ]}
      >
        <Image
          source={iconSource}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 92,
    height: 92,
    padding: 14,
    borderRadius: 24,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  icon: {
    width: 80,
    height:80,
  },
});
