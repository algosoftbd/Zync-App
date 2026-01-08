# Onboarding Flow - Implementation Documentation

**Last Updated:** January 8, 2026  
**Status:** Phase 1 - In Progress  
**Priority:** HIGH

---

## 📋 Overview

The onboarding flow guides new users through initial app setup, collecting preferences and permissions to personalize their news feed experience. The flow consists of 5 screens with smooth transitions and state management through React Context.

---

## 🎯 Onboarding Flow Structure

```
welcome.tsx → Onboarding1.tsx → Onboarding2.tsx → notifications.tsx → SignIn.tsx
    ↓              ↓                  ↓                   ↓               ↓
  Welcome    Reading Prefs      Categories          Notifications      Auth
```

---

## ✅ Completed Components

### 1. **GradientButton.tsx** ✅
**Location:** `components/onboarding/GradientButton.tsx`

**Features:**
- Primary CTA button with gradient background
- Full dark mode support
- Theme-aware colors:
  - **Light Mode:** Black-to-slate gradient (`#000000` → `#1D293D`)
  - **Dark Mode:** Solid white background (`#FFFFFF`)
- Responsive dimensions (6.5% of screen height)
- Supports optional image/icon display
- Text color automatically switches based on theme
- DM Sans Medium font (16px)

**Props:**
```typescript
{
  title: string;
  onPress: () => void;
  imageSource?: any;
  className?: string;
  style?: ViewStyle;
}
```

**Usage:**
```tsx
<GradientButton 
  title="Continue" 
  onPress={handleContinue}
  imageSource={require('@/assets/icons/arrow-right.png')}
/>
```

---

### 2. **SecondaryButton.tsx** ✅
**Location:** `components/onboarding/SecondaryButton.tsx`

**Features:**
- Secondary action button (outlined/glass style)
- Glassmorphism effect with subtle border
- Theme-aware styling:
  - **Light Mode:** `rgba(0, 0, 0, 0.06)` background, dark text
  - **Dark Mode:** `rgba(255, 255, 255, 0.06)` background, white text
- Subtle shadow for depth
- 1px glass border with theme-based opacity
- Pill-shaped (border-radius: 9999px)
- DM Sans Medium font (16px)

**Props:**
```typescript
{
  title: string;
  onPress: () => void;
  className?: string;
  style?: ViewStyle;
}
```

**Usage:**
```tsx
<SecondaryButton 
  title="Skip for now" 
  onPress={handleSkip}
/>
```

---

### 3. **Option.tsx** ✅
**Location:** `components/onboarding/Option.tsx`

**Features:**
- Selection card for reading preferences
- Three states: active, inactive, hover
- Theme-aware backgrounds and borders
- Icon + Text + Description layout
- Smooth press animations
- Active state with elevated shadow
- Full dark mode support

**Theme Colors:**
- **Light Mode Active:** White background, dark text, gray border
- **Light Mode Inactive:** Light gray background (`#F1F5F9`)
- **Dark Mode Active:** Medium slate background (`#314158`), white text
- **Dark Mode Inactive:** Dark background (`#020618`)

**Props:**
```typescript
{
  icon: any;
  title: string;
  description: string;
  selected: boolean;
  onPress: () => void;
}
```

**Usage:**
```tsx
<Option
  icon={require('@/assets/icons/trending.png')}
  title="Trending & pop culture"
  description="Stay updated with viral stories"
  selected={selectedOption === 'trending'}
  onPress={() => setSelectedOption('trending')}
/>
```

---

### 4. **pill.tsx** ✅
**Location:** `components/onboarding/pill.tsx`

**Features:**
- Category pill with toggle functionality
- Icon + Label layout
- Smooth selection animations
- Theme-aware colors
- Active/inactive states
- Proper touch feedback

**Theme Implementation:**
- **Light Mode:**
  - Selected: White background, dark text
  - Unselected: Light gray (`#F1F5F9`)
- **Dark Mode:**
  - Selected: Medium slate (`rgba(49, 65, 88, 0.6)`)
  - Unselected: Very dark (`rgba(2, 6, 24, 0.6)`)

**Props:**
```typescript
{
  icon: any;
  label: string;
  selected: boolean;
  onPress: () => void;
}
```

**Usage:**
```tsx
<Pill
  icon={require('@/assets/pill-icons/politics.png')}
  label="Politics"
  selected={selectedPills.has(1)}
  onPress={() => togglePill(1)}
/>
```

---

### 5. **QuestionCard.tsx** ✅
**Location:** `components/onboarding/QuestionCard.tsx`

**Features:**
- Decorative card with tilted rotation (6.94°)
- Displays question mark icon
- Glassmorphism effect in dark mode
- Elevated shadow for depth
- Responsive sizing

**Background Opacity:**
- **Light Mode:** `#FFFFFF` (100% opaque)
- **Dark Mode:** `rgba(45, 55, 72, 0.6)` (60% opacity) via `Colors.dark.card.base`

**Props:**
```typescript
{
  iconSource?: any;
  size?: number;
}
```

---

### 6. **StepIndicator.tsx** ✅
**Location:** `components/onboarding/StepIndicator.tsx`

**Features:**
- Progress indicator for onboarding steps
- Animated transitions between steps
- Theme-aware colors
- Current step highlighting
- Smooth dot animations

**Usage:**
```tsx
<StepIndicator currentStep={2} totalSteps={5} />
```

---

### 7. **BackButton.tsx** ✅
**Location:** `components/onboarding/BackButton.tsx`

**Features:**
- Navigation back button
- Theme-aware styling
- Smooth press animation
- Icon support

---

## 📱 Implemented Screens

### 1. **Onboarding1.tsx** ✅
**Location:** `app/(onboarding)/Onboarding1.tsx`

**Purpose:** Collect user's reading preference

**Features Implemented:**
- ✅ Question card with tilted icon
- ✅ "What do you like to read first?" heading
- ✅ Three selection options:
  1. Trending & pop culture
  2. In-depth analysis  
  3. Balanced mix
- ✅ Single-selection logic
- ✅ Continue button (GradientButton)
- ✅ Skip button (SecondaryButton)
- ✅ Full dark mode support
- ✅ Gradient background
- ✅ Step indicator (Step 1/3)
- ✅ Theme-aware text colors
- ✅ Responsive layout

**State Management:**
```typescript
const [selectedOption, setSelectedOption] = useState<number>(0);
```

**Navigation:**
- Continue → `Onboarding2.tsx`
- Skip → `Onboarding2.tsx`

**Pending:**
- [ ] Connect to OnboardingContext to persist selection
- [ ] Smooth screen transitions

---

### 2. **Onboarding2.tsx** ✅
**Location:** `app/(onboarding)/Onboarding2.tsx`

**Purpose:** Category deselection (opt-out model)

**Features Implemented:**
- ✅ Question card with tilted icon
- ✅ "Please unselect categories you don't want" heading
- ✅ 8 category pills (4 rows × 2 columns):
  - US News, Politics
  - Sports, Business
  - Lifestyle, Entertainment
  - Education, World
- ✅ All pills selected by default
- ✅ Multi-select toggle functionality
- ✅ Continue button (GradientButton)
- ✅ Skip button (SecondaryButton)
- ✅ Full dark mode support
- ✅ Glassmorphism effects on pills
- ✅ Responsive grid layout
- ✅ Step indicator (Step 2/3)
- ✅ Theme-aware pill backgrounds
- ✅ Shadow effects on selected pills

**Pill Background Colors:**
- **Light Mode:**
  - Selected: `#FFFFFF` (white)
  - Unselected: `#F1F5F9` (light gray)
- **Dark Mode:**
  - Selected: `rgba(49, 65, 88, 0.6)` (semi-transparent blue-gray)
  - Unselected: `rgba(2, 6, 24, 0.6)` (semi-transparent dark)

**State Management:**
```typescript
const [selectedPills, setSelectedPills] = useState<Set<number>>(
  new Set([0, 1, 2, 3, 4, 5, 6, 7])
);
```

**Validation Logic:**
- Minimum 2 categories must remain selected

**Navigation:**
- Continue → `notifications.tsx`
- Skip → `notifications.tsx`

**Pending:**
- [ ] Connect to OnboardingContext to persist selections
- [ ] Add validation toast/alert for minimum selection
- [ ] Smooth screen transitions

---

### 3. **welcome.tsx** 🔄 (Partial)
**Location:** `app/(onboarding)/welcome.tsx`

**Purpose:** First screen with app introduction

**Pending Implementation:**
- [ ] Hero illustration/animation
- [ ] App value proposition copy
- [ ] "Get Started" gradient button
- [ ] Skip option
- [ ] Gradient background
- [ ] Welcome card component

---

### 4. **notifications.tsx** ⏳ (Not Started)
**Location:** `app/(onboarding)/notifications.tsx`

**Purpose:** Request notification permissions

**Planned Features:**
- [ ] Permission request UI
- [ ] Benefits explanation (breaking news, streaks, rewards)
- [ ] "Enable Notifications" button
- [ ] "Maybe Later" option
- [ ] Native permission prompt integration

---

### 5. **SignIn.tsx** ⏳ (Not Started)
**Location:** `app/(onboarding)/SignIn.tsx`

**Purpose:** User authentication

**Planned Features:**
- [ ] Username input field
- [ ] Phone number input (optional)
- [ ] Social auth options (Google, Apple)
- [ ] Terms & Privacy links
- [ ] Skip option for guest mode

---

## 🎨 Design System Implementation

### Color Theming
All onboarding components use the centralized color system from `constants/Colors.ts`:

**Key Color Tokens:**
```typescript
Colors.light.background.primary    // #FFFFFF
Colors.light.option.active.background  // #FFFFFF
Colors.light.option.inactive.background  // #F1F5F9

Colors.dark.background.primary     // #020618
Colors.dark.card.base              // rgba(45, 55, 72, 0.6)
Colors.dark.option.active.background    // #314158
Colors.dark.option.inactive.background  // #020618
```

### Typography
- **Font Family:** DM Sans (Regular, Medium, SemiBold, Bold)
- **Heading Sizes:**
  - H2: 28px (onboarding questions)
  - Body: 16px (descriptions)
  - Button: 16px (Medium weight)
- **Line Heights:** Optimized for readability

### Spacing & Layout
- **Screen Padding:** 24px horizontal
- **Component Gap:** 8px between pills
- **Margin Top:** 4% of screen height for pill grid
- **Button Height:** 6.5% of screen height
- **Card Border Radius:** 24px
- **Pill Border Radius:** 9999px (fully rounded)

### Gradients
- **Background Gradient:**
  - Light: `['#E9D5FF', '#FBCFE8', '#FED7AA']` (purple → pink → orange)
  - Dark: `['#7F22FE', '#4D179A', '#1D293D']` (deep purple gradient)

---

## 🔄 State Management

### OnboardingContext.tsx ✅
**Location:** `context/OnboardingContext.tsx`

**Current State Shape:**
```typescript
{
  readingPreference: 'trending' | 'in-depth' | 'balanced' | null;
  selectedCategories: string[];
  notificationsEnabled: boolean;
  isOnboardingComplete: boolean;
}
```

**Available Actions:**
- `setReadingPreference(preference: string)`
- `setSelectedCategories(categories: string[])`
- `setNotificationsEnabled(enabled: boolean)`
- `completeOnboarding()`

**Pending Integration:**
- [ ] Connect Onboarding1 screen to context
- [ ] Connect Onboarding2 screen to context
- [ ] Persist state to AsyncStorage
- [ ] Add navigation logic after completion

---

## 🎭 Dark Mode Implementation

### Hook Usage
All components import and use:
```typescript
import { useColorScheme } from '@/hooks/useColorScheme';

const colorScheme = useColorScheme();
const isDark = colorScheme === 'dark';
```

### Theme Switching
- Automatically detects system preference
- Real-time updates when system theme changes
- No manual toggle needed (follows OS)

### Component Adaptations
Each component adapts these elements:
- Background colors
- Text colors
- Border colors
- Shadow opacity
- Gradient colors

---

## 📐 Responsive Design

### Dimensions
All screens use:
```typescript
const { width, height } = Dimensions.get('window');
```

### Responsive Units
- Button heights: % of screen height
- Padding: Fixed px values
- Font sizes: Fixed px (16px for consistency)
- Icon sizes: Fixed px (64px for question card, 18px for buttons)

---

## 🚀 Next Steps

### High Priority
1. **Connect Context:**
   - [ ] Wire Onboarding1 to OnboardingContext
   - [ ] Wire Onboarding2 to OnboardingContext
   - [ ] Save preferences to AsyncStorage

2. **Validation:**
   - [ ] Add minimum category selection check (2 categories)
   - [ ] Show toast/alert for validation errors
   - [ ] Disable Continue button if invalid

3. **Navigation:**
   - [ ] Implement screen transitions
   - [ ] Add slide animations between screens
   - [ ] Handle back button navigation

### Medium Priority
4. **Welcome Screen:**
   - [ ] Design and implement welcome card
   - [ ] Add hero illustration/animation
   - [ ] Write value proposition copy

5. **Notifications Screen:**
   - [ ] Design permission request UI
   - [ ] Integrate native permission API
   - [ ] Handle permission denied state

### Low Priority
6. **Polish:**
   - [ ] Add haptic feedback on interactions
   - [ ] Micro-animations for button presses
   - [ ] Loading states during navigation
   - [ ] Error boundaries

---

## 🐛 Known Issues

1. **Font Loading:**
   - Occasional flicker on first load
   - Need splash screen optimization

2. **Gradient Performance:**
   - May lag on low-end Android devices
   - Consider static background fallback

3. **Keyboard Handling:**
   - Not yet implemented for SignIn screen
   - Will need KeyboardAvoidingView

---

## 📚 Related Files

### Components
- `components/onboarding/GradientButton.tsx`
- `components/onboarding/SecondaryButton.tsx`
- `components/onboarding/Option.tsx`
- `components/onboarding/pill.tsx`
- `components/onboarding/QuestionCard.tsx`
- `components/onboarding/StepIndicator.tsx`
- `components/onboarding/BackButton.tsx`
- `components/ui/GradientBackground.tsx`
- `components/ui/GradientText.tsx`

### Screens
- `app/(onboarding)/_layout.tsx`
- `app/(onboarding)/welcome.tsx`
- `app/(onboarding)/Onboarding1.tsx`
- `app/(onboarding)/Onboarding2.tsx`
- `app/(onboarding)/notifications.tsx`
- `app/(onboarding)/SignIn.tsx`

### Context & Hooks
- `context/OnboardingContext.tsx`
- `hooks/useColorScheme.ts`
- `hooks/useOnboarding.ts`

### Constants
- `constants/Colors.ts`
- `constants/onboarding.ts`

### Documentation
- `docs/NAVIGATION_STRUCTURE.md`
- `INSTRUCT.md` (main project guide)
- `rules.md` (coding standards)

---

## 🎯 Success Criteria

### Functional Requirements
- ✅ User can select reading preference
- ✅ User can deselect unwanted categories
- ✅ UI adapts to light/dark mode automatically
- ✅ Buttons are responsive and accessible
- ⏳ State persists across app sessions
- ⏳ Navigation flows smoothly between screens
- ⏳ Validation prevents invalid selections

### Design Requirements
- ✅ Matches Figma designs pixel-perfect
- ✅ Dark mode follows design specifications
- ✅ Typography uses DM Sans correctly
- ✅ Colors match design system
- ✅ Spacing follows 4px grid
- ⏳ Animations are smooth (60fps)
- ⏳ Loading states provide feedback

### Performance Requirements
- ✅ No lag on button presses
- ✅ Images load quickly
- ⏳ Screen transitions < 300ms
- ⏳ Memory usage stays under 150MB
- ⏳ Battery drain is minimal

---

## 📊 Component Status Summary

| Component | Status | Dark Mode | Tests | Notes |
|-----------|--------|-----------|-------|-------|
| GradientButton | ✅ Complete | ✅ Yes | ❌ No | Production ready |
| SecondaryButton | ✅ Complete | ✅ Yes | ❌ No | Glassmorphism added |
| Option | ✅ Complete | ✅ Yes | ❌ No | Production ready |
| Pill | ✅ Complete | ✅ Yes | ❌ No | Production ready |
| QuestionCard | ✅ Complete | ✅ Yes | ❌ No | Production ready |
| StepIndicator | ✅ Complete | ✅ Yes | ❌ No | Production ready |
| BackButton | ✅ Complete | ✅ Yes | ❌ No | Production ready |
| Onboarding1 | ✅ Complete | ✅ Yes | ❌ No | Needs context integration |
| Onboarding2 | ✅ Complete | ✅ Yes | ❌ No | Needs context integration |
| welcome | ⏳ Pending | - | - | Not started |
| notifications | ⏳ Pending | - | - | Not started |
| SignIn | ⏳ Pending | - | - | Not started |

---

## 💡 Development Tips

### Working with Pills
The pill component background colors are crucial for dark mode:
```typescript
// In Onboarding2.tsx
backgroundColor: selectedPills.has(index)
  ? (isDark ? 'rgba(49, 65, 88, 0.6)' : '#FFFFFF')
  : (isDark ? 'rgba(2, 6, 24, 0.6)' : '#F1F5F9')
```

### Testing Dark Mode
1. Change system theme in device settings
2. App automatically updates
3. Check all screens for proper color adaptation

### Adding New Options
To add more reading preferences in Onboarding1:
1. Update `OPTIONS` array in constants
2. Add corresponding icon to assets
3. Update selection logic if needed

### Adding New Categories
To add more categories in Onboarding2:
1. Update `PILLS` array in constants
2. Add corresponding icon to assets
3. Update grid layout (currently 4×2)

---

## 🔗 References

- **Main Project Guide:** `INSTRUCT.md`
- **Coding Standards:** `rules.md`
- **Navigation Docs:** `docs/NAVIGATION_STRUCTURE.md`
- **Figma Design:** [Zync Design File](https://www.figma.com/design/ErwTlwVII4C5NvsaZ7BOEv/Zync)
- **Expo Router:** https://docs.expo.dev/routing/introduction/
- **NativeWind:** https://www.nativewind.dev/

---

**Last Updated:** January 8, 2026  
**Author:** Development Team  
**Status:** Phase 1 - 60% Complete  
**Next Milestone:** Context integration and welcome screen
