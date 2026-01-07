import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Image, Platform, Text, View } from 'react-native';

interface WelcomeCardProps {
  title: string;
  imageSource: any;
  rotation: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ title, imageSource, rotation }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  if (isDark) {
    // Dark mode with glass effect
    return (
      <View 
        style={{
          transform: [{ rotate: rotation }],
          width: 112,
          height: 130,
          borderRadius: 24,
          overflow: 'hidden',
        }}
      >
        <BlurView
          intensity={Platform.OS === 'ios' ? 20 : 10}
          tint="dark"
          style={{
            flex: 1,
            paddingHorizontal: 14,
            paddingVertical: 12,
            borderWidth: 1,
            borderColor: colors.card.border,
            borderRadius: 24,
            backgroundColor: colors.card.base,
          }}
        >
          <View style={{ 
            width: 84, 
            height: 84, 
            alignItems: 'center', 
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
            <Image 
              style={{ width: 84, height: 84 }} 
              resizeMode='contain' 
              source={imageSource} 
            />
          </View>
          <View style={{ marginTop: 2 }}>
            <Text 
              style={{ 
                fontFamily: 'DM-Sans-Bold',
                fontSize: 14,
                lineHeight: 18,
                height: 20,
                color: colors.text.secondary,
              }}
            >
              {title}
            </Text>
          </View>
        </BlurView>
      </View>
    );
  }

  // Light mode
  return (
    <View 
      style={{
        transform: [{ rotate: rotation }],
        width: 112,
        height: 130,
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderRadius: 24,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 5,
      }}
    >
      <View style={{ 
        width: 84, 
        height: 84, 
        alignItems: 'center', 
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
        <Image 
          style={{ width: 84, height: 84 }} 
          resizeMode='contain' 
          source={imageSource} 
        />
      </View>
      <View style={{ marginTop: 2 }}>
        <Text 
          style={{ 
            fontFamily: 'DM-Sans-Bold',
            fontSize: 14,
            lineHeight: 18,
            height: 20,
            color: '#45556C',
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}

export default WelcomeCard; 