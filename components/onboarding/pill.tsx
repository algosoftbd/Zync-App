import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface PillProps {
    icon: any;
    label: string;
    selected?: boolean;
    onPress?: () => void;
}

const Pill = ({ icon, label, selected = true, onPress }: PillProps) => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={{
                flexDirection: 'row',
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 10,
                paddingRight: 6,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 8,
                borderRadius: 9999,
            }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Image style={{ height: 16, width: 16 }} source={icon} />
                <Text 
                    className="text-body-sm font-dm-sans"
                    style={{ 
                        color: selected 
                            ? (isDark ? '#FFFFFF' : '#1D293D')
                            : (isDark ? '#90A1B9' : '#62748E')
                    }}
                >
                    {label}
                </Text>
            </View>
            <View style={{
                width: 24,
                height: 24,
                borderRadius: 100,
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#FFFFFF',
                borderWidth: 1,
                borderColor: isDark ? 'rgba(226, 232, 240, 0.1)' : '#E2E8F0',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    style={{ height: 14, width: 14 }}
                    source={
                        selected
                            ? require('../../assets/pill-icons/check.png')
                            : require('../../assets/pill-icons/plus.png')
                    }
                />
            </View>
        </TouchableOpacity>
    )
}

export default Pill
