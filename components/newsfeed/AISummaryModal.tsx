import React from 'react';
import { Animated, Dimensions, Image, Modal, Text, TouchableOpacity, View, useColorScheme } from 'react-native';

const { height } = Dimensions.get('window');

type AISummaryModalProps = {
    visible: boolean;
    onClose: () => void;
    headline: string;
}

const AISummaryModal = ({ visible, onClose, headline }: AISummaryModalProps) => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    const slideAnim = React.useRef(new Animated.Value(height)).current;

    React.useEffect(() => {
        if (visible) {
            Animated.spring(slideAnim, {
                toValue: 0,
                useNativeDriver: true,
                tension: 65,
                friction: 11,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: height,
                duration: 250,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    // Sample bullet points - you can make this dynamic
    const summaryPoints = [
        `US Puts $50M Bounty on Venezuelan President Nicolás...`,
        `US Puts $50M Bounty on Venezuelan President Nicolás...`,
        `US Puts $50M Bounty on Venezuelan President Nicolás...`,
    ];

    return (
        <Modal
            transparent
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    style={{ flex: 1 }}
                    activeOpacity={1}
                    onPress={onClose}
                />
                <Animated.View
                    style={{
                        transform: [{ translateY: slideAnim }],
                        backgroundColor: 'white',
                        borderRadius: 32,
                        paddingTop: 16,
                        paddingHorizontal: 20,
                        paddingBottom: 40,
                        maxHeight: height * 0.85,
                        marginHorizontal: 16,
                        marginVertical: 45,

                    }}
                >
                    {/* Close button */}
                    <View className='flex flex-row justify-end mb-2'>
                        <TouchableOpacity
                            onPress={onClose}
                            className='w-8 h-8 rounded-full bg-gray-100 items-center justify-center'
                        >
                            <Text className='text-xl text-gray-600'>×</Text>
                        </TouchableOpacity>
                    </View>
                    <View className='h-[53%] flex flex-col ' >
                        <View>
                            <Text className='font-dm-sans-bold text-body-md text-[#1D293D]' >{headline}</Text>
                        </View>
                        <View className='flex flex-col mt-2'>
                            <View className='flex flex-row mt-6 gap-2 items-start' >
                                <View className='w-3 h-3 bg-[#CAD5E2] rounded-full mt-1' />
                                <Text className='text-slate-800 font-dm-sans-regular text-body-sm ' >US Puts <Text className='font-dm-sans-semibold' >$50M Bounty</Text> on Venezuelan President Nicolás... </Text>
                            </View>
                            <View className='flex flex-row mt-6 gap-2 items-start' >
                                <View className='w-3 h-3 bg-[#CAD5E2] rounded-full mt-1 ' />
                                <Text className='text-slate-800 font-dm-sans-regular text-body-sm' >US Puts <Text className='font-dm-sans-semibold' >$50M Bounty</Text> on Venezuelan President Nicolás... </Text>
                            </View>
                            <View className='flex flex-row mt-6 gap-2 items-start' >
                                <View className='w-3 h-3 bg-[#CAD5E2] rounded-full mt-1' />
                                <Text className='text-slate-800 font-dm-sans-regular text-body-sm' >US Puts <Text className='font-dm-sans-semibold' >$50M Bounty</Text> on Venezuelan President Nicolás... </Text>
                            </View>
                        </View>
                        <View className='w-full items-center justify-center flex flex-row mt-5 py-3'>
                            <Image style={{ height: 14, width: 14 }} source={require('../../assets/newsfeed_asset/Icons/lock.png')} />
                            <Text className='text-body-sm text-gray-500 font-dm-sans-regular mt-1 ml-2' >Watch latests developments</Text>
                        </View>
                        <View className='mt-5 py-4 flex flex-row gap-3 justify-center items-center'>
                            <Image 
                                style={{ width: 25, height: 25 }} 
                                source={isDark 
                                    ? require('../../assets/newsfeed_asset/Icons/volume-off-Dark.png')
                                    : require('../../assets/newsfeed_asset/Icons/volume-off-Light.png')
                                } 
                            />
                            <Image 
                                style={{ width: 25, height: 25 }} 
                                source={isDark 
                                    ? require('../../assets/newsfeed_asset/Icons/Link Icon-Dark.png')
                                    : require('../../assets/newsfeed_asset/Icons/Link Icon-Light.png')
                                } 
                            />
                        </View>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
};

export default AISummaryModal;
