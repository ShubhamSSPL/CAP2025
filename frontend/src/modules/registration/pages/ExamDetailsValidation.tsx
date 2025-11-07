/**
 * Exam Details Validation Page
 * First step before registration - validates MHT-CET/NEET/JEE details
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Radio, DatePicker, Button, message, Alert } from 'antd';
import { CheckCircleFilled, RocketOutlined } from '@ant-design/icons';
import type { ExamDetailsForm } from '../types/examDetails.types';
import dayjs from 'dayjs';

const ExamDetailsValidation: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [appearedForCET, setAppearedForCET] = useState<'yes' | 'no' | null>(null);
  const [appearedForNEET, setAppearedForNEET] = useState<'yes' | 'no' | null>(null);
  const [candidateDetails, setCandidateDetails] = useState<any>(null);

  const handleValidateExam = async (values: any) => {
    setLoading(true);

    try {
      // Simulate API call to validate CET/NEET details
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock validation response
      const mockCandidateData = {
        candidateName: 'TEST CANDIDATE',
        physicsMarks: '95',
        chemistryMarks: '92',
        mathsMarks: '88',
        biologyMarks: appearedForNEET === 'yes' ? '90' : undefined,
        totalMarks: appearedForNEET === 'yes' ? '365' : '275',
        percentile: '98.45',
      };

      setCandidateDetails(mockCandidateData);
      setValidated(true);

      // Save exam details to localStorage for registration
      localStorage.setItem('examDetails', JSON.stringify({
        ...values,
        ...mockCandidateData
      }));

      message.success('Exam details validated successfully!');
    } catch (error) {
      message.error('Failed to validate exam details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleProceedToRegistration = () => {
    if (!validated) {
      message.error('Please validate your exam details first');
      return;
    }
    navigate('/registration');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2aDI0djI0SDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 w-full max-w-2xl animate-slide-up">
        {/* Header Card */}
        <div className="glass-card p-6 mb-6 text-center hover-lift">
          <div className="flex justify-center mb-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center animate-float"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <RocketOutlined className="text-3xl text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-foreground)' }}>Validate Exam Details</h1>
          <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
            Enter your MHT-CET/NEET exam details to proceed with registration
          </p>
        </div>

        {/* Exam Details Form */}
        <div className="glass-card p-6 hover-glow">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleValidateExam}
            className="space-y-4"
          >
            {/* MHT-CET Appeared */}
            <Form.Item
              label={<span className="font-semibold">Have you appeared for MHT-CET 2025?</span>}
              name="appearedForMHTCET"
              rules={[{ required: true, message: 'Please select an option' }]}
            >
              <Radio.Group onChange={(e) => setAppearedForCET(e.target.value)} className="flex gap-8">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>

            {/* NEET Appeared */}
            <Form.Item
              label={<span className="font-semibold">Have you appeared for NEET 2025?</span>}
              name="appearedForNEET"
              rules={[{ required: true, message: 'Please select an option' }]}
            >
              <Radio.Group onChange={(e) => setAppearedForNEET(e.target.value)} className="flex gap-8">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>

            {/* Foreign National / NRI */}
            <Form.Item
              label={<span className="font-semibold">Are you Foreign National / NRI / PIO / OCI / CIWGC?</span>}
              name="isForeignNationalNRI"
              rules={[{ required: true, message: 'Please select an option' }]}
            >
              <Radio.Group className="flex gap-8">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>

            {/* Qualifying Exam */}
            <Form.Item
              label={<span className="font-semibold">Qualifying Exam</span>}
              name="qualifyingExam"
              rules={[{ required: true, message: 'Please select qualifying exam' }]}
            >
              <Radio.Group className="flex flex-col gap-2">
                <Radio value="HSC">HSC (12th Standard)</Radio>
                <Radio value="Diploma">Diploma in Pharmacy</Radio>
                <Radio value="BSc">B.Sc.</Radio>
              </Radio.Group>
            </Form.Item>

            {/* CET Details (shown if appeared for CET) */}
            {appearedForCET === 'yes' && (
              <div
                className="rounded-lg p-4 space-y-4 border"
                style={{
                  backgroundColor: 'var(--color-muted)',
                  borderColor: 'var(--color-border)'
                }}
              >
                <h3 className="font-semibold" style={{ color: 'var(--color-primary)' }}>MHT-CET Details</h3>

                <Form.Item
                  label="MHT-CET Application Number"
                  name="cetApplicationNumber"
                  rules={[
                    { required: true, message: 'Please enter application number' },
                    { pattern: /^\d{9}$/, message: 'Enter valid 9-digit application number' }
                  ]}
                >
                  <Input placeholder="Enter 9-digit application number" maxLength={9} size="large" />
                </Form.Item>

                <Form.Item
                  label="MHT-CET Roll Number"
                  name="cetRollNumber"
                  rules={[
                    { required: true, message: 'Please enter roll number' },
                    { pattern: /^\d{10}$/, message: 'Enter valid 10-digit roll number' }
                  ]}
                >
                  <Input placeholder="Enter 10-digit roll number" maxLength={10} size="large" />
                </Form.Item>

                <Form.Item
                  label="Date of Birth (as per MHT-CET)"
                  name="cetDOB"
                  rules={[{ required: true, message: 'Please enter DOB' }]}
                >
                  <DatePicker
                    format="DD/MM/YYYY"
                    placeholder="Select date"
                    size="large"
                    className="w-full"
                    disabledDate={(current) => current && current > dayjs().endOf('day')}
                  />
                </Form.Item>
              </div>
            )}

            {/* NEET Details (shown if appeared for NEET) */}
            {appearedForNEET === 'yes' && (
              <div
                className="rounded-lg p-4 space-y-4 border"
                style={{
                  backgroundColor: 'var(--color-muted)',
                  borderColor: 'var(--color-border)'
                }}
              >
                <h3 className="font-semibold" style={{ color: 'var(--color-success)' }}>NEET Details</h3>

                <Form.Item
                  label="NEET Application Number"
                  name="neetApplicationNumber"
                  rules={[{ required: true, message: 'Please enter application number' }]}
                >
                  <Input placeholder="Enter application number" size="large" />
                </Form.Item>

                <Form.Item
                  label="NEET Roll Number"
                  name="neetRollNumber"
                  rules={[{ required: true, message: 'Please enter roll number' }]}
                >
                  <Input placeholder="Enter roll number" size="large" />
                </Form.Item>

                <Form.Item
                  label="Date of Birth (as per NEET)"
                  name="neetDOB"
                  rules={[{ required: true, message: 'Please enter DOB' }]}
                >
                  <DatePicker
                    format="DD/MM/YYYY"
                    placeholder="Select date"
                    size="large"
                    className="w-full"
                    disabledDate={(current) => current && current > dayjs().endOf('day')}
                  />
                </Form.Item>
              </div>
            )}

            {/* Validate Button */}
            {!validated && (
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg text-base font-semibold transition-all disabled:opacity-50"
                style={{
                  background: 'var(--gradient-primary)',
                  color: 'var(--color-primary-foreground)'
                }}
              >
                {loading ? 'Validating...' : 'Validate Exam Details'}
              </button>
            )}
          </Form>

          {/* Validated Details Display */}
          {validated && candidateDetails && (
            <div className="mt-6 space-y-4 animate-slide-up">
              <Alert
                message="Exam Details Validated Successfully!"
                description="Your exam details have been verified. You can now proceed with registration."
                type="success"
                showIcon
                icon={<CheckCircleFilled />}
              />

              <div
                className="glass-card p-4 border"
                style={{
                  backgroundColor: 'var(--color-muted)',
                  borderColor: 'var(--color-border)'
                }}
              >
                <h3 className="font-semibold mb-3" style={{ color: 'var(--color-success)' }}>Validated Information</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span style={{ color: 'var(--color-muted-foreground)' }}>Candidate Name:</span>
                    <div className="font-bold" style={{ color: 'var(--color-foreground)' }}>{candidateDetails.candidateName}</div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-muted-foreground)' }}>Physics Marks:</span>
                    <div className="font-bold" style={{ color: 'var(--color-foreground)' }}>{candidateDetails.physicsMarks}</div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-muted-foreground)' }}>Chemistry Marks:</span>
                    <div className="font-bold" style={{ color: 'var(--color-foreground)' }}>{candidateDetails.chemistryMarks}</div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-muted-foreground)' }}>
                      {appearedForNEET === 'yes' ? 'Biology' : 'Mathematics'} Marks:
                    </span>
                    <div className="font-bold" style={{ color: 'var(--color-foreground)' }}>
                      {appearedForNEET === 'yes' ? candidateDetails.biologyMarks : candidateDetails.mathsMarks}
                    </div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-muted-foreground)' }}>Total Marks:</span>
                    <div className="font-bold" style={{ color: 'var(--color-foreground)' }}>{candidateDetails.totalMarks}</div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-muted-foreground)' }}>Percentile:</span>
                    <div className="font-bold" style={{ color: 'var(--color-foreground)' }}>{candidateDetails.percentile}</div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleProceedToRegistration}
                className="w-full px-4 py-3 rounded-lg text-base font-semibold transition-all"
                style={{
                  background: 'var(--gradient-primary)',
                  color: 'var(--color-primary-foreground)'
                }}
              >
                Proceed to Registration →
              </button>
            </div>
          )}
        </div>

        {/* Help Text */}
        <div
          className="text-center mt-6 text-xs glass-card p-3"
          style={{ color: 'var(--color-muted-foreground)' }}
        >
          <p>
            Already registered? <a href="/login" className="hover:underline font-semibold" style={{ color: 'var(--color-primary)' }}>Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExamDetailsValidation;
