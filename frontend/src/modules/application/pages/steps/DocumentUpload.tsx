/**
 * Step 9: Document Upload
 * Upload all required documents (photo, signature, certificates)
 */

import React from 'react';
import { Upload, Button, Row, Col, Alert } from 'antd';
import { FileImageOutlined, UploadOutlined, CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd';
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
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  const [uploadStatus, setUploadStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleChange: UploadProps['onChange'] = (info) => {
    let newFileList = [...info.fileList];
    newFileList = newFileList.slice(-1); // Keep only latest file

    setFileList(newFileList);

    if (info.file.status === 'done') {
      setUploadStatus('success');
      // In real app, upload to server and store URL
      dispatch(updateDocumentUpload({ [fileKey]: info.file.originFileObj }));
    } else if (info.file.status === 'error') {
      setUploadStatus('error');
    }
  };

  const beforeUpload = (file: File) => {
    const isValidSize = file.size / 1024 / 1024 < maxSize;
    if (!isValidSize) {
      alert(`File must be smaller than ${maxSize}MB!`);
      return false;
    }
    return false; // Prevent automatic upload (we'll handle manually)
  };

  return (
    <div className="bg-muted/30 rounded-lg p-4 hover-lift">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
            {title}
            {required && <span className="text-destructive text-xs">*Required</span>}
          </h4>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        </div>
        {uploadStatus === 'success' && (
          <CheckCircleFilled className="text-success text-lg" />
        )}
        {uploadStatus === 'error' && (
          <CloseCircleFilled className="text-destructive text-lg" />
        )}
      </div>

      <Upload
        fileList={fileList}
        onChange={handleChange}
        beforeUpload={beforeUpload}
        accept={accept}
        maxCount={1}
      >
        <Button icon={<UploadOutlined />} size="small">
          {fileList.length > 0 ? 'Change File' : 'Choose File'}
        </Button>
      </Upload>

      {fileList.length > 0 && (
        <div className="mt-2 text-xs text-muted-foreground">
          Selected: {fileList[0].name} ({(fileList[0].size! / 1024).toFixed(2)} KB)
        </div>
      )}
    </div>
  );
};

const DocumentUpload: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <FileImageOutlined className="text-lg text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-foreground">Document Upload</h2>
          <p className="text-sm text-muted-foreground">Upload all required documents (Max 2MB each)</p>
        </div>
      </div>

      {/* Upload Guidelines */}
      <Alert
        type="info"
        showIcon
        message="Upload Guidelines"
        description={
          <ul className="text-xs space-y-1 mt-2">
            <li>• All documents must be clear and readable</li>
            <li>• File size should not exceed 2MB per document</li>
            <li>• Accepted formats: JPG, JPEG, PNG, PDF</li>
            <li>• Photograph should be recent passport-size photo with white background</li>
            <li>• Signature should be on white paper with black pen</li>
          </ul>
        }
      />

      {/* Photo & Signature */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Photo & Signature</h3>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <DocumentUploadItem
              title="Passport Size Photograph"
              description="Recent photo with white background (JPG/PNG, max 2MB)"
              required={true}
              fileKey="photograph"
              accept="image/jpeg,image/png,image/jpg"
              maxSize={2}
            />
          </Col>
          <Col xs={24} md={12}>
            <DocumentUploadItem
              title="Signature"
              description="Signature on white paper (JPG/PNG, max 2MB)"
              required={true}
              fileKey="signature"
              accept="image/jpeg,image/png,image/jpg"
              maxSize={2}
            />
          </Col>
        </Row>
      </div>

      {/* Educational Documents */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Educational Documents</h3>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <DocumentUploadItem
              title="SSC Marksheet"
              description="10th standard marksheet (PDF/JPG, max 2MB)"
              required={true}
              fileKey="sscMarksheet"
              accept="application/pdf,image/jpeg,image/png"
              maxSize={2}
            />
          </Col>
          <Col xs={24} md={12}>
            <DocumentUploadItem
              title="HSC Marksheet"
              description="12th standard marksheet (PDF/JPG, max 2MB)"
              required={true}
              fileKey="hscMarksheet"
              accept="application/pdf,image/jpeg,image/png"
              maxSize={2}
            />
          </Col>
          <Col xs={24} md={12}>
            <DocumentUploadItem
              title="Leaving Certificate"
              description="School/College leaving certificate (PDF/JPG, max 2MB)"
              required={true}
              fileKey="leavingCertificate"
              accept="application/pdf,image/jpeg,image/png"
              maxSize={2}
            />
          </Col>
        </Row>
      </div>

      {/* Entrance Exam */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Entrance Exam</h3>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <DocumentUploadItem
              title="MHT-CET / JEE / NEET Scorecard"
              description="Entrance exam scorecard (PDF/JPG, max 2MB)"
              required={true}
              fileKey="cetScorecard"
              accept="application/pdf,image/jpeg,image/png"
              maxSize={2}
            />
          </Col>
        </Row>
      </div>

      {/* Category Documents */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Category Documents (If Applicable)</h3>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <DocumentUploadItem
              title="Caste Certificate"
              description="Caste certificate for reserved categories (PDF/JPG)"
              required={false}
              fileKey="casteCertificate"
              accept="application/pdf,image/jpeg,image/png"
              maxSize={2}
            />
          </Col>
          <Col xs={24} md={12}>
            <DocumentUploadItem
              title="Caste Validity Certificate"
              description="Caste validity certificate (PDF/JPG)"
              required={false}
              fileKey="casteValidityCertificate"
              accept="application/pdf,image/jpeg,image/png"
              maxSize={2}
            />
          </Col>
          <Col xs={24} md={12}>
            <DocumentUploadItem
              title="Non-Creamy Layer Certificate"
              description="For OBC/SBC candidates (PDF/JPG)"
              required={false}
              fileKey="nonCreamyLayerCertificate"
              accept="application/pdf,image/jpeg,image/png"
              maxSize={2}
            />
          </Col>
          <Col xs={24} md={12}>
            <DocumentUploadItem
              title="EWS Certificate"
              description="Economically Weaker Section certificate (PDF/JPG)"
              required={false}
              fileKey="ewsCertificate"
              accept="application/pdf,image/jpeg,image/png"
              maxSize={2}
            />
          </Col>
        </Row>
      </div>

      {/* Other Documents */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Other Documents (If Applicable)</h3>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <DocumentUploadItem
              title="Domicile Certificate"
              description="Maharashtra domicile certificate (PDF/JPG)"
              required={false}
              fileKey="domicileCertificate"
              accept="application/pdf,image/jpeg,image/png"
              maxSize={2}
            />
          </Col>
          <Col xs={24} md={12}>
            <DocumentUploadItem
              title="Income Certificate"
              description="Annual income certificate (PDF/JPG)"
              required={false}
              fileKey="incomeCertificate"
              accept="application/pdf,image/jpeg,image/png"
              maxSize={2}
            />
          </Col>
          <Col xs={24} md={12}>
            <DocumentUploadItem
              title="Aadhar Card"
              description="Aadhar card copy (PDF/JPG)"
              required={false}
              fileKey="aadharCard"
              accept="application/pdf,image/jpeg,image/png"
              maxSize={2}
            />
          </Col>
          <Col xs={24} md={12}>
            <DocumentUploadItem
              title="Disability Certificate"
              description="For differently abled candidates (PDF/JPG)"
              required={false}
              fileKey="disabilityCertificate"
              accept="application/pdf,image/jpeg,image/png"
              maxSize={2}
            />
          </Col>
          <Col xs={24} md={12}>
            <DocumentUploadItem
              title="Gap Certificate"
              description="If there is gap in education (PDF/JPG)"
              required={false}
              fileKey="gapCertificate"
              accept="application/pdf,image/jpeg,image/png"
              maxSize={2}
            />
          </Col>
        </Row>
      </div>

      {/* Warning */}
      <Alert
        type="warning"
        showIcon
        message="Important Notice"
        description="Uploading fake or tampered documents will lead to immediate cancellation of your application and may result in legal action. Please ensure all documents are genuine and match the information provided in the form."
      />
    </div>
  );
};

export default DocumentUpload;
