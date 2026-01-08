import BottomModal from '@/components/newsfeed/BottomModal';
import MorphButtons from '@/components/newsfeed/MorphButtons';
import { Colors } from '@/constants/Colors';
import { PostProps } from '@/types';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, TouchableOpacity, useColorScheme, View } from 'react-native';

const { width, height } = Dimensions.get("window");

const Post = ({ postData }: PostProps) => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
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

    const bgColor = isDark ? Colors.dark.background.primary : Colors.light.background.primary;
    const gradientColors = isDark 
        ? [Colors.dark.gradient.start, Colors.dark.gradient.end]
        : [Colors.light.gradient.start, Colors.light.gradient.end];

    return (
        <View style={{ position: 'relative', backgroundColor: bgColor, height, width }}>
            {/* Background Image */}
            <Image 
                style={{ width: width, height: 500, position: 'absolute', top: 0, left: 0 }}
                source={postData.primary_image}
                resizeMode="cover"
            />
            
            {/* Gradient Overlay */}
            <LinearGradient
                colors={gradientColors}
                locations={[0.8, 1]}
                style={{ position: 'absolute', top: 0, left: 0, width: width, height: 500 }}
            />
            
            {/* Content Container */}
            <View style={{ position: 'absolute', top: 62, left: 16, right: 16, bottom: 0 }}>
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    {/* Header */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <TouchableOpacity 
                            style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
                            onPress={() => router.push('/profile')}
                        >
                            <View style={{ width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                <Image 
                                    style={{ width: 32, height: 32 }}
                                    source={require('../../assets/newsfeed_asset/Icons/Profile.png')} 
                                />
                            </View>
                            <Image 
                                style={{ width: 52, height: 23 }}
                                source={require('../../assets/newsfeed_asset/Icons/Zync.png')} 
                            />
                        </TouchableOpacity>
                        
                        {/* Header Buttons */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <MorphButtons 
                                height={20} 
                                width={20} 
                                imageSource={require('../../assets/newsfeed_asset/Icons/Notification.png')}
                                onPress={() => router.push('/notifications')}
                            />
                            <MorphButtons 
                                height={20} 
                                width={20} 
                                imageSource={require('../../assets/newsfeed_asset/Icons/search.png')}
                                onPress={() => router.push('/search')}
                            />
                        </View>
                    </View>
                    {/* Bottom Content */}
                    <View style={{ flexDirection: 'column', alignItems: 'flex-end', gap: 24, width: '100%', marginBottom: 40 }}>
                        {/* Vertical Action Buttons */}
                        <View style={{ flexDirection: 'column', alignItems: 'center', gap: 12, width: 32 }}>
                            <MorphButtons
                                imageSource={require('../../assets/newsfeed_asset/Icons/comment.png')}
                                counts={commentCount}
                                height={20}
                                width={20}
                            />
                            <MorphButtons
                                imageSource={require('../../assets/newsfeed_asset/Icons/heart.png')}
                                counts={likeCount}
                                height={20}
                                width={20}
                                onPress={handleLikePress}
                            />
                            <MorphButtons
                                imageSource={require('../../assets/newsfeed_asset/Icons/Share.png')}
                                height={20}
                                width={20}
                            />
                            <MorphButtons
                                imageSource={require('../../assets/newsfeed_asset/Icons/bookmark-lock.png')}
                                height={20}
                                width={20}
                                onPress={handleBookmarkPress}
                            />
                        </View>
                        
                        {/* Bottom Modal */}
                        <BottomModal 
                            headline={postData.head_line}
                            articleNo={postData.article_no}
                            date={postData.date}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Post;