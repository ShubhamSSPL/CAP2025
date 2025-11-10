/**
 * Step 4: Qualifying Exam Details - Unified UI with shadcn/ui
 * MHT-CET, JEE, NEET exam details
 */

import React from 'react';
import { FileDoneOutlined } from '@ant-design/icons';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Card, CardContent } from '@/shared/components/ui/card';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { updateQualifyingExamDetails } from '../../store/applicationSlice';

const QualifyingExamDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const examDetails = useAppSelector((state) => state.application.qualifyingExamDetails);
  const [examType, setExamType] = React.useState(examDetails?.examName || 'MHT-CET');

  const handleChange = (field: string, value: string) => {
    const updates = { ...examDetails, [field]: value };
    if (field === 'examName') {
      setExamType(value);
    }
    dispatch(updateQualifyingExamDetails(updates));
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
          <FileDoneOutlined className="text-lg text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Qualifying Examination Details</h2>
          <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>Entrance exam information</p>
        </div>
      </div>

      {/* Exam Information - Large Section */}
      <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <FileDoneOutlined className="text-lg text-white" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Exam Information</h3>
          </div>

          <div className="space-y-6">
            {/* Basic Exam Details */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Basic Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="examName">Qualifying Exam *</Label>
                  <select
                    id="examName"
                    value={examDetails?.examName || ''}
                    onChange={(e) => handleChange('examName', e.target.value)}
                    className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                  >
                    <option value="">Select exam</option>
                    <option value="MHT-CET">MHT-CET</option>
                    <option value="JEE-Main">JEE Main</option>
                    <option value="NEET">NEET</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="examRollNumber">Roll Number *</Label>
                  <Input
                    id="examRollNumber"
                    placeholder="Enter roll number"
                    value={examDetails?.examRollNumber || ''}
                    onChange={(e) => handleChange('examRollNumber', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="examYear">Exam Year *</Label>
                  <select
                    id="examYear"
                    value={examDetails?.examYear || ''}
                    onChange={(e) => handleChange('examYear', e.target.value)}
                    className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                  >
                    <option value="">Select year</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Subject Marks */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Subject Marks</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(examType === 'MHT-CET' || examType === 'JEE-Main') && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="physicsMarks">Physics Marks *</Label>
                      <Input
                        id="physicsMarks"
                        placeholder="Enter marks"
                        value={examDetails?.physicsMarks || ''}
                        onChange={(e) => handleChange('physicsMarks', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="chemistryMarks">Chemistry Marks *</Label>
                      <Input
                        id="chemistryMarks"
                        placeholder="Enter marks"
                        value={examDetails?.chemistryMarks || ''}
                        onChange={(e) => handleChange('chemistryMarks', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mathematicsMarks">Mathematics Marks *</Label>
                      <Input
                        id="mathematicsMarks"
                        placeholder="Enter marks"
                        value={examDetails?.mathematicsMarks || ''}
                        onChange={(e) => handleChange('mathematicsMarks', e.target.value)}
                      />
                    </div>
                  </>
                )}
                {examType === 'NEET' && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="physicsMarks">Physics Marks *</Label>
                      <Input
                        id="physicsMarks"
                        placeholder="Enter marks"
                        value={examDetails?.physicsMarks || ''}
                        onChange={(e) => handleChange('physicsMarks', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="chemistryMarks">Chemistry Marks *</Label>
                      <Input
                        id="chemistryMarks"
                        placeholder="Enter marks"
                        value={examDetails?.chemistryMarks || ''}
                        onChange={(e) => handleChange('chemistryMarks', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="biologyMarks">Biology Marks *</Label>
                      <Input
                        id="biologyMarks"
                        placeholder="Enter marks"
                        value={examDetails?.biologyMarks || ''}
                        onChange={(e) => handleChange('biologyMarks', e.target.value)}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Overall Performance & Ranks */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Overall Performance & Ranks</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="totalMarks">Total Marks *</Label>
                  <Input
                    id="totalMarks"
                    placeholder="Enter total marks"
                    value={examDetails?.totalMarks || ''}
                    onChange={(e) => handleChange('totalMarks', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="percentile">Percentile</Label>
                  <Input
                    id="percentile"
                    placeholder="Enter percentile"
                    value={examDetails?.percentile || ''}
                    onChange={(e) => handleChange('percentile', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rank">Overall Rank</Label>
                  <Input
                    id="rank"
                    placeholder="Enter rank"
                    value={examDetails?.rank || ''}
                    onChange={(e) => handleChange('rank', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="allIndiaRank">All India Rank</Label>
                  <Input
                    id="allIndiaRank"
                    placeholder="Enter AIR"
                    value={examDetails?.allIndiaRank || ''}
                    onChange={(e) => handleChange('allIndiaRank', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stateRank">State Rank</Label>
                  <Input
                    id="stateRank"
                    placeholder="Enter state rank"
                    value={examDetails?.stateRank || ''}
                    onChange={(e) => handleChange('stateRank', e.target.value)}
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

export default QualifyingExamDetails;
