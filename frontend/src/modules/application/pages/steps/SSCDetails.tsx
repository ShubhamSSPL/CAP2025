/**
 * Step 6: SSC Details
 * 10th standard / SSC examination details
 */

import React from 'react';
import { Form, Input, Select, Row, Col } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { updateSSCDetails } from '../../store/applicationSlice';

const { Option } = Select;
const { TextArea } = Input;

const SSCDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const sscDetails = useAppSelector((state) => state.application.sscDetails);
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (sscDetails) {
      form.setFieldsValue(sscDetails);
    }
  }, [sscDetails, form]);

  const handleChange = () => {
    const values = form.getFieldsValue();
    dispatch(updateSSCDetails(values));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <ReadOutlined className="text-lg text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-foreground">SSC / 10th Standard Details</h2>
          <p className="text-sm text-muted-foreground">Secondary School Certificate information</p>
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
                  {Array.from({ length: 10 }, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                      <Option key={year} value={year.toString()}>
                        {year}
                      </Option>
                    );
                  })}
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

export default SSCDetails;
