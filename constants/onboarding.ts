// Onboarding screen configuration
export const ONBOARDING_SCREENS = {
  WELCOME: "(onboarding)/welcome",
  INTERESTS: "(onboarding)/interests",
  NOTIFICATIONS: "(onboarding)/notifications",
} as const;

// Available interests for selection
export const INTERESTS_LIST = [
  { id: "technology", label: "Technology", icon: "💻" },
  { id: "sports", label: "Sports", icon: "⚽" },
  { id: "entertainment", label: "Entertainment", icon: "🎬" },
  { id: "politics", label: "Politics", icon: "🏛️" },
  { id: "business", label: "Business", icon: "💼" },
  { id: "science", label: "Science", icon: "🔬" },
  { id: "health", label: "Health", icon: "🏥" },
  { id: "travel", label: "Travel", icon: "✈️" },
  { id: "food", label: "Food", icon: "🍕" },
  { id: "fashion", label: "Fashion", icon: "👗" },
  { id: "music", label: "Music", icon: "🎵" },
  { id: "movies", label: "Movies", icon: "🎥" },
  { id: "gaming", label: "Gaming", icon: "🎮" },
  { id: "art", label: "Art", icon: "🎨" },
  { id: "education", label: "Education", icon: "📚" },
] as const;

// Onboarding configuration
export const ONBOARDING_CONFIG = {
  minInterests: 3,
  maxInterests: 10,
  animationDuration: 300,
} as const;
