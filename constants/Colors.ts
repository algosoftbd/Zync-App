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
      primary: '#1D293D',
      secondary: '#45556C',
      tertiary: '#62748E',
      quaternary: '#90A1B9',
    },
    card: {
      base: '#FFFFFF',
      border: '#E2E8F0',
      shadow: 'rgba(0, 0, 0, 0.08)',
    },
    button: {
      border: '#E2E8F0',
      text: '#1D293D',
    },
    icon: {
      container: '#FFFFFF',
      border: '#E2E8F0',
    },
    dot: '#CAD5E2',
    highlight: '#7F22FE',
    gradient: {
      start: 'rgba(255, 255, 255, 0.01)',
      end: '#FFFFFF',
      background: ['#E9D5FF', '#FBCFE8', '#FED7AA'], // Light purple to pink to orange
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
  },
  dark: {
    background: {
      primary: '#020618',
      secondary: '#0F172B',
      tertiary: '#1D293D',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CAD5E2',
      tertiary: '#90A1B9',
      quaternary: '#62748E',
    },
    card: {
      base: '#020618',
      border: '#0F172B',
      shadow: 'rgba(0, 0, 0, 0.3)',
    },
    button: {
      border: '#1D293D',
      text: '#FFFFFF',
    },
    icon: {
      container: '#0F172B',
      border: '#1D293D',
    },
    dot: '#1D293D',
    highlight: '#7F22FE',
    gradient: {
      start: 'rgba(2, 6, 24, 0)',
      end: '#020618',
      background: ['#7F22FE', '#4D179A', '#1D293D'], // Purple gradient for dark mode
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
