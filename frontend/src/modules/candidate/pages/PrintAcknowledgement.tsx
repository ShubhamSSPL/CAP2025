/**
 * Print Acknowledgement
 * Short acknowledgement receipt of application submission
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrinterOutlined, ArrowLeftOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { useAppSelector } from '@/shared/store/store';

export const PrintAcknowledgement: React.FC = () => {
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
          @page {
            margin: 20mm;
          }
        }
      `}</style>

      <div className="min-h-screen relative overflow-hidden">
        {/* Background - No print */}
        <div className="absolute inset-0 no-print" style={{ background: 'var(--gradient-hero)' }}></div>
        <div className="absolute inset-0 no-print bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2aDI0djI0SDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:py-0 print:px-4">
          {/* Action Buttons - Hidden on print */}
          <div className="mb-6 flex items-center justify-between no-print">
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeftOutlined className="mr-2" />
              Back to Dashboard
            </Button>
            <Button onClick={handlePrint}>
              <PrinterOutlined className="mr-2" />
              Print Acknowledgement
            </Button>
          </div>

          {/* Printable Content */}
          <Card
            className="print-container print:shadow-none"
            style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}
          >
            <CardContent className="p-8 print:p-6">
              {/* Header with Success Icon */}
              <div className="text-center mb-8 print:mb-6">
                <div className="flex justify-center mb-4">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center print:w-16 print:h-16"
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    <CheckCircleOutlined className="text-4xl text-white print:text-3xl" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold mb-2 print:text-2xl" style={{ color: 'var(--color-foreground)' }}>
                  Application Acknowledgement
                </h1>
                <p className="text-lg print:text-base" style={{ color: 'var(--color-muted-foreground)' }}>
                  Maharashtra Pharmacy Admissions - CAP 2025
                </p>
              </div>

              {/* Success Message */}
              <div className="mb-8 p-6 rounded-lg text-center print:mb-6 print:p-4" style={{ backgroundColor: 'var(--color-muted)' }}>
                <CheckCircleOutlined className="text-4xl mb-3 print:text-3xl" style={{ color: 'var(--color-success)' }} />
                <h2 className="text-xl font-bold mb-2 print:text-lg" style={{ color: 'var(--color-success)' }}>
                  Application Successfully Submitted!
                </h2>
                <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                  Your application for CAP 2025 has been received and is being processed.
                </p>
              </div>

              {/* Application Details */}
              <div className="space-y-6 print:space-y-4">
                {/* Application ID - Prominent */}
                <div className="p-6 rounded-lg border-2 print:p-4" style={{ borderColor: 'var(--color-primary)', backgroundColor: 'var(--color-muted)' }}>
                  <div className="text-center">
                    <p className="text-sm font-medium mb-2" style={{ color: 'var(--color-muted-foreground)' }}>
                      Application ID
                    </p>
                    <p
                      className="text-3xl font-bold font-mono tracking-wider print:text-2xl"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {applicationState.applicationId || 'N/A'}
                    </p>
                  </div>
                </div>

                {/* Candidate Details */}
                <div>
                  <h3 className="text-lg font-bold mb-4 pb-2 border-b print:text-base print:mb-3" style={{ color: 'var(--color-foreground)', borderColor: 'var(--color-border)' }}>
                    Candidate Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:gap-3">
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>
                        Full Name
                      </p>
                      <p className="text-base font-medium print:text-sm" style={{ color: 'var(--color-foreground)' }}>
                        {applicationState.personalDetails?.fullName || user?.name || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>
                        Email Address
                      </p>
                      <p className="text-base font-medium print:text-sm" style={{ color: 'var(--color-foreground)' }}>
                        {applicationState.personalDetails?.email || user?.email || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>
                        Mobile Number
                      </p>
                      <p className="text-base font-medium print:text-sm" style={{ color: 'var(--color-foreground)' }}>
                        {applicationState.personalDetails?.mobileNumber || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>
                        Date of Birth
                      </p>
                      <p className="text-base font-medium print:text-sm" style={{ color: 'var(--color-foreground)' }}>
                        {applicationState.personalDetails?.dateOfBirth || 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Exam Details */}
                <div>
                  <h3 className="text-lg font-bold mb-4 pb-2 border-b print:text-base print:mb-3" style={{ color: 'var(--color-foreground)', borderColor: 'var(--color-border)' }}>
                    Qualifying Exam Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:gap-3">
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>
                        Exam Name
                      </p>
                      <p className="text-base font-medium print:text-sm" style={{ color: 'var(--color-foreground)' }}>
                        {applicationState.qualifyingExamDetails?.examName || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>
                        Roll Number
                      </p>
                      <p className="text-base font-medium print:text-sm" style={{ color: 'var(--color-foreground)' }}>
                        {applicationState.qualifyingExamDetails?.examRollNumber || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>
                        Exam Year
                      </p>
                      <p className="text-base font-medium print:text-sm" style={{ color: 'var(--color-foreground)' }}>
                        {applicationState.qualifyingExamDetails?.examYear || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>
                        Percentile
                      </p>
                      <p className="text-base font-medium print:text-sm" style={{ color: 'var(--color-foreground)' }}>
                        {applicationState.qualifyingExamDetails?.percentile || 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submission Details */}
                <div>
                  <h3 className="text-lg font-bold mb-4 pb-2 border-b print:text-base print:mb-3" style={{ color: 'var(--color-foreground)', borderColor: 'var(--color-border)' }}>
                    Submission Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:gap-3">
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>
                        Submitted On
                      </p>
                      <p className="text-base font-medium print:text-sm" style={{ color: 'var(--color-foreground)' }}>
                        {applicationState.submittedAt
                          ? new Date(applicationState.submittedAt).toLocaleDateString('en-IN', {
                              day: '2-digit',
                              month: 'long',
                              year: 'numeric',
                            })
                          : 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>
                        Submission Time
                      </p>
                      <p className="text-base font-medium print:text-sm" style={{ color: 'var(--color-foreground)' }}>
                        {applicationState.submittedAt
                          ? new Date(applicationState.submittedAt).toLocaleTimeString('en-IN', {
                              hour: '2-digit',
                              minute: '2-digit',
                              second: '2-digit',
                            })
                          : 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>
                        Application Status
                      </p>
                      <p className="text-base font-medium print:text-sm" style={{ color: 'var(--color-success)' }}>
                        ✓ Successfully Submitted
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>
                        Category
                      </p>
                      <p className="text-base font-medium print:text-sm" style={{ color: 'var(--color-foreground)' }}>
                        {applicationState.categoryDetails?.category || 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Instructions */}
              <div className="mt-8 p-6 rounded-lg print:mt-6 print:p-4" style={{ backgroundColor: 'var(--color-muted)', borderLeft: '4px solid var(--color-primary)' }}>
                <h3 className="text-base font-bold mb-3" style={{ color: 'var(--color-foreground)' }}>
                  Important Instructions
                </h3>
                <ul className="text-sm space-y-2" style={{ color: 'var(--color-muted-foreground)' }}>
                  <li>• Keep this acknowledgement safe for future reference</li>
                  <li>• Use your Application ID for all future communications</li>
                  <li>• Check your email regularly for updates on your application status</li>
                  <li>• You will be notified about further admission process via email/SMS</li>
                  <li>• Keep scanned copies of all uploaded documents for verification</li>
                  <li>• For any queries, contact the helpdesk with your Application ID</li>
                </ul>
              </div>

              {/* Footer with Barcode Placeholder */}
              <div className="mt-8 pt-6 border-t text-center print:mt-6 print:pt-4" style={{ borderColor: 'var(--color-border)' }}>
                {/* Barcode Placeholder */}
                <div className="flex justify-center mb-4">
                  <div className="border-2 border-dashed px-8 py-4 rounded" style={{ borderColor: 'var(--color-border)' }}>
                    <svg width="200" height="60" className="print:w-40 print:h-12">
                      {/* Simple barcode-like pattern */}
                      <rect x="0" y="0" width="6" height="60" fill="black" />
                      <rect x="8" y="0" width="3" height="60" fill="black" />
                      <rect x="13" y="0" width="6" height="60" fill="black" />
                      <rect x="21" y="0" width="3" height="60" fill="black" />
                      <rect x="26" y="0" width="6" height="60" fill="black" />
                      <rect x="34" y="0" width="3" height="60" fill="black" />
                      <rect x="39" y="0" width="6" height="60" fill="black" />
                      <rect x="47" y="0" width="3" height="60" fill="black" />
                      <rect x="52" y="0" width="6" height="60" fill="black" />
                      <rect x="60" y="0" width="3" height="60" fill="black" />
                      <rect x="65" y="0" width="6" height="60" fill="black" />
                      <rect x="73" y="0" width="3" height="60" fill="black" />
                      <rect x="78" y="0" width="6" height="60" fill="black" />
                      <rect x="86" y="0" width="3" height="60" fill="black" />
                      <rect x="91" y="0" width="6" height="60" fill="black" />
                    </svg>
                    <p className="text-xs mt-2 font-mono" style={{ color: 'var(--color-muted-foreground)' }}>
                      {applicationState.applicationId || 'N/A'}
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                  <p className="font-semibold mb-2">For queries, contact:</p>
                  <p>📞 +91-9175108612 | ✉️ cetcell.technicaledu@gmail.com</p>
                  <p className="text-xs mt-2">Available: Monday - Saturday, 10:00 AM - 6:00 PM</p>
                </div>

                {/* Disclaimer */}
                <div className="mt-6 text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
                  <p>
                    This is a computer-generated acknowledgement and does not require a signature.
                    Please verify all details and contact us immediately if you find any discrepancies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help Text - No print */}
          <div className="mt-6 text-center text-sm no-print" style={{ color: 'var(--color-muted-foreground)' }}>
            <p>
              Keep a printed or digital copy of this acknowledgement. You may need it during the admission process.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintAcknowledgement;
