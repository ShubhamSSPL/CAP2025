/**
 * Step 8: Address Details
 * Permanent and correspondence address information
 */

import React from 'react';
import { Form, Input, Select, Row, Col, Checkbox } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { updateAddressDetails } from '../../store/applicationSlice';

const { Option } = Select;

const AddressDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const addressDetails = useAppSelector((state) => state.application.addressDetails);
  const [form] = Form.useForm();
  const [sameAddress, setSameAddress] = React.useState(false);

  React.useEffect(() => {
    if (addressDetails) {
      form.setFieldsValue(addressDetails);
      setSameAddress(addressDetails.isSameAsPermanent || false);
    }
  }, [addressDetails, form]);

  const handleChange = () => {
    const values = form.getFieldsValue();
    dispatch(updateAddressDetails(values));
  };

  const handleSameAddressChange = (checked: boolean) => {
    setSameAddress(checked);
    if (checked) {
      // Copy permanent address to correspondence
      const permanentValues = form.getFieldsValue([
        'permanentAddressLine1',
        'permanentAddressLine2',
        'permanentCity',
        'permanentDistrict',
        'permanentState',
        'permanentPincode',
        'permanentTaluka',
      ]);
      form.setFieldsValue({
        correspondenceAddressLine1: permanentValues.permanentAddressLine1,
        correspondenceAddressLine2: permanentValues.permanentAddressLine2,
        correspondenceCity: permanentValues.permanentCity,
        correspondenceDistrict: permanentValues.permanentDistrict,
        correspondenceState: permanentValues.permanentState,
        correspondencePincode: permanentValues.permanentPincode,
        correspondenceTaluka: permanentValues.permanentTaluka,
      });
      handleChange();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <EnvironmentOutlined className="text-lg text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-foreground">Address Details</h2>
          <p className="text-sm text-muted-foreground">Permanent and correspondence address</p>
        </div>
      </div>

      <Form form={form} layout="vertical" onValuesChange={handleChange}>
        {/* Permanent Address */}
        <div className="bg-muted/30 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Permanent Address</h3>
          <Row gutter={16}>
            <Col xs={24}>
              <Form.Item
                label="Address Line 1"
                name="permanentAddressLine1"
                rules={[{ required: true, message: 'Please enter address' }]}
              >
                <Input placeholder="Building/House No., Street Name" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="Address Line 2 (Optional)" name="permanentAddressLine2">
                <Input placeholder="Locality, Landmark" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="City/Village"
                name="permanentCity"
                rules={[{ required: true, message: 'Please enter city' }]}
              >
                <Input placeholder="Enter city or village" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Taluka"
                name="permanentTaluka"
                rules={[{ required: true, message: 'Please enter taluka' }]}
              >
                <Input placeholder="Enter taluka" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="District"
                name="permanentDistrict"
                rules={[{ required: true, message: 'Please enter district' }]}
              >
                <Input placeholder="Enter district" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="State"
                name="permanentState"
                rules={[{ required: true, message: 'Please select state' }]}
              >
                <Select placeholder="Select state" size="large">
                  <Option value="Maharashtra">Maharashtra</Option>
                  <Option value="Andhra Pradesh">Andhra Pradesh</Option>
                  <Option value="Arunachal Pradesh">Arunachal Pradesh</Option>
                  <Option value="Assam">Assam</Option>
                  <Option value="Bihar">Bihar</Option>
                  <Option value="Chhattisgarh">Chhattisgarh</Option>
                  <Option value="Goa">Goa</Option>
                  <Option value="Gujarat">Gujarat</Option>
                  <Option value="Haryana">Haryana</Option>
                  <Option value="Himachal Pradesh">Himachal Pradesh</Option>
                  <Option value="Jharkhand">Jharkhand</Option>
                  <Option value="Karnataka">Karnataka</Option>
                  <Option value="Kerala">Kerala</Option>
                  <Option value="Madhya Pradesh">Madhya Pradesh</Option>
                  <Option value="Manipur">Manipur</Option>
                  <Option value="Meghalaya">Meghalaya</Option>
                  <Option value="Mizoram">Mizoram</Option>
                  <Option value="Nagaland">Nagaland</Option>
                  <Option value="Odisha">Odisha</Option>
                  <Option value="Punjab">Punjab</Option>
                  <Option value="Rajasthan">Rajasthan</Option>
                  <Option value="Sikkim">Sikkim</Option>
                  <Option value="Tamil Nadu">Tamil Nadu</Option>
                  <Option value="Telangana">Telangana</Option>
                  <Option value="Tripura">Tripura</Option>
                  <Option value="Uttar Pradesh">Uttar Pradesh</Option>
                  <Option value="Uttarakhand">Uttarakhand</Option>
                  <Option value="West Bengal">West Bengal</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="PIN Code"
                name="permanentPincode"
                rules={[
                  { required: true, message: 'Please enter PIN code' },
                  { pattern: /^\d{6}$/, message: 'Please enter valid 6-digit PIN code' },
                ]}
              >
                <Input placeholder="Enter 6-digit PIN code" size="large" maxLength={6} />
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/* Same as Permanent Checkbox */}
        <div className="mb-4">
          <Form.Item name="isSameAsPermanent" valuePropName="checked">
            <Checkbox onChange={(e) => handleSameAddressChange(e.target.checked)}>
              Correspondence address is same as permanent address
            </Checkbox>
          </Form.Item>
        </div>

        {/* Correspondence Address */}
        {!sameAddress && (
          <div className="bg-muted/30 rounded-lg p-4 mb-4">
            <h3 className="text-sm font-semibold text-foreground mb-4">Correspondence Address</h3>
            <Row gutter={16}>
              <Col xs={24}>
                <Form.Item
                  label="Address Line 1"
                  name="correspondenceAddressLine1"
                  rules={[{ required: !sameAddress, message: 'Please enter address' }]}
                >
                  <Input placeholder="Building/House No., Street Name" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item label="Address Line 2 (Optional)" name="correspondenceAddressLine2">
                  <Input placeholder="Locality, Landmark" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item
                  label="City/Village"
                  name="correspondenceCity"
                  rules={[{ required: !sameAddress, message: 'Please enter city' }]}
                >
                  <Input placeholder="Enter city or village" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item
                  label="Taluka"
                  name="correspondenceTaluka"
                  rules={[{ required: !sameAddress, message: 'Please enter taluka' }]}
                >
                  <Input placeholder="Enter taluka" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item
                  label="District"
                  name="correspondenceDistrict"
                  rules={[{ required: !sameAddress, message: 'Please enter district' }]}
                >
                  <Input placeholder="Enter district" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="State"
                  name="correspondenceState"
                  rules={[{ required: !sameAddress, message: 'Please select state' }]}
                >
                  <Select placeholder="Select state" size="large">
                    <Option value="Maharashtra">Maharashtra</Option>
                    <Option value="Gujarat">Gujarat</Option>
                    <Option value="Karnataka">Karnataka</Option>
                    <Option value="Goa">Goa</Option>
                    {/* Add other states as needed */}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="PIN Code"
                  name="correspondencePincode"
                  rules={[
                    { required: !sameAddress, message: 'Please enter PIN code' },
                    { pattern: /^\d{6}$/, message: 'Please enter valid 6-digit PIN code' },
                  ]}
                >
                  <Input placeholder="Enter 6-digit PIN code" size="large" maxLength={6} />
                </Form.Item>
              </Col>
            </Row>
          </div>
        )}

        <div className="bg-info/10 border border-info/30 rounded-lg p-4">
          <p className="text-sm text-info-foreground">
            <strong>Note:</strong> All official communications and documents will be sent to the correspondence address provided above.
          </p>
        </div>
      </Form>
    </div>
  );
};

export default AddressDetails;
