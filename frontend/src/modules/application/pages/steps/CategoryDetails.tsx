/**
 * Step 3: Category Details
 * Caste, category, and reservation information
 */

import React from 'react';
import { Form, Input, Select, DatePicker, Row, Col, Checkbox } from 'antd';
import { TagsOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { updateCategoryDetails } from '../../store/applicationSlice';
import dayjs from 'dayjs';

const { Option } = Select;

const CategoryDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const categoryDetails = useAppSelector((state) => state.application.categoryDetails);
  const [form] = Form.useForm();
  const [showCasteCertificate, setShowCasteCertificate] = React.useState(false);
  const [showMinority, setShowMinority] = React.useState(false);
  const [showDisability, setShowDisability] = React.useState(false);
  const [showDefence, setShowDefence] = React.useState(false);
  const [showSports, setShowSports] = React.useState(false);

  React.useEffect(() => {
    if (categoryDetails) {
      form.setFieldsValue({
        ...categoryDetails,
        casteCertificateIssueDate: categoryDetails.casteCertificateIssueDate
          ? dayjs(categoryDetails.casteCertificateIssueDate)
          : undefined,
      });
      setShowCasteCertificate(categoryDetails.category !== 'OPEN');
      setShowMinority(categoryDetails.isMinority || false);
      setShowDisability(categoryDetails.isDifferentlyAbled || false);
      setShowDefence(categoryDetails.isDefencePersonDependant || false);
      setShowSports(categoryDetails.isSportsQuota || false);
    }
  }, [categoryDetails, form]);

  const handleChange = () => {
    const values = form.getFieldsValue();
    dispatch(updateCategoryDetails({
      ...values,
      casteCertificateIssueDate: values.casteCertificateIssueDate?.format('YYYY-MM-DD'),
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <TagsOutlined className="text-lg text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-foreground">Category Details</h2>
          <p className="text-sm text-muted-foreground">Reservation and category information</p>
        </div>
      </div>

      <Form form={form} layout="vertical" onValuesChange={handleChange}>
        {/* Category Selection */}
        <div className="bg-muted/30 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Category Information</h3>
          <Row gutter={16}>
            <Col xs={24}>
              <Form.Item label="Category" name="category" rules={[{ required: true }]}>
                <Select
                  placeholder="Select your category"
                  size="large"
                  onChange={(value) => setShowCasteCertificate(value !== 'OPEN')}
                >
                  <Option value="OPEN">OPEN (General)</Option>
                  <Option value="OBC">OBC (Other Backward Class)</Option>
                  <Option value="SC">SC (Scheduled Caste)</Option>
                  <Option value="ST">ST (Scheduled Tribe)</Option>
                  <Option value="NT-A">NT-A (Nomadic Tribes A)</Option>
                  <Option value="NT-B">NT-B (Nomadic Tribes B)</Option>
                  <Option value="NT-C">NT-C (Nomadic Tribes C)</Option>
                  <Option value="NT-D">NT-D (Nomadic Tribes D)</Option>
                  <Option value="SBC">SBC (Special Backward Class)</Option>
                  <Option value="VJ/DT-A">VJ/DT-A (Vimukta Jati/Denotified Tribes)</Option>
                  <Option value="EWS">EWS (Economically Weaker Section)</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/* Caste Certificate (if not OPEN) */}
        {showCasteCertificate && (
          <div className="bg-muted/30 rounded-lg p-4 mb-4">
            <h3 className="text-sm font-semibold text-foreground mb-4">Caste Certificate Details</h3>
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item label="Certificate Number" name="casteCertificateNumber" rules={[{ required: true }]}>
                  <Input placeholder="Enter certificate number" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="Issue Date" name="casteCertificateIssueDate" rules={[{ required: true }]}>
                  <DatePicker className="w-full" size="large" format="DD/MM/YYYY" />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item label="Issuing Authority" name="casteCertificateIssuingAuthority" rules={[{ required: true }]}>
                  <Input placeholder="Enter issuing authority name" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="Validity Certificate Number" name="validityCertificateNumber">
                  <Input placeholder="Enter validity certificate (if any)" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="Non-Creamy Layer Certificate" name="nonCreamyLayerCertificate">
                  <Input placeholder="Certificate number (for OBC/SBC)" size="large" />
                </Form.Item>
              </Col>
            </Row>
          </div>
        )}

        {/* Special Categories */}
        <div className="bg-muted/30 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Special Categories</h3>
          <div className="space-y-4">
            {/* Minority */}
            <div>
              <Form.Item name="isMinority" valuePropName="checked">
                <Checkbox onChange={(e) => setShowMinority(e.target.checked)}>
                  Belong to Minority Community
                </Checkbox>
              </Form.Item>
              {showMinority && (
                <Form.Item label="Minority Type" name="minorityType" className="ml-6">
                  <Select placeholder="Select minority type" size="large">
                    <Option value="Muslim">Muslim</Option>
                    <Option value="Christian">Christian</Option>
                    <Option value="Buddhist">Buddhist</Option>
                    <Option value="Sikh">Sikh</Option>
                    <Option value="Jain">Jain</Option>
                    <Option value="Parsi">Parsi</Option>
                  </Select>
                </Form.Item>
              )}
            </div>

            {/* Differently Abled */}
            <div>
              <Form.Item name="isDifferentlyAbled" valuePropName="checked">
                <Checkbox onChange={(e) => setShowDisability(e.target.checked)}>
                  Differently Abled (Divyang)
                </Checkbox>
              </Form.Item>
              {showDisability && (
                <Row gutter={16} className="ml-6">
                  <Col xs={24} md={12}>
                    <Form.Item label="Disability Type" name="disabilityType">
                      <Select placeholder="Select disability type" size="large">
                        <Option value="Locomotor">Locomotor Disability</Option>
                        <Option value="Visual">Visual Impairment</Option>
                        <Option value="Hearing">Hearing Impairment</Option>
                        <Option value="Other">Other</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Disability Percentage" name="disabilityPercentage">
                      <Input placeholder="Enter percentage" size="large" suffix="%" />
                    </Form.Item>
                  </Col>
                </Row>
              )}
            </div>

            {/* Defence */}
            <div>
              <Form.Item name="isDefencePersonDependant" valuePropName="checked">
                <Checkbox onChange={(e) => setShowDefence(e.target.checked)}>
                  Defence Personnel Dependant
                </Checkbox>
              </Form.Item>
              {showDefence && (
                <Form.Item label="Defence Category" name="defenceCategory" className="ml-6">
                  <Select placeholder="Select category" size="large">
                    <Option value="Ex-Serviceman">Ex-Serviceman</Option>
                    <Option value="Son/Daughter of Ex-Serviceman">Son/Daughter of Ex-Serviceman</Option>
                    <Option value="War Widow">War Widow</Option>
                  </Select>
                </Form.Item>
              )}
            </div>

            {/* Orphan */}
            <Form.Item name="isOrphan" valuePropName="checked">
              <Checkbox>Orphan</Checkbox>
            </Form.Item>

            {/* Sports Quota */}
            <div>
              <Form.Item name="isSportsQuota" valuePropName="checked">
                <Checkbox onChange={(e) => setShowSports(e.target.checked)}>
                  Sports Quota
                </Checkbox>
              </Form.Item>
              {showSports && (
                <Form.Item label="Sports Type" name="sportsType" className="ml-6">
                  <Input placeholder="Enter sport name" size="large" />
                </Form.Item>
              )}
            </div>
          </div>
        </div>

        <div className="bg-warning/10 border border-warning/30 rounded-lg p-4">
          <p className="text-sm text-warning-foreground">
            <strong>Important:</strong> Upload scanned copies of all certificates in the Document Upload section.
            Invalid or fake certificates will lead to cancellation of admission.
          </p>
        </div>
      </Form>
    </div>
  );
};

export default CategoryDetails;
