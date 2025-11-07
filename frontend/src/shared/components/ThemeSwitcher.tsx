/**
 * Theme Switcher Component
 * Simple dropdown to switch between themes
 */

import React from 'react';
import { BgColorsOutlined } from '@ant-design/icons';
import { useTheme } from '../theme/ThemeContext';
import { themes, ThemeType } from '../theme/themes';

export const ThemeSwitcher: React.FC = () => {
  const { themeType, setTheme } = useTheme();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as ThemeType);
  };

  return (
    <div className="w-full px-4 py-3">
      <div className="flex items-center gap-3">
        <BgColorsOutlined className="text-base" style={{ color: 'var(--color-muted-foreground)' }} />
        <select
          value={themeType}
          onChange={handleThemeChange}
          className="flex-1 px-3 py-2 text-sm rounded-lg border transition-all cursor-pointer"
          style={{
            backgroundColor: 'var(--color-background)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-foreground)'
          }}
        >
          {Object.keys(themes).map((key) => {
            const theme = themes[key as ThemeType];
            return (
              <option key={key} value={key}>
                {theme.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

