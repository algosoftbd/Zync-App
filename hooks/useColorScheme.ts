import { useColorScheme as useNativeColorScheme } from 'react-native';

/**
 * Custom hook to get the current color scheme (light or dark)
 * Respects system preferences by default
 */
export function useColorScheme() {
  const colorScheme = useNativeColorScheme();
  return colorScheme ?? 'light';
}
