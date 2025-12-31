import { MOCK_POSTS } from '@/constants/newsfeed';
import { Post } from '@/types/newsfeed';
import { useEffect, useState } from 'react';

export function useNewsfeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    loadPosts();
  }, [activeFilter]);

  const loadPosts = async () => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Filter posts based on active filter
      let filteredPosts = [...MOCK_POSTS];
      
      if (activeFilter === 'premium') {
        filteredPosts = filteredPosts.filter(post => post.isPremiumContent);
      } else if (activeFilter === 'trending') {
        filteredPosts = filteredPosts.sort((a, b) => b.likes - a.likes);
      }
      
      setPosts(filteredPosts);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadPosts();
    setRefreshing(false);
  };

  const likePost = (postId: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  const commentOnPost = (postId: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, comments: post.comments + 1 }
          : post
      )
    );
  };

  const sharePost = (postId: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, shares: post.shares + 1 }
          : post
      )
    );
  };

  return {
    posts,
    loading,
    refreshing,
    onRefresh,
    activeFilter,
    setActiveFilter,
    likePost,
    commentOnPost,
    sharePost,
    loadMorePosts,
    hasMore,
    loadingMore,
  };
}
