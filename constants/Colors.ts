/**
 * Design system colors that support both light and dark modes
 * Use these colors throughout the app for consistent theming
 */

export const Colors = {
  light: {
    background: {
      primary: '#FFFFFF',
      secondary: '#F8FAFC',
      tertiary: '#F1F5F9',
    },
    text: {
      primary: '#0F172B',
      secondary: '#45556C',
      tertiary: '#62748E',
      quaternary: '#90A1B9',
    },
    card: {
      base: '#FFFFFF',
      border: '#E2E8F0',
      shadow: 'rgba(0, 0, 0, 0.08)',
    },
    option: {
      active: {
        background: '#FFFFFF',
        border: '#E2E8F0',
        text: '#1D293D',
      },
      inactive: {
        background: '#F1F5F9',
        border: '#E2E8F0',
        text: '#62748E',
      },
    },
    gradient: {
      background: ['#E9D5FF', '#FBCFE8', '#FED7AA'], // Light purple to pink to orange
    },
  },
  dark: {
    background: {
      primary: '#020618',
      secondary: '#1D293D',
      tertiary: '#314158',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CAD5E2',
      tertiary: '#90A1B9',
      quaternary: '#62748E',
    },
    card: {
      base: 'rgba(45, 55, 72, 0.3)', // Glass effect
      border: 'rgba(203, 213, 225, 0.1)',
      shadow: 'rgba(0, 0, 0, 0.3)',
    },
    option: {
      active: {
        background: '#314158',
        border: '#1D293D',
        text: '#FFFFFF',
      },
      inactive: {
        background: '#020618',
        border: 'rgba(203, 213, 225, 0.1)',
        text: '#90A1B9',
      },
    },
    gradient: {
      background: ['#7F22FE', '#4D179A', '#1D293D'], // Purple gradient for dark mode
    },
  },
};

/**
 * Get color based on current theme
 */
export function getThemedColor(path: string, isDark: boolean): string {
  const theme = isDark ? Colors.dark : Colors.light;
  const keys = path.split('.');
  let value: any = theme;
  
  for (const key of keys) {
    value = value[key];
    if (value === undefined) break;
  }
  
  return value || '#000000';
}
