import { Button, Card, CardContent } from '@/shared/components/ui';
/**
 * Candidate Dashboard - Unified UI with shadcn/ui
 * Shows application progress with step-by-step navigation
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/shared/store/store';
import {
  UserOutlined,
  CheckCircleOutlined,
  FileTextOutlined,
  LogoutOutlined,
  ClockCircleOutlined,
  LockOutlined,
  FormOutlined,
  BookOutlined,
  BankOutlined,
  FileImageOutlined,
  EyeOutlined,
  PrinterOutlined,
} from '@ant-design/icons';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: 'completed' | 'in-progress' | 'pending' | 'locked';
  onClick: () => void;
  isLocked: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, title, description, icon, status, onClick, isLocked }) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'completed':
        return {
          label: 'Completed',
          color: 'var(--color-success)',
          bgColor: 'var(--color-muted)',
        };
      case 'in-progress':
        return {
          label: 'In Progress',
          color: 'var(--color-primary)',
          bgColor: 'var(--color-muted)',
        };
      case 'pending':
        return {
          label: 'Pending',
          color: 'var(--color-warning)',
          bgColor: 'var(--color-muted)',
        };
      case 'locked':
        return {
          label: 'Locked',
          color: 'var(--color-muted-foreground)',
          bgColor: 'var(--color-muted)',
        };
    }
  };

  const badge = getStatusBadge();

  return (
    <Card
      className={`transition-all hover:shadow-lg ${isLocked ? 'opacity-60' : 'cursor-pointer'}`}
      style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}
      onClick={!isLocked ? onClick : undefined}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: isLocked ? 'var(--color-muted)' : 'var(--color-background)',
              border: `2px solid ${isLocked ? 'var(--color-border)' : 'var(--color-primary)'}`,
            }}
          >
            {status === 'completed' ? (
              <CheckCircleOutlined className="text-2xl" style={{ color: 'var(--color-success)' }} />
            ) : isLocked ? (
              <LockOutlined className="text-2xl" style={{ color: 'var(--color-muted-foreground)' }} />
            ) : (
              <div style={{ color: 'var(--color-primary)' }}>{icon}</div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-base font-semibold" style={{ color: 'var(--color-foreground)' }}>
                Step {stepNumber}: {title}
              </h3>
              <span
                className="px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap"
                style={{ backgroundColor: badge.bgColor, color: badge.color }}
              >
                {badge.label}
              </span>
            </div>
            <p className="text-sm mb-3" style={{ color: 'var(--color-muted-foreground)' }}>
              {description}
            </p>
          </div>
        </div>
        {!isLocked ? (
          <Button variant="outline" className="w-full" onClick={onClick}>
            {status === 'completed' ? 'Review & Edit' : status === 'in-progress' ? 'Continue' : 'Start'}
          </Button>
        ) : (
          <Button disabled variant="outline" className="w-full">
            <LockOutlined className="mr-2" />
            Complete Previous Steps
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export const CandidateDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAppSelector((state) => state.login);
  const applicationState = useAppSelector((state) => state.application);

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated && !localStorage.getItem('authToken')) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/login');
  };

  // Check if a step has data
  const hasStepData = (stepData: any): boolean => {
    return stepData && Object.keys(stepData).length > 0;
  };

  // Determine step status based on data and application state
  const getStepStatus = (stepNumber: number): 'completed' | 'in-progress' | 'pending' | 'locked' => {
    // If application is completed, all steps are completed
    if (applicationState.isCompleted) return 'completed';

    switch (stepNumber) {
      case 1: // Personal, Family, Category Details (Steps 1-3 of internal form)
        const hasPersonal = hasStepData(applicationState.personalDetails);
        const hasFamily = hasStepData(applicationState.familyDetails);
        const hasCategory = hasStepData(applicationState.categoryDetails);
        if (hasPersonal && hasFamily && hasCategory) return 'completed';
        if (hasPersonal || hasFamily || hasCategory) return 'in-progress';
        return 'pending';

      case 2: // Academic Details (Steps 4-6 of internal form)
        const step1Complete = getStepStatus(1) === 'completed';
        if (!step1Complete) return 'locked';
        const hasQualifying = hasStepData(applicationState.qualifyingExamDetails);
        const hasHSC = hasStepData(applicationState.hscDetails);
        const hasSSC = hasStepData(applicationState.sscDetails);
        if (hasQualifying && hasHSC && hasSSC) return 'completed';
        if (hasQualifying || hasHSC || hasSSC) return 'in-progress';
        return 'pending';

      case 3: // Additional Details (Step 7 of internal form)
        const step2Complete = getStepStatus(2) === 'completed';
        if (!step2Complete) return 'locked';
        const hasAdditional = hasStepData(applicationState.additionalDetails);
        if (hasAdditional) return 'completed';
        return 'pending';

      case 4: // Address Details (Step 8 of internal form)
        const step3Complete = getStepStatus(3) === 'completed';
        if (!step3Complete) return 'locked';
        const hasAddress = hasStepData(applicationState.addressDetails);
        if (hasAddress) return 'completed';
        return 'pending';

      case 5: // Bank Details (Step 9 of internal form)
        const step4Complete = getStepStatus(4) === 'completed';
        if (!step4Complete) return 'locked';
        const hasBank = hasStepData(applicationState.bankDetails);
        if (hasBank) return 'completed';
        return 'pending';

      case 6: // Document Upload (Step 10 of internal form)
        const step5Complete = getStepStatus(5) === 'completed';
        if (!step5Complete) return 'locked';
        const hasDocuments = hasStepData(applicationState.documentUpload);
        if (hasDocuments) return 'completed';
        return 'pending';

      case 7: // Preview & Submit (Step 11 of internal form)
        const step6Complete = getStepStatus(6) === 'completed';
        if (!step6Complete) return 'locked';
        return applicationState.isCompleted ? 'completed' : 'pending';

      default:
        return 'locked';
    }
  };

  // Calculate overall progress percentage
  const calculateProgress = (): number => {
    if (applicationState.isCompleted) return 100;

    let completedSteps = 0;
    const totalSteps = 7;

    for (let i = 1; i <= totalSteps; i++) {
      if (getStepStatus(i) === 'completed') {
        completedSteps++;
      }
    }

    return Math.round((completedSteps / totalSteps) * 100);
  };

  const progress = calculateProgress();

  // Navigation handlers
  const handleStepClick = (stepNumber: number) => {
    const status = getStepStatus(stepNumber);
    if (status === 'locked') return;

    // Map dashboard step to internal form step
    let targetStep = 1;
    switch (stepNumber) {
      case 1:
        targetStep = 1; // Personal Details
        break;
      case 2:
        targetStep = 4; // Qualifying Exam Details
        break;
      case 3:
        targetStep = 7; // Additional Details
        break;
      case 4:
        targetStep = 8; // Address Details
        break;
      case 5:
        targetStep = 9; // Bank Details
        break;
      case 6:
        targetStep = 10; // Document Upload
        break;
      case 7:
        targetStep = 11; // Preview & Submit
        break;
    }

    navigate(`/candidate/application?step=${targetStep}`);
  };

  const steps = [
    {
      stepNumber: 1,
      title: 'Personal Details',
      description: 'Complete your personal information, family details, and category information.',
      icon: <FormOutlined className="text-2xl" />,
    },
    {
      stepNumber: 2,
      title: 'Academic Details',
      description: 'Enter your qualifying exam, HSC, SSC, and other educational qualifications.',
      icon: <BookOutlined className="text-2xl" />,
    },
    {
      stepNumber: 3,
      title: 'Additional Information',
      description: 'Provide extra-curricular activities, emergency contact, and other details.',
      icon: <FileTextOutlined className="text-2xl" />,
    },
    {
      stepNumber: 4,
      title: 'Address Details',
      description: 'Enter your permanent and correspondence address information.',
      icon: <UserOutlined className="text-2xl" />,
    },
    {
      stepNumber: 5,
      title: 'Bank Details',
      description: 'Provide your bank account information for fee refunds and scholarships.',
      icon: <BankOutlined className="text-2xl" />,
    },
    {
      stepNumber: 6,
      title: 'Document Upload',
      description: 'Upload required documents (Photo, Signature, Certificates, Marksheets).',
      icon: <FileImageOutlined className="text-2xl" />,
    },
    {
      stepNumber: 7,
      title: 'Preview & Submit',
      description: 'Review all information and submit your application for CAP 2025.',
      icon: <EyeOutlined className="text-2xl" />,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2aDI0djI0SDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        {/* Header */}
        <Card className="mb-6" style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  <UserOutlined className="text-2xl text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--color-foreground)' }}>
                    Welcome, {user?.name || 'Candidate'}!
                  </h1>
                  <p className="text-sm mb-2" style={{ color: 'var(--color-muted-foreground)' }}>
                    CAP 2025 Application Dashboard
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span style={{ color: 'var(--color-muted-foreground)' }}>
                      <strong>Application ID:</strong>{' '}
                      <span
                        className="font-mono font-bold"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {user?.applicationId || applicationState.applicationId || 'Not Generated'}
                      </span>
                    </span>
                    {applicationState.isCompleted && (
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: 'var(--color-muted)', color: 'var(--color-success)' }}
                      >
                        <CheckCircleOutlined className="mr-1" />
                        Application Submitted
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <Button onClick={handleLogout} size="sm" variant="outline">
                <LogoutOutlined className="mr-2" />
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Progress Card */}
        <Card className="mb-8" style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>
                Application Progress
              </h2>
              <span className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
                {progress}%
              </span>
            </div>
            <div className="w-full h-3 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-muted)' }}>
              <div
                className="h-full transition-all duration-500 rounded-full"
                style={{
                  width: `${progress}%`,
                  background: 'var(--gradient-primary)',
                }}
              />
            </div>
            <p className="text-sm mt-2" style={{ color: 'var(--color-muted-foreground)' }}>
              {applicationState.isCompleted
                ? 'Your application has been successfully submitted!'
                : progress === 0
                ? 'Start your application by completing Step 1'
                : `Keep going! Complete all steps to submit your application.`}
            </p>
          </CardContent>
        </Card>

        {/* Application Submitted - Print Notice */}
        {applicationState.isCompleted && (
          <Card className="mb-8" style={{ backgroundColor: 'var(--color-muted)', borderLeft: '4px solid var(--color-success)' }}>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    <CheckCircleOutlined className="text-2xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-foreground)' }}>
                      Application Successfully Submitted!
                    </h3>
                    <p className="text-sm mb-2" style={{ color: 'var(--color-muted-foreground)' }}>
                      Your application has been submitted successfully. You can now print your application form and acknowledgement.
                    </p>
                    <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
                      Keep printed copies of both documents. You may need to present them during the admission process.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => navigate('/candidate/print-acknowledgement')}
                    size="lg"
                    className="whitespace-nowrap flex-1"
                    variant="outline"
                  >
                    <PrinterOutlined className="mr-2" />
                    Print Acknowledgement
                  </Button>
                  <Button
                    onClick={() => navigate('/candidate/print-application')}
                    size="lg"
                    className="whitespace-nowrap flex-1"
                  >
                    <PrinterOutlined className="mr-2" />
                    Print Full Application
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Important Notice */}
        {!applicationState.isCompleted && (
          <Card className="mb-8" style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-primary)' }}>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <ClockCircleOutlined className="text-xl flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                <div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-foreground)' }}>
                    Important Instructions
                  </h3>
                  <ul className="text-xs space-y-1" style={{ color: 'var(--color-muted-foreground)' }}>
                    <li>• Complete all steps in sequence to unlock the next step</li>
                    <li>• You can save your progress and continue later</li>
                    <li>• Ensure all information is accurate before final submission</li>
                    <li>• Keep scanned copies of all required documents ready (max 2MB each)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Application Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {steps.map((step) => {
            const status = getStepStatus(step.stepNumber);
            return (
              <StepCard
                key={step.stepNumber}
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
                icon={step.icon}
                status={status}
                onClick={() => handleStepClick(step.stepNumber)}
                isLocked={status === 'locked'}
              />
            );
          })}
        </div>

        {/* Help Section */}
        <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-foreground)' }}>
              Need Help?
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--color-muted-foreground)' }}>
              Contact our support team for any assistance with your application.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a href="tel:+919175108612" className="font-medium hover:underline" style={{ color: 'var(--color-primary)' }}>
                📞 +91-9175108612
              </a>
              <span className="hidden sm:inline" style={{ color: 'var(--color-border)' }}>|</span>
              <a href="mailto:cetcell.technicaledu@gmail.com" className="font-medium hover:underline" style={{ color: 'var(--color-primary)' }}>
                ✉️ cetcell.technicaledu@gmail.com
              </a>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-muted-foreground)' }}>
              Available: Monday - Saturday, 10:00 AM - 6:00 PM
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CandidateDashboard;
