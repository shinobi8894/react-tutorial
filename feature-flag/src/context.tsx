import { createContext, useState, ReactNode } from 'react';

interface FeatureFlags {
  [key: string]: boolean;
}

interface FeatureFlagContextValue {
  isFeatureEnabled: (featureName: string) => boolean;
  featureFlags: FeatureFlags;
  toggleFeatureFlag: (featureName: string) => void;
}

export const FeatureFlagContext = createContext<FeatureFlagContextValue>({
  isFeatureEnabled: () => false,
  featureFlags: {},
  toggleFeatureFlag: () => {},
});

export const FeatureFlagProvider = ({ children }: { children: ReactNode }) => {
  const [featureFlags, setFeatureFlags] = useState<FeatureFlags>({
    'feature-a': false,
    'feature-b': false,
    'feature-c': false,
  });

  const isFeatureEnabled = (featureName: string): boolean => {
    return featureFlags[featureName] ?? false;
  };

  const toggleFeatureFlag = (featureName: string): void => {
    setFeatureFlags((prevFlags) => ({
      ...prevFlags,
      [featureName]: !prevFlags[featureName],
    }));
  };

  return (
    <FeatureFlagContext.Provider value={{ isFeatureEnabled, featureFlags, toggleFeatureFlag }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};
