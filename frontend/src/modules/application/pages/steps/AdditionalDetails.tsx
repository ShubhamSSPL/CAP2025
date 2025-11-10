/**
 * Step 7: Additional Details - Unified UI with shadcn/ui
 * Extra information, achievements, emergency contact
 */

import React from 'react';
import { InfoCircleOutlined, PhoneOutlined } from '@ant-design/icons';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Card, CardContent } from '@/shared/components/ui/card';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { updateAdditionalDetails } from '../../store/applicationSlice';

const AdditionalDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const additionalDetails = useAppSelector((state) => state.application.additionalDetails);
  const [hasGap, setHasGap] = React.useState(additionalDetails?.hasGapInEducation || false);
  const [hasScholarship, setHasScholarship] = React.useState(additionalDetails?.hasScholarship || false);

  const handleChange = (field: string, value: string | boolean | string[]) => {
    const updates = { ...additionalDetails, [field]: value };
    dispatch(updateAdditionalDetails(updates));
  };

  const handleCheckboxChange = (field: string, checked: boolean) => {
    if (field === 'hasGapInEducation') {
      setHasGap(checked);
    } else if (field === 'hasScholarship') {
      setHasScholarship(checked);
    }
    handleChange(field, checked);
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
          <InfoCircleOutlined className="text-lg text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Additional Information</h2>
          <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>Extra details and preferences</p>
        </div>
      </div>

      {/* Additional Information - Large Section */}
      <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <InfoCircleOutlined className="text-lg text-white" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Personal & Academic Information</h3>
          </div>

          <div className="space-y-6">
            {/* Gap in Education */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Education Gap</h4>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasGap}
                  onChange={(e) => handleCheckboxChange('hasGapInEducation', e.target.checked)}
                  className="w-4 h-4"
                  style={{ accentColor: 'var(--color-primary)' }}
                />
                <span className="text-sm" style={{ color: 'var(--color-foreground)' }}>I have a gap in my education</span>
              </label>
              {hasGap && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="gapYears">Gap Years</Label>
                    <Input
                      id="gapYears"
                      placeholder="Enter number of years"
                      value={additionalDetails?.gapYears || ''}
                      onChange={(e) => handleChange('gapYears', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gapReason">Reason for Gap</Label>
                    <Input
                      id="gapReason"
                      placeholder="Enter reason"
                      value={additionalDetails?.gapReason || ''}
                      onChange={(e) => handleChange('gapReason', e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Hostel & Financial Aid */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Hostel & Financial Aid</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={additionalDetails?.isHostelRequired || false}
                    onChange={(e) => handleChange('isHostelRequired', e.target.checked)}
                    className="w-4 h-4"
                    style={{ accentColor: 'var(--color-primary)' }}
                  />
                  <span className="text-sm" style={{ color: 'var(--color-foreground)' }}>Hostel Accommodation Required</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasScholarship}
                    onChange={(e) => handleCheckboxChange('hasScholarship', e.target.checked)}
                    className="w-4 h-4"
                    style={{ accentColor: 'var(--color-primary)' }}
                  />
                  <span className="text-sm" style={{ color: 'var(--color-foreground)' }}>Currently Receiving Scholarship</span>
                </label>
              </div>
              {hasScholarship && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="scholarshipName">Scholarship Name</Label>
                    <Input
                      id="scholarshipName"
                      placeholder="Enter scholarship name"
                      value={additionalDetails?.scholarshipName || ''}
                      onChange={(e) => handleChange('scholarshipName', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="scholarshipAmount">Annual Amount</Label>
                    <Input
                      id="scholarshipAmount"
                      placeholder="Enter amount"
                      value={additionalDetails?.scholarshipAmount || ''}
                      onChange={(e) => handleChange('scholarshipAmount', e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Extra-Curricular & Achievements */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Extra-Curricular Activities & Achievements</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="extraCurricularActivities">Activities</Label>
                  <textarea
                    id="extraCurricularActivities"
                    placeholder="List your extra-curricular activities"
                    value={additionalDetails?.extraCurricularActivities || ''}
                    onChange={(e) => handleChange('extraCurricularActivities', e.target.value)}
                    rows={3}
                    className="flex w-full rounded-md border px-3 py-2 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="achievements">Achievements & Awards</Label>
                  <textarea
                    id="achievements"
                    placeholder="List your achievements and awards"
                    value={additionalDetails?.achievements || ''}
                    onChange={(e) => handleChange('achievements', e.target.value)}
                    rows={3}
                    className="flex w-full rounded-md border px-3 py-2 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                  />
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Personal Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="languagesKnown">Languages Known</Label>
                  <Input
                    id="languagesKnown"
                    placeholder="e.g., English, Hindi, Marathi"
                    value={additionalDetails?.languagesKnown || ''}
                    onChange={(e) => handleChange('languagesKnown', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bloodGroup">Blood Group</Label>
                  <select
                    id="bloodGroup"
                    value={additionalDetails?.bloodGroup || ''}
                    onChange={(e) => handleChange('bloodGroup', e.target.value)}
                    className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                  >
                    <option value="">Select blood group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact - Large Section */}
      <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-secondary)' }}>
              <PhoneOutlined className="text-lg text-white" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Emergency Contact</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="emergencyContactName">Contact Person Name *</Label>
              <Input
                id="emergencyContactName"
                placeholder="Enter name"
                value={additionalDetails?.emergencyContactName || ''}
                onChange={(e) => handleChange('emergencyContactName', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emergencyContactRelation">Relation *</Label>
              <Input
                id="emergencyContactRelation"
                placeholder="Enter relation"
                value={additionalDetails?.emergencyContactRelation || ''}
                onChange={(e) => handleChange('emergencyContactRelation', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emergencyContactNumber">Mobile Number *</Label>
              <Input
                id="emergencyContactNumber"
                placeholder="Enter mobile number"
                value={additionalDetails?.emergencyContactNumber || ''}
                onChange={(e) => handleChange('emergencyContactNumber', e.target.value)}
                maxLength={10}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdditionalDetails;
