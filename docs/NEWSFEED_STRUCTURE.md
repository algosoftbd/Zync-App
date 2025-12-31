# Newsfeed Feature - File Structure

## 📁 Complete File Structure

```
Zync-App/
├── app/
│   └── (newsfeed)/
│       ├── _layout.tsx              # Layout wrapper for newsfeed routes
│       ├── index.tsx                # Main newsfeed screen
│       └── post-detail.tsx          # Individual post detail modal
│
├── components/
│   └── newsfeed/
│       ├── NewsfeedHeader.tsx       # Header with search & notifications
│       ├── FilterTabs.tsx           # Filter tabs (All, Following, Trending, Premium)
│       ├── PostCard.tsx             # Standard post card for free/regular posts
│       ├── PremiumPostCard.tsx      # Enhanced post card with premium styling
│       └── FreeUserBanner.tsx       # Upgrade banner for free users
│
├── context/
│   └── UserContext.tsx              # User authentication & premium status
│
├── hooks/
│   └── useNewsfeed.ts               # Hook for fetching & managing newsfeed data
│
├── constants/
│   └── newsfeed.ts                  # Constants, filters, and mock data
│
└── types/
    └── newsfeed.ts                  # TypeScript types & interfaces
```

## 🎯 Key Features

### For Free Users:
- ✅ Access to regular posts
- ✅ Basic interactions (like, comment, share)
- ✅ View trending and following feeds
- ❌ Blurred premium content with upgrade prompt
- 📢 Upgrade banner displayed at top

### For Premium Users:
- ✅ All free features
- ✅ Ad-free experience
- ✅ Access to exclusive premium content
- ✅ Premium posts with special styling (gold gradient border)
- ✅ Additional filter for premium-only content
- ✅ Extra actions (save/download content)
- ✅ Priority feed algorithm

## 🔧 Setup Instructions

### 1. Update Root Layout
Add the UserProvider to your root layout:

\`\`\`tsx
// app/_layout.tsx
import { UserProvider } from '@/context/UserContext';

export default function RootLayout() {
  return (
    <UserProvider>
      {/* Your existing layout */}
    </UserProvider>
  );
}
\`\`\`

### 2. Install Required Dependencies
\`\`\`bash
npm install expo-linear-gradient
\`\`\`

### 3. Navigation Setup
Link to newsfeed from your main navigation:

\`\`\`tsx
import { router } from 'expo-router';

// Navigate to newsfeed
router.push('/(newsfeed)');
\`\`\`

## 📝 Usage Examples

### Switching User Types
In [context/UserContext.tsx](context/UserContext.tsx), change the initial user state:

\`\`\`tsx
// For Free User
userType: 'free'

// For Premium User
userType: 'premium'
\`\`\`

### Adding New Posts
Add posts to [constants/newsfeed.ts](constants/newsfeed.ts):

\`\`\`tsx
{
  id: '7',
  author: { /* author info */ },
  content: 'Your post content',
  isPremiumContent: true, // Set true for premium content
  // ... other fields
}
\`\`\`

### Customizing Filters
Modify filters in [constants/newsfeed.ts](constants/newsfeed.ts):

\`\`\`tsx
export const NEWSFEED_FILTERS: NewsfeedFilter[] = [
  { type: 'all', label: 'For You' },
  { type: 'following', label: 'Following' },
  // Add more filters
];
\`\`\`

## 🎨 Customization

### Premium Styling
Premium posts have a gold gradient border. Customize in [PremiumPostCard.tsx](components/newsfeed/PremiumPostCard.tsx):

\`\`\`tsx
colors={['#FFD700', '#FFA500']} // Change gradient colors
\`\`\`

### Upgrade Banner
Customize the banner in [FreeUserBanner.tsx](components/newsfeed/FreeUserBanner.tsx):

\`\`\`tsx
colors={['#667eea', '#764ba2']} // Change gradient colors
\`\`\`

## 🔌 API Integration

Replace mock data in [useNewsfeed.ts](hooks/useNewsfeed.ts):

\`\`\`tsx
const loadPosts = async () => {
  try {
    setLoading(true);
    // Replace with your API call
    const response = await fetch('YOUR_API_ENDPOINT');
    const data = await response.json();
    setPosts(data);
  } catch (error) {
    console.error('Error loading posts:', error);
  } finally {
    setLoading(false);
  }
};
\`\`\`

## 📱 Screen Flow

1. **Newsfeed Screen** ([app/(newsfeed)/index.tsx](app/(newsfeed)/index.tsx))
   - Shows list of posts
   - Displays upgrade banner for free users
   - Filter tabs for content organization

2. **Post Detail** ([app/(newsfeed)/post-detail.tsx](app/(newsfeed)/post-detail.tsx))
   - Full post view with comments
   - Opened as modal

## 🚀 Next Steps

1. Integrate with your authentication system
2. Connect to backend API for real posts
3. Implement payment system for premium upgrade
4. Add post creation functionality
5. Implement comments system
6. Add notifications feature
7. Implement search functionality

## 💡 Tips

- Premium content is automatically blurred for free users
- The `UserContext` manages all user-related state
- Use `useNewsfeed` hook for all newsfeed data operations
- Mock data is provided for testing - replace with real API
