/**
 * Registration Form - PH2025 Exact Implementation
 * All field names match exactly with PH2025 project
 * NO exam validation - Direct registration form
 */

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Card, Alert, Row, Col, Typography, Space } from 'antd';
import { FormInput } from '@/shared/components/forms/FormInput';
import { FormSelect } from '@/shared/components/forms/FormSelect';
import { Button } from '@/shared/components/ui/Button';
import { useRegistration } from '../hooks/useRegistration';
import type { RegistrationFormData } from '../types/registration.types';
import './RegistrationForm.css';

const { Title, Text } = Typography;

// Validation Schema - Exact PH2025 validations
const registrationSchema = yup.object().shape({
  txtCandidateName: yup.string().required("Please Enter Candidate's Full Name."),
  txtFatherName: yup.string().required("Please Enter Father's Name."),
  txtMotherName: yup.string().required("Please Enter Mother's Name."),
  ddlGender: yup.string().required('Please Select Gender.').notOneOf(['0'], 'Please Select Gender.'),
  ddlGenderre: yup.string().required('Confirm Gender.').oneOf([yup.ref('ddlGender')], 'Gender and Confirm Gender Should be Same.'),
  txtDOB: yup.string().required('Please Select DOB.'),
  txtDOBC: yup.string().required('Confirm DOB.').oneOf([yup.ref('txtDOB')], 'Date of Birth and Confirm Date of Birth should be Same.'),
  ddlReligion: yup.string().required('Please Select Religion.').notOneOf(['0'], 'Please Select Religion.'),
  ddlRegion: yup.string().required('Please Select Region.').notOneOf(['0'], 'Please Select Region.'),
  ddlAnnualFamilyIncome: yup.string().required('Please Select Annual Family Income.').notOneOf(['0'], 'Please Select Annual Family Income.'),
  ddlMotherTongue: yup.string().required('Please Select Mother Tongue.').notOneOf(['0'], 'Please Select Mother Tongue.'),
  ddlNationality: yup.string().required('Please Select Nationality.').notOneOf(['0'], 'Please Select Nationality.'),
  txtCAdressLine1: yup.string().required('Please Enter Address Line 1.').max(50),
  txtCAdressLine2: yup.string().required('Please Enter Address Line 2.').max(50),
  txtCAdressLine3: yup.string().max(50),
  ddlCState: yup.string().required('Please Select State.').notOneOf(['0'], 'Please Select State.'),
  ddlCDistrict: yup.string().required('Please Select District.').notOneOf(['0'], 'Please Select District.'),
  ddlCTaluka: yup.string().required('Please Select Taluka.').notOneOf(['0'], 'Please Select Taluka.'),
  ddlCVillage: yup.string().required('Please Select Village.').notOneOf(['0'], 'Please Select Village.'),
  txtCPincode: yup.string().required('Please Enter Pincode.').matches(/^\d{6}$/, 'Pincode Should be of 6 Digits.'),
  txtMobileNo: yup.string().required('Please Enter Mobile No.').matches(/^[1-9]\d{9}$/, 'Mobile No Should be of 10 Digits.'),
  txtEMailID: yup.string().required('Please Enter E-Mail ID.').email('Please Enter Valid E-Mail ID.'),
  txtPassword: yup.string().required('Please Choose Password.').min(8).max(13)
    .matches(/^.*(?=^.{8,13}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$/,
      'Password must have uppercase, lowercase, number and special character'),
  txtConfirmPassword: yup.string().required('Confirm Password.').oneOf([yup.ref('txtPassword')], 'Passwords should be Same.'),
  txtSecurityPin: yup.string().required('Please Enter Captcha.'),
});

export const RegistrationForm: React.FC = () => {
  const { register: registerUser, isRegistering, registrationError } = useRegistration();

  const methods = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationSchema),
    defaultValues: {
      ddlGender: '0', ddlGenderre: '0', ddlReligion: '0', ddlRegion: '0',
      ddlAnnualFamilyIncome: '0', ddlMotherTongue: '0', ddlNationality: '0',
      ddlCState: '0', ddlCDistrict: '0', ddlCTaluka: '0', ddlCVillage: '0',
    }
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: RegistrationFormData) => {
    data.txtCandidateName = data.txtCandidateName.toUpperCase();
    data.txtFatherName = data.txtFatherName.toUpperCase();
    data.txtMotherName = data.txtMotherName.toUpperCase();
    await registerUser(data);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card title={<Title level={3} className="text-primary">New Candidate Registration</Title>} className="shadow-lg">
        {registrationError && <Alert message={registrationError} type="error" showIcon closable style={{ marginBottom: 16 }} />}

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>

            <Title level={4} style={{ background: '#f0f0f0', padding: 10, marginTop: 0 }}>Personal Details</Title>

            <Row gutter={16}>
              <Col span={24}>
                <FormInput name="txtCandidateName"
                  label={<>Candidate's Full Name<br/><Text type="secondary">उमेदवाराचे पूर्ण नाव</Text></>}
                  required
                  helpText="(As appeared on HSC Marksheet) (बारावी गुणपत्रिकेवर प्रकाशित केल्याप्रमाणे)" />
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <FormInput name="txtFatherName" label={<>Father's Name<br/><Text type="secondary">वडिलांचे नाव</Text></>} required />
              </Col>
              <Col xs={24} md={12}>
                <FormInput name="txtMotherName" label={<>Mother's Name<br/><Text type="secondary">आईचे नाव</Text></>} required />
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <FormSelect name="ddlGender" label={<>Gender<br/><Text type="secondary">लिंग</Text></>} required
                  options={[{value: '0', label: 'Select'}, {value: 'Male', label: 'Male'}, {value: 'Female', label: 'Female'}, {value: 'Transgender', label: 'Transgender'}]} />
              </Col>
              <Col xs={24} md={12}>
                <FormSelect name="ddlGenderre" label={<>Confirm Gender<br/><Text type="secondary">लिंग पुष्टी करा</Text></>} required
                  options={[{value: '0', label: 'Select'}, {value: 'Male', label: 'Male'}, {value: 'Female', label: 'Female'}, {value: 'Transgender', label: 'Transgender'}]} />
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <FormInput name="txtDOB" label={<>DOB (DD/MM/YYYY)<br/><Text type="secondary">जन्म तारीख</Text></>} required placeholder="DD/MM/YYYY" maxLength={10} />
              </Col>
              <Col xs={24} md={12}>
                <FormInput name="txtDOBC" label={<>Confirm DOB<br/><Text type="secondary">जन्म तारीख पुष्टी</Text></>} required placeholder="DD/MM/YYYY" maxLength={10} />
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <FormSelect name="ddlReligion" label={<>Religion<br/><Text type="secondary">धर्म</Text></>} required
                  options={[{value: '0', label: 'Select'}, {value: 'Hindu', label: 'Hindu'}, {value: 'Muslim', label: 'Muslim'}, {value: 'Christian', label: 'Christian'}, {value: 'Sikh', label: 'Sikh'}, {value: 'Buddhist', label: 'Buddhist'}, {value: 'Jain', label: 'Jain'}, {value: 'Others', label: 'Others'}]} />
              </Col>
              <Col xs={24} md={12}>
                <FormSelect name="ddlRegion" label={<>Region<br/><Text type="secondary">प्रदेश</Text></>} required
                  options={[{value: '0', label: 'Select'}, {value: 'Maharashtra', label: 'Maharashtra'}, {value: 'Outside Maharashtra', label: 'Outside Maharashtra'}, {value: 'Outside India', label: 'Outside India'}]} />
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <FormSelect name="ddlAnnualFamilyIncome" label={<>Annual Family Income<br/><Text type="secondary">वार्षिक कौटुंबिक उत्पन्न</Text></>} required
                  options={[{value: '0', label: 'Select'}, {value: 'Below 1 Lakh', label: 'Below 1 Lakh'}, {value: '1-2.5 Lakh', label: '1-2.5 Lakh'}, {value: '2.5-5 Lakh', label: '2.5-5 Lakh'}, {value: '5-8 Lakh', label: '5-8 Lakh'}, {value: 'Above 8 Lakh', label: 'Above 8 Lakh'}]} />
              </Col>
              <Col xs={24} md={12}>
                <FormSelect name="ddlMotherTongue" label={<>Mother Tongue<br/><Text type="secondary">मातृभाषा</Text></>} required
                  options={[{value: '0', label: 'Select'}, {value: 'Marathi', label: 'Marathi'}, {value: 'Hindi', label: 'Hindi'}, {value: 'English', label: 'English'}, {value: 'Others', label: 'Others'}]} />
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <FormSelect name="ddlNationality" label={<>Nationality<br/><Text type="secondary">राष्ट्रीयत्व</Text></>} required
                  options={[{value: '0', label: 'Select'}, {value: 'Indian', label: 'Indian'}, {value: 'Others', label: 'Others'}]} />
              </Col>
            </Row>

            <Title level={4} style={{ background: '#f0f0f0', padding: 10, marginTop: 20 }}>Communication Details</Title>

            <Row gutter={16}>
              <Col span={24}><FormInput name="txtCAdressLine1" label={<>Address Line 1<br/><Text type="secondary">पत्ता ओळ १</Text></>} required maxLength={50} helpText="Maximum 50 characters" /></Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}><FormInput name="txtCAdressLine2" label={<>Address Line 2<br/><Text type="secondary">पत्ता ओळ २</Text></>} required maxLength={50} /></Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}><FormInput name="txtCAdressLine3" label={<>Address Line 3<br/><Text type="secondary">पत्ता ओळ ३</Text></>} maxLength={50} /></Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <FormSelect name="ddlCState" label={<>State<br/><Text type="secondary">राज्य</Text></>} required options={[{value: '0', label: 'Select'}, {value: 'Maharashtra', label: 'Maharashtra'}]} />
              </Col>
              <Col xs={24} md={12}>
                <FormSelect name="ddlCDistrict" label={<>District<br/><Text type="secondary">जिल्हा</Text></>} required options={[{value: '0', label: 'Select'}, {value: 'Mumbai', label: 'Mumbai'}, {value: 'Pune', label: 'Pune'}]} />
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <FormSelect name="ddlCTaluka" label={<>Taluka<br/><Text type="secondary">तालुका</Text></>} required options={[{value: '0', label: 'Select'}, {value: 'Andheri', label: 'Andheri'}, {value: 'Borivali', label: 'Borivali'}, {value: 'Kurla', label: 'Kurla'}, {value: 'Haveli', label: 'Haveli'}, {value: 'Mulshi', label: 'Mulshi'}, {value: 'Bhor', label: 'Bhor'}]} />
              </Col>
              <Col xs={24} md={12}>
                <FormSelect name="ddlCVillage" label={<>Village<br/><Text type="secondary">गाव</Text></>} required options={[{value: '0', label: 'Select'}, {value: 'Andheri East', label: 'Andheri East'}, {value: 'Andheri West', label: 'Andheri West'}, {value: 'Borivali East', label: 'Borivali East'}, {value: 'Borivali West', label: 'Borivali West'}, {value: 'Kurla East', label: 'Kurla East'}, {value: 'Kurla West', label: 'Kurla West'}, {value: 'Shivajinagar', label: 'Shivajinagar'}, {value: 'Kothrud', label: 'Kothrud'}, {value: 'Warje', label: 'Warje'}]} />
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <FormInput name="txtCPincode" label={<>PIN Code<br/><Text type="secondary">पिन कोड</Text></>} required maxLength={6} />
              </Col>
              <Col xs={24} md={12}>
                <div style={{marginBottom: 20}}>
                  <label style={{display: 'block', marginBottom: 6}}>Telephone No<br/><Text type="secondary">दूरध्वनी क्रमांक</Text></label>
                  <Space.Compact style={{width: '100%'}}>
                    <FormInput name="txtSTDCode" placeholder="STD" maxLength={5} style={{width: '30%'}} />
                    <FormInput name="txtPhoneNo" placeholder="Phone" maxLength={8} style={{width: '70%'}} />
                  </Space.Compact>
                </div>
              </Col>
            </Row>

            <Alert message={<><strong>One Time Password (OTP) will be sent to the mobile number for activation.</strong><br/>Kindly make sure mobile number is correct. This will be used for all communications.<br/>One Mobile No for One Application Form.</>} type="warning" showIcon style={{margin: '16px 0'}} />

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <FormInput name="txtMobileNo" label={<>Mobile No<br/><Text type="secondary">भ्रमणध्वनी क्रमांक</Text></>} required maxLength={10} />
              </Col>
              <Col xs={24} md={12}>
                <FormInput name="txtEMailID" label={<>E-Mail ID<br/><Text type="secondary">ई - मेल आयडी</Text></>} required type="email" maxLength={100} />
              </Col>
            </Row>

            <Title level={4} style={{ background: '#f0f0f0', padding: 10, marginTop: 20 }}>Choose Password</Title>

            <Alert message={<div><strong>Password Policy:</strong><ul style={{marginTop:8,marginBottom:0}}><li>8 to 13 characters</li><li>One uppercase, one lowercase</li><li>One number, one special character (!@#$%^&*-)</li><li>No copy/paste allowed</li></ul></div>} type="info" style={{margin: '16px 0'}} />

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <FormInput name="txtPassword" label={<>Password<br/><Text type="secondary">संकेतशब्द</Text></>} required type="password" maxLength={13} />
              </Col>
              <Col xs={24} md={12}>
                <FormInput name="txtConfirmPassword" label={<>Confirm Password<br/><Text type="secondary">संकेतशब्द पुष्टी</Text></>} required type="password" maxLength={13} />
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <FormInput name="txtSecurityPin" label="Captcha (case sensitive)" required maxLength={5} style={{textTransform: 'uppercase'}} />
              </Col>
              <Col xs={24} md={12}>
                <div style={{border: '1px solid #d9d9d9', padding: 20, textAlign: 'center', marginTop: 30}}>
                  <Text strong style={{fontSize: 24, letterSpacing: 8}}>ABCD5</Text>
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={24} style={{textAlign: 'center', marginTop: 32}}>
                <Button type="primary" htmlType="submit" size="large" loading={isRegistering}>
                  {'Save & Proceed >>>'}
                </Button>
              </Col>
            </Row>

          </form>
        </FormProvider>
      </Card>
    </div>
  );
};

export default RegistrationForm;
