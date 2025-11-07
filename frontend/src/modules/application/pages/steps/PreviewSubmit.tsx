/**
 * Step 10: Preview & Submit
 * Review all entered information before final submission
 */

import React from 'react';
import { Button, Checkbox, Divider } from 'antd';
import { EyeOutlined, EditOutlined, CheckCircleFilled } from '@ant-design/icons';
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
  const hasData = Object.keys(data).length > 0;

  if (!hasData) {
    return (
      <div className="bg-warning/10 border border-warning/30 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-warning-foreground">{title}</h3>
            <p className="text-xs text-muted-foreground mt-1">This section is incomplete</p>
          </div>
          <Button size="small" icon={<EditOutlined />} onClick={onEdit}>
            Fill Now
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-muted/30 rounded-lg p-4 mb-4 hover-lift">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <CheckCircleFilled className="text-success" />
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        </div>
        <Button size="small" icon={<EditOutlined />} onClick={onEdit}>
          Edit
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {Object.entries(data).map(([key, value]) => {
          if (!value || typeof value === 'object') return null;
          const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
          return (
            <div key={key} className="text-xs">
              <span className="text-muted-foreground">{label}:</span>
              <span className="ml-2 text-foreground font-medium">{value}</span>
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
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <EyeOutlined className="text-lg text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-foreground">Preview & Submit</h2>
          <p className="text-sm text-muted-foreground">Review your application before final submission</p>
        </div>
      </div>

      {/* Application Preview */}
      <div className="bg-info/10 border border-info/30 rounded-lg p-4 mb-4">
        <p className="text-sm text-info-foreground">
          <strong>Please Review:</strong> Check all information carefully. After submission, you cannot modify your application.
          If any section is incomplete, click the "Edit" button to complete it.
        </p>
      </div>

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

      <Divider />

      {/* Terms and Conditions */}
      <div className="bg-muted/30 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-foreground mb-4">Terms & Conditions</h3>
        <div className="space-y-3">
          <Checkbox
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
          >
            <span className="text-sm">
              I agree to the{' '}
              <a href="#" className="text-primary hover:underline">
                Terms and Conditions
              </a>{' '}
              of CAP 2025 admission process.
            </span>
          </Checkbox>

          <Checkbox
            checked={agreedToDeclaration}
            onChange={(e) => setAgreedToDeclaration(e.target.checked)}
          >
            <span className="text-sm">
              I hereby declare that all the information provided by me in this application is true and correct
              to the best of my knowledge. I understand that if any information is found to be false or incorrect,
              my candidature/admission will be cancelled immediately.
            </span>
          </Checkbox>
        </div>
      </div>

      {/* Final Submit Button */}
      <div className="bg-gradient-primary rounded-lg p-6 text-center">
        <h3 className="text-lg font-bold text-white mb-2">Ready to Submit?</h3>
        <p className="text-sm text-white/90 mb-4">
          Once submitted, you cannot make any changes to your application.
        </p>
        <Button
          type="primary"
          size="large"
          disabled={!agreedToTerms || !agreedToDeclaration}
          onClick={handleSubmit}
          className="bg-white text-primary hover:bg-white/90 font-bold px-8"
        >
          Submit Application
        </Button>
      </div>

      {/* Help Text */}
      <div className="text-center text-xs text-muted-foreground">
        Having trouble? Contact helpline: +91-9322083443 or email: cap2025@education.gov.in
      </div>
    </div>
  );
};

export default PreviewSubmit;
