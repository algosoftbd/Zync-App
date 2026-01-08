# Newsfeed Feature Documentation

## 📋 Overview
The Newsfeed feature is a vertical scrolling feed similar to TikTok/Instagram Reels, displaying news articles with images, headlines, and interactive elements. Users can view posts, interact with content, and access AI-generated summaries.

**✨ UPDATED:** Now includes pixel-perfect design implementation matching Figma specs with full dark mode support!

---

## 🎨 Design Implementation (January 2026)

### Design Sources
- **Light Mode:** [Figma Design](https://www.figma.com/design/ErwTlwVII4C5NvsaZ7BOEv/Zync?node-id=983-17078&m=dev)
- **Dark Mode:** [Figma Design](https://www.figma.com/design/ErwTlwVII4C5NvsaZ7BOEv/Zync?node-id=983-18620&m=dev)

### Key Design Changes
1. **Pixel-Perfect Layout**
   - Fixed positioning with 16px margins
   - Proper spacing between elements (8px, 12px, 16px, 24px, 52px)
   - Image height: 500px with gradient overlay
   - Header positioned at 62px from top

2. **Dark Mode Support**
   - Automatic detection using system color scheme
   - Background: `#020618` (dark) / `#FFFFFF` (light)
   - Text colors adapt automatically
   - Gradient overlays adjust to theme

3. **Typography**
   - Headline: DM Sans Bold, 20px, line-height 26px, tracking -0.42px
   - Metadata: DM Sans Regular, 12px, line-height 16px
   - Button text: DM Sans Medium, 14px, line-height 20px
   - Count text: DM Sans Regular, 12px, line-height 16px

4. **Interactive Elements**
   - Glassmorphic buttons: 32×32px with 16px border radius
   - Icon sizes: 16×16px for action buttons, 20×20px for header
   - Backdrop blur effect with white border (32% opacity)
   - Bottom action buttons: 46×46px circles

5. **Color Palette**
   | Element | Light Mode | Dark Mode |
   |---------|-----------|-----------|
   | Background | #FFFFFF | #020618 |
   | Text Primary | #1D293D | #FFFFFF |
   | Text Secondary | #45556C | #CAD5E2 |
   | Card BG | #FFFFFF | #020618 |
   | Button Border | #E2E8F0 | #1D293D |
   | Icon Container BG | #FFFFFF | #0F172B |
   | Highlight | #7F22FE | #7F22FE |
   | Gradient End | #FFFFFF | #020618 |

---

## 🏗️ Architecture Structure

```
app/(newsfeed)/
├── _layout.tsx           # Navigation layout for newsfeed routes
├── index.tsx             # Entry point with feed options
└── Feed.tsx              # Main vertical scrolling feed component

components/newsfeed/
├── Post.tsx              # Individual post card component
├── BottomModal.tsx       # Article info modal at bottom
├── AISummaryModal.tsx    # AI-generated summary modal
└── MorphButtons.tsx      # Glassmorphic interactive buttons

hooks/
└── useNewsfeed.ts        # Custom hook for newsfeed logic

constants/
└── newsfeed.ts           # Mock data and filter configurations

types/
├── index.ts              # Main type exports
├── newsfeed.ts           # Newsfeed-specific types
└── post.types.ts         # Post data types
```

---

## 📦 Components

### 1. **Feed.tsx** (Main Component)
**Location:** `app/(newsfeed)/Feed.tsx`

**Purpose:** Main vertical scrolling feed that displays posts in a TikTok-style format

**Features:**
- Vertical pagination with snap-to-interval
- FlatList with optimized rendering
- Viewability tracking for analytics/video play
- Dynamic height based on screen dimensions

**Props:** None (standalone route component)

**Key Implementation:**
```typescript
- FlatList with pagingEnabled
- snapToInterval set to screen height
- getItemLayout for performance optimization
- onViewableItemsChanged for tracking visible posts
```

**State Management:**
- `flatListRef`: Reference to FlatList for programmatic control
- `postsData`: Array of PostData objects

---

### 2. **Post.tsx** (Post Card)
**Location:** `components/newsfeed/Post.tsx`

**Purpose:** Individual post card displaying image, headline, and interactive elements

**Props:**
```typescript
interface PostProps {
  postData: PostData;
}
```

**Features:**
- Full-screen post layout
- Image with gradient overlay
- Header with profile and navigation buttons
- Interactive buttons (like, comment, share, bookmark)
- Bottom modal for article details

**State Management:**
- `commentCount`: Number of comments
- `likeCount`: Number of likes
- `isLiked`: Like status
- `isBookmarked`: Bookmark status

**Layout Layers (bottom to top):**
1. Primary image (background)
2. Linear gradient overlay
3. Content layer (buttons, text)

---

### 3. **BottomModal.tsx**
**Location:** `components/newsfeed/BottomModal.tsx`

**Purpose:** Display article headline, metadata, and quick actions

**Props:**
```typescript
interface BottomModalProps {
  headline: string;
  articleNo: number;
  date: string;
}
```

**Features:**
- Rounded white container at bottom of post
- Article headline with typography styling
- Article count and date metadata
- AI summary button
- Audio and link quick actions

**State Management:**
- `isModalVisible`: Controls AI summary modal visibility

---

### 4. **AISummaryModal.tsx**
**Location:** `components/newsfeed/AISummaryModal.tsx`

**Purpose:** Full-screen modal displaying AI-generated article summary

**Props:**
```typescript
interface AISummaryModalProps {
  visible: boolean;
  onClose: () => void;
  headline: string;
}
```

**Features:**
- Slide-up animation using Animated API
- Bullet-point summary format
- Close button
- Premium content indicator
- Audio and link actions

**Animations:**
- Spring animation on open
- Timing animation on close
- Transparent backdrop with touch-to-close

---

### 5. **MorphButtons.tsx**
**Location:** `components/newsfeed/MorphButtons.tsx`

**Purpose:** Glassmorphic interactive buttons with count display

**Props:**
```typescript
interface MorphButtonsProps {
  imageSource: ImageSourcePropType;
  counts?: number;
  width?: number;
  height?: number;
  onPress?: () => void;
}
```

**Features:**
- Glassmorphic blur effect using expo-blur
- Dynamic sizing
- Count formatter (K/M for large numbers)
- Customizable icon and dimensions

**Count Formatting:**
- < 1,000: Display as-is
- ≥ 1,000: Display as "K" (e.g., 1.2K)
- ≥ 1,000,000: Display as "M" (e.g., 1.5M)

---

## 🎣 Hooks

### **useNewsfeed.ts**
**Location:** `hooks/useNewsfeed.ts`

**Purpose:** Custom hook for managing newsfeed state and operations

**Returns:**
```typescript
{
  posts: Post[];
  loading: boolean;
  refreshing: boolean;
  onRefresh: () => Promise<void>;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  likePost: (postId: string) => void;
  commentOnPost: (postId: string) => void;
  sharePost: (postId: string) => void;
  loadMorePosts: () => void;
  hasMore: boolean;
  loadingMore: boolean;
}
```

**Features:**
- Post loading with filter support
- Pull-to-refresh functionality
- Post interaction handlers (like, comment, share)
- Filter-based post filtering
- Pagination support
- Loading states management

**Filters Supported:**
- `all`: All posts
- `premium`: Premium content only
- `trending`: Sorted by likes

---

## 📊 Types & Interfaces

### **PostData** (post.types.ts)
```typescript
interface PostData {
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
```

### **Post** (newsfeed.ts)
```typescript
interface Post {
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
```

### **User** (newsfeed.ts)
```typescript
interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  userType: 'free' | 'premium';
  verified?: boolean;
}
```

---

## 🔧 Constants

### **newsfeed.ts**
**Location:** `constants/newsfeed.ts`

**Exports:**
- `NEWSFEED_FILTERS`: Array of filter options
- `PREMIUM_FILTERS`: Premium-only filter options
- `MOCK_POSTS`: Sample post data for development

**Filter Types:**
```typescript
const NEWSFEED_FILTERS = [
  { type: 'all', label: 'For You' },
  { type: 'following', label: 'Following' },
  { type: 'trending', label: 'Trending' },
];
```

---

## 🎨 Styling & UI

### **Design System**
- **Typography:** DM Sans font family
- **Colors:**
  - Primary text: `#1D293D`
  - Secondary text: `#textsecondary`
  - Background: White
  - Glassmorphic overlay: `rgba(255, 255, 255, 0.15)`

### **Layout Specifications**
- Full-screen posts (width × height of device)
- Image height: 500px
- Bottom modal height: 58% of content area
- Button container: 74% height for bottom content

### **Glassmorphism Effect**
```typescript
{
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.3)',
  // BlurView with intensity: 30
}
```

---

## 🎭 Animations & Interactions

### **FlatList Behavior**
- `pagingEnabled`: Snap to full screen
- `snapToInterval`: Screen height
- `decelerationRate`: 'fast' for quick snapping
- `viewabilityConfig`: 50% threshold for viewable items

### **Modal Animations**
- **Open:** Spring animation (tension: 65, friction: 11)
- **Close:** Timing animation (duration: 250ms)
- **Backdrop:** 50% opacity black overlay

### **Button Interactions**
- Like: Toggle state + increment count
- Bookmark: Toggle state
- Comment/Share: Navigate to respective screens
- AI Summary: Open modal with animation

---

## 📱 Navigation Structure

### **Route Group:** `(newsfeed)`
```typescript
Stack screens:
├── index.tsx (Entry point)
└── Feed.tsx (Full-screen modal)
```

### **Navigation Options**
```typescript
Feed.tsx options:
- presentation: 'fullScreenModal'
- animation: 'slide_from_bottom'
- gestureEnabled: true
- gestureDirection: 'vertical'
```

---

## 🚀 Features Implementation

### ✅ Implemented Features
1. **Vertical Scrolling Feed**
   - TikTok/Reels-style pagination
   - Snap-to-screen behavior
   - Optimized rendering with FlatList

2. **Post Interactions**
   - Like/unlike posts
   - Comment button
   - Share functionality
   - Bookmark posts

3. **AI Summary**
   - Modal with bullet-point summary
   - Smooth slide-up animation
   - Premium content indicator

4. **Image Display**
   - Support for local require() images
   - Support for URI images
   - Proper layering with gradient overlay

5. **Responsive Design**
   - Dynamic dimensions based on device
   - Proper aspect ratios
   - Optimized for various screen sizes

### 🔄 Current Limitations
1. Video playback not yet implemented
2. Premium content filtering UI not shown
3. Comment section not built
4. Share functionality incomplete
5. Bookmark persistence not implemented

---

## 🎯 Usage Example

```typescript
// Basic usage in a route
import Feed from './(newsfeed)/Feed';

// Navigate to feed
router.push('/(newsfeed)/Feed');

// With parameters
router.push({
  pathname: '/(newsfeed)/Feed',
  params: { postId: '1', feedType: 'all' }
});
```

```typescript
// Using the hook
import { useNewsfeed } from '@/hooks/useNewsfeed';

const MyComponent = () => {
  const {
    posts,
    loading,
    likePost,
    onRefresh
  } = useNewsfeed();

  return (
    <FlatList
      data={posts}
      onRefresh={onRefresh}
      refreshing={loading}
    />
  );
};
```

---

## 📦 Dependencies

### **External Libraries**
- `expo-linear-gradient`: Gradient overlays
- `expo-blur`: Glassmorphic effects
- `expo-router`: Navigation
- `expo-status-bar`: Status bar management
- `react-native-safe-area-context`: Safe area handling

### **Internal Dependencies**
- `@/components/newsfeed/*`: Newsfeed components
- `@/hooks/useNewsfeed`: Custom hook
- `@/types`: TypeScript types
- `@/constants/newsfeed`: Mock data and constants

---

## 🐛 Known Issues & Solutions

### **Image Not Loading on Phone**
**Issue:** Images work on web but not on physical device in Expo Go

**Cause:** Negative z-index causing rendering issues on Android

**Solution:** Removed z-index properties and rely on render order for layering

**Fixed Implementation:**
```typescript
// Correct render order (bottom to top)
<View>
  <Image /> {/* Rendered first = bottom layer */}
  <LinearGradient /> {/* Middle layer */}
  <View> {/* Content - top layer */}
    {/* Interactive elements */}
  </View>
</View>
```

---

## 🔮 Future Enhancements

### **Planned Features**
1. Video playback with auto-play on scroll
2. Comment section with nested replies
3. Share sheet with native sharing
4. Bookmark persistence with AsyncStorage
5. Pull-to-refresh with custom indicator
6. Infinite scroll with pagination
7. Filter UI at the top
8. Premium badge and content gating
9. Analytics tracking for viewable items
10. Offline support with cached posts

### **Performance Optimizations**
1. Image lazy loading
2. Virtual scrolling optimization
3. Memoization of components
4. Debounced scroll handlers
5. Reduced re-renders with React.memo

---

## 📝 Code Quality

### **Best Practices Used**
- TypeScript for type safety
- Custom hooks for logic separation
- Component composition
- Consistent naming conventions
- Proper prop typing
- Safe area handling
- Responsive design patterns

### **Testing Considerations**
- Component unit tests
- Hook testing with React Testing Library
- Integration tests for navigation
- Snapshot tests for UI consistency
- E2E tests for user flows

---

## 📄 License & Credits

**Assets:**
- Images: Located in `assets/images/`
- Icons: Located in `assets/newsfeed_asset/Icons/`
- Fonts: DM Sans family in `assets/fonts/`

**Created for:** Zync App
**Feature:** News Feed with Reels-style interaction
**Last Updated:** January 8, 2026
