# ZYNC APP - GLOBAL PROJECT INSTRUCTIONS

## 📋 QUICK REFERENCE

**App Name:** Zync (formerly Zynk)  
**Tagline:** "News that moves at your speed"  
**Platform:** iOS & Android (React Native with Expo)  
**Target Audience:** Gen Z users (ages 16-26)  
**Core Value Proposition:** TikTok-style news consumption with bite-sized, credible, engaging content  
**Business Model:** Freemium ($1.99/month or $15/year)

---

## 🎯 PROJECT VISION & PHILOSOPHY

### The Problem We're Solving
Gen Z faces news fatigue from:
- **Information overload** from traditional news platforms
- **Credibility issues** on social media
- **Lengthy, complex** article formats that don't respect short attention spans
- **Lack of engagement** features in news apps
- **No gamification** to build daily news consumption habits

### Our Solution
Zync transforms news consumption into a **social media-like experience** by:
1. **Ultra-brief summaries** (9-second reads)
2. **Multi-source integration** (articles + videos + social commentary)
3. **TikTok-style scrollable cards** for effortless consumption
4. **Gamified rewards system** (streaks, tokens, referrals)
5. **AI-powered clustering** to reduce content repetition
6. **Transparent sourcing** with bias indicators and factuality ratings

---

## 🏗️ TECHNICAL ARCHITECTURE

### Tech Stack
- **Framework:** React Native 0.81.5 with Expo ~54.0.30
- **Navigation:** Expo Router ~6.0.21 (file-based routing)
- **Styling:** NativeWind 4.2.1 (Tailwind CSS for React Native)
- **State Management:** React Context API
- **Typography:** DM Sans font family (Regular, Medium, SemiBold, Bold, Light, Italic)
- **Animation:** React Native Reanimated ~4.1.1
- **Gestures:** React Native Gesture Handler ~2.28.0
- **Media:** Expo AV, Expo Image, Expo Blur
- **Storage:** AsyncStorage 2.2.0

### Design System
- **Color Philosophy:** Vibrant gradients, playful yet credible
- **Primary Gradients:** 
  - Onboarding: Purple-to-pink (#8B5CF6 → #EC4899)
  - Accent: Blue-to-cyan gradients
- **Typography Scale:** Follows mobile-first hierarchy
- **Spacing:** Consistent 4px grid system
- **Border Radius:** 12px (cards), 8px (buttons), 24px (pills)
- **Dark Mode:** Full support for system-based dark mode with automatic theme switching

**Note:** All colors, typography sizes, font families, and design tokens are comprehensively defined in [`tailwind.config.js`](tailwind.config.js). Refer to that file for the complete design system including:
- Color scales (Primary, Secondary, Tertiary, Slate, Success, Error)
- Dark mode color variants (background, text, card colors)
- Font sizes (Headings: h1-h4, Body: lg/md/sm, Label, Caption, Footnote)
- Font families (DM Sans variants: Regular, Medium, SemiBold, Bold, Light, Italic)
- Background gradients (gradient-1 through gradient-7, gradient-hero, gradient-accent)

### Dark Mode Implementation
The app includes a robust dark mode system that:
- **Automatically detects** system color scheme preferences
- **Provides theme context** via `ThemeContext` and `useTheme` hook
- **Color utilities** in `constants/Colors.ts` for easy theme-aware color access
- **Glass effect cards** in dark mode using `expo-blur` for modern aesthetics
- **Gradient backgrounds** adapt to theme (light: soft pastels, dark: deep purples)
- **Text colors** automatically adjust for optimal readability

**Key Files:**
- [`hooks/useColorScheme.ts`](hooks/useColorScheme.ts) - Color scheme detection hook
- [`context/ThemeContext.tsx`](context/ThemeContext.tsx) - Theme provider and context
- [`constants/Colors.ts`](constants/Colors.ts) - Centralized color definitions with theme support

### File Structure Convention
```
app/                          # Expo Router screens (file-based routing)
├── _layout.tsx              # Root layout with providers
├── index.tsx                # Landing/redirect screen
├── globals.css              # Global Tailwind styles
├── (onboarding)/            # Onboarding flow (grouped route)
│   ├── _layout.tsx          # Onboarding layout wrapper
│   ├── welcome.tsx          # Screen 1: Welcome
│   ├── Onboarding1.tsx      # Screen 2: Reading preferences
│   ├── Onboarding2.tsx      # Screen 3: Category deselection
│   ├── notifications.tsx    # Screen 4: Notification permission
│   └── SignIn.tsx           # Authentication screen
└── (newsfeed)/              # Main news feed (grouped route)
    ├── _layout.tsx          # Newsfeed layout
    ├── index.tsx            # Main feed with infinite scroll
    └── Feed.tsx             # Feed implementation

components/                   # Reusable React components
├── onboarding/              # Onboarding-specific components
│   ├── GradientButton.tsx   # Primary CTA button
│   ├── SecondaryButton.tsx  # Outlined button variant
│   ├── Option.tsx           # Selection card component
│   ├── pill.tsx             # Category pill component
│   └── welcome_card.tsx     # Welcome screen card
├── newsfeed/                # News feed components
│   ├── Post.tsx             # Main post card component
│   ├── AISummaryModal.tsx   # AI summary bottom sheet
│   ├── BottomModal.tsx      # Reusable modal component
│   └── MorphButtons.tsx     # Animated interaction buttons
└── ui/                      # Shared UI components
    ├── GradientBackground.tsx
    └── GradientText.tsx

context/                      # React Context providers
├── OnboardingContext.tsx    # Manages onboarding flow state
└── UserContext.tsx          # User authentication & premium status

hooks/                        # Custom React hooks
├── useOnboarding.ts         # Onboarding flow logic
└── useNewsfeed.ts           # News feed data management

types/                        # TypeScript type definitions
├── index.ts                 # Barrel export
├── post.types.ts            # Post data structures
└── newsfeed.ts              # Newsfeed-specific types

constants/                    # Static data and configuration
├── onboarding.ts            # Onboarding flow constants
└── newsfeed.ts              # Mock post data, filters

assets/                       # Static assets
├── fonts/DM_Sans/           # Typography files
├── icons/                   # UI icons (PNG/SVG)
├── images/                  # Static images
├── newsfeed_asset/          # News feed specific assets
└── pill-icons/              # Category icons

docs/                         # Project documentation
├── NAVIGATION_STRUCTURE.md  # Navigation patterns
├── NEWSFEED_STRUCTURE.md    # Feed implementation guide
└── REELS_FEED_DOCUMENTATION.md
```

---

## 🚀 DEVELOPMENT PHASES (FRONTEND FOCUS)

### ✅ PHASE 0: FOUNDATION (COMPLETED)
**Status:** ✅ Done  
**Timeline:** Weeks 1-2

**Achievements:**
- ✅ Project initialized with Expo + React Native
- ✅ NativeWind (Tailwind) configured
- ✅ DM Sans font family integrated
- ✅ File-based routing structure established
- ✅ Context providers scaffolded
- ✅ Design system foundations (colors, spacing, typography)

---

### 🔄 PHASE 1: ONBOARDING FLOW (IN PROGRESS)
**Current Phase:** 🔄 Active Development  
**Timeline:** Weeks 3-4  
**Priority:** HIGH

#### Screens to Implement
1. **Welcome Screen** (`welcome.tsx`)
   - [ ] Hero illustration/animation
   - [ ] App value proposition copy
   - [ ] "Get Started" gradient button
   - [ ] Skip option (secondary button)

2. **Onboarding1: Reading Preferences** (`Onboarding1.tsx`)
   - [x] Question: "What do you like to read first?"
   - [x] Three options with icons:
     - Trending & pop culture
     - In-depth analysis
     - Balanced mix
   - [x] Single selection interaction
   - [x] Continue button (gradient)
   - [ ] Save preference to OnboardingContext

3. **Onboarding2: Category Selection** (`Onboarding2.tsx`)
   - [x] Question: "Please unselect categories you don't want"
   - [x] 8 category pills (all selected by default):
     - US News, Politics, Sports, Business
     - Lifestyle, Entertainment, Education, World
   - [x] Multi-select toggle interaction
   - [ ] Save selections to OnboardingContext
   - [ ] Minimum 2 categories validation

4. **Notification Permission** (`notifications.tsx`)
   - [ ] Permission request UI
   - [ ] Benefits explanation (breaking news, streaks, rewards)
   - [ ] "Enable Notifications" button
   - [ ] "Maybe Later" option
   - [ ] Native permission prompt integration

5. **Sign In/Sign Up** (`SignIn.tsx`)
   - [ ] Username input field
   - [ ] Phone number input (optional)
   - [ ] Social auth options (Google, Apple)
   - [ ] Terms & Privacy links
   - [ ] Skip option for guest mode

#### Components Status
- [x] `GradientButton.tsx` - Primary CTA button
- [x] `SecondaryButton.tsx` - Outlined button variant
- [x] `Option.tsx` - Selection card with icon
- [x] `pill.tsx` - Category pill with toggle
- [ ] `welcome_card.tsx` - Welcome screen card (needs review)
- [x] `GradientText.tsx` - Gradient text component

#### Context Integration
- [x] `OnboardingContext.tsx` created
- [ ] Persist onboarding state to AsyncStorage
- [ ] Navigate to newsfeed after completion

#### Design Polish Needed
- [ ] Screen transition animations
- [ ] Micro-interactions (button press states)
- [ ] Loading states
- [ ] Error handling UI
- [ ] Haptic feedback on interactions

---

### 📅 PHASE 2: CORE NEWS FEED (NEXT UP)
**Status:** 🔜 Upcoming  
**Timeline:** Weeks 5-6  
**Priority:** HIGH

#### Main Feed Implementation
1. **Feed Layout** (`(newsfeed)/index.tsx`)
   - [ ] Infinite scroll container (FlatList/FlashList)
   - [ ] Pull-to-refresh functionality
   - [ ] Header with search, notifications, profile icons
   - [ ] Filter tabs (All, Following, Trending, Premium)
   - [ ] Smooth 60fps scrolling optimization

2. **Post Card Component** (`Post.tsx`)
   - [x] Card structure (image, headline, metadata)
   - [x] Article source badge
   - [x] View count, date, category tags
   - [x] 9-second summary text
   - [ ] Video player integration (YouTube embed)
   - [x] Interaction buttons (like, comment, share, bookmark)
   - [ ] "Read More" expansion
   - [ ] AI Summary modal trigger
   - [ ] Audio playback button

3. **Post Interactions**
   - [ ] Like animation (heart fill effect)
   - [ ] Comment bottom sheet modal
   - [ ] Share sheet (native share + custom options)
   - [ ] Bookmark toggle with haptic feedback
   - [ ] Video play/pause controls

4. **AI Features**
   - [ ] Smart Thread Merge UI (clustered posts)
   - [ ] "Similar stories" expansion
   - [ ] AI Summary modal with TTS option

#### Feed Algorithms
- [ ] Personalization based on onboarding preferences
- [ ] "Following" filter (user subscriptions)
- [ ] "Trending" algorithm (engagement-based)
- [ ] Premium content filtering

#### Performance Optimization
- [ ] Image lazy loading with placeholders
- [ ] Video thumbnail prefetch
- [ ] FlatList optimization (`getItemLayout`, `removeClippedSubviews`)
- [ ] Memoized components with `React.memo()`
- [ ] Virtualized list performance tuning

---

### 📅 PHASE 3: USER PROFILE & NAVIGATION
**Status:** 🔜 Upcoming  
**Timeline:** Weeks 7-8  
**Priority:** MEDIUM

#### Screens to Build
1. **Profile Screen** (`profile.tsx`)
   - [ ] User avatar and username
   - [ ] Stats: Posts read, Streak count, Tokens earned
   - [ ] Badges and achievements display
   - [ ] Customization options (avatar, theme)
   - [ ] Reading history
   - [ ] Settings access

2. **Search Screen** (`search.tsx`)
   - [ ] Search bar with auto-complete
   - [ ] Recent searches
   - [ ] Trending topics
   - [ ] Search results feed

3. **Notifications Screen** (`notifications.tsx`)
   - [ ] Tabs: All, Mentions, Following
   - [ ] Notification types (likes, comments, follows, system)
   - [ ] Unread indicators
   - [ ] Mark all as read

#### Navigation Features
- [ ] Bottom tab bar (if needed)
- [ ] Deep linking setup
- [ ] Screen transitions
- [ ] Back navigation handling

---

### 📅 PHASE 4: GAMIFICATION & REWARDS
**Status:** 🔜 Upcoming  
**Timeline:** Weeks 9-10  
**Priority:** MEDIUM

#### Features to Implement
1. **Streak Tracking**
   - [ ] Daily login streak counter
   - [ ] Visual progress indicator
   - [ ] Streak recovery option (grace period)
   - [ ] Achievement badges for milestones (7, 30, 100 days)

2. **Token System**
   - [ ] Earn 1 token per 5 news cards read
   - [ ] Daily reading goals
   - [ ] Token balance display
   - [ ] Redemption shop UI

3. **Referral Program**
   - [ ] Unique referral code generation
   - [ ] Share referral link
   - [ ] Referral progress tracker:
     - 3 referrals → Sticker pack
     - 7 referrals → Badge + 5 tokens
     - 12 referrals → Avatar unlock
   - [ ] Referral leaderboard

4. **Profile Customization**
   - [ ] Avatar shop (token-based)
   - [ ] Theme unlocks
   - [ ] Badge showcase
   - [ ] Sticker pack collection

---

### 📅 PHASE 5: SOCIAL FEATURES
**Status:** 🔜 Future  
**Timeline:** Weeks 11-12  
**Priority:** LOW (MVP+)

#### Features
- [ ] Comment system with threading
- [ ] Like/reaction system
- [ ] User following/followers
- [ ] Social sharing (external platforms)
- [ ] Direct messaging (Phase 3 consideration)

---

### 📅 PHASE 6: PREMIUM FEATURES
**Status:** 🔜 Future  
**Timeline:** Weeks 13-14  
**Priority:** MEDIUM (Revenue Critical)

#### Free vs. Premium Matrix

| Feature | Free | Premium |
|---------|------|---------|
| Daily News Cards | Unlimited | Unlimited |
| Ads | Yes | **No Ads** |
| Audio Summaries | 3/day | **Unlimited** |
| Bookmarks | No | **Unlimited** |
| Feed Customization | Basic | **Advanced** |
| Bias/Factuality Ratings | No | **Yes** |
| Premium Content | Blurred | **Full Access** |
| Themes | 2 basic | **All themes** |
| Priority Feed | No | **Yes** |

#### Implementation Tasks
- [ ] Subscription UI flow
- [ ] Payment integration (App Store/Google Play)
- [ ] 7-day free trial logic
- [ ] Subscription status management
- [ ] Premium badge display
- [ ] Content gating logic
- [ ] Upgrade prompts (contextual banners)

---

### 📅 PHASE 7: MULTIMEDIA & AUDIO
**Status:** 🔜 Future  
**Timeline:** Weeks 15-16  
**Priority:** MEDIUM

#### Features
- [ ] Text-to-speech (TTS) integration
- [ ] Audio playback controls (play, pause, speed)
- [ ] Background audio support
- [ ] YouTube video embeds
- [ ] Video playback optimization
- [ ] Audio progress tracking

---

### 📅 PHASE 8: ADVANCED AI FEATURES
**Status:** 🔜 Future (Post-MVP)  
**Timeline:** Phase 2 Release  
**Priority:** LOW

#### Smart Features
- [ ] Smart Thread Merge (cluster similar stories)
- [ ] AI-generated summaries with Ground.News API
- [ ] Bias detection overlay
- [ ] Factuality scoring
- [ ] Personalized feed recommendations
- [ ] News sentiment analysis

---

### 📅 PHASE 9: POLISH & OPTIMIZATION
**Status:** 🔜 Pre-Launch  
**Timeline:** Weeks 17-18  
**Priority:** CRITICAL

#### Tasks
- [ ] Performance profiling and optimization
- [ ] Accessibility audit (screen readers, contrast)
- [ ] Error boundary implementation
- [ ] Offline mode support
- [ ] Analytics integration (user behavior tracking)
- [ ] Crash reporting (Sentry/Bugsnag)
- [ ] A/B testing framework
- [ ] Onboarding analytics
- [ ] App Store assets (screenshots, previews)
- [ ] Beta testing (TestFlight/Google Play Beta)

---

## 🎨 DESIGN GUIDELINES

### Visual Identity
- **Playful yet Credible:** Balance fun UX with journalistic trust
- **Mobile-First:** Every interaction optimized for thumb reach
- **Vibrant Gradients:** Purple-pink-blue spectrum for energy
- **Neumorphic Cards:** Soft shadows, elevated surfaces
- **Micro-interactions:** Subtle animations for feedback

### UX Principles
1. **Speed:** Every screen loads in <1 second
2. **Clarity:** No more than 3 actions per screen
3. **Delight:** Surprise users with playful copy and animations
4. **Trust:** Always show sources, bias indicators
5. **Accessibility:** WCAG AA compliance minimum

### Component Design Patterns
- **Buttons:** Gradient (primary), Outlined (secondary), Ghost (tertiary)
- **Cards:** 12px border radius, subtle shadow, white background
- **Pills:** 24px border radius, icon + label, toggle state
- **Modals:** Bottom sheet style, drag-to-dismiss
- **Loading:** Skeleton screens, never spinners

---

## 📊 DATA MODELS & STATE MANAGEMENT

### User Data Structure
```typescript
interface User {
  id: string;
  username: string;
  email?: string;
  phone?: string;
  avatar: string;
  userType: 'free' | 'premium';
  subscriptionEndDate?: Date;
  
  // Onboarding
  readingPreference: 'trending' | 'in-depth' | 'balanced';
  categories: string[]; // Selected categories
  
  // Gamification
  streakCount: number;
  lastActiveDate: Date;
  tokensEarned: number;
  badges: Badge[];
  
  // Referrals
  referralCode: string;
  referralsCount: number;
  
  // Preferences
  notificationsEnabled: boolean;
  audioAutoplay: boolean;
  feedLanguage: string;
}
```

### Post Data Structure
```typescript
interface Post {
  id: string;
  headline: string;
  summary: string; // 9-second read
  primaryImage: ImageSourcePropType;
  articleSource: {
    name: string;
    url: string;
    logo?: string;
  };
  videoUrl?: string; // YouTube URL
  
  // Metadata
  category: string;
  date: Date;
  viewCount: number;
  isPremium: boolean;
  
  // AI Features
  clusterId?: string; // For Smart Thread Merge
  similarPosts?: string[]; // Post IDs
  biasRating?: 'left' | 'center' | 'right';
  factualityScore?: number; // 0-100
  
  // Interactions
  likeCount: number;
  commentCount: number;
  bookmarkCount: number;
  shareCount: number;
}
```

### Context Providers
1. **OnboardingContext:** Manages onboarding flow state
2. **UserContext:** Authentication, premium status, user profile
3. **NewsfeedContext (future):** Feed data, filters, pagination
4. **RewardContext (future):** Streaks, tokens, badges

---

## 🔗 API INTEGRATION (FUTURE PHASES)

### Backend Services (Not Yet Implemented)
- **News Aggregation API:** Fetch articles from multiple sources
- **YouTube Data API:** Video metadata and thumbnails
- **Ground.News API:** Bias/factuality ratings
- **Text-to-Speech API:** Audio generation
- **Authentication API:** User sign-up, login, JWT tokens
- **Payment API:** Subscription management (App Store/Google Play)
- **Analytics API:** User behavior tracking

### API Structure (Planned)
```typescript
// Example endpoint patterns
GET    /api/posts?filter=all&page=1&limit=20
GET    /api/posts/:id
POST   /api/posts/:id/like
POST   /api/posts/:id/bookmark
GET    /api/user/profile
PATCH  /api/user/preferences
POST   /api/auth/signup
POST   /api/auth/login
GET    /api/rewards/streaks
POST   /api/rewards/claim
```

---

## 🧪 TESTING STRATEGY

### Current Testing Status
- [ ] Unit tests (Jest + React Native Testing Library)
- [ ] Component tests
- [ ] Integration tests
- [ ] E2E tests (Detox)
- [ ] Visual regression tests

### Testing Priorities
1. **Critical Path:** Onboarding → Feed → Post interaction
2. **Payment Flow:** Subscription purchase and restoration
3. **Gamification:** Streak logic, token accumulation
4. **Performance:** FlatList scrolling, image loading

---

## 🚀 DEPLOYMENT & RELEASE

### Build Configuration
- **EAS Build:** Configured in `eas.json`
- **Development Build:** For internal testing
- **Preview Build:** For stakeholder reviews
- **Production Build:** App Store submission

### Release Checklist
- [ ] App Store Connect setup (iOS)
- [ ] Google Play Console setup (Android)
- [ ] Privacy policy URL
- [ ] Terms of service URL
- [ ] App Store screenshots (6.5", 6.7", 5.5")
- [ ] Feature graphic (Android)
- [ ] App preview video (optional but recommended)
- [ ] App Store description (optimized for ASO)
- [ ] Keywords for discoverability

---

## 📖 DEVELOPMENT WORKFLOW

### Code Standards (See `rules.md`)
- **TypeScript:** Strict typing, no `any`
- **Components:** Functional components with hooks
- **Naming:** camelCase (variables), PascalCase (components)
- **Styling:** NativeWind (Tailwind classes)
- **Performance:** `React.memo()`, optimized FlatLists

### Git Workflow
- **Branches:** `main` (production), `develop` (active development), `feature/*`
- **Commits:** Conventional commits (feat, fix, docs, style, refactor)
- **PRs:** Required for merging to `main`

### Daily Development Routine
1. **Read this INSTRUCT.md** to refresh project context
2. **Check `rules.md`** for coding standards
3. **Review current phase tasks** in this document
4. **Commit frequently** with descriptive messages
5. **Test on device** before marking tasks complete

---

## 🎯 CURRENT FOCUS: ONBOARDING FLOW

### What You're Building Right Now
You are completing the **onboarding flow** (Phase 1), specifically:
- Finalizing `Onboarding2.tsx` (category deselection screen)
- Integrating context state management
- Adding screen transitions and micro-interactions

### Next Immediate Steps
1. Connect `Onboarding2.tsx` to `OnboardingContext`
2. Save selected categories to context state
3. Implement navigation to notification permission screen
4. Add validation (minimum 2 categories selected)
5. Polish animations and transitions

### Files You'll Be Working With
- `app/(onboarding)/Onboarding2.tsx` (current file)
- `context/OnboardingContext.tsx` (state management)
- `components/onboarding/pill.tsx` (category pill component)
- `components/onboarding/GradientButton.tsx` (continue button)

---

## 💡 KEY DESIGN DECISIONS & RATIONALE

### Why Expo Router?
- File-based routing simplifies navigation structure
- Built-in deep linking support
- Better performance than React Navigation alone
- Type-safe navigation with TypeScript

### Why NativeWind over StyleSheet?
- Faster development with Tailwind utilities
- Consistent design system enforcement
- Responsive design utilities built-in
- Better readability in JSX

### Why Context API over Redux?
- Simpler setup for MVP scope
- Less boilerplate code
- Sufficient for current state complexity
- Can migrate to Zustand/Redux later if needed

### Why Freemium Model?
- Low barrier to entry ($1.99/month)
- Annual plan encourages commitment ($15/year = 38% discount)
- 7-day trial reduces purchase friction
- Premium features align with power user needs

---

## 🐛 KNOWN ISSUES & TECHNICAL DEBT

### Current Issues
- [ ] Font loading flicker on app start (need splash screen optimization)
- [ ] Android back button handling in nested routes
- [ ] Gradient performance on low-end devices
- [ ] AsyncStorage needs encryption for sensitive data

### Technical Debt
- [ ] Mock data in constants/ needs real API integration
- [ ] No error boundaries implemented yet
- [ ] Missing analytics events
- [ ] No offline support

---

## 📚 LEARNING RESOURCES

### Project-Specific Docs
- [Navigation Structure](docs/NAVIGATION_STRUCTURE.md)
- [Newsfeed Structure](docs/NEWSFEED_STRUCTURE.md)
- [Reels Feed Documentation](docs/REELS_FEED_DOCUMENTATION.md)

### External References
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [NativeWind Guide](https://www.nativewind.dev/)
- [Expo Router Docs](https://docs.expo.dev/routing/introduction/)

---

## 🎬 SUCCESS METRICS (POST-LAUNCH)

### User Engagement KPIs
- **Daily Active Users (DAU):** Target 10k in first month
- **Average Session Duration:** Target 8+ minutes
- **Streak Retention:** 30% of users maintain 7-day streak
- **Premium Conversion:** 5% free-to-paid within 30 days

### Technical KPIs
- **App Load Time:** <2 seconds on 4G
- **Crash Rate:** <0.5%
- **API Response Time:** <500ms p95
- **FlatList FPS:** 60fps maintained on mid-range devices

---

## 🔮 LONG-TERM VISION (PHASE 2-3)

### Future Features (6-12 Months)
- **AR News Experience:** Immersive storytelling with AR
- **Podcast Integration:** Audio-first news consumption
- **News Literacy Tools:** Educational modules on media literacy
- **Creator Economy:** Revenue sharing with journalists
- **Web App:** Cross-platform desktop experience
- **Multi-language:** Spanish, French, German support

---

## 📞 PROJECT CONTACTS & RESOURCES

**Product Designer:** Shahariar Ratul  
**PRD Date:** July 28, 2025  
**Target Design Handoff:** August 10-12, 2024

---

## ⚠️ IMPORTANT REMINDERS

1. **ALWAYS read `rules.md`** before writing code
2. **ALWAYS check this INSTRUCT.md** when starting a new session
3. **ALWAYS prioritize performance** (Gen Z expects instant responses)
4. **ALWAYS maintain type safety** (no `any` types)
5. **ALWAYS test on real devices** (iOS + Android)
6. **ALWAYS consider accessibility** (screen readers, color contrast)
7. **ALWAYS write mobile-first** (thumb-friendly interactions)
8. **ALWAYS prototype animations** before implementing
9. **ALWAYS document breaking changes** in commit messages
10. **ALWAYS sync with design files** before building new screens

---

## 🎉 PROJECT PHILOSOPHY

> "We're not building a news app. We're building the **social media of news** — where staying informed feels as natural as scrolling TikTok, as engaging as Instagram, and as credible as The New York Times."

**Core Values:**
- **Speed:** Every interaction is instant
- **Joy:** News shouldn't feel like homework
- **Trust:** Credibility is non-negotiable
- **Habit:** Build daily news rituals through gamification
- **Community:** News is better when shared and discussed

---

**Last Updated:** January 6, 2026  
**Project Status:** Phase 1 (Onboarding Flow) - In Progress  
**Next Milestone:** Complete onboarding flow → Begin newsfeed implementation

---

*End of INSTRUCT.md*
