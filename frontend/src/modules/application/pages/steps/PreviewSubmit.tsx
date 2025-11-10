/**
 * Step 10: Preview & Submit - Unified UI with shadcn/ui
 * Review all entered information before final submission
 */

import React from 'react';
import { EyeOutlined, EditOutlined, CheckCircleFilled } from '@ant-design/icons';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { setCurrentStep, markApplicationComplete } from '../../store/applicationSlice';
import { useNavigate } from 'react-router-dom';

interface SectionPreviewProps {
  title: string;
  stepNumber: number;
  data: Record<string, any>;
  onEdit: () => void;
}

const SectionPreview: React.FC<SectionPreviewProps> = ({ title, data, onEdit }) => {
  const hasData = data && Object.keys(data).length > 0;

  if (!hasData) {
    return (
      <div className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-error)' }}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold" style={{ color: 'var(--color-foreground)' }}>{title}</h3>
            <p className="text-xs mt-1" style={{ color: 'var(--color-muted-foreground)' }}>This section is incomplete</p>
          </div>
          <Button size="sm" variant="outline" onClick={onEdit}>
            <EditOutlined className="mr-2" />
            Fill Now
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <CheckCircleFilled style={{ color: 'var(--color-success)' }} />
          <h3 className="text-sm font-semibold" style={{ color: 'var(--color-foreground)' }}>{title}</h3>
        </div>
        <Button size="sm" variant="outline" onClick={onEdit}>
          <EditOutlined className="mr-2" />
          Edit
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {Object.entries(data).map(([key, value]) => {
          if (!value || typeof value === 'object') return null;
          const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
          return (
            <div key={key} className="text-xs">
              <span style={{ color: 'var(--color-muted-foreground)' }}>{label}:</span>
              <span className="ml-2 font-medium" style={{ color: 'var(--color-foreground)' }}>{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PreviewSubmit: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const applicationState = useAppSelector((state) => state.application);
  const [agreedToTerms, setAgreedToTerms] = React.useState(false);
  const [agreedToDeclaration, setAgreedToDeclaration] = React.useState(false);

  const handleEdit = (step: number) => {
    dispatch(setCurrentStep(step));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = () => {
    if (!agreedToTerms || !agreedToDeclaration) {
      alert('Please agree to all terms and declarations before submitting.');
      return;
    }

    // Generate application ID
    const appId = `CAP2025${Date.now().toString().slice(-8)}`;

    // Mark application as complete
    dispatch(markApplicationComplete({ applicationId: appId }));

    // Navigate to success page
    alert(`Application submitted successfully! Your Application ID is: ${appId}`);
    navigate('/candidate/dashboard');
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
          <EyeOutlined className="text-lg text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Preview & Submit</h2>
          <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>Review your application before final submission</p>
        </div>
      </div>

      {/* Application Preview Alert */}
      <div className="p-4 rounded-lg border-l-4" style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-primary)' }}>
        <p className="text-sm" style={{ color: 'var(--color-foreground)' }}>
          <strong>Please Review:</strong> Check all information carefully. After submission, you cannot modify your application.
          If any section is incomplete, click the "Edit" button to complete it.
        </p>
      </div>

      {/* Application Sections Preview - Large Section */}
      <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <EyeOutlined className="text-lg text-white" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Application Summary</h3>
          </div>

          <div className="space-y-4">
            <SectionPreview
              title="Step 1: Personal Details"
              stepNumber={1}
              data={applicationState.personalDetails}
              onEdit={() => handleEdit(1)}
            />

            <SectionPreview
              title="Step 2: Family Details"
              stepNumber={2}
              data={applicationState.familyDetails}
              onEdit={() => handleEdit(2)}
            />

            <SectionPreview
              title="Step 3: Category Details"
              stepNumber={3}
              data={applicationState.categoryDetails}
              onEdit={() => handleEdit(3)}
            />

            <SectionPreview
              title="Step 4: Qualifying Exam Details"
              stepNumber={4}
              data={applicationState.qualifyingExamDetails}
              onEdit={() => handleEdit(4)}
            />

            <SectionPreview
              title="Step 5: HSC Details"
              stepNumber={5}
              data={applicationState.hscDetails}
              onEdit={() => handleEdit(5)}
            />

            <SectionPreview
              title="Step 6: SSC Details"
              stepNumber={6}
              data={applicationState.sscDetails}
              onEdit={() => handleEdit(6)}
            />

            <SectionPreview
              title="Step 7: Additional Details"
              stepNumber={7}
              data={applicationState.additionalDetails}
              onEdit={() => handleEdit(7)}
            />

            <SectionPreview
              title="Step 8: Address Details"
              stepNumber={8}
              data={applicationState.addressDetails}
              onEdit={() => handleEdit(8)}
            />

            <SectionPreview
              title="Step 9: Bank Details"
              stepNumber={9}
              data={applicationState.bankDetails}
              onEdit={() => handleEdit(9)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Terms and Conditions - Large Section */}
      <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Terms & Conditions</h3>
          </div>

          <div className="space-y-3">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-4 h-4 mt-1"
                style={{ accentColor: 'var(--color-primary)' }}
              />
              <span className="text-sm" style={{ color: 'var(--color-foreground)' }}>
                I agree to the{' '}
                <a href="#" className="underline" style={{ color: 'var(--color-primary)' }}>
                  Terms and Conditions
                </a>{' '}
                of CAP 2025 admission process.
              </span>
            </label>

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedToDeclaration}
                onChange={(e) => setAgreedToDeclaration(e.target.checked)}
                className="w-4 h-4 mt-1"
                style={{ accentColor: 'var(--color-primary)' }}
              />
              <span className="text-sm" style={{ color: 'var(--color-foreground)' }}>
                I hereby declare that all the information provided by me in this application is true and correct
                to the best of my knowledge. I understand that if any information is found to be false or incorrect,
                my candidature/admission will be cancelled immediately.
              </span>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Final Submit Button */}
      <Card style={{ background: 'var(--gradient-primary)', borderColor: 'transparent' }}>
        <CardContent className="pt-6 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Ready to Submit?</h3>
          <p className="text-sm text-white/90 mb-4">
            Once submitted, you cannot make any changes to your application.
          </p>
          <Button
            size="lg"
            disabled={!agreedToTerms || !agreedToDeclaration}
            onClick={handleSubmit}
            className="font-bold px-8"
            style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}
          >
            Submit Application
          </Button>
        </CardContent>
      </Card>

      {/* Help Text */}
      <div className="text-center text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
        Having trouble? Contact helpline: +91-9322083443 or email: cap2025@education.gov.in
      </div>
    </div>
  );
};

export default PreviewSubmit;
