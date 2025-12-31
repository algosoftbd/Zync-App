import BottomModal from '@/components/newsfeed/BottomModal';
import MorphButtons from '@/components/newsfeed/MorphButtons';
import { PostProps } from '@/types';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Dimensions, Image, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get("window");

const Post = ({ postData }: PostProps) => {
    const [commentCount, setCommentCount] = useState(postData.commentCount);
    const [likeCount, setLikeCount] = useState(postData.likeCount);

    // State for user interactions
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    // Handler functions
    const handleLikePress = () => {
        setIsLiked(!isLiked);
    };

    const handleBookmarkPress = () => {
        setIsBookmarked(!isBookmarked);
    };


    return (
        <View style={{ backgroundColor: 'white', height: height, width: width }}>
            <Image 
                style={{ width: width, height: 500, position: 'absolute' , zIndex: -1 }} 
                source={postData.primary_image} 
                resizeMode="cover"
                
            />
            <LinearGradient
                colors={['rgba(255, 255, 255, 0)', '#FFFFFF']}
                locations={[0.648, 1]}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: width,
                    height: 500,
                    zIndex: 0,
                }}
            />
            <View style={{ position: 'absolute', height: height, width: width, zIndex: 1 }}>
                <View className='flex flex-col m-4 h-full ' >
                    <View className='flex flex-row w-full items-center'>
                        <TouchableOpacity style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }} >
                            <Image style={{ width: 32, height: 32 }} source={require('../../assets/newsfeed_asset/Icons/Profile.png')} />
                            <Image style={{ width: 52, height: 23 }} source={require('../../assets/newsfeed_asset/Icons/Zync.png')} />
                        </TouchableOpacity>
                        {/* Header Buttons */}
                        <View className='flex flex-row ml-auto gap-2' >
                            <MorphButtons height={22} width={22} imageSource={require('../../assets/newsfeed_asset/Icons/Notification.png')} />
                            <MorphButtons height={22} width={22} imageSource={require('../../assets/newsfeed_asset/Icons/search.png')} />
                        </View>
                    </View>
                    <View className='mt-auto h-[74%] w-full flex flex-col gap-6' >
                        {/* comment like share save */}
                        <View className='flex flex-col ml-auto gap-2'>
                            <MorphButtons
                                imageSource={require('../../assets/newsfeed_asset/Icons/comment.png')}
                                counts={commentCount}
                                height={22}
                                width={22}
                            />
                            <MorphButtons
                                imageSource={require('../../assets/newsfeed_asset/Icons/heart.png')}
                                counts={likeCount}
                                height={22}
                                width={22}
                                onPress={handleLikePress}
                            />
                            <MorphButtons
                                imageSource={require('../../assets/newsfeed_asset/Icons/Share.png')}
                                height={22}
                                width={22}
                            />
                            <MorphButtons
                                imageSource={require('../../assets/newsfeed_asset/Icons/bookmark-lock.png')}
                                height={22}
                                width={22}
                                onPress={handleBookmarkPress}
                            />
                        </View>
                        {/* bottom modal */}
                        <BottomModal 
                            headline={postData.head_line}
                            articleNo={postData.article_no}
                            date={postData.date}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Post