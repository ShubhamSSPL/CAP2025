/**
 * Step 4: Qualifying Exam Details
 * MHT-CET, JEE, NEET exam details
 */

import React from 'react';
import { Form, Input, Select, Row, Col } from 'antd';
import { FileDoneOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { updateQualifyingExamDetails } from '../../store/applicationSlice';

const { Option } = Select;

const QualifyingExamDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const examDetails = useAppSelector((state) => state.application.qualifyingExamDetails);
  const [form] = Form.useForm();
  const [examType, setExamType] = React.useState('MHT-CET');

  React.useEffect(() => {
    if (examDetails) {
      form.setFieldsValue(examDetails);
      setExamType(examDetails.examName || 'MHT-CET');
    }
  }, [examDetails, form]);

  const handleChange = () => {
    const values = form.getFieldsValue();
    dispatch(updateQualifyingExamDetails(values));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <FileDoneOutlined className="text-lg text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-foreground">Qualifying Examination Details</h2>
          <p className="text-sm text-muted-foreground">Entrance exam information</p>
        </div>
      </div>

      <Form form={form} layout="vertical" onValuesChange={handleChange}>
        <div className="bg-muted/30 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Exam Information</h3>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item label="Qualifying Exam" name="examName" rules={[{ required: true }]}>
                <Select
                  placeholder="Select exam"
                  size="large"
                  onChange={(value) => setExamType(value)}
                >
                  <Option value="MHT-CET">MHT-CET</Option>
                  <Option value="JEE-Main">JEE Main</Option>
                  <Option value="NEET">NEET</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Roll Number" name="examRollNumber" rules={[{ required: true }]}>
                <Input placeholder="Enter roll number" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Exam Year" name="examYear" rules={[{ required: true }]}>
                <Select placeholder="Select year" size="large">
                  <Option value="2025">2025</Option>
                  <Option value="2024">2024</Option>
                  <Option value="2023">2023</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </div>

        <div className="bg-muted/30 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Subject Marks</h3>
          <Row gutter={16}>
            {(examType === 'MHT-CET' || examType === 'JEE-Main') && (
              <>
                <Col xs={24} md={8}>
                  <Form.Item label="Physics Marks" name="physicsMarks" rules={[{ required: true }]}>
                    <Input placeholder="Enter marks" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Chemistry Marks" name="chemistryMarks" rules={[{ required: true }]}>
                    <Input placeholder="Enter marks" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Mathematics Marks" name="mathematicsMarks" rules={[{ required: true }]}>
                    <Input placeholder="Enter marks" size="large" />
                  </Form.Item>
                </Col>
              </>
            )}
            {examType === 'NEET' && (
              <>
                <Col xs={24} md={8}>
                  <Form.Item label="Physics Marks" name="physicsMarks" rules={[{ required: true }]}>
                    <Input placeholder="Enter marks" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Chemistry Marks" name="chemistryMarks" rules={[{ required: true }]}>
                    <Input placeholder="Enter marks" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Biology Marks" name="biologyMarks" rules={[{ required: true }]}>
                    <Input placeholder="Enter marks" size="large" />
                  </Form.Item>
                </Col>
              </>
            )}
            <Col xs={24} md={12}>
              <Form.Item label="Total Marks" name="totalMarks" rules={[{ required: true }]}>
                <Input placeholder="Enter total marks" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Percentile" name="percentile">
                <Input placeholder="Enter percentile" size="large" />
              </Form.Item>
            </Col>
          </Row>
        </div>

        <div className="bg-muted/30 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Rank Details</h3>
          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Form.Item label="Overall Rank" name="rank">
                <Input placeholder="Enter rank" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item label="All India Rank" name="allIndiaRank">
                <Input placeholder="Enter AIR" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item label="State Rank" name="stateRank">
                <Input placeholder="Enter state rank" size="large" />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default QualifyingExamDetails;
