import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function NewsfeedIndex() {
  const handleOpenFeed = (postId?: string) => {
    router.push({
      pathname: '/(newsfeed)/Feed',
      params: postId ? { postId, feedType: 'all' } : { feedType: 'all' }
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-6">Newsfeed</Text>
      
      <View>
        <TouchableOpacity 
          onPress={() => handleOpenFeed()}
          className="bg-blue-500 p-4 rounded-lg mb-4"
        >
          <Text className="text-white text-center font-semibold">
            🎬 Open Reels Feed
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => handleOpenFeed('1')}
          className="bg-purple-500 p-4 rounded-lg mb-4"
        >
          <Text className="text-white text-center font-semibold">
            📱 Open Specific Post
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => router.push('/(newsfeed)/Feed?feedType=premium')}
          className="bg-orange-500 p-4 rounded-lg"
        >
          <Text className="text-white text-center font-semibold">
            ✨ Premium Content Only
          </Text>
        </TouchableOpacity>
      </View>
      
      <View className="mt-8 p-4 bg-white rounded-lg">
        <Text className="font-semibold mb-2">Features:</Text>
        <Text className="text-gray-600 text-sm mb-1">• Vertical scrolling like TikTok/Instagram Reels</Text>
        <Text className="text-gray-600 text-sm mb-1">• Double-tap to like</Text>
        <Text className="text-gray-600 text-sm mb-1">• Premium content with blur overlay</Text>
        <Text className="text-gray-600 text-sm mb-1">• Video autoplay/pause</Text>
        <Text className="text-gray-600 text-sm mb-1">• Infinite scrolling</Text>
        <Text className="text-gray-600 text-sm">• Full-screen immersive experience</Text>
      </View>
    </SafeAreaView>
  );
}