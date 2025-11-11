import { Input, Label, Card, CardContent } from '@/shared/components/ui';
/**
 * Step 9: Bank Details - Unified UI with shadcn/ui
 * Bank account information for refunds and scholarships
 */

import React from 'react';
import { BankOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { updateBankDetails } from '../../store/applicationSlice';

const BankDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const bankDetails = useAppSelector((state) => state.application.bankDetails);

  const handleChange = (field: string, value: string) => {
    dispatch(updateBankDetails({
      ...bankDetails,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-3">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
          <BankOutlined className="text-lg text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Bank Account Details</h2>
          <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>For fee refunds and scholarship disbursement</p>
        </div>
      </div>

      {/* Important Notice */}
      <div className="p-4 rounded-lg border-l-4" style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-primary)' }}>
        <div className="flex items-start gap-2">
          <InfoCircleOutlined className="text-base mt-0.5" style={{ color: 'var(--color-primary)' }} />
          <div>
            <h4 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-foreground)' }}>Important Information</h4>
            <ul className="text-xs space-y-1" style={{ color: 'var(--color-muted-foreground)' }}>
              <li>• Bank account must be in the candidate's name only</li>
              <li>• This account will be used for fee refunds and scholarship disbursement</li>
              <li>• Ensure all details are accurate as per your bank passbook/statement</li>
              <li>• Both Savings and Current accounts are acceptable</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bank Account Information - Large Section */}
      <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
        <CardContent className="pt-3">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <BankOutlined className="text-lg text-white" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Bank Account Information</h3>
          </div>

          <div className="space-y-3">
            {/* Account Holder Details */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Account Holder Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="accountHolderName">Account Holder Name *</Label>
                  <Input
                    id="accountHolderName"
                    placeholder="Name as per bank records"
                    value={bankDetails?.accountHolderName || ''}
                    onChange={(e) => handleChange('accountHolderName', e.target.value)}
                  />
                  <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
                    Must match your bank passbook/statement
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accountType">Account Type *</Label>
                  <select
                    id="accountType"
                    value={bankDetails?.accountType || ''}
                    onChange={(e) => handleChange('accountType', e.target.value)}
                    className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                  >
                    <option value="">Select account type</option>
                    <option value="Savings">Savings Account</option>
                    <option value="Current">Current Account</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Bank Details */}
            <div className="space-y-4 mt-6">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Bank Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="bankName">Bank Name *</Label>
                  <Input
                    id="bankName"
                    placeholder="Enter bank name"
                    value={bankDetails?.bankName || ''}
                    onChange={(e) => handleChange('bankName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="branchName">Branch Name *</Label>
                  <Input
                    id="branchName"
                    placeholder="Enter branch name"
                    value={bankDetails?.branchName || ''}
                    onChange={(e) => handleChange('branchName', e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="branchAddress">Branch Address</Label>
                <Input
                  id="branchAddress"
                  placeholder="Enter branch address (optional)"
                  value={bankDetails?.branchAddress || ''}
                  onChange={(e) => handleChange('branchAddress', e.target.value)}
                />
              </div>
            </div>

            {/* Account Number & IFSC */}
            <div className="space-y-4 mt-6">
              <h4 className="text-sm font-semibold" style={{ color: 'var(--color-muted-foreground)' }}>Account Number & IFSC Code</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="accountNumber">Account Number *</Label>
                  <Input
                    id="accountNumber"
                    placeholder="Enter account number"
                    value={bankDetails?.accountNumber || ''}
                    onChange={(e) => handleChange('accountNumber', e.target.value)}
                    maxLength={20}
                  />
                  <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
                    Enter numbers only, no spaces or special characters
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmAccountNumber">Confirm Account Number *</Label>
                  <Input
                    id="confirmAccountNumber"
                    placeholder="Re-enter account number"
                    value={bankDetails?.confirmAccountNumber || ''}
                    onChange={(e) => handleChange('confirmAccountNumber', e.target.value)}
                    maxLength={20}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="ifscCode">IFSC Code *</Label>
                  <Input
                    id="ifscCode"
                    placeholder="Enter 11-character IFSC code"
                    value={bankDetails?.ifscCode || ''}
                    onChange={(e) => handleChange('ifscCode', e.target.value.toUpperCase())}
                    maxLength={11}
                  />
                  <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
                    Format: ABCD0123456 (4 letters + 0 + 6 digits)
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="micrCode">MICR Code (Optional)</Label>
                  <Input
                    id="micrCode"
                    placeholder="Enter 9-digit MICR code"
                    value={bankDetails?.micrCode || ''}
                    onChange={(e) => handleChange('micrCode', e.target.value)}
                    maxLength={9}
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Verification Notice */}
      <div className="p-4 rounded-lg border-l-4" style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-error)' }}>
        <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-foreground)' }}>Verification Required</h4>
        <p className="text-xs" style={{ color: 'var(--color-foreground)' }}>
          You may be required to submit a cancelled cheque or bank passbook copy during document verification.
          Providing incorrect bank details may delay your refund/scholarship disbursement.
        </p>
      </div>
    </div>
  );
};

export default BankDetails;
