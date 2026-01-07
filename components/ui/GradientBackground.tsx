import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { ImageBackground, View, ViewStyle } from 'react-native';

interface GradientBackgroundProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  className?: string;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ 
  children, 
  style, 
  className = "" 
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  // Select background image based on color scheme
  const backgroundImage = isDark 
    ? require('@/assets/Background/Dark.png')
    : require('@/assets/Background/Light.png');
  
  // Select background color based on color scheme
  const backgroundColor = isDark ? '#020618' : '#FFFFFF';
  
  return (
    <View 
      className={`relative ${className}`}
      style={[{ backgroundColor }, style]}
    >
      {/* Background Image */}
      <ImageBackground
        source={backgroundImage}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover"
      />
      
      {/* Content */}
      <View style={{ zIndex: 10, position: 'relative' }}>
        {children}
      </View>
    </View>
  );
};

export default GradientBackground;