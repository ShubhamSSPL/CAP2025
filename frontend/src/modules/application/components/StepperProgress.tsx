/**
 * Stepper Progress Component - Unified UI with shadcn/ui
 * Visual progress indicator for the 11-step application form
 */

import React from 'react';
import {
  CheckCircleFilled,
  UserOutlined,
  TeamOutlined,
  TagsOutlined,
  FileDoneOutlined,
  BookOutlined,
  ReadOutlined,
  InfoCircleOutlined,
  EnvironmentOutlined,
  BankOutlined,
  FileImageOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import { Card, CardContent } from '@/shared/components/ui/card';

export interface Step {
  id: number;
  title: string;
  icon: React.ReactNode;
}

interface StepperProgressProps {
  currentStep: number;
  steps: Step[];
}

export const StepperProgress: React.FC<StepperProgressProps> = ({ currentStep, steps }) => {
  return (
    <Card className="mb-6" style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
      <CardContent className="p-4">
      {/* Desktop Horizontal Stepper */}
      <div className="hidden lg:flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
            <React.Fragment key={step.id}>
              {/* Step Item */}
              <div className="flex flex-col items-center flex-1">
                {/* Icon Circle */}
                <div
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-300
                    ${
                      isCompleted
                        ? 'bg-success text-white shadow-lg'
                        : isActive
                        ? 'gradient-primary text-white shadow-lg scale-110'
                        : 'bg-muted text-muted-foreground'
                    }
                  `}
                >
                  {isCompleted ? <CheckCircleFilled /> : step.icon}
                </div>

                {/* Step Label */}
                <div className="mt-2 text-center">
                  <div
                    className={`
                      text-xs font-medium
                      ${isActive ? 'text-primary font-bold' : isCompleted ? 'text-success' : 'text-muted-foreground'}
                    `}
                  >
                    Step {step.id}
                  </div>
                  <div
                    className={`
                      text-xs mt-0.5 max-w-[80px] line-clamp-2
                      ${isActive ? 'text-foreground font-semibold' : 'text-muted-foreground'}
                    `}
                  >
                    {step.title}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-2 -mt-10">
                  <div
                    className={`
                      h-full transition-all duration-500
                      ${isCompleted ? 'bg-success' : 'bg-border'}
                    `}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile Vertical Stepper */}
      <div className="lg:hidden space-y-3">
        {steps.map((step) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
            <div
              key={step.id}
              className={`
                flex items-center gap-3 p-2 rounded-lg transition-all duration-300
                ${isActive ? 'bg-primary/10 border border-primary/30' : ''}
              `}
            >
              {/* Icon */}
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                  ${
                    isCompleted
                      ? 'bg-success text-white'
                      : isActive
                      ? 'gradient-primary text-white'
                      : 'bg-muted text-muted-foreground'
                  }
                `}
              >
                {isCompleted ? <CheckCircleFilled /> : step.icon}
              </div>

              {/* Text */}
              <div className="flex-1">
                <div
                  className={`
                    text-xs font-medium
                    ${isActive ? 'text-primary font-bold' : isCompleted ? 'text-success' : 'text-muted-foreground'}
                  `}
                >
                  Step {step.id}
                </div>
                <div
                  className={`
                    text-sm
                    ${isActive ? 'text-foreground font-semibold' : 'text-muted-foreground'}
                  `}
                >
                  {step.title}
                </div>
              </div>

              {/* Status Indicator */}
              {isCompleted && (
                <CheckCircleFilled className="text-success text-lg" />
              )}
            </div>
          );
        })}
      </div>
      </CardContent>
    </Card>
  );
};

// Export step configurations
export const APPLICATION_STEPS: Step[] = [
  { id: 1, title: 'Personal Details', icon: <UserOutlined /> },
  { id: 2, title: 'Family Details', icon: <TeamOutlined /> },
  { id: 3, title: 'Category Details', icon: <TagsOutlined /> },
  { id: 4, title: 'Qualifying Exam', icon: <FileDoneOutlined /> },
  { id: 5, title: 'HSC Details', icon: <BookOutlined /> },
  { id: 6, title: 'SSC Details', icon: <ReadOutlined /> },
  { id: 7, title: 'Additional Info', icon: <InfoCircleOutlined /> },
  { id: 8, title: 'Address Details', icon: <EnvironmentOutlined /> },
  { id: 9, title: 'Bank Details', icon: <BankOutlined /> },
  { id: 10, title: 'Document Upload', icon: <FileImageOutlined /> },
  { id: 11, title: 'Preview & Submit', icon: <EyeOutlined /> },
];
