import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import AISummaryModal from './AISummaryModal';

type BottomModalProps = {
    headline: string;
    articleNo: number;
    date: string;
}

const BottomModal = ({ headline, articleNo, date }: BottomModalProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOpenModal = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <View className='w-full h-[58%] bg-white flex flex-col p-4 rounded-2xl'>
                <View>
                    <Text className="text-[#1D293D] font-dm-sans-bold font-bold text-[20px] leading-[26px] tracking-[-0.42px]">
                        {headline}
                    </Text>
                </View>
                <View className='flex flex-row mt-3'>
                    <Text className='font-dm-sans text-textsecondary' > {articleNo} Articles</Text>
                    <Text className='font-dm-sans text-textsecondary'> · </Text>
                    <Text className='font-dm-sans text-textsecondary'>{date}</Text>
                </View>
                <TouchableOpacity 
                    className='px-4 py-2 mt-4 flex flex-row w-full items-center  gap-1'
                    onPress={handleOpenModal}
                >
                    <Text className='font-dm-sans text-[#1D293D] ' >AI summary</Text>
                    <Image style={{ width: 14, height: 14 }} source={require('../../assets/newsfeed_asset/Icons/Icon.png')} />
                </TouchableOpacity>
                <View className='mt-14 py-4 flex flex-row gap-3 justify-center items-center'>
                    <Image style={{ width: 25, height: 25 }} source={require('../../assets/newsfeed_asset/Icons/volume-off.png')} />
                    <Image style={{ width: 25, height: 25 }} source={require('../../assets/newsfeed_asset/Icons/Link Icon.png')} />
                </View>
            </View>

            <AISummaryModal 
                visible={isModalVisible}
                onClose={handleCloseModal}
                headline={headline}
            />
        </>
    )
}


export default BottomModal