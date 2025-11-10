/**
 * Application Form - Unified UI with shadcn/ui
 * 10-step application form with navigation
 */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeftOutlined, RightOutlined, SaveOutlined } from '@ant-design/icons';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { nextStep, previousStep } from '../store/applicationSlice';
import { StepperProgress, APPLICATION_STEPS } from '../components/StepperProgress';

// Import step components
import PersonalDetails from './steps/PersonalDetails';
import FamilyDetails from './steps/FamilyDetails';
import CategoryDetails from './steps/CategoryDetails';
import QualifyingExamDetails from './steps/QualifyingExamDetails';
import HSCDetails from './steps/HSCDetails';
import SSCDetails from './steps/SSCDetails';
import AdditionalDetails from './steps/AdditionalDetails';
import AddressDetails from './steps/AddressDetails';
import DocumentUpload from './steps/DocumentUpload';
import PreviewSubmit from './steps/PreviewSubmit';

const ApplicationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentStep = useAppSelector((state) => state.application.currentStep);
  const loginState = useAppSelector((state) => state.login);

  // Check authentication - check both Redux state and localStorage token
  useEffect(() => {
    const hasToken = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    const isAuthenticated = loginState?.isAuthenticated || hasToken;

    if (!isAuthenticated) {
      console.warn('Not authenticated, redirecting to login...');
      navigate('/login');
    }
  }, [loginState, navigate]);

  // Render the current step component
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <FamilyDetails />;
      case 3:
        return <CategoryDetails />;
      case 4:
        return <QualifyingExamDetails />;
      case 5:
        return <HSCDetails />;
      case 6:
        return <SSCDetails />;
      case 7:
        return <AdditionalDetails />;
      case 8:
        return <AddressDetails />;
      case 9:
        return <DocumentUpload />;
      case 10:
        return <PreviewSubmit />;
      default:
        return <PersonalDetails />;
    }
  };

  const handleNext = () => {
    dispatch(nextStep());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    dispatch(previousStep());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSave = () => {
    // Save progress to localStorage or backend
    console.log('Saving progress...');
    // Show success message
  };

  return (
    <div className="min-h-screen p-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto animate-fade-in">
        {/* Header */}
        <Card className="mb-6" style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-xl md:text-2xl font-bold" style={{ color: 'var(--color-foreground)' }}>CAP 2025 Application Form</h1>
                <p className="text-sm mt-1" style={{ color: 'var(--color-muted-foreground)' }}>
                  Complete all steps to submit your application
                </p>
              </div>
              <Button variant="outline" onClick={handleSave}>
                <SaveOutlined className="mr-2" />
                Save Progress
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stepper */}
        <StepperProgress currentStep={currentStep} steps={APPLICATION_STEPS} />

        {/* Step Content */}
        <Card className="mb-6" style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
          <CardContent className="p-4 md:p-6">
            {renderStepContent()}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                size="lg"
              >
                <LeftOutlined className="mr-2" />
                Previous
              </Button>

              <div className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                Step {currentStep} of 10
              </div>

              {currentStep < 10 ? (
                <Button onClick={handleNext} size="lg">
                  Save & Continue
                  <RightOutlined className="ml-2" />
                </Button>
              ) : (
                <Button onClick={handleNext} size="lg">
                  Submit Application
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplicationForm;
