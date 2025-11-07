/**
 * Theme Context Provider
 * Manages theme state and provides theme switching functionality
 */

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeType, Theme, getTheme } from './themes';

interface ThemeContextType {
  theme: Theme;
  themeType: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeType, setThemeType] = useState<ThemeType>(() => {
    const saved = localStorage.getItem('app-theme');
    return (saved as ThemeType) || 'light';
  });

  const theme = getTheme(themeType);

  useEffect(() => {
    // Apply theme colors to CSS variables
    const root = document.documentElement;

    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-primary-foreground', theme.colors.primaryForeground);
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    root.style.setProperty('--color-background', theme.colors.background);
    root.style.setProperty('--color-foreground', theme.colors.foreground);
    root.style.setProperty('--color-muted', theme.colors.muted);
    root.style.setProperty('--color-muted-foreground', theme.colors.mutedForeground);
    root.style.setProperty('--color-border', theme.colors.border);
    root.style.setProperty('--color-success', theme.colors.success);
    root.style.setProperty('--color-warning', theme.colors.warning);
    root.style.setProperty('--color-error', theme.colors.error);
    root.style.setProperty('--color-glass', theme.colors.glass);

    root.style.setProperty('--gradient-primary', theme.gradients.primary);
    root.style.setProperty('--gradient-hero', theme.gradients.hero);

    // Update body background
    document.body.style.backgroundColor = theme.colors.background;

    // Save to localStorage
    localStorage.setItem('app-theme', themeType);
  }, [theme, themeType]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeType(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeType, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
