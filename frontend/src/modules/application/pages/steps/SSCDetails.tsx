import { Input, Label, Card, CardContent } from '@/shared/components/ui';
/**
 * Step 6: SSC Details - Unified UI with shadcn/ui
 * 10th standard / SSC examination details
 */

import React from 'react';
import { ReadOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { updateSSCDetails } from '../../store/applicationSlice';

const SSCDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const sscDetails = useAppSelector((state) => state.application.sscDetails);

  const handleChange = (field: string, value: string) => {
    dispatch(updateSSCDetails({
      ...sscDetails,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
          <ReadOutlined className="text-lg text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>SSC / 10th Standard Details</h2>
          <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>Secondary School Certificate information</p>
        </div>
      </div>

      {/* SSC Information - Large Section */}
      <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <ReadOutlined className="text-lg text-white" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>SSC Information</h3>
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
                    value={sscDetails?.boardName || ''}
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
                    value={sscDetails?.schoolName || ''}
                    onChange={(e) => handleChange('schoolName', e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="schoolAddress">School Address *</Label>
                <textarea
                  id="schoolAddress"
                  placeholder="Enter complete school address"
                  value={sscDetails?.schoolAddress || ''}
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="passingYear">Passing Year *</Label>
                  <select
                    id="passingYear"
                    value={sscDetails?.passingYear || ''}
                    onChange={(e) => handleChange('passingYear', e.target.value)}
                    className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                  >
                    <option value="">Select year</option>
                    {Array.from({ length: 10 }, (_, i) => {
                      const year = new Date().getFullYear() - i;
                      return (
                        <option key={year} value={year.toString()}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="monthOfPassing">Month of Passing *</Label>
                  <select
                    id="monthOfPassing"
                    value={sscDetails?.monthOfPassing || ''}
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
                    value={sscDetails?.seatNumber || ''}
                    onChange={(e) => handleChange('seatNumber', e.target.value)}
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
                    value={sscDetails?.totalMarks || ''}
                    onChange={(e) => handleChange('totalMarks', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="percentage">Percentage (%) *</Label>
                  <Input
                    id="percentage"
                    placeholder="Enter percentage"
                    value={sscDetails?.percentage || ''}
                    onChange={(e) => handleChange('percentage', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gradeObtained">Grade (if applicable)</Label>
                  <Input
                    id="gradeObtained"
                    placeholder="Enter grade"
                    value={sscDetails?.gradeObtained || ''}
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

export default SSCDetails;
