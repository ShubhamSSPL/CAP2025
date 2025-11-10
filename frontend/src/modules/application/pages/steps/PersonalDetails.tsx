/**
 * Step 1: Personal Details - Unified UI with shadcn/ui
 * Candidate's personal information form
 */

import React from 'react';
import { UserOutlined, MailOutlined, PhoneOutlined, IdcardOutlined } from '@ant-design/icons';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Card, CardContent } from '@/shared/components/ui/card';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { updatePersonalDetails } from '../../store/applicationSlice';

const PersonalDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const personalDetails = useAppSelector((state) => state.application.personalDetails);

  const handleChange = (field: string, value: string) => {
    dispatch(updatePersonalDetails({
      ...personalDetails,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
          <UserOutlined className="text-lg text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Personal Details</h2>
          <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>Enter your personal information as per official documents</p>
        </div>
      </div>

      {/* Personal Information - Large Section */}
      <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <UserOutlined className="text-lg text-white" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Personal Information</h3>
          </div>

          <div className="space-y-4">
            {/* Name Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name (English) *</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={personalDetails?.fullName || ''}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nameMarathi">Full Name (Marathi)</Label>
                <Input
                  id="nameMarathi"
                  placeholder="संपूर्ण नाव मराठीत"
                  value={personalDetails?.nameMarathi || ''}
                  onChange={(e) => handleChange('nameMarathi', e.target.value)}
                />
              </div>
            </div>

            {/* Basic Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <select
                  id="gender"
                  value={personalDetails?.gender || ''}
                  onChange={(e) => handleChange('gender', e.target.value)}
                  className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                  style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  placeholder="DD/MM/YYYY"
                  value={personalDetails?.dateOfBirth || ''}
                  onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="placeOfBirth">Place of Birth *</Label>
                <Input
                  id="placeOfBirth"
                  placeholder="City/Village"
                  value={personalDetails?.placeOfBirth || ''}
                  onChange={(e) => handleChange('placeOfBirth', e.target.value)}
                />
              </div>
            </div>

            {/* Religion & Caste */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="religion">Religion *</Label>
                <select
                  id="religion"
                  value={personalDetails?.religion || ''}
                  onChange={(e) => handleChange('religion', e.target.value)}
                  className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                  style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                >
                  <option value="">Select religion</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Christian">Christian</option>
                  <option value="Buddhist">Buddhist</option>
                  <option value="Jain">Jain</option>
                  <option value="Sikh">Sikh</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="caste">Caste *</Label>
                <Input
                  id="caste"
                  placeholder="Enter caste"
                  value={personalDetails?.caste || ''}
                  onChange={(e) => handleChange('caste', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subCaste">Sub-Caste</Label>
                <Input
                  id="subCaste"
                  placeholder="Enter sub-caste (if any)"
                  value={personalDetails?.subCaste || ''}
                  onChange={(e) => handleChange('subCaste', e.target.value)}
                />
              </div>
            </div>

            {/* Nationality & Domicile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality *</Label>
                <select
                  id="nationality"
                  value={personalDetails?.nationality || ''}
                  onChange={(e) => handleChange('nationality', e.target.value)}
                  className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                  style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                >
                  <option value="">Select nationality</option>
                  <option value="Indian">Indian</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="domicile">Domicile State *</Label>
                <select
                  id="domicile"
                  value={personalDetails?.domicile || ''}
                  onChange={(e) => handleChange('domicile', e.target.value)}
                  className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                  style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                >
                  <option value="">Select domicile state</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Other">Other State</option>
                </select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Identity & Contact Details - Large Section */}
      <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-secondary)' }}>
              <IdcardOutlined className="text-lg text-white" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Identity & Contact Details</h3>
          </div>

          <div className="space-y-4">
            {/* Identity Documents */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="aadharNumber">Aadhar Number *</Label>
                <Input
                  id="aadharNumber"
                  placeholder="Enter 12-digit Aadhar number"
                  value={personalDetails?.aadharNumber || ''}
                  onChange={(e) => handleChange('aadharNumber', e.target.value)}
                  maxLength={12}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="panNumber">PAN Number (Optional)</Label>
                <Input
                  id="panNumber"
                  placeholder="Enter PAN number (if available)"
                  value={personalDetails?.panNumber || ''}
                  onChange={(e) => handleChange('panNumber', e.target.value.toUpperCase())}
                  maxLength={10}
                  className="uppercase"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="mobileNumber">Mobile Number *</Label>
                <Input
                  id="mobileNumber"
                  placeholder="Enter 10-digit mobile number"
                  value={personalDetails?.mobileNumber || ''}
                  onChange={(e) => handleChange('mobileNumber', e.target.value)}
                  maxLength={10}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="alternateNumber">Alternate Mobile Number (Optional)</Label>
                <Input
                  id="alternateNumber"
                  placeholder="Enter alternate mobile number"
                  value={personalDetails?.alternateNumber || ''}
                  onChange={(e) => handleChange('alternateNumber', e.target.value)}
                  maxLength={10}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={personalDetails?.email || ''}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="alternateEmail">Alternate Email (Optional)</Label>
                <Input
                  id="alternateEmail"
                  type="email"
                  placeholder="Enter alternate email"
                  value={personalDetails?.alternateEmail || ''}
                  onChange={(e) => handleChange('alternateEmail', e.target.value)}
                />
              </div>
            </div>

            {/* Important Note */}
            <Card style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-warning)' }}>
              <CardContent className="pt-4 pb-4">
                <p className="text-sm" style={{ color: 'var(--color-foreground)' }}>
                  <strong style={{ color: 'var(--color-warning)' }}>Important:</strong> All SMS and email communications will be sent to the above contact details.
                  Please ensure they are correct and active.
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalDetails;
