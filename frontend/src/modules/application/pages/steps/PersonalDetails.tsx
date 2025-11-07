/**
 * Step 1: Personal Details
 * Candidate's personal information form
 */

import React from 'react';
import { Form, Input, Select, DatePicker, Row, Col } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, IdcardOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { updatePersonalDetails } from '../../store/applicationSlice';
import dayjs from 'dayjs';

const { Option } = Select;

const PersonalDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const personalDetails = useAppSelector((state) => state.application.personalDetails);
  const [form] = Form.useForm();

  // Initialize form with saved data
  React.useEffect(() => {
    if (personalDetails) {
      form.setFieldsValue({
        ...personalDetails,
        dateOfBirth: personalDetails.dateOfBirth ? dayjs(personalDetails.dateOfBirth) : undefined,
      });
    }
  }, [personalDetails, form]);

  const handleChange = () => {
    const values = form.getFieldsValue();
    dispatch(updatePersonalDetails({
      ...values,
      dateOfBirth: values.dateOfBirth?.format('YYYY-MM-DD'),
    }));
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <UserOutlined className="text-lg text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-foreground">Personal Details</h2>
          <p className="text-sm text-muted-foreground">Enter your personal information as per official documents</p>
        </div>
      </div>

      <Form
        form={form}
        layout="vertical"
        onValuesChange={handleChange}
        className="space-y-4"
      >
        {/* Name Section */}
        <div className="bg-muted/30 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Name Details</h3>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Full Name (English)"
                name="fullName"
                rules={[{ required: true, message: 'Please enter your full name' }]}
              >
                <Input
                  prefix={<UserOutlined className="text-muted-foreground" />}
                  placeholder="Enter your full name"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Full Name (Marathi)"
                name="nameMarathi"
              >
                <Input
                  placeholder="संपूर्ण नाव मराठीत"
                  size="large"
                />
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/* Basic Details */}
        <div className="bg-muted/30 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Basic Information</h3>
          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Form.Item
                label="Gender"
                name="gender"
                rules={[{ required: true, message: 'Please select gender' }]}
              >
                <Select placeholder="Select gender" size="large">
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Date of Birth"
                name="dateOfBirth"
                rules={[{ required: true, message: 'Please select date of birth' }]}
              >
                <DatePicker
                  placeholder="Select date"
                  size="large"
                  className="w-full"
                  format="DD/MM/YYYY"
                  disabledDate={(current) => current && current > dayjs().endOf('day')}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Place of Birth"
                name="placeOfBirth"
                rules={[{ required: true, message: 'Please enter place of birth' }]}
              >
                <Input placeholder="City/Village" size="large" />
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/* Religion & Caste */}
        <div className="bg-muted/30 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Religion & Caste Details</h3>
          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Form.Item
                label="Religion"
                name="religion"
                rules={[{ required: true, message: 'Please select religion' }]}
              >
                <Select placeholder="Select religion" size="large">
                  <Option value="Hindu">Hindu</Option>
                  <Option value="Muslim">Muslim</Option>
                  <Option value="Christian">Christian</Option>
                  <Option value="Buddhist">Buddhist</Option>
                  <Option value="Jain">Jain</Option>
                  <Option value="Sikh">Sikh</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Caste"
                name="caste"
                rules={[{ required: true, message: 'Please enter caste' }]}
              >
                <Input placeholder="Enter caste" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Sub-Caste"
                name="subCaste"
              >
                <Input placeholder="Enter sub-caste (if any)" size="large" />
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/* Nationality & Domicile */}
        <div className="bg-muted/30 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Nationality & Domicile</h3>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Nationality"
                name="nationality"
                rules={[{ required: true, message: 'Please select nationality' }]}
              >
                <Select placeholder="Select nationality" size="large">
                  <Option value="Indian">Indian</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Domicile State"
                name="domicile"
                rules={[{ required: true, message: 'Please select domicile' }]}
              >
                <Select placeholder="Select domicile state" size="large">
                  <Option value="Maharashtra">Maharashtra</Option>
                  <Option value="Other">Other State</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/* Identity Documents */}
        <div className="bg-muted/30 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Identity Documents</h3>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Aadhar Number"
                name="aadharNumber"
                rules={[
                  { required: true, message: 'Please enter Aadhar number' },
                  { pattern: /^\d{12}$/, message: 'Please enter valid 12-digit Aadhar number' },
                ]}
              >
                <Input
                  prefix={<IdcardOutlined className="text-muted-foreground" />}
                  placeholder="Enter 12-digit Aadhar number"
                  size="large"
                  maxLength={12}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="PAN Number (Optional)"
                name="panNumber"
                rules={[
                  { pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, message: 'Please enter valid PAN number' },
                ]}
              >
                <Input
                  prefix={<IdcardOutlined className="text-muted-foreground" />}
                  placeholder="Enter PAN number (if available)"
                  size="large"
                  maxLength={10}
                  style={{ textTransform: 'uppercase' }}
                />
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/* Contact Details */}
        <div className="bg-muted/30 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Contact Information</h3>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Mobile Number"
                name="mobileNumber"
                rules={[
                  { required: true, message: 'Please enter mobile number' },
                  { pattern: /^[6-9]\d{9}$/, message: 'Please enter valid 10-digit mobile number' },
                ]}
              >
                <Input
                  prefix={<PhoneOutlined className="text-muted-foreground" />}
                  placeholder="Enter 10-digit mobile number"
                  size="large"
                  maxLength={10}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Alternate Mobile Number (Optional)"
                name="alternateNumber"
                rules={[
                  { pattern: /^[6-9]\d{9}$/, message: 'Please enter valid 10-digit mobile number' },
                ]}
              >
                <Input
                  prefix={<PhoneOutlined className="text-muted-foreground" />}
                  placeholder="Enter alternate mobile number"
                  size="large"
                  maxLength={10}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  { required: true, message: 'Please enter email address' },
                  { type: 'email', message: 'Please enter valid email address' },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="text-muted-foreground" />}
                  placeholder="Enter email address"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Alternate Email (Optional)"
                name="alternateEmail"
                rules={[
                  { type: 'email', message: 'Please enter valid email address' },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="text-muted-foreground" />}
                  placeholder="Enter alternate email"
                  size="large"
                />
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/* Important Note */}
        <div className="bg-warning/10 border border-warning/30 rounded-lg p-4">
          <p className="text-sm text-warning-foreground">
            <strong>Important:</strong> All SMS and email communications will be sent to the above contact details.
            Please ensure they are correct and active.
          </p>
        </div>
      </Form>
    </div>
  );
};

export default PersonalDetails;
