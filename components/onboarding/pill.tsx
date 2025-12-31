import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

interface PillProps {
    icon: any;
    label: string;
    selected?: boolean;
    onPress?: () => void;
}

const Pill = ({ icon, label, selected = true, onPress }: PillProps) => {
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
                borderWidth: 1,
                borderColor: '#E2E8F0',
                backgroundColor: '#F1F5F9',
            }}
        >
            <Image style={{ height: 16, width: 16 }} source={icon} />
            <Text className="text-textsecondary font-dm-sans text-sm">{label}</Text>
            <Image
                style={{ height: 14, width: 14 }}
                source={
                    selected
                        ? require('../../assets/pill-icons/check.png')
                        : require('../../assets/pill-icons/plus.png')
                }
            />
        </TouchableOpacity>
    )
}

export default Pill
