import { ImageSourcePropType } from 'react-native';

export interface PostData {
    id: string;
    primary_image: ImageSourcePropType;
    head_line: string;
    article_no: number;
    date: string;
    category: string;
    source: string;
    summary: string;
    viewCount: number;
    videoUrl: string | null;
    commentCount: number;
    likeCount: number;
}

export interface PostProps {
    postData: PostData;
}

export interface PostInteraction {
    isLiked: boolean;
    isBookmarked: boolean;
    commentCount: number;
    likeCount: number;
    shareCount: number;
    bookmarkCount: number;
}
