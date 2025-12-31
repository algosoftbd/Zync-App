import { BlurView } from 'expo-blur';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MorphButtonsProps {
    imageSource: ImageSourcePropType;
    counts?: number;
    width?: number;
    height?: number;
    onPress?: () => void;
}

const MorphButtons = ({ imageSource, counts, width = 22, height = 22, onPress }: MorphButtonsProps) => {
    const formatCount = (count: number): string => {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(1) + 'M';
        } else if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'K';
        } else {
            return count.toString();
        }
    };

    const containerSize = Math.max(width, height) + 20;

    return (
        <TouchableOpacity className='flex flex-col gap-2' onPress={onPress}>
            <BlurView
                intensity={30}
                tint="light"
                style={[
                    styles.glassContainer,
                    {
                        width: containerSize,
                        height: containerSize,
                        borderRadius: containerSize / 2,
                    }
                ]}
            >
                <View style={styles.iconContainer}>
                    <Image style={{ width: width, height: height }} source={imageSource} />
                </View>
            </BlurView>
            {counts !== undefined && <Text className='text-white text-sm text-center' >{formatCount(counts)}</Text>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    glassContainer: {
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MorphButtons