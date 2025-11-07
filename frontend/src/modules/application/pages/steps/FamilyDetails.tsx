/**
 * Step 2: Family Details
 * Parent and guardian information form
 */

import React from 'react';
import { Form, Input, Select, Row, Col } from 'antd';
import { TeamOutlined, DollarOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { updateFamilyDetails } from '../../store/applicationSlice';

const { Option } = Select;

const FamilyDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const familyDetails = useAppSelector((state) => state.application.familyDetails);
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (familyDetails) {
      form.setFieldsValue(familyDetails);
    }
  }, [familyDetails, form]);

  const handleChange = () => {
    const values = form.getFieldsValue();
    dispatch(updateFamilyDetails(values));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <TeamOutlined className="text-lg text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-foreground">Family Details</h2>
          <p className="text-sm text-muted-foreground">Parent and guardian information</p>
        </div>
      </div>

      <Form form={form} layout="vertical" onValuesChange={handleChange}>
        {/* Father Details */}
        <div className="bg-muted/30 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Father's Details</h3>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item label="Father's Name (English)" name="fatherName" rules={[{ required: true }]}>
                <Input placeholder="Enter father's name" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Father's Name (Marathi)" name="fatherNameMarathi">
                <Input placeholder="वडिलांचे नाव" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Occupation" name="fatherOccupation" rules={[{ required: true }]}>
                <Input placeholder="Enter occupation" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Annual Income" name="fatherIncome" rules={[{ required: true }]}>
                <Input prefix={<DollarOutlined />} placeholder="Enter annual income" size="large" />
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/* Mother Details */}
        <div className="bg-muted/30 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Mother's Details</h3>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item label="Mother's Name (English)" name="motherName" rules={[{ required: true }]}>
                <Input placeholder="Enter mother's name" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Mother's Name (Marathi)" name="motherNameMarathi">
                <Input placeholder="आईचे नाव" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Occupation" name="motherOccupation" rules={[{ required: true }]}>
                <Input placeholder="Enter occupation" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Annual Income" name="motherIncome" rules={[{ required: true }]}>
                <Input prefix={<DollarOutlined />} placeholder="Enter annual income" size="large" />
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/* Guardian Details (Optional) */}
        <div className="bg-muted/30 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Guardian Details (If Applicable)</h3>
          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Form.Item label="Guardian Name" name="guardianName">
                <Input placeholder="Enter guardian name" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item label="Relation" name="guardianRelation">
                <Input placeholder="Enter relation" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item label="Mobile Number" name="guardianMobile">
                <Input placeholder="Enter mobile number" size="large" maxLength={10} />
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/* Income Certificate */}
        <div className="bg-muted/30 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Income Certificate Details</h3>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item label="Annual Family Income" name="annualFamilyIncome" rules={[{ required: true }]}>
                <Select placeholder="Select income range" size="large">
                  <Option value="Below 1 Lakh">Below ₹1 Lakh</Option>
                  <Option value="1-2.5 Lakh">₹1 - 2.5 Lakh</Option>
                  <Option value="2.5-5 Lakh">₹2.5 - 5 Lakh</Option>
                  <Option value="5-8 Lakh">₹5 - 8 Lakh</Option>
                  <Option value="Above 8 Lakh">Above ₹8 Lakh</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Income Certificate Number" name="incomeCertificateNumber">
                <Input placeholder="Enter certificate number (if any)" size="large" />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default FamilyDetails;
