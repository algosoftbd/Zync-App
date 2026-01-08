import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import AISummaryModal from './AISummaryModal';

type BottomModalProps = {
    headline: string;
    articleNo: number;
    date: string;
}

const BottomModal = ({ headline, articleNo, date }: BottomModalProps) => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOpenModal = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    const bgColor = isDark ? Colors.dark.background.primary : Colors.light.background.primary;
    const textPrimary = isDark ? Colors.dark.text.primary : Colors.light.text.primary;
    const textSecondary = isDark ? Colors.dark.text.secondary : Colors.light.text.secondary;
    const buttonBorder = isDark ? Colors.dark.button.border : Colors.light.button.border;
    const iconBgColor = isDark ? Colors.dark.icon.container : Colors.light.icon.container;
    const iconBorderColor = isDark ? Colors.dark.icon.border : Colors.light.icon.border;
    const buttonTextColor = isDark ? Colors.dark.button.text : Colors.light.button.text;
    const dotColor = isDark ? Colors.dark.dot : Colors.light.dot;
    const bottomActionsColor = isDark ? Colors.dark.background.secondary : Colors.light.background.primary;
    const bottomBorderColor = isDark ? Colors.dark.background.secondary : Colors.light.background.tertiary;

    return (
        <>
            <View style={{ display:'flex' , alignItems: 'center', width: '100%', marginHorizontal: 0, borderTopEndRadius:16,borderTopLeftRadius:16, gap: 100, padding: 16, backgroundColor: bgColor }}>
                {/* Content Container */}
                <View style={{ gap: 16 }}>
                    {/* Headline with Highlight */}
                    <View style={{ position: 'relative', gap: 12 }}>
                        <View style={{ position: 'absolute', top: 2, left: 74, width: 130, height: 24, backgroundColor: Colors.dark.highlight, zIndex: -1 }} />
                        <Text style={{ fontFamily: 'DM-Sans-Bold', fontSize: 20, lineHeight: 26, letterSpacing: -0.42, fontWeight: '700', color: textPrimary }}>
                            {headline}
                        </Text>
                    </View>
                    
                    {/* Metadata */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        <Text style={{ fontFamily: 'DM-Sans-Regular', fontSize: 12, lineHeight: 16, letterSpacing: 0, color: textSecondary }}>
                            {articleNo} Articles
                        </Text>
                        <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: dotColor }} />
                        <Text style={{ fontFamily: 'DM-Sans-Regular', fontSize: 12, lineHeight: 16, letterSpacing: 0, color: textSecondary }}>
                            {date}
                        </Text>
                    </View>
                    
                    {/* AI Summary Button */}
                    <TouchableOpacity 
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 9999, borderWidth: 1, gap: 8, alignSelf: 'flex-start', borderColor: buttonBorder }}
                        onPress={handleOpenModal}
                    >
                        <Text style={{ fontFamily: 'DM-Sans-Medium', fontSize: 14, lineHeight: 20, letterSpacing: 0, fontWeight: '500', color: buttonTextColor }}>
                            AI summery
                        </Text>
                        <Image 
                            style={{ width: 14, height: 14 }}
                            source={require('../../assets/newsfeed_asset/Icons/Icon.png')} 
                        />
                    </TouchableOpacity>
                </View>
                
                {/* Bottom Actions */}
                <View style={{ width: '35%' , flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 6, borderRadius: 9999, borderWidth: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.12, shadowRadius: 24, elevation: 8, backgroundColor: bottomActionsColor, borderColor: bottomBorderColor }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                        <View style={{ width: 46, height: 46, borderRadius: 23, borderWidth: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: iconBgColor, borderColor: iconBorderColor }}>
                            <Image 
                                style={{ width: 20, height: 20 }}
                                source={isDark 
                                    ? require('../../assets/newsfeed_asset/Icons/volume-off-Dark.png')
                                    : require('../../assets/newsfeed_asset/Icons/volume-off-Light.png')
                                } 
                            />
                        </View>
                        <View style={{ width: 46, height: 46, borderRadius: 23, borderWidth: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: iconBgColor, borderColor: iconBorderColor }}>
                            <Image 
                                style={{ width: 20, height: 20 }}
                                source={isDark 
                                    ? require('../../assets/newsfeed_asset/Icons/Link Icon-Dark.png')
                                    : require('../../assets/newsfeed_asset/Icons/Link Icon-Light.png')
                                    
                                } 
                            />
                        </View>
                    </View>
                </View>
            </View>

            <AISummaryModal 
                visible={isModalVisible}
                onClose={handleCloseModal}
                headline={headline}
            />
        </>
    );
};

export default BottomModal;