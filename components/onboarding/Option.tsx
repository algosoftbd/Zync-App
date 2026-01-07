import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface OptionProps {
    icon?: any;
    label: string;
    selected?: boolean;
    onPress?: () => void;
}

const Option = ({ icon, label, selected = false, onPress }: OptionProps) => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    const radioButtonSource = isDark 
        ? require('@/assets/icons/Radio-button-Dark.png')
        : require('@/assets/icons/Radio-button-Light.png');

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={[
                styles.container,
                {
                    borderColor: selected 
                        ? (isDark ? Colors.dark.option.active.border : Colors.light.option.active.border)
                        : (isDark ? Colors.dark.option.inactive.border : Colors.light.option.inactive.border),
                    backgroundColor: selected
                        ? (isDark ? Colors.dark.option.active.background : Colors.light.option.active.background)
                        : (isDark ? Colors.dark.option.inactive.background : Colors.light.option.inactive.background),
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: selected ? 0.06 : 0,
                    shadowRadius: 4,
                    elevation: selected ? 2 : 0,
                },
            ]}
        >
            <View style={styles.content}>
                {icon && (
                    <Image style={styles.icon} source={icon} />
                )}
                <Text 
                    style={[
                        styles.label,
                        { 
                            color: selected
                                ? (isDark ? Colors.dark.option.active.text : Colors.light.option.active.text)
                                : (isDark ? Colors.dark.option.inactive.text : Colors.light.option.inactive.text)
                        }
                    ]}
                >
                    {label}
                </Text>
            </View>
            {selected ? (
                <Image
                    style={styles.radioButton}
                    source={radioButtonSource}
                    resizeMode="contain"
                />
            ) : (
                <View
                    style={[
                        styles.radio,
                        {
                            borderColor: isDark ? Colors.dark.option.inactive.border : Colors.light.option.inactive.border,
                            backgroundColor: isDark ? Colors.dark.background.primary : '#FFFFFF',
                        }
                    ]}
                />
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 16,
        borderWidth: 1,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    icon: {
        height: 24,
        width: 24,
    },
    label: {
        fontFamily: 'DM-Sans-Medium',
        fontSize: 14,
        lineHeight: 18,
    },
    radio: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
    },
    radioButton: {
        width: 20,
        height: 20,
    },
});

export default Option;
