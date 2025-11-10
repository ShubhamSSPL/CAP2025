import { Input, Label, Card, CardContent } from '@/shared/components/ui';
/**
 * Step 2: Family Details - Unified UI with shadcn/ui
 * Parent and guardian information form
 */

import React from 'react';
import { TeamOutlined, DollarOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { updateFamilyDetails } from '../../store/applicationSlice';

const FamilyDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const familyDetails = useAppSelector((state) => state.application.familyDetails);

  const handleChange = (field: string, value: string) => {
    dispatch(updateFamilyDetails({
      ...familyDetails,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
          <TeamOutlined className="text-lg text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Family Details</h2>
          <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>Parent and guardian information</p>
        </div>
      </div>

      {/* Family Information - Large Section */}
      <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <TeamOutlined className="text-lg text-white" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Family Information</h3>
          </div>

          <div className="space-y-6">
            {/* Father Details */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Father's Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fatherName">Father's Name (English) *</Label>
                  <Input
                    id="fatherName"
                    placeholder="Enter father's name"
                    value={familyDetails?.fatherName || ''}
                    onChange={(e) => handleChange('fatherName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fatherNameMarathi">Father's Name (Marathi)</Label>
                  <Input
                    id="fatherNameMarathi"
                    placeholder="वडिलांचे नाव"
                    value={familyDetails?.fatherNameMarathi || ''}
                    onChange={(e) => handleChange('fatherNameMarathi', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fatherOccupation">Occupation *</Label>
                  <Input
                    id="fatherOccupation"
                    placeholder="Enter occupation"
                    value={familyDetails?.fatherOccupation || ''}
                    onChange={(e) => handleChange('fatherOccupation', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fatherIncome">Annual Income *</Label>
                  <Input
                    id="fatherIncome"
                    placeholder="Enter annual income"
                    value={familyDetails?.fatherIncome || ''}
                    onChange={(e) => handleChange('fatherIncome', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Mother Details */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Mother's Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="motherName">Mother's Name (English) *</Label>
                  <Input
                    id="motherName"
                    placeholder="Enter mother's name"
                    value={familyDetails?.motherName || ''}
                    onChange={(e) => handleChange('motherName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="motherNameMarathi">Mother's Name (Marathi)</Label>
                  <Input
                    id="motherNameMarathi"
                    placeholder="आईचे नाव"
                    value={familyDetails?.motherNameMarathi || ''}
                    onChange={(e) => handleChange('motherNameMarathi', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="motherOccupation">Occupation *</Label>
                  <Input
                    id="motherOccupation"
                    placeholder="Enter occupation"
                    value={familyDetails?.motherOccupation || ''}
                    onChange={(e) => handleChange('motherOccupation', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="motherIncome">Annual Income *</Label>
                  <Input
                    id="motherIncome"
                    placeholder="Enter annual income"
                    value={familyDetails?.motherIncome || ''}
                    onChange={(e) => handleChange('motherIncome', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Guardian Details */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Guardian Details (If Applicable)</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="guardianName">Guardian Name</Label>
                  <Input
                    id="guardianName"
                    placeholder="Enter guardian name"
                    value={familyDetails?.guardianName || ''}
                    onChange={(e) => handleChange('guardianName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guardianRelation">Relation</Label>
                  <Input
                    id="guardianRelation"
                    placeholder="Enter relation"
                    value={familyDetails?.guardianRelation || ''}
                    onChange={(e) => handleChange('guardianRelation', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guardianMobile">Mobile Number</Label>
                  <Input
                    id="guardianMobile"
                    placeholder="Enter mobile number"
                    value={familyDetails?.guardianMobile || ''}
                    onChange={(e) => handleChange('guardianMobile', e.target.value)}
                    maxLength={10}
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Income Certificate - Large Section */}
      <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-secondary)' }}>
              <DollarOutlined className="text-lg text-white" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Income Certificate Details</h3>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="annualFamilyIncome">Annual Family Income *</Label>
                <select
                  id="annualFamilyIncome"
                  value={familyDetails?.annualFamilyIncome || ''}
                  onChange={(e) => handleChange('annualFamilyIncome', e.target.value)}
                  className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                  style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                >
                  <option value="">Select income range</option>
                  <option value="Below 1 Lakh">Below ₹1 Lakh</option>
                  <option value="1-2.5 Lakh">₹1 - 2.5 Lakh</option>
                  <option value="2.5-5 Lakh">₹2.5 - 5 Lakh</option>
                  <option value="5-8 Lakh">₹5 - 8 Lakh</option>
                  <option value="Above 8 Lakh">Above ₹8 Lakh</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="incomeCertificateNumber">Income Certificate Number</Label>
                <Input
                  id="incomeCertificateNumber"
                  placeholder="Enter certificate number (if any)"
                  value={familyDetails?.incomeCertificateNumber || ''}
                  onChange={(e) => handleChange('incomeCertificateNumber', e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FamilyDetails;
