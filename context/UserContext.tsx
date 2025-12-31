import { PremiumFeatures, User } from '@/types/newsfeed';
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  isPremium: boolean;
  premiumFeatures: PremiumFeatures;
  upgradeToPremium: () => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const defaultPremiumFeatures: PremiumFeatures = {
  adFree: false,
  priorityFeed: false,
  exclusiveContent: false,
  advancedFilters: false,
  downloadContent: false,
};

const premiumFeaturesEnabled: PremiumFeatures = {
  adFree: true,
  priorityFeed: true,
  exclusiveContent: true,
  advancedFilters: true,
  downloadContent: true,
};

export function UserProvider({ children }: { children: ReactNode }) {
  // Mock user - Replace with actual authentication logic
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'John Doe',
    username: 'johndoe',
    avatar: 'https://i.pravatar.cc/150?img=1',
    userType: 'free', // Change to 'premium' to test premium features
    verified: false,
  });

  const isPremium = user?.userType === 'premium';
  const isAuthenticated = user !== null;

  const premiumFeatures = isPremium ? premiumFeaturesEnabled : defaultPremiumFeatures;

  const upgradeToPremium = () => {
    if (user) {
      setUser({ ...user, userType: 'premium' });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        isPremium,
        premiumFeatures,
        upgradeToPremium,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
