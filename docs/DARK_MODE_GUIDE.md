# Dark Mode Implementation Guide

## Overview
The Zync app includes a comprehensive dark mode system that automatically detects and respects system color scheme preferences. The implementation follows React Native best practices and provides a seamless experience across both light and dark themes.

## Architecture

### 1. Color Scheme Detection
**File:** `hooks/useColorScheme.ts`

```typescript
import { useColorScheme as useNativeColorScheme } from 'react-native';

export function useColorScheme() {
  const colorScheme = useNativeColorScheme();
  return colorScheme ?? 'light';
}
```

This hook wraps React Native's `useColorScheme` and provides fallback to 'light' mode.

### 2. Theme Context
**File:** `context/ThemeContext.tsx`

Provides application-wide theme state through React Context:
- `theme`: Current theme ('light' | 'dark')
- `isDark`: Boolean helper for quick dark mode checks

**Usage:**
```typescript
import { useTheme } from '@/context/ThemeContext';

function MyComponent() {
  const { theme, isDark } = useTheme();
  // Use theme values
}
```

### 3. Color System
**File:** `constants/Colors.ts`

Centralized color definitions for both themes:

```typescript
Colors.light = {
  background: { primary, secondary, tertiary },
  text: { primary, secondary, tertiary, quaternary },
  card: { base, border, shadow },
  gradient: { background }
}

Colors.dark = {
  // Same structure with dark theme values
}
```

**Helper Function:**
```typescript
getThemedColor('text.primary', isDark) // Returns appropriate color
```

### 4. Tailwind Configuration
**File:** `tailwind.config.js`

Extended with dark mode color variants:
- `background.dark.*` - Dark mode backgrounds
- `text.dark.*` - Dark mode text colors
- `card.dark.*` - Dark mode card styles (with glass effect support)

## Implementation Examples

### Basic Component with Dark Mode

```typescript
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

function MyComponent() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  return (
    <View style={{ backgroundColor: colors.background.primary }}>
      <Text style={{ color: colors.text.primary }}>
        Hello World
      </Text>
    </View>
  );
}
```

### Glass Effect Cards (Dark Mode)

```typescript
import { BlurView } from 'expo-blur';

// In dark mode
<View style={{ borderRadius: 24, overflow: 'hidden' }}>
  <BlurView
    intensity={20}
    tint="dark"
    style={{
      flex: 1,
      borderWidth: 1,
      borderColor: colors.card.border,
      backgroundColor: colors.card.base, // rgba with opacity
    }}
  >
    {/* Card content */}
  </BlurView>
</View>
```

### Gradient Backgrounds

```typescript
import { LinearGradient } from 'expo-linear-gradient';

<LinearGradient
  colors={colors.gradient.background as any}
  start={{ x: 0.5, y: 0 }}
  end={{ x: 0.5, y: 1 }}
  style={styles.gradient}
/>
```

## Design Specifications

### Light Mode
- **Background:** White (#FFFFFF) with soft pastel gradients
- **Cards:** White with subtle shadows (0.08 opacity)
- **Text:** Dark slate colors for optimal readability
- **Gradient:** Light purple → pink → orange (#E9D5FF → #FBCFE8 → #FED7AA)

### Dark Mode
- **Background:** Deep slate (#0F172B) with purple gradients
- **Cards:** Glass effect with backdrop blur (rgba(45, 55, 72, 0.6))
- **Text:** Light colors (#FFFFFF, #CAD5E2) for readability
- **Gradient:** Purple spectrum (#7F22FE → #4D179A → #1D293D)
- **Glass Effect:** 20pt blur intensity with dark tint

## Components Updated for Dark Mode

1. **Welcome Screen** (`app/(onboarding)/welcome.tsx`)
   - Dynamic gradient background
   - Theme-aware text colors
   - Conditional circular patterns (light mode only)
   - StatusBar style switching

2. **Welcome Card** (`components/onboarding/welcome_card.tsx`)
   - Glass effect in dark mode using BlurView
   - Standard card with shadow in light mode
   - Theme-aware text colors

## Best Practices

### DO ✅
- Always use `useColorScheme()` hook for theme detection
- Use `Colors` constants for consistent theming
- Test both light and dark modes during development
- Ensure text has sufficient contrast in both themes
- Use `StatusBar` with appropriate `barStyle`

### DON'T ❌
- Hardcode color values in components
- Forget to handle both themes for new components
- Use colors that don't meet WCAG AA contrast standards
- Ignore system color scheme changes

## Testing Dark Mode

### On iOS Simulator
1. Settings → Developer → Dark Appearance → Toggle
2. Or use Control Center to toggle appearance

### On Android Emulator
1. Settings → Display → Dark theme → Toggle

### Programmatically (for testing)
```typescript
// Force dark mode (for testing only)
import { Appearance } from 'react-native';
Appearance.setColorScheme('dark');
```

## StatusBar Handling

```typescript
<StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
```

## Future Enhancements

- [ ] Manual theme toggle (override system preference)
- [ ] Theme preference persistence in AsyncStorage
- [ ] Animated theme transitions
- [ ] Per-component theme customization
- [ ] Additional theme variants (e.g., OLED black mode)

## Troubleshooting

### Colors not updating
- Ensure component uses `useColorScheme()` hook
- Check that color values reference `Colors` constants
- Verify component re-renders on theme change

### BlurView not working
- Ensure `expo-blur` is installed
- Check platform-specific implementations (iOS vs Android)
- Verify `overflow: 'hidden'` is set on parent View

### Gradient rendering issues
- Cast colors array as `any` for LinearGradient
- Ensure gradient array has at least 2 colors
- Check color format (hex, rgba, etc.)

## References
- [React Native Appearance API](https://reactnative.dev/docs/appearance)
- [Expo BlurView](https://docs.expo.dev/versions/latest/sdk/blur-view/)
- [NativeWind Dark Mode](https://www.nativewind.dev/v4/core-concepts/dark-mode)
