/**
 * Step 7: Additional Details
 * Extra information, achievements, emergency contact
 */

import React from 'react';
import { Form, Input, Select, Row, Col, Checkbox } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { updateAdditionalDetails } from '../../store/applicationSlice';

const { Option } = Select;
const { TextArea } = Input;

const AdditionalDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const additionalDetails = useAppSelector((state) => state.application.additionalDetails);
  const [form] = Form.useForm();
  const [hasGap, setHasGap] = React.useState(false);
  const [hasScholarship, setHasScholarship] = React.useState(false);

  React.useEffect(() => {
    if (additionalDetails) {
      form.setFieldsValue(additionalDetails);
      setHasGap(additionalDetails.hasGapInEducation || false);
      setHasScholarship(additionalDetails.hasScholarship || false);
    }
  }, [additionalDetails, form]);

  const handleChange = () => {
    const values = form.getFieldsValue();
    dispatch(updateAdditionalDetails(values));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <InfoCircleOutlined className="text-lg text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-foreground">Additional Information</h2>
          <p className="text-sm text-muted-foreground">Extra details and preferences</p>
        </div>
      </div>

      <Form form={form} layout="vertical" onValuesChange={handleChange}>
        {/* Gap in Education */}
        <div className="bg-muted/30 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Education Gap</h3>
          <Form.Item name="hasGapInEducation" valuePropName="checked">
            <Checkbox onChange={(e) => setHasGap(e.target.checked)}>
              I have a gap in my education
            </Checkbox>
          </Form.Item>
          {hasGap && (
            <Row gutter={16} className="mt-4">
              <Col xs={24} md={12}>
                <Form.Item label="Gap Years" name="gapYears">
                  <Input placeholder="Enter number of years" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="Reason for Gap" name="gapReason">
                  <Input placeholder="Enter reason" size="large" />
                </Form.Item>
              </Col>
            </Row>
          )}
        </div>

        {/* Hostel & Scholarship */}
        <div className="bg-muted/30 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Hostel & Financial Aid</h3>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item name="isHostelRequired" valuePropName="checked">
                <Checkbox>Hostel Accommodation Required</Checkbox>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item name="hasScholarship" valuePropName="checked">
                <Checkbox onChange={(e) => setHasScholarship(e.target.checked)}>
                  Currently Receiving Scholarship
                </Checkbox>
              </Form.Item>
            </Col>
          </Row>
          {hasScholarship && (
            <Row gutter={16} className="mt-4">
              <Col xs={24} md={12}>
                <Form.Item label="Scholarship Name" name="scholarshipName">
                  <Input placeholder="Enter scholarship name" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="Annual Amount" name="scholarshipAmount">
                  <Input placeholder="Enter amount" size="large" prefix="₹" />
                </Form.Item>
              </Col>
            </Row>
          )}
        </div>

        {/* Extra-Curricular */}
        <div className="bg-muted/30 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Extra-Curricular Activities</h3>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item label="Activities" name="extraCurricularActivities">
                <TextArea placeholder="List your extra-curricular activities" rows={3} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Achievements & Awards" name="achievements">
                <TextArea placeholder="List your achievements and awards" rows={3} />
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/* Personal Info */}
        <div className="bg-muted/30 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Personal Information</h3>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item label="Languages Known" name="languagesKnown">
                <Select mode="multiple" placeholder="Select languages" size="large">
                  <Option value="English">English</Option>
                  <Option value="Hindi">Hindi</Option>
                  <Option value="Marathi">Marathi</Option>
                  <Option value="Gujarati">Gujarati</Option>
                  <Option value="Tamil">Tamil</Option>
                  <Option value="Telugu">Telugu</Option>
                  <Option value="Kannada">Kannada</Option>
                  <Option value="Malayalam">Malayalam</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Blood Group" name="bloodGroup">
                <Select placeholder="Select blood group" size="large">
                  <Option value="A+">A+</Option>
                  <Option value="A-">A-</Option>
                  <Option value="B+">B+</Option>
                  <Option value="B-">B-</Option>
                  <Option value="AB+">AB+</Option>
                  <Option value="AB-">AB-</Option>
                  <Option value="O+">O+</Option>
                  <Option value="O-">O-</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/* Emergency Contact */}
        <div className="bg-muted/30 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Emergency Contact</h3>
          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Form.Item label="Contact Person Name" name="emergencyContactName" rules={[{ required: true }]}>
                <Input placeholder="Enter name" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item label="Relation" name="emergencyContactRelation" rules={[{ required: true }]}>
                <Input placeholder="Enter relation" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Mobile Number"
                name="emergencyContactNumber"
                rules={[
                  { required: true },
                  { pattern: /^[6-9]\d{9}$/, message: 'Enter valid mobile number' },
                ]}
              >
                <Input placeholder="Enter mobile number" size="large" maxLength={10} />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default AdditionalDetails;
