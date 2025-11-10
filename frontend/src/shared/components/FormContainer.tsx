/**
 * Unified Form Container Component
 * Provides consistent layout for all forms across the application
 */

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

interface FormContainerProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-full'
};

export const FormContainer: React.FC<FormContainerProps> = ({
  title,
  description,
  icon,
  children,
  maxWidth = 'md',
  className = ''
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2aDI0djI0SDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      {/* Content */}
      <div className={`relative z-10 w-full ${maxWidthClasses[maxWidth]} animate-slide-up ${className}`}>
        <Card>
          {(title || description || icon) && (
            <CardHeader className="text-center space-y-3">
              {icon && (
                <div className="flex justify-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center animate-float"
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    {icon}
                  </div>
                </div>
              )}
              {title && <CardTitle className="text-2xl">{title}</CardTitle>}
              {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
          )}
          <CardContent className="pt-6">
            {children}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormContainer;
