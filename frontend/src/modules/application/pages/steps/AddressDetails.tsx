import { Input, Label, Card, CardContent } from '@/shared/components/ui';
/**
 * Step 8: Address Details - Unified UI with shadcn/ui
 * Permanent and correspondence address information
 */

import React from 'react';
import { EnvironmentOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { updateAddressDetails } from '../../store/applicationSlice';

const AddressDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const addressDetails = useAppSelector((state) => state.application.addressDetails);
  const [sameAddress, setSameAddress] = React.useState(addressDetails?.isSameAsPermanent || false);

  const handleChange = (field: string, value: string | boolean) => {
    dispatch(updateAddressDetails({
      ...addressDetails,
      [field]: value,
    }));
  };

  const handleSameAddressChange = (checked: boolean) => {
    setSameAddress(checked);
    handleChange('isSameAsPermanent', checked);

    if (checked && addressDetails) {
      // Copy permanent address to correspondence
      const updates = {
        ...addressDetails,
        isSameAsPermanent: checked,
        correspondenceAddressLine1: addressDetails.permanentAddressLine1,
        correspondenceAddressLine2: addressDetails.permanentAddressLine2,
        correspondenceCity: addressDetails.permanentCity,
        correspondenceDistrict: addressDetails.permanentDistrict,
        correspondenceState: addressDetails.permanentState,
        correspondencePincode: addressDetails.permanentPincode,
        correspondenceTaluka: addressDetails.permanentTaluka,
      };
      dispatch(updateAddressDetails(updates));
    }
  };

  return (
    <div className="space-y-3">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
          <EnvironmentOutlined className="text-lg text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Address Details</h2>
          <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>Permanent and correspondence address</p>
        </div>
      </div>

      {/* Permanent Address - Large Section */}
      <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
        <CardContent className="pt-3">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <EnvironmentOutlined className="text-lg text-white" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Permanent Address</h3>
          </div>

          <div className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="permanentAddressLine1">Address Line 1 *</Label>
              <Input
                id="permanentAddressLine1"
                placeholder="Building/House No., Street Name"
                value={addressDetails?.permanentAddressLine1 || ''}
                onChange={(e) => handleChange('permanentAddressLine1', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="permanentAddressLine2">Address Line 2 (Optional)</Label>
              <Input
                id="permanentAddressLine2"
                placeholder="Locality, Landmark"
                value={addressDetails?.permanentAddressLine2 || ''}
                onChange={(e) => handleChange('permanentAddressLine2', e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="space-y-2">
                <Label htmlFor="permanentCity">City/Village *</Label>
                <Input
                  id="permanentCity"
                  placeholder="Enter city or village"
                  value={addressDetails?.permanentCity || ''}
                  onChange={(e) => handleChange('permanentCity', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="permanentTaluka">Taluka *</Label>
                <Input
                  id="permanentTaluka"
                  placeholder="Enter taluka"
                  value={addressDetails?.permanentTaluka || ''}
                  onChange={(e) => handleChange('permanentTaluka', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="permanentDistrict">District *</Label>
                <Input
                  id="permanentDistrict"
                  placeholder="Enter district"
                  value={addressDetails?.permanentDistrict || ''}
                  onChange={(e) => handleChange('permanentDistrict', e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="permanentState">State *</Label>
                <select
                  id="permanentState"
                  value={addressDetails?.permanentState || ''}
                  onChange={(e) => handleChange('permanentState', e.target.value)}
                  className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                  style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                >
                  <option value="">Select state</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="permanentPincode">PIN Code *</Label>
                <Input
                  id="permanentPincode"
                  placeholder="Enter 6-digit PIN code"
                  value={addressDetails?.permanentPincode || ''}
                  onChange={(e) => handleChange('permanentPincode', e.target.value)}
                  maxLength={6}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Same Address Checkbox */}
      <div className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-border)' }}>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={sameAddress}
            onChange={(e) => handleSameAddressChange(e.target.checked)}
            className="w-4 h-4"
            style={{ accentColor: 'var(--color-primary)' }}
          />
          <span className="text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>
            Correspondence address is same as permanent address
          </span>
        </label>
      </div>

      {/* Correspondence Address - Large Section */}
      {!sameAddress && (
        <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
          <CardContent className="pt-3">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-secondary)' }}>
                <EnvironmentOutlined className="text-lg text-white" />
              </div>
              <h3 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Correspondence Address</h3>
            </div>

            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="correspondenceAddressLine1">Address Line 1 *</Label>
                <Input
                  id="correspondenceAddressLine1"
                  placeholder="Building/House No., Street Name"
                  value={addressDetails?.correspondenceAddressLine1 || ''}
                  onChange={(e) => handleChange('correspondenceAddressLine1', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="correspondenceAddressLine2">Address Line 2 (Optional)</Label>
                <Input
                  id="correspondenceAddressLine2"
                  placeholder="Locality, Landmark"
                  value={addressDetails?.correspondenceAddressLine2 || ''}
                  onChange={(e) => handleChange('correspondenceAddressLine2', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="correspondenceCity">City/Village *</Label>
                  <Input
                    id="correspondenceCity"
                    placeholder="Enter city or village"
                    value={addressDetails?.correspondenceCity || ''}
                    onChange={(e) => handleChange('correspondenceCity', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="correspondenceTaluka">Taluka *</Label>
                  <Input
                    id="correspondenceTaluka"
                    placeholder="Enter taluka"
                    value={addressDetails?.correspondenceTaluka || ''}
                    onChange={(e) => handleChange('correspondenceTaluka', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="correspondenceDistrict">District *</Label>
                  <Input
                    id="correspondenceDistrict"
                    placeholder="Enter district"
                    value={addressDetails?.correspondenceDistrict || ''}
                    onChange={(e) => handleChange('correspondenceDistrict', e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="correspondenceState">State *</Label>
                  <select
                    id="correspondenceState"
                    value={addressDetails?.correspondenceState || ''}
                    onChange={(e) => handleChange('correspondenceState', e.target.value)}
                    className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
                  >
                    <option value="">Select state</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Goa">Goa</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="correspondencePincode">PIN Code *</Label>
                  <Input
                    id="correspondencePincode"
                    placeholder="Enter 6-digit PIN code"
                    value={addressDetails?.correspondencePincode || ''}
                    onChange={(e) => handleChange('correspondencePincode', e.target.value)}
                    maxLength={6}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Info Note */}
      <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-muted)', borderLeft: '4px solid var(--color-primary)' }}>
        <p className="text-sm" style={{ color: 'var(--color-foreground)' }}>
          <strong>Note:</strong> All official communications and documents will be sent to the correspondence address provided above.
        </p>
      </div>
    </div>
  );
};

export default AddressDetails;
