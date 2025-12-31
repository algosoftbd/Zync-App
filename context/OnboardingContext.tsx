import React, { createContext, useContext, useState } from "react";

type OnboardingData = {
  interests: string[];
  notificationsEnabled: boolean;
};

type OnboardingContextType = {
  data: OnboardingData;
  setInterests: (interests: string[]) => void;
  setNotificationsEnabled: (enabled: boolean) => void;
  resetData: () => void;
};

const defaultData: OnboardingData = {
  interests: [],
  notificationsEnabled: false,
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<OnboardingData>(defaultData);

  const setInterests = (interests: string[]) => {
    setData((prev) => ({ ...prev, interests }));
  };

  const setNotificationsEnabled = (enabled: boolean) => {
    setData((prev) => ({ ...prev, notificationsEnabled: enabled }));
  };

  const resetData = () => {
    setData(defaultData);
  };

  return (
    <OnboardingContext.Provider
      value={{ data, setInterests, setNotificationsEnabled, resetData }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboardingData() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboardingData must be used within OnboardingProvider");
  }
  return context;
}
