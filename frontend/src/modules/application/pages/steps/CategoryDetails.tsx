import { Input, Label, Card, CardContent } from '@/shared/components/ui';
/**
 * Step 3: Category Details - Unified UI with shadcn/ui
 * Caste, category, and reservation information
 */

import React from 'react';
import { TagsOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { updateCategoryDetails } from '../../store/applicationSlice';

const CategoryDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const categoryDetails = useAppSelector((state) => state.application.categoryDetails);

  const handleChange = (field: string, value: string | boolean) => {
    dispatch(updateCategoryDetails({
      ...categoryDetails,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-3">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
          <TagsOutlined className="text-lg text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Category Details</h2>
          <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>Reservation and category information</p>
        </div>
      </div>

      {/* Category & Reservation - Large Section */}
      <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
        <CardContent className="pt-3">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <TagsOutlined className="text-lg text-white" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Category & Reservation Information</h3>
          </div>

          <div className="space-y-3">
            {/* Category Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <select
                  id="category"
                  value={categoryDetails?.category || ''}
                  onChange={(e) => handleChange('category', e.target.value)}
                  className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                  style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                >
                  <option value="">Select category</option>
                  <option value="OPEN">OPEN</option>
                  <option value="SC">SC (Scheduled Caste)</option>
                  <option value="ST">ST (Scheduled Tribe)</option>
                  <option value="VJ/DT(A)">VJ/DT(A) (Vimukta Jati)</option>
                  <option value="NT(B)">NT(B) (Nomadic Tribe B)</option>
                  <option value="NT(C)">NT(C) (Nomadic Tribe C)</option>
                  <option value="NT(D)">NT(D) (Nomadic Tribe D)</option>
                  <option value="OBC">OBC (Other Backward Class)</option>
                  <option value="SBC">SBC (Special Backward Class)</option>
                  <option value="SEBC">SEBC (Socially & Educationally Backward Class)</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="casteCertificateNumber">Caste Certificate Number</Label>
                <Input
                  id="casteCertificateNumber"
                  placeholder="Enter certificate number"
                  value={categoryDetails?.casteCertificateNumber || ''}
                  onChange={(e) => handleChange('casteCertificateNumber', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="casteIssuingAuthority">Issuing Authority</Label>
                <Input
                  id="casteIssuingAuthority"
                  placeholder="Enter issuing authority"
                  value={categoryDetails?.casteIssuingAuthority || ''}
                  onChange={(e) => handleChange('casteIssuingAuthority', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="casteCertificateIssueDate">Issue Date</Label>
                <Input
                  id="casteCertificateIssueDate"
                  type="date"
                  value={categoryDetails?.casteCertificateIssueDate || ''}
                  onChange={(e) => handleChange('casteCertificateIssueDate', e.target.value)}
                />
              </div>
            </div>

            {/* Special Categories */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Special Categories (Check if applicable)</h4>

              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={categoryDetails?.isMinority || false}
                    onChange={(e) => handleChange('isMinority', e.target.checked)}
                    className="w-4 h-4"
                    style={{ accentColor: 'var(--color-primary)' }}
                  />
                  <span className="text-sm" style={{ color: 'var(--color-foreground)' }}>Minority (Linguistic/Religious)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={categoryDetails?.isDifferentlyAbled || false}
                    onChange={(e) => handleChange('isDifferentlyAbled', e.target.checked)}
                    className="w-4 h-4"
                    style={{ accentColor: 'var(--color-primary)' }}
                  />
                  <span className="text-sm" style={{ color: 'var(--color-foreground)' }}>Differently Abled (PwD)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={categoryDetails?.isDefencePersonDependant || false}
                    onChange={(e) => handleChange('isDefencePersonDependant', e.target.checked)}
                    className="w-4 h-4"
                    style={{ accentColor: 'var(--color-primary)' }}
                  />
                  <span className="text-sm" style={{ color: 'var(--color-foreground)' }}>Defence Person Dependant</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={categoryDetails?.isSportsQuota || false}
                    onChange={(e) => handleChange('isSportsQuota', e.target.checked)}
                    className="w-4 h-4"
                    style={{ accentColor: 'var(--color-primary)' }}
                  />
                  <span className="text-sm" style={{ color: 'var(--color-foreground)' }}>Sports Quota</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={categoryDetails?.isEWS || false}
                    onChange={(e) => handleChange('isEWS', e.target.checked)}
                    className="w-4 h-4"
                    style={{ accentColor: 'var(--color-primary)' }}
                  />
                  <span className="text-sm" style={{ color: 'var(--color-foreground)' }}>EWS (Economically Weaker Section)</span>
                </label>
              </div>
            </div>

            {/* Additional Info */}
            {categoryDetails?.isDifferentlyAbled && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="disabilityType">Type of Disability *</Label>
                  <Input
                    id="disabilityType"
                    placeholder="Enter disability type"
                    value={categoryDetails?.disabilityType || ''}
                    onChange={(e) => handleChange('disabilityType', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="disabilityPercentage">Disability Percentage *</Label>
                  <Input
                    id="disabilityPercentage"
                    placeholder="Enter percentage"
                    value={categoryDetails?.disabilityPercentage || ''}
                    onChange={(e) => handleChange('disabilityPercentage', e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryDetails;
