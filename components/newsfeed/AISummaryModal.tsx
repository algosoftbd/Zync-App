import React from 'react';
import { Animated, Dimensions, Modal, Text, TouchableOpacity, View } from 'react-native';

const { height } = Dimensions.get('window');

type AISummaryModalProps = {
    visible: boolean;
    onClose: () => void;
    headline: string;
}

const AISummaryModal = ({ visible, onClose, headline }: AISummaryModalProps) => {
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
                        borderRadius:32,
                        paddingTop: 16,
                        paddingHorizontal: 20,
                        paddingBottom: 40,
                        maxHeight: height * 0.85,
                        margin: 40,
                        
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
                    <View className='h-[426]  flex flex-col' >
                        <View>
                            <Text className='font-dm-sans-bold text-body-md text-[#1D293D]' >{headline}</Text>
                        </View>
                        <View className='flex flex-row mt-6 gap-2 items-center ' >
                           <View className='w-3 h-3 bg-[#CAD5E2] rounded-full ' />
                           <Text className='text-slate-800 font-dm-sans-regular text-body-sm' >US Puts <span className='font-dm-sans-semibold' >$50M Bounty</span> on Venezuelan President Nicolás... </Text>
                        </View>
                        <View className='flex flex-row mt-6 gap-2 items-center ' >
                           <View className='w-3 h-3 bg-[#CAD5E2] rounded-full ' />
                           <Text className='text-slate-800 font-dm-sans-regular text-body-sm' >US Puts <span className='font-dm-sans-semibold' >$50M Bounty</span> on Venezuelan President Nicolás... </Text>
                        </View>
                        <View className='flex flex-row mt-6 gap-2 items-center ' >
                           <View className='w-3 h-3 bg-[#CAD5E2] rounded-full ' />
                           <Text className='text-slate-800 font-dm-sans-regular text-body-sm' >US Puts <span className='font-dm-sans-semibold' >$50M Bounty</span> on Venezuelan President Nicolás... </Text>
                        </View>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
};

export default AISummaryModal;
        //  <View className='w-2 h-2 bg-[#CAD5E2] rounded-full ' />