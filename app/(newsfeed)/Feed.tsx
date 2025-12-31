import Post from '@/components/newsfeed/Post';
import { PostData } from '@/types';
import React, { useRef } from 'react';
import { Dimensions, FlatList, ViewToken } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get("window");

export default function Feed() {
  const flatListRef = useRef<FlatList>(null);

  // Array of post data objects
  const postsData: PostData[] = [
    {
      id: '1',
      primary_image: require('../../assets/newsfeed_asset/images/Politician.png'),
      head_line: "US Puts $50M Bounty on Venezuelan President Nicolás Maduro",
      article_no: 20,
      date: "7 Aug 2025",
      category: "Politics",
      source: "International News",
      summary: "The United States government has announced a significant bounty...",
      viewCount: 125000,
      videoUrl: null,
      commentCount: 1200,
      likeCount: 3500,
    },
    {
      id: '2',
      primary_image: require('../../assets/newsfeed_asset/images/Trump.jpg'),
      head_line: "Trump Announces New Economic Policy for 2025",
      article_no: 15,
      date: "8 Aug 2025",
      category: "Politics",
      source: "Political Daily",
      summary: "Former president announces major economic reforms...",
      viewCount: 98000,
      videoUrl: null,
      commentCount: 850,
      likeCount: 4200,
    },
    {
      id: '3',
      primary_image: require('../../assets/newsfeed_asset/images/batman.jpg'),
      head_line: "New Batman Film Breaks Box Office Records",
      article_no: 25,
      date: "9 Aug 2025",
      category: "Entertainment",
      source: "Cinema Today",
      summary: "The latest Batman installment shatters opening weekend records...",
      viewCount: 250000,
      videoUrl: null,
      commentCount: 2500,
      likeCount: 15000,
    },
    {
      id: '4',
      primary_image: require('../../assets/newsfeed_asset/images/dunkirk.png'),
      head_line: "Dunkirk Anniversary: Remembering History's Greatest Evacuation",
      article_no: 12,
      date: "10 Aug 2025",
      category: "History",
      source: "History Channel",
      summary: "Commemorating the heroic evacuation that saved thousands...",
      viewCount: 75000,
      videoUrl: null,
      commentCount: 620,
      likeCount: 2800,
    },
    {
      id: '5',
      primary_image: require('../../assets/newsfeed_asset/images/Joker_Backshot.jpg'),
      head_line: "Joker Sequel Receives Critical Acclaim at Film Festival",
      article_no: 18,
      date: "11 Aug 2025",
      category: "Entertainment",
      source: "Film Review Weekly",
      summary: "Critics praise the dark and compelling sequel...",
      viewCount: 180000,
      videoUrl: null,
      commentCount: 1800,
      likeCount: 9500,
    },
    {
      id: '6',
      primary_image: require('../../assets/newsfeed_asset/images/City.jpg'),
      head_line: "Smart City Initiative Transforms Urban Living",
      article_no: 22,
      date: "12 Aug 2025",
      category: "Technology",
      source: "Tech Innovations",
      summary: "New technology revolutionizes city infrastructure...",
      viewCount: 95000,
      videoUrl: null,
      commentCount: 720,
      likeCount: 3100,
    },
    {
      id: '7',
      primary_image: require('../../assets/newsfeed_asset/images/Library.jpg'),
      head_line: "Digital Libraries Preserve Ancient Manuscripts",
      article_no: 14,
      date: "13 Aug 2025",
      category: "Education",
      source: "Academic Press",
      summary: "Technology helps preserve historical documents for future generations...",
      viewCount: 62000,
      videoUrl: null,
      commentCount: 340,
      likeCount: 1800,
    },
    {
      id: '8',
      primary_image: require('../../assets/newsfeed_asset/images/Puppy.jpg'),
      head_line: "Therapy Dogs Help Reduce Stress in Healthcare Workers",
      article_no: 16,
      date: "14 Aug 2025",
      category: "Health",
      source: "Medical News Today",
      summary: "Study shows significant mental health benefits from animal therapy...",
      viewCount: 110000,
      videoUrl: null,
      commentCount: 1500,
      likeCount: 8200,
    },
    {
      id: '9',
      primary_image: require('../../assets/newsfeed_asset/images/Cat.jpg'),
      head_line: "Cat Cafes Become Mental Wellness Hotspots",
      article_no: 11,
      date: "15 Aug 2025",
      category: "Lifestyle",
      source: "Wellness Magazine",
      summary: "Feline companionship proves therapeutic for urban dwellers...",
      viewCount: 88000,
      videoUrl: null,
      commentCount: 920,
      likeCount: 5600,
    },
    {
      id: '10',
      primary_image: require('../../assets/newsfeed_asset/images/Sky.jpg'),
      head_line: "Rare Atmospheric Phenomenon Captivates Millions",
      article_no: 19,
      date: "16 Aug 2025",
      category: "Science",
      source: "Nature Watch",
      summary: "Spectacular sky display leaves scientists and viewers amazed...",
      viewCount: 145000,
      videoUrl: null,
      commentCount: 1100,
      likeCount: 7400,
    },
    {
      id: '11',
      primary_image: require('../../assets/newsfeed_asset/images/Red_man.jpg'),
      head_line: "Indigenous Art Exhibition Celebrates Cultural Heritage",
      article_no: 13,
      date: "17 Aug 2025",
      category: "Culture",
      source: "Art World",
      summary: "Groundbreaking exhibition showcases native artistic traditions...",
      viewCount: 71000,
      videoUrl: null,
      commentCount: 480,
      likeCount: 2100,
    },
  ];

  const renderPost = ({ item }: { item: PostData }) => {
    return <Post postData={item} />;
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    // Handle viewable items change (useful for video play/pause)
    if (viewableItems.length > 0) {
      const visibleItem = viewableItems[0];
      // You can add logic here for auto-play videos, analytics, etc.
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <SafeAreaView className="flex-1 bg-black" edges={['top', 'bottom']}>
      <FlatList
        ref={flatListRef}
        data={postsData}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        snapToAlignment="start"
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(data, index) => ({
          length: height,
          offset: height * index,
          index,
        })}
      />
      {/* <Post postData={postsData[0]} /> */}
    </SafeAreaView>
  );
}
