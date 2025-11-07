/**
 * Theme Types and Configuration
 * Centralized theme system for the entire application
 */

export type ThemeType = 'light' | 'dark' | 'blue' | 'green' | 'purple' | 'orange';

export interface Theme {
  id: ThemeType;
  name: string;
  colors: {
    primary: string;
    primaryForeground: string;
    secondary: string;
    background: string;
    foreground: string;
    muted: string;
    mutedForeground: string;
    border: string;
    success: string;
    warning: string;
    error: string;
    glass: string;
  };
  gradients: {
    primary: string;
    hero: string;
  };
}

export const themes: Record<ThemeType, Theme> = {
  light: {
    id: 'light',
    name: 'Light Blue',
    colors: {
      primary: '#3B82F6',
      primaryForeground: '#FFFFFF',
      secondary: '#10B981',
      background: '#F8FAFC',
      foreground: '#1E293B',
      muted: '#F1F5F9',
      mutedForeground: '#64748B',
      border: '#E2E8F0',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      glass: 'rgba(255, 255, 255, 0.7)',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
      hero: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)',
    },
  },
  dark: {
    id: 'dark',
    name: 'Dark Mode',
    colors: {
      primary: '#60A5FA',
      primaryForeground: '#FFFFFF',
      secondary: '#34D399',
      background: '#0F172A',
      foreground: '#F1F5F9',
      muted: '#1E293B',
      mutedForeground: '#94A3B8',
      border: '#334155',
      success: '#34D399',
      warning: '#FBBF24',
      error: '#F87171',
      glass: 'rgba(30, 41, 59, 0.7)',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
      hero: 'linear-gradient(135deg, #1E293B 0%, #334155 50%, #475569 100%)',
    },
  },
  blue: {
    id: 'blue',
    name: 'Ocean Blue',
    colors: {
      primary: '#0EA5E9',
      primaryForeground: '#FFFFFF',
      secondary: '#06B6D4',
      background: '#F0F9FF',
      foreground: '#0C4A6E',
      muted: '#E0F2FE',
      mutedForeground: '#0369A1',
      border: '#BAE6FD',
      success: '#14B8A6',
      warning: '#F59E0B',
      error: '#EF4444',
      glass: 'rgba(224, 242, 254, 0.7)',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
      hero: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #BAE6FD 100%)',
    },
  },
  green: {
    id: 'green',
    name: 'Nature Green',
    colors: {
      primary: '#10B981',
      primaryForeground: '#FFFFFF',
      secondary: '#14B8A6',
      background: '#F0FDF4',
      foreground: '#064E3B',
      muted: '#DCFCE7',
      mutedForeground: '#047857',
      border: '#BBF7D0',
      success: '#22C55E',
      warning: '#F59E0B',
      error: '#EF4444',
      glass: 'rgba(220, 252, 231, 0.7)',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      hero: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 50%, #BBF7D0 100%)',
    },
  },
  purple: {
    id: 'purple',
    name: 'Royal Purple',
    colors: {
      primary: '#A855F7',
      primaryForeground: '#FFFFFF',
      secondary: '#C084FC',
      background: '#FAF5FF',
      foreground: '#581C87',
      muted: '#F3E8FF',
      mutedForeground: '#7C3AED',
      border: '#E9D5FF',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      glass: 'rgba(243, 232, 255, 0.7)',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #A855F7 0%, #9333EA 100%)',
      hero: 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 50%, #E9D5FF 100%)',
    },
  },
  orange: {
    id: 'orange',
    name: 'Sunset Orange',
    colors: {
      primary: '#F97316',
      primaryForeground: '#FFFFFF',
      secondary: '#FB923C',
      background: '#FFF7ED',
      foreground: '#7C2D12',
      muted: '#FFEDD5',
      mutedForeground: '#C2410C',
      border: '#FED7AA',
      success: '#10B981',
      warning: '#FBBF24',
      error: '#EF4444',
      glass: 'rgba(255, 237, 213, 0.7)',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
      hero: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 50%, #FED7AA 100%)',
    },
  },
};

export const getTheme = (themeId: ThemeType): Theme => {
  return themes[themeId] || themes.light;
};
