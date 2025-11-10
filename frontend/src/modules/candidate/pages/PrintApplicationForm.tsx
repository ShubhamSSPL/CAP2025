/**
 * Print Application Form
 * Printable view of submitted application
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrinterOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { useAppSelector } from '@/shared/store/store';

interface SectionProps {
  title: string;
  data: Record<string, any>;
}

const Section: React.FC<SectionProps> = ({ title, data }) => {
  if (!data || Object.keys(data).length === 0) {
    return null;
  }

  return (
    <div className="mb-6 print:mb-4">
      <h3
        className="text-lg font-bold mb-3 pb-2 border-b print:text-base"
        style={{ color: 'var(--color-foreground)', borderColor: 'var(--color-border)' }}
      >
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 print:gap-2">
        {Object.entries(data).map(([key, value]) => {
          if (!value || typeof value === 'object' || key === 'id') return null;

          const label = key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase())
            .trim();

          return (
            <div key={key} className="text-sm print:text-xs">
              <span className="font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>
                {label}:{' '}
              </span>
              <span style={{ color: 'var(--color-foreground)' }}>{value.toString()}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const PrintApplicationForm: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.login);
  const applicationState = useAppSelector((state) => state.application);

  React.useEffect(() => {
    if (!applicationState.isCompleted) {
      navigate('/candidate/dashboard');
    }
  }, [applicationState.isCompleted, navigate]);

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    navigate('/candidate/dashboard');
  };

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-container, .print-container * {
            visibility: visible;
          }
          .print-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none !important;
          }
          .print-header {
            margin-bottom: 20px;
          }
          .print-break {
            page-break-before: always;
          }
        }
      `}</style>

      <div className="min-h-screen relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 no-print" style={{ background: 'var(--gradient-hero)' }}></div>
        <div className="absolute inset-0 no-print bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2aDI0djI0SDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:py-0 print:px-4">
          {/* Action Buttons - Hidden on print */}
          <div className="mb-6 flex items-center justify-between no-print">
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeftOutlined className="mr-2" />
              Back to Dashboard
            </Button>
            <Button onClick={handlePrint}>
              <PrinterOutlined className="mr-2" />
              Print Application
            </Button>
          </div>

          {/* Printable Content */}
          <Card
            className="print-container print:shadow-none"
            style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}
          >
            <CardContent className="p-8 print:p-6">
              {/* Header */}
              <div className="text-center mb-8 print-header print:mb-6">
                <div className="flex justify-center mb-4 no-print">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    <PrinterOutlined className="text-3xl text-white" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold mb-2 print:text-2xl" style={{ color: 'var(--color-foreground)' }}>
                  CAP 2025 Application Form
                </h1>
                <p className="text-lg print:text-base" style={{ color: 'var(--color-muted-foreground)' }}>
                  Maharashtra Pharmacy Admissions
                </p>
                <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Application ID: </span>
                      <span
                        className="font-mono font-bold text-lg print:text-base"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {applicationState.applicationId || 'N/A'}
                      </span>
                    </div>
                    <span className="hidden sm:inline" style={{ color: 'var(--color-border)' }}>|</span>
                    <div>
                      <span className="font-semibold">Submitted On: </span>
                      <span>
                        {applicationState.submittedAt
                          ? new Date(applicationState.submittedAt).toLocaleDateString('en-IN', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })
                          : 'N/A'
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Sections */}
              <div className="space-y-6 print:space-y-4">
                <Section
                  title="1. Personal Details"
                  data={applicationState.personalDetails}
                />

                <Section
                  title="2. Family Details"
                  data={applicationState.familyDetails}
                />

                <Section
                  title="3. Category Details"
                  data={applicationState.categoryDetails}
                />

                <div className="print-break">
                  <Section
                    title="4. Qualifying Examination Details"
                    data={applicationState.qualifyingExamDetails}
                  />
                </div>

                <Section
                  title="5. HSC Details"
                  data={applicationState.hscDetails}
                />

                <Section
                  title="6. SSC Details"
                  data={applicationState.sscDetails}
                />

                <div className="print-break">
                  <Section
                    title="7. Additional Details"
                    data={applicationState.additionalDetails}
                  />
                </div>

                <Section
                  title="8. Address Details"
                  data={applicationState.addressDetails}
                />

                {/* Documents Section */}
                {applicationState.documentUpload && Object.keys(applicationState.documentUpload).length > 0 && (
                  <div className="mb-6 print:mb-4">
                    <h3
                      className="text-lg font-bold mb-3 pb-2 border-b print:text-base"
                      style={{ color: 'var(--color-foreground)', borderColor: 'var(--color-border)' }}
                    >
                      9. Documents Uploaded
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 print:gap-2">
                      {Object.entries(applicationState.documentUpload).map(([key, value]) => {
                        if (!value) return null;
                        const label = key
                          .replace(/([A-Z])/g, ' $1')
                          .replace(/^./, (str) => str.toUpperCase())
                          .trim();
                        return (
                          <div key={key} className="text-sm print:text-xs">
                            <span className="font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>
                              {label}:{' '}
                            </span>
                            <span style={{ color: 'var(--color-success)' }}>✓ Uploaded</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t print:mt-6 print:pt-4" style={{ borderColor: 'var(--color-border)' }}>
                <div className="space-y-4 text-sm print:text-xs">
                  <div className="flex items-start gap-2">
                    <span className="font-bold min-w-[120px]">Declaration:</span>
                    <p style={{ color: 'var(--color-muted-foreground)' }}>
                      I hereby declare that all the information provided by me in this application is true and
                      correct to the best of my knowledge. I understand that if any information is found to be
                      false or incorrect, my candidature/admission will be cancelled immediately.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 print:mt-6">
                    <div>
                      <div className="font-semibold mb-2">Candidate's Signature</div>
                      <div className="w-48 border-b-2 border-gray-400"></div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold mb-2">Date</div>
                      <div className="w-32 border-b-2 border-gray-400 ml-auto"></div>
                    </div>
                  </div>
                </div>

                {/* Contact Info - Print only */}
                <div className="mt-6 text-center text-xs print:block hidden">
                  <p style={{ color: 'var(--color-muted-foreground)' }}>
                    For queries, contact: +91-9175108612 | cetcell.technicaledu@gmail.com
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help Text - No print */}
          <div className="mt-6 text-center text-sm no-print" style={{ color: 'var(--color-muted-foreground)' }}>
            <p>
              Keep a printed copy of this application for your records. You may need to present it during the admission process.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintApplicationForm;
