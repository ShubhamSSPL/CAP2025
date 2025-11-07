/**
 * Theme Switcher Component
 * Allows users to switch between different themes
 */

import React, { useState } from 'react';
import {
  BgColorsOutlined,
  CheckCircleFilled,
  CloseOutlined
} from '@ant-design/icons';
import { useTheme } from '../theme/ThemeContext';
import { themes, ThemeType } from '../theme/themes';

export const ThemeSwitcher: React.FC = () => {
  const { themeType, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeOptions: { id: ThemeType; icon: string; preview: string[] }[] = [
    {
      id: 'light',
      icon: '☀️',
      preview: ['#3B82F6', '#10B981', '#F8FAFC']
    },
    {
      id: 'dark',
      icon: '🌙',
      preview: ['#60A5FA', '#34D399', '#0F172A']
    },
    {
      id: 'blue',
      icon: '🌊',
      preview: ['#0EA5E9', '#06B6D4', '#F0F9FF']
    },
    {
      id: 'green',
      icon: '🌿',
      preview: ['#10B981', '#14B8A6', '#F0FDF4']
    },
    {
      id: 'purple',
      icon: '🔮',
      preview: ['#A855F7', '#C084FC', '#FAF5FF']
    },
    {
      id: 'orange',
      icon: '🌅',
      preview: ['#F97316', '#FB923C', '#FFF7ED']
    },
  ];

  return (
    <>
      {/* Theme Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-all duration-200 hover:bg-muted text-foreground hover:text-primary"
        style={{
          backgroundColor: isOpen ? 'var(--color-muted)' : 'transparent',
          color: isOpen ? 'var(--color-primary)' : 'inherit'
        }}
      >
        <BgColorsOutlined className="text-lg" />
        <span className="font-medium">Appearance</span>
        <span className="ml-auto text-xs px-2 py-1 rounded-full"
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-primary-foreground)'
          }}
        >
          {themes[themeType].name}
        </span>
      </button>

      {/* Theme Selector Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl p-6 shadow-2xl animate-slide-up"
            style={{
              backgroundColor: 'var(--color-background)',
              backdropFilter: 'blur(20px)',
              border: `1px solid var(--color-border)`
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <BgColorsOutlined className="text-xl" style={{ color: 'var(--color-primary-foreground)' }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>
                    Choose Theme
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
                    Select your preferred color theme
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-muted"
                style={{ color: 'var(--color-muted-foreground)' }}
              >
                <CloseOutlined />
              </button>
            </div>

            {/* Theme Options Grid */}
            <div className="grid grid-cols-2 gap-3">
              {themeOptions.map((option) => {
                const isSelected = themeType === option.id;
                const theme = themes[option.id];

                return (
                  <button
                    key={option.id}
                    onClick={() => {
                      setTheme(option.id);
                      setTimeout(() => setIsOpen(false), 300);
                    }}
                    className="relative p-4 rounded-xl transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: 'var(--color-muted)',
                      border: `2px solid ${isSelected ? 'var(--color-primary)' : 'var(--color-border)'}`,
                      boxShadow: isSelected ? `0 0 0 2px ${theme.colors.primary}40` : 'none'
                    }}
                  >
                    {/* Selected Badge */}
                    {isSelected && (
                      <div
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                      >
                        <CheckCircleFilled style={{ color: 'var(--color-primary-foreground)', fontSize: '16px' }} />
                      </div>
                    )}

                    {/* Theme Preview */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{option.icon}</span>
                      <span className="font-semibold text-sm" style={{ color: 'var(--color-foreground)' }}>
                        {theme.name}
                      </span>
                    </div>

                    {/* Color Swatches */}
                    <div className="flex gap-1.5">
                      {option.preview.map((color, idx) => (
                        <div
                          key={idx}
                          className="flex-1 h-8 rounded-md"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer Note */}
            <div
              className="mt-6 p-3 rounded-lg text-xs text-center"
              style={{
                backgroundColor: 'var(--color-muted)',
                color: 'var(--color-muted-foreground)'
              }}
            >
              Theme preference is saved automatically
            </div>
          </div>
        </div>
      )}
    </>
  );
};
