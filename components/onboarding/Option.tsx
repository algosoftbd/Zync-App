import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface OptionProps {
    icon?: any;
    label: string;
    selected?: boolean;
    onPress?: () => void;
}

const Option = ({ icon, label, selected = false, onPress }: OptionProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            className='flex flex-row justify-between items-center px-3 py-4 rounded-xl border'
            style={{
                borderColor: selected ? '#7F22FE' : '#F0F0F0',
                backgroundColor: selected ? '#F9F5FF' : '#FFFFFF',
            }}
        >
            <View className='flex flex-row items-center'>
                {icon && (
                    <Image style={{ height: 24, width: 24 }} source={icon} />
                )}
                <Text className='text-textsecondary text-sm font-medium font-dm-sans ml-2'>{label}</Text>
            </View>
            <View
                style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderWidth: selected ? 0 : 2,
                    borderColor: '#D0D5DD',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {selected && (
                    <Image
                        style={{ height: 20, width: 20 }}
                        source={require('../../assets/icons/radio.png')}
                    />
                )}
            </View>
        </TouchableOpacity>
    )
}

export default Option