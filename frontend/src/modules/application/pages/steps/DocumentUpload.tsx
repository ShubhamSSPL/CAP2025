/**
 * Step 9: Document Upload - Unified UI with shadcn/ui
 * Upload all required documents (photo, signature, certificates)
 */

import React from 'react';
import { FileImageOutlined, UploadOutlined, CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { useAppDispatch } from '@/shared/store/store';
import { updateDocumentUpload } from '../../store/applicationSlice';

interface DocumentUploadItemProps {
  title: string;
  description: string;
  required: boolean;
  fileKey: string;
  accept: string;
  maxSize?: number; // in MB
}

const DocumentUploadItem: React.FC<DocumentUploadItemProps> = ({
  title,
  description,
  required,
  fileKey,
  accept,
  maxSize = 2,
}) => {
  const dispatch = useAppDispatch();
  const [file, setFile] = React.useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const isValidSize = selectedFile.size / 1024 / 1024 < maxSize;
    if (!isValidSize) {
      alert(`File must be smaller than ${maxSize}MB!`);
      setUploadStatus('error');
      return;
    }

    setFile(selectedFile);
    setUploadStatus('success');
    dispatch(updateDocumentUpload({ [fileKey]: selectedFile }));
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-border)' }}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="text-sm font-semibold flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}>
            {title}
            {required && <span className="text-xs" style={{ color: 'var(--color-error)' }}>*Required</span>}
          </h4>
          <p className="text-xs mt-1" style={{ color: 'var(--color-muted-foreground)' }}>{description}</p>
        </div>
        {uploadStatus === 'success' && (
          <CheckCircleFilled className="text-lg" style={{ color: 'var(--color-success)' }} />
        )}
        {uploadStatus === 'error' && (
          <CloseCircleFilled className="text-lg" style={{ color: 'var(--color-error)' }} />
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />

      <Button
        variant="outline"
        size="sm"
        onClick={handleButtonClick}
      >
        <UploadOutlined className="mr-2" />
        {file ? 'Change File' : 'Choose File'}
      </Button>

      {file && (
        <div className="mt-2 text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
          Selected: {file.name} ({(file.size / 1024).toFixed(2)} KB)
        </div>
      )}
    </div>
  );
};

const DocumentUpload: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
          <FileImageOutlined className="text-lg text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Document Upload</h2>
          <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>Upload all required documents (Max 2MB each)</p>
        </div>
      </div>

      {/* Upload Guidelines */}
      <div className="p-4 rounded-lg border-l-4" style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-primary)' }}>
        <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-foreground)' }}>Upload Guidelines</h4>
        <ul className="text-xs space-y-1" style={{ color: 'var(--color-muted-foreground)' }}>
          <li>• All documents must be clear and readable</li>
          <li>• File size should not exceed 2MB per document</li>
          <li>• Accepted formats: JPG, JPEG, PNG, PDF</li>
          <li>• Photograph should be recent passport-size photo with white background</li>
          <li>• Signature should be on white paper with black pen</li>
        </ul>
      </div>

      {/* Photo & Signature - Large Section */}
      <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <FileImageOutlined className="text-lg text-white" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Photo & Signature</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DocumentUploadItem
              title="Passport Size Photograph"
              description="Recent photo with white background (JPG/PNG, max 2MB)"
              required={true}
              fileKey="photograph"
              accept="image/jpeg,image/png,image/jpg"
              maxSize={2}
            />
            <DocumentUploadItem
              title="Signature"
              description="Signature on white paper (JPG/PNG, max 2MB)"
              required={true}
              fileKey="signature"
              accept="image/jpeg,image/png,image/jpg"
              maxSize={2}
            />
          </div>
        </CardContent>
      </Card>

      {/* Educational & Exam Documents - Large Section */}
      <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <FileImageOutlined className="text-lg text-white" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Educational & Exam Documents</h3>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Marksheets & Certificates</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DocumentUploadItem
                title="SSC Marksheet"
                description="10th standard marksheet (PDF/JPG, max 2MB)"
                required={true}
                fileKey="sscMarksheet"
                accept="application/pdf,image/jpeg,image/png"
                maxSize={2}
              />
              <DocumentUploadItem
                title="HSC Marksheet"
                description="12th standard marksheet (PDF/JPG, max 2MB)"
                required={true}
                fileKey="hscMarksheet"
                accept="application/pdf,image/jpeg,image/png"
                maxSize={2}
              />
              <DocumentUploadItem
                title="Leaving Certificate"
                description="School/College leaving certificate (PDF/JPG, max 2MB)"
                required={true}
                fileKey="leavingCertificate"
                accept="application/pdf,image/jpeg,image/png"
                maxSize={2}
              />
              <DocumentUploadItem
                title="MHT-CET / JEE / NEET Scorecard"
                description="Entrance exam scorecard (PDF/JPG, max 2MB)"
                required={true}
                fileKey="cetScorecard"
                accept="application/pdf,image/jpeg,image/png"
                maxSize={2}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category & Other Documents - Large Section */}
      <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-secondary)' }}>
              <FileImageOutlined className="text-lg text-white" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Category & Other Documents (If Applicable)</h3>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Category Certificates</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DocumentUploadItem
                title="Caste Certificate"
                description="Caste certificate for reserved categories (PDF/JPG)"
                required={false}
                fileKey="casteCertificate"
                accept="application/pdf,image/jpeg,image/png"
                maxSize={2}
              />
              <DocumentUploadItem
                title="Caste Validity Certificate"
                description="Caste validity certificate (PDF/JPG)"
                required={false}
                fileKey="casteValidityCertificate"
                accept="application/pdf,image/jpeg,image/png"
                maxSize={2}
              />
              <DocumentUploadItem
                title="Non-Creamy Layer Certificate"
                description="For OBC/SBC candidates (PDF/JPG)"
                required={false}
                fileKey="nonCreamyLayerCertificate"
                accept="application/pdf,image/jpeg,image/png"
                maxSize={2}
              />
              <DocumentUploadItem
                title="EWS Certificate"
                description="Economically Weaker Section certificate (PDF/JPG)"
                required={false}
                fileKey="ewsCertificate"
                accept="application/pdf,image/jpeg,image/png"
                maxSize={2}
              />
            </div>

            <h4 className="text-sm font-semibold mt-6" style={{ color: 'var(--color-muted-foreground)' }}>Other Documents</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DocumentUploadItem
                title="Domicile Certificate"
                description="Maharashtra domicile certificate (PDF/JPG)"
                required={false}
                fileKey="domicileCertificate"
                accept="application/pdf,image/jpeg,image/png"
                maxSize={2}
              />
              <DocumentUploadItem
                title="Income Certificate"
                description="Annual income certificate (PDF/JPG)"
                required={false}
                fileKey="incomeCertificate"
                accept="application/pdf,image/jpeg,image/png"
                maxSize={2}
              />
              <DocumentUploadItem
                title="Aadhar Card"
                description="Aadhar card copy (PDF/JPG)"
                required={false}
                fileKey="aadharCard"
                accept="application/pdf,image/jpeg,image/png"
                maxSize={2}
              />
              <DocumentUploadItem
                title="Disability Certificate"
                description="For differently abled candidates (PDF/JPG)"
                required={false}
                fileKey="disabilityCertificate"
                accept="application/pdf,image/jpeg,image/png"
                maxSize={2}
              />
              <DocumentUploadItem
                title="Gap Certificate"
                description="If there is gap in education (PDF/JPG)"
                required={false}
                fileKey="gapCertificate"
                accept="application/pdf,image/jpeg,image/png"
                maxSize={2}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Warning */}
      <div className="p-4 rounded-lg border-l-4" style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-error)' }}>
        <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-foreground)' }}>Important Notice</h4>
        <p className="text-xs" style={{ color: 'var(--color-foreground)' }}>
          Uploading fake or tampered documents will lead to immediate cancellation of your application and may result in legal action. Please ensure all documents are genuine and match the information provided in the form.
        </p>
      </div>
    </div>
  );
};

export default DocumentUpload;
