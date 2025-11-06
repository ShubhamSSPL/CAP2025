/**
 * Registration Form - Modern UI Implementation
 * Streamlined registration with modern design
 */

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Alert, Row, Col } from 'antd';
import { UserAddOutlined, InfoCircleOutlined, LockOutlined, HomeOutlined } from '@ant-design/icons';
import { FormInput } from '@/shared/components/forms/FormInput';
import { FormSelect } from '@/shared/components/forms/FormSelect';
import { Button } from '@/shared/components/ui/Button';
import { useRegistration } from '../hooks/useRegistration';
import type { RegistrationFormData } from '../types/registration.types';
import './RegistrationForm.css';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 shadow-glow">
              <UserAddOutlined className="text-3xl text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-2">Candidate Registration</h1>
          <p className="text-dark-600">Complete the form below to register for admission</p>
        </div>

        {/* Demo Mode Notice */}
        <Alert
          message={
            <div className="flex items-start gap-3">
              <InfoCircleOutlined className="text-lg mt-0.5" />
              <div>
                <div className="font-semibold mb-1">Demo Mode Active</div>
                <div className="text-sm">This is a demo version. Fill the form with any valid data. You'll receive an Application ID after submission.</div>
              </div>
            </div>
          }
          type="info"
          className="mb-6 border-primary-200 bg-primary-50"
        />

        {registrationError && <Alert message={registrationError} type="error" showIcon closable className="mb-6" />}

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Personal Details Section */}
            <div className="bg-white rounded-2xl shadow-medium p-6 md:p-8 mb-6 border border-dark-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dark-100">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <UserAddOutlined className="text-xl text-primary-600" />
                </div>
                <h2 className="text-xl font-bold text-dark-900">Personal Details</h2>
              </div>

              <Row gutter={[16, 8]}>
                <Col span={24}>
                  <FormInput name="txtCandidateName" label="Candidate's Full Name" required
                    helpText="As appeared on HSC Marksheet" />
                </Col>
              </Row>

              <Row gutter={[16, 8]}>
                <Col xs={24} md={12}>
                  <FormInput name="txtFatherName" label="Father's Name" required />
                </Col>
                <Col xs={24} md={12}>
                  <FormInput name="txtMotherName" label="Mother's Name" required />
                </Col>
              </Row>

              <Row gutter={[16, 8]}>
                <Col xs={24} md={8}>
                  <FormSelect name="ddlGender" label="Gender" required
                    options={[{value: '0', label: 'Select'}, {value: 'Male', label: 'Male'}, {value: 'Female', label: 'Female'}, {value: 'Transgender', label: 'Transgender'}]} />
                </Col>
                <Col xs={24} md={8}>
                  <FormInput name="txtDOB" label="Date of Birth" required placeholder="DD/MM/YYYY" maxLength={10} />
                </Col>
                <Col xs={24} md={8}>
                  <FormInput name="txtDOBC" label="Confirm DOB" required placeholder="DD/MM/YYYY" maxLength={10} />
                </Col>
              </Row>

              <Row gutter={[16, 8]}>
                <Col xs={24} md={8}>
                  <FormSelect name="ddlGenderre" label="Confirm Gender" required
                    options={[{value: '0', label: 'Select'}, {value: 'Male', label: 'Male'}, {value: 'Female', label: 'Female'}, {value: 'Transgender', label: 'Transgender'}]} />
                </Col>
                <Col xs={24} md={8}>
                  <FormSelect name="ddlReligion" label="Religion" required
                    options={[{value: '0', label: 'Select'}, {value: 'Hindu', label: 'Hindu'}, {value: 'Muslim', label: 'Muslim'}, {value: 'Christian', label: 'Christian'}, {value: 'Sikh', label: 'Sikh'}, {value: 'Buddhist', label: 'Buddhist'}, {value: 'Jain', label: 'Jain'}, {value: 'Others', label: 'Others'}]} />
                </Col>
                <Col xs={24} md={8}>
                  <FormSelect name="ddlRegion" label="Region" required
                    options={[{value: '0', label: 'Select'}, {value: 'Maharashtra', label: 'Maharashtra'}, {value: 'Outside Maharashtra', label: 'Outside Maharashtra'}, {value: 'Outside India', label: 'Outside India'}]} />
                </Col>
              </Row>

              <Row gutter={[16, 8]}>
                <Col xs={24} md={8}>
                  <FormSelect name="ddlAnnualFamilyIncome" label="Annual Family Income" required
                    options={[{value: '0', label: 'Select'}, {value: 'Below 1 Lakh', label: 'Below 1 Lakh'}, {value: '1-2.5 Lakh', label: '1-2.5 Lakh'}, {value: '2.5-5 Lakh', label: '2.5-5 Lakh'}, {value: '5-8 Lakh', label: '5-8 Lakh'}, {value: 'Above 8 Lakh', label: 'Above 8 Lakh'}]} />
                </Col>
                <Col xs={24} md={8}>
                  <FormSelect name="ddlMotherTongue" label="Mother Tongue" required
                    options={[{value: '0', label: 'Select'}, {value: 'Marathi', label: 'Marathi'}, {value: 'Hindi', label: 'Hindi'}, {value: 'English', label: 'English'}, {value: 'Others', label: 'Others'}]} />
                </Col>
                <Col xs={24} md={8}>
                  <FormSelect name="ddlNationality" label="Nationality" required
                    options={[{value: '0', label: 'Select'}, {value: 'Indian', label: 'Indian'}, {value: 'Others', label: 'Others'}]} />
                </Col>
              </Row>
            </div>

            {/* Communication Details Section */}
            <div className="bg-white rounded-2xl shadow-medium p-6 md:p-8 mb-6 border border-dark-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dark-100">
                <div className="w-10 h-10 rounded-lg bg-secondary-100 flex items-center justify-center">
                  <HomeOutlined className="text-xl text-secondary-600" />
                </div>
                <h2 className="text-xl font-bold text-dark-900">Communication Details</h2>
              </div>

              <Row gutter={[16, 8]}>
                <Col xs={24} md={8}>
                  <FormInput name="txtCAdressLine1" label="Address Line 1" required maxLength={50} />
                </Col>
                <Col xs={24} md={8}>
                  <FormInput name="txtCAdressLine2" label="Address Line 2" required maxLength={50} />
                </Col>
                <Col xs={24} md={8}>
                  <FormInput name="txtCAdressLine3" label="Address Line 3 (Optional)" maxLength={50} />
                </Col>
              </Row>

              <Row gutter={[16, 8]}>
                <Col xs={24} md={6}>
                  <FormSelect name="ddlCState" label="State" required options={[{value: '0', label: 'Select'}, {value: 'Maharashtra', label: 'Maharashtra'}]} />
                </Col>
                <Col xs={24} md={6}>
                  <FormSelect name="ddlCDistrict" label="District" required options={[{value: '0', label: 'Select'}, {value: 'Mumbai', label: 'Mumbai'}, {value: 'Pune', label: 'Pune'}]} />
                </Col>
                <Col xs={24} md={6}>
                  <FormSelect name="ddlCTaluka" label="Taluka" required options={[
                    {value: '0', label: 'Select'}, {value: 'Andheri', label: 'Andheri'}, {value: 'Borivali', label: 'Borivali'},
                    {value: 'Haveli', label: 'Haveli'}, {value: 'Mulshi', label: 'Mulshi'}, {value: 'Bhor', label: 'Bhor'}
                  ]} />
                </Col>
                <Col xs={24} md={6}>
                  <FormSelect name="ddlCVillage" label="Village/City" required options={[
                    {value: '0', label: 'Select'}, {value: 'Churchgate', label: 'Churchgate'}, {value: 'Dadar', label: 'Dadar'},
                    {value: 'Kothrud', label: 'Kothrud'}, {value: 'Shivajinagar', label: 'Shivajinagar'}, {value: 'Katraj', label: 'Katraj'}
                  ]} />
                </Col>
              </Row>

              <Row gutter={[16, 8]}>
                <Col xs={24} md={12}>
                  <FormInput name="txtCPincode" label="PIN Code" required maxLength={6} placeholder="6-digit pincode" />
                </Col>
                <Col xs={24} md={12}>
                  <div className="mb-4">
                    <label className="block mb-1.5 text-sm font-medium text-dark-700">Telephone No (Optional)</label>
                    <div className="flex gap-2">
                      <FormInput name="txtSTDCode" placeholder="STD" maxLength={5} style={{width: '30%'}} />
                      <FormInput name="txtPhoneNo" placeholder="Phone" maxLength={8} style={{width: '70%'}} />
                    </div>
                  </div>
                </Col>
              </Row>

              <Alert message={
                <div>
                  <strong className="text-yellow-900">Important:</strong> OTP will be sent to your mobile number for verification.
                  Ensure it's correct. One mobile number per application.
                </div>
              } type="warning" showIcon className="mb-4" />

              <Row gutter={[16, 8]}>
                <Col xs={24} md={12}>
                  <FormInput name="txtMobileNo" label="Mobile Number" required maxLength={10} placeholder="10-digit mobile" />
                </Col>
                <Col xs={24} md={12}>
                  <FormInput name="txtEMailID" label="Email Address" required type="email" maxLength={100} placeholder="your.email@example.com" />
                </Col>
              </Row>
            </div>

            {/* Password Section */}
            <div className="bg-white rounded-2xl shadow-medium p-6 md:p-8 mb-6 border border-dark-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dark-100">
                <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center">
                  <LockOutlined className="text-xl text-accent-600" />
                </div>
                <h2 className="text-xl font-bold text-dark-900">Choose Password</h2>
              </div>

              <Alert message={
                <div>
                  <strong>Password Requirements:</strong>
                  <ul className="mt-2 mb-0 ml-4 text-sm space-y-1">
                    <li>8 to 13 characters long</li>
                    <li>At least one uppercase and one lowercase letter</li>
                    <li>At least one number and one special character (!@#$%^&*-)</li>
                  </ul>
                </div>
              } type="info" className="mb-4" />

              <Row gutter={[16, 8]}>
                <Col xs={24} md={12}>
                  <FormInput name="txtPassword" label="Password" required type="password" maxLength={13} placeholder="Choose a strong password" />
                </Col>
                <Col xs={24} md={12}>
                  <FormInput name="txtConfirmPassword" label="Confirm Password" required type="password" maxLength={13} placeholder="Re-enter password" />
                </Col>
              </Row>

              <Row gutter={[16, 8]} className="items-end">
                <Col xs={24} md={12}>
                  <FormInput name="txtSecurityPin" label="Enter Captcha" required maxLength={5} placeholder="Type the code shown" style={{textTransform: 'uppercase'}} />
                </Col>
                <Col xs={24} md={12}>
                  <div className="border-2 border-dashed border-primary-300 bg-primary-50 rounded-lg p-4 text-center mb-4">
                    <span className="text-2xl font-bold text-primary-700 tracking-[0.5em]">ABCD5</span>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Submit Button */}
            <div className="text-center py-4">
              <Button type="primary" htmlType="submit" size="large" loading={isRegistering}
                className="px-12 py-6 text-lg font-semibold bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-large">
                Save & Proceed →
              </Button>
            </div>

          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default RegistrationForm;
