export type UserType = 'free' | 'premium';

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  userType: UserType;
  verified?: boolean;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  images?: string[];
  videos?: string[];
  likes: number;
  comments: number;
  shares: number;
  timestamp: Date;
  isPremiumContent?: boolean;
  tags?: string[];
}

export interface NewsfeedFilter {
  type: 'all' | 'following' | 'trending' | 'premium';
  label: string;
}

export interface PremiumFeatures {
  adFree: boolean;
  priorityFeed: boolean;
  exclusiveContent: boolean;
  advancedFilters: boolean;
  downloadContent: boolean;
}
