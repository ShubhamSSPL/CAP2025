import { Button, Input, Label, Card, CardContent } from '@/shared/components/ui';
/**
 * Exam Details Validation Page
 * Unified design with shadcn/ui components
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RocketOutlined, CheckCircleFilled } from '@ant-design/icons';
import FormContainer from '@/shared/components/FormContainer';

const ExamDetailsValidation: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    appearedForMHTCET: '',
    appearedForNEET: '',
    isForeignNational: '',
    qualifyingExam: '',
    cetApplicationNumber: '',
    cetRollNumber: '',
    cetDOB: '',
  });
  const [candidateDetails, setCandidateDetails] = useState<any>(null);

  const handleValidate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const mockData = {
      candidateName: 'TEST CANDIDATE',
      physicsMarks: '95',
      chemistryMarks: '92',
      mathsMarks: '88',
      totalMarks: '275',
      percentile: '98.45',
    };

    setCandidateDetails(mockData);
    setValidated(true);
    setLoading(false);

    localStorage.setItem('examDetails', JSON.stringify({ ...formData, ...mockData }));
  };

  return (
    <FormContainer
      title="Validate Exam Details"
      description="Enter your MHT-CET/NEET exam details to proceed"
      icon={<RocketOutlined className="text-3xl text-white" />}
      maxWidth="2xl"
    >
      {!validated ? (
        <form onSubmit={handleValidate} className="space-y-3">
          {/* MHT-CET Question */}
          <div className="space-y-2">
            <Label>Have you appeared for MHT-CET 2025?</Label>
            <div className="flex gap-4">
              {['yes', 'no'].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="appearedForMHTCET"
                    value={option}
                    checked={formData.appearedForMHTCET === option}
                    onChange={(e) => setFormData({ ...formData, appearedForMHTCET: e.target.value })}
                    className="w-4 h-4"
                    style={{ accentColor: 'var(--color-primary)' }}
                    required
                  />
                  <span className="text-sm capitalize" style={{ color: 'var(--color-foreground)' }}>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* NEET Question */}
          <div className="space-y-2">
            <Label>Have you appeared for NEET 2025?</Label>
            <div className="flex gap-4">
              {['yes', 'no'].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="appearedForNEET"
                    value={option}
                    checked={formData.appearedForNEET === option}
                    onChange={(e) => setFormData({ ...formData, appearedForNEET: e.target.value })}
                    className="w-4 h-4"
                    style={{ accentColor: 'var(--color-primary)' }}
                    required
                  />
                  <span className="text-sm capitalize" style={{ color: 'var(--color-foreground)' }}>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Qualifying Exam */}
          <div className="space-y-2">
            <Label>Qualifying Exam</Label>
            <div className="space-y-2">
              {[
                { value: 'HSC', label: 'HSC (12th Standard)' },
                { value: 'Diploma', label: 'Diploma in Pharmacy' },
                { value: 'BSc', label: 'B.Sc.' }
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="qualifyingExam"
                    value={option.value}
                    checked={formData.qualifyingExam === option.value}
                    onChange={(e) => setFormData({ ...formData, qualifyingExam: e.target.value })}
                    className="w-4 h-4"
                    style={{ accentColor: 'var(--color-primary)' }}
                    required
                  />
                  <span className="text-sm" style={{ color: 'var(--color-foreground)' }}>{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* CET Details */}
          {formData.appearedForMHTCET === 'yes' && (
            <Card style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-border)' }}>
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-semibold" style={{ color: 'var(--color-primary)' }}>MHT-CET Details</h3>

                <div className="space-y-2">
                  <Label htmlFor="cetAppNo">Application Number (9 digits)</Label>
                  <Input
                    id="cetAppNo"
                    placeholder="Enter 9-digit application number"
                    maxLength={9}
                    value={formData.cetApplicationNumber}
                    onChange={(e) => setFormData({ ...formData, cetApplicationNumber: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cetRoll">Roll Number (10 digits)</Label>
                  <Input
                    id="cetRoll"
                    placeholder="Enter 10-digit roll number"
                    maxLength={10}
                    value={formData.cetRollNumber}
                    onChange={(e) => setFormData({ ...formData, cetRollNumber: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cetDOB">Date of Birth</Label>
                  <Input
                    id="cetDOB"
                    type="date"
                    value={formData.cetDOB}
                    onChange={(e) => setFormData({ ...formData, cetDOB: e.target.value })}
                    required
                  />
                </div>
              </CardContent>
            </Card>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Validating...' : 'Validate Exam Details'}
          </Button>
        </form>
      ) : (
        <div className="space-y-6 animate-slide-up">
          {/* Success Message */}
          <Card style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-success)' }}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircleFilled className="text-2xl" style={{ color: 'var(--color-success)' }} />
                <div>
                  <h3 className="font-semibold" style={{ color: 'var(--color-foreground)' }}>Validated Successfully!</h3>
                  <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                    Your exam details have been verified
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>Candidate Name</p>
                  <p className="font-semibold" style={{ color: 'var(--color-foreground)' }}>{candidateDetails?.candidateName}</p>
                </div>
                <div>
                  <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>Physics Marks</p>
                  <p className="font-semibold" style={{ color: 'var(--color-foreground)' }}>{candidateDetails?.physicsMarks}</p>
                </div>
                <div>
                  <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>Chemistry Marks</p>
                  <p className="font-semibold" style={{ color: 'var(--color-foreground)' }}>{candidateDetails?.chemistryMarks}</p>
                </div>
                <div>
                  <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>Mathematics Marks</p>
                  <p className="font-semibold" style={{ color: 'var(--color-foreground)' }}>{candidateDetails?.mathsMarks}</p>
                </div>
                <div>
                  <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>Total Marks</p>
                  <p className="font-semibold" style={{ color: 'var(--color-foreground)' }}>{candidateDetails?.totalMarks}</p>
                </div>
                <div>
                  <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>Percentile</p>
                  <p className="font-semibold" style={{ color: 'var(--color-foreground)' }}>{candidateDetails?.percentile}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full" onClick={() => navigate('/registration')}>
            Proceed to Registration →
          </Button>
        </div>
      )}

      <div className="mt-6 text-center text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
        Already registered? <a href="/login" className="font-semibold hover:underline" style={{ color: 'var(--color-primary)' }}>Login here</a>
      </div>
    </FormContainer>
  );
};

export default ExamDetailsValidation;
