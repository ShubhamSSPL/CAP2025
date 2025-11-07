/**
 * Step 5: HSC Details
 * 12th standard / HSC examination details
 */

import React from 'react';
import { Form, Input, Select, Row, Col } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { updateHSCDetails } from '../../store/applicationSlice';

const { Option } = Select;
const { TextArea } = Input;

const HSCDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const hscDetails = useAppSelector((state) => state.application.hscDetails);
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (hscDetails) {
      form.setFieldsValue(hscDetails);
    }
  }, [hscDetails, form]);

  const handleChange = () => {
    const values = form.getFieldsValue();
    dispatch(updateHSCDetails(values));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <BookOutlined className="text-lg text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-foreground">HSC / 12th Standard Details</h2>
          <p className="text-sm text-muted-foreground">Higher Secondary Certificate information</p>
        </div>
      </div>

      <Form form={form} layout="vertical" onValuesChange={handleChange}>
        <div className="bg-muted/30 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Board & School Information</h3>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item label="Board Name" name="boardName" rules={[{ required: true }]}>
                <Select placeholder="Select board" size="large">
                  <Option value="Maharashtra State Board">Maharashtra State Board</Option>
                  <Option value="CBSE">CBSE</Option>
                  <Option value="ICSE">ICSE</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="School Name" name="schoolName" rules={[{ required: true }]}>
                <Input placeholder="Enter school name" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="School Address" name="schoolAddress" rules={[{ required: true }]}>
                <TextArea placeholder="Enter complete school address" rows={2} />
              </Form.Item>
            </Col>
          </Row>
        </div>

        <div className="bg-muted/30 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Examination Details</h3>
          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Form.Item label="Passing Year" name="passingYear" rules={[{ required: true }]}>
                <Select placeholder="Select year" size="large">
                  <Option value="2025">2025</Option>
                  <Option value="2024">2024</Option>
                  <Option value="2023">2023</Option>
                  <Option value="2022">2022</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item label="Month of Passing" name="monthOfPassing" rules={[{ required: true }]}>
                <Select placeholder="Select month" size="large">
                  <Option value="March">March</Option>
                  <Option value="April">April</Option>
                  <Option value="May">May</Option>
                  <Option value="June">June</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item label="Seat Number" name="seatNumber" rules={[{ required: true }]}>
                <Input placeholder="Enter seat number" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={6}>
              <Form.Item label="Attempt Number" name="attemptNumber" rules={[{ required: true }]}>
                <Select placeholder="Select" size="large">
                  <Option value="1">First Attempt</Option>
                  <Option value="2">Second Attempt</Option>
                  <Option value="3">Third Attempt</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </div>

        <div className="bg-muted/30 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Subject Marks (Out of 100)</h3>
          <Row gutter={16}>
            <Col xs={24} md={6}>
              <Form.Item label="Physics" name="physicsMarks" rules={[{ required: true }]}>
                <Input placeholder="Marks" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={6}>
              <Form.Item label="Chemistry" name="chemistryMarks" rules={[{ required: true }]}>
                <Input placeholder="Marks" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={6}>
              <Form.Item label="Mathematics" name="mathematicsMarks" rules={[{ required: true }]}>
                <Input placeholder="Marks" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={6}>
              <Form.Item label="Biology (if any)" name="biologyMarks">
                <Input placeholder="Marks" size="large" />
              </Form.Item>
            </Col>
          </Row>
        </div>

        <div className="bg-muted/30 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Overall Performance</h3>
          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Form.Item label="Total Marks Obtained" name="totalMarks" rules={[{ required: true }]}>
                <Input placeholder="Enter total marks" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item label="Percentage (%)" name="percentage" rules={[{ required: true }]}>
                <Input placeholder="Enter percentage" size="large" suffix="%" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item label="Grade (if applicable)" name="gradeObtained">
                <Input placeholder="Enter grade" size="large" />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default HSCDetails;
