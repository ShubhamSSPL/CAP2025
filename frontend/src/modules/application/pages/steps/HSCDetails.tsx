/**
 * Step 5: HSC Details - Unified UI with shadcn/ui
 * 12th standard / HSC examination details
 */

import React from 'react';
import { BookOutlined } from '@ant-design/icons';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Card, CardContent } from '@/shared/components/ui/card';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { updateHSCDetails } from '../../store/applicationSlice';

const HSCDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const hscDetails = useAppSelector((state) => state.application.hscDetails);

  const handleChange = (field: string, value: string) => {
    dispatch(updateHSCDetails({
      ...hscDetails,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
          <BookOutlined className="text-lg text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>HSC / 12th Standard Details</h2>
          <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>Higher Secondary Certificate information</p>
        </div>
      </div>

      {/* HSC Information - Large Section */}
      <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <BookOutlined className="text-lg text-white" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>HSC Information</h3>
          </div>

          <div className="space-y-6">
            {/* Board & School Information */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Board & School Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="boardName">Board Name *</Label>
                  <select
                    id="boardName"
                    value={hscDetails?.boardName || ''}
                    onChange={(e) => handleChange('boardName', e.target.value)}
                    className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                  >
                    <option value="">Select board</option>
                    <option value="Maharashtra State Board">Maharashtra State Board</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="schoolName">School Name *</Label>
                  <Input
                    id="schoolName"
                    placeholder="Enter school name"
                    value={hscDetails?.schoolName || ''}
                    onChange={(e) => handleChange('schoolName', e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="schoolAddress">School Address *</Label>
                <textarea
                  id="schoolAddress"
                  placeholder="Enter complete school address"
                  value={hscDetails?.schoolAddress || ''}
                  onChange={(e) => handleChange('schoolAddress', e.target.value)}
                  rows={2}
                  className="flex w-full rounded-md border px-3 py-2 text-sm shadow-sm transition-colors"
                  style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                />
              </div>
            </div>

            {/* Examination Details */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Examination Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="passingYear">Passing Year *</Label>
                  <select
                    id="passingYear"
                    value={hscDetails?.passingYear || ''}
                    onChange={(e) => handleChange('passingYear', e.target.value)}
                    className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                  >
                    <option value="">Select year</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="monthOfPassing">Month of Passing *</Label>
                  <select
                    id="monthOfPassing"
                    value={hscDetails?.monthOfPassing || ''}
                    onChange={(e) => handleChange('monthOfPassing', e.target.value)}
                    className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                  >
                    <option value="">Select month</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="seatNumber">Seat Number *</Label>
                  <Input
                    id="seatNumber"
                    placeholder="Enter seat number"
                    value={hscDetails?.seatNumber || ''}
                    onChange={(e) => handleChange('seatNumber', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="attemptNumber">Attempt Number *</Label>
                  <select
                    id="attemptNumber"
                    value={hscDetails?.attemptNumber || ''}
                    onChange={(e) => handleChange('attemptNumber', e.target.value)}
                    className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                  >
                    <option value="">Select</option>
                    <option value="1">First Attempt</option>
                    <option value="2">Second Attempt</option>
                    <option value="3">Third Attempt</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Subject Marks */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Subject Marks (Out of 100)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="physicsMarks">Physics *</Label>
                  <Input
                    id="physicsMarks"
                    placeholder="Marks"
                    value={hscDetails?.physicsMarks || ''}
                    onChange={(e) => handleChange('physicsMarks', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="chemistryMarks">Chemistry *</Label>
                  <Input
                    id="chemistryMarks"
                    placeholder="Marks"
                    value={hscDetails?.chemistryMarks || ''}
                    onChange={(e) => handleChange('chemistryMarks', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mathematicsMarks">Mathematics *</Label>
                  <Input
                    id="mathematicsMarks"
                    placeholder="Marks"
                    value={hscDetails?.mathematicsMarks || ''}
                    onChange={(e) => handleChange('mathematicsMarks', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="biologyMarks">Biology (if any)</Label>
                  <Input
                    id="biologyMarks"
                    placeholder="Marks"
                    value={hscDetails?.biologyMarks || ''}
                    onChange={(e) => handleChange('biologyMarks', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Overall Performance */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Overall Performance</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="totalMarks">Total Marks Obtained *</Label>
                  <Input
                    id="totalMarks"
                    placeholder="Enter total marks"
                    value={hscDetails?.totalMarks || ''}
                    onChange={(e) => handleChange('totalMarks', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="percentage">Percentage (%) *</Label>
                  <Input
                    id="percentage"
                    placeholder="Enter percentage"
                    value={hscDetails?.percentage || ''}
                    onChange={(e) => handleChange('percentage', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gradeObtained">Grade (if applicable)</Label>
                  <Input
                    id="gradeObtained"
                    placeholder="Enter grade"
                    value={hscDetails?.gradeObtained || ''}
                    onChange={(e) => handleChange('gradeObtained', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HSCDetails;
