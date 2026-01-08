import { Colors } from '@/constants/Colors';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View, useColorScheme } from 'react-native';

interface MorphButtonsProps {
    imageSource: ImageSourcePropType;
    counts?: number;
    width?: number;
    height?: number;
    onPress?: () => void;
}

const MorphButtons = ({ imageSource, counts, width = 16, height = 16, onPress }: MorphButtonsProps) => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    const formatCount = (count: number): string => {
        if (count >= 1000000) {
            const formatted = (count / 1000000).toFixed(1);
            return formatted.endsWith('.0') ? formatted.slice(0, -2) + 'M' : formatted + 'M';
        } else if (count >= 1000) {
            const formatted = (count / 1000).toFixed(1);
            return formatted.endsWith('.0') ? formatted.slice(0, -2) + 'k' : formatted + 'k';
        } else {
            return count.toString();
        }
    };

    return (
        <TouchableOpacity 
            style={{ flexDirection: 'column', alignItems: 'center', gap: 2  }}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <BlurView
                intensity={10}
                tint={isDark ? 'dark' : 'light'}
                style={{ width: 35, height: 35, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.32)', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}
            >
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image 
                        style={{ width, height }}
                        source={imageSource}
                        resizeMode="contain"
                    />
                </View>
            </BlurView>
            {counts !== undefined && (
                <Text style={{ color: Colors.dark.text.primary, fontSize: 12, fontFamily: 'DM-Sans-Regular', lineHeight: 16, letterSpacing: 0, textAlign: 'center' }}>
                    {formatCount(counts)}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default MorphButtons;