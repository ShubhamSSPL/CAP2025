/**
 * Registration Form - Unified UI with shadcn/ui
 * Streamlined registration with consistent design
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UserAddOutlined, InfoCircleOutlined, LockOutlined, HomeOutlined } from '@ant-design/icons';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Card, CardContent } from '@/shared/components/ui/card';
import FormContainer from '@/shared/components/FormContainer';
import { useRegistration } from '../hooks/useRegistration';
import type { RegistrationFormData } from '../types/registration.types';

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

  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationSchema),
    defaultValues: {
      ddlGender: '0', ddlGenderre: '0', ddlReligion: '0', ddlRegion: '0',
      ddlAnnualFamilyIncome: '0', ddlMotherTongue: '0', ddlNationality: '0',
      ddlCState: '0', ddlCDistrict: '0', ddlCTaluka: '0', ddlCVillage: '0',
    }
  });

  const onSubmit = async (data: RegistrationFormData) => {
    data.txtCandidateName = data.txtCandidateName.toUpperCase();
    data.txtFatherName = data.txtFatherName.toUpperCase();
    data.txtMotherName = data.txtMotherName.toUpperCase();
    await registerUser(data);
  };

  return (
    <FormContainer
      title="Candidate Registration"
      description="Complete the form below to register for admission"
      icon={<UserAddOutlined className="text-3xl text-white" />}
      maxWidth="4xl"
    >
      {/* Demo Mode Notice */}
      <Card className="mb-6" style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-primary)' }}>
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <InfoCircleOutlined className="text-lg mt-0.5" style={{ color: 'var(--color-primary)' }} />
            <div>
              <div className="font-semibold text-sm" style={{ color: 'var(--color-foreground)' }}>Demo Mode Active</div>
              <div className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
                Fill the form with any valid data. You'll receive an Application ID after submission.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {registrationError && (
        <Card className="mb-6" style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-error)' }}>
          <CardContent className="pt-6">
            <p className="text-sm" style={{ color: 'var(--color-error)' }}>{registrationError}</p>
          </CardContent>
        </Card>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Personal Details Section */}
        <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                <UserAddOutlined className="text-lg text-white" />
              </div>
              <h2 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Personal Details</h2>
            </div>

            <div className="space-y-4">
              {/* Candidate Name */}
              <div className="space-y-2">
                <Label htmlFor="txtCandidateName">Candidate's Full Name *</Label>
                <Input id="txtCandidateName" {...register('txtCandidateName')} placeholder="As appeared on HSC Marksheet" />
                {errors.txtCandidateName && (
                  <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.txtCandidateName.message}</p>
                )}
              </div>

              {/* Father & Mother Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="txtFatherName">Father's Name *</Label>
                  <Input id="txtFatherName" {...register('txtFatherName')} />
                  {errors.txtFatherName && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.txtFatherName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="txtMotherName">Mother's Name *</Label>
                  <Input id="txtMotherName" {...register('txtMotherName')} />
                  {errors.txtMotherName && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.txtMotherName.message}</p>
                  )}
                </div>
              </div>

              {/* Gender, DOB, Confirm DOB */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ddlGender">Gender *</Label>
                  <select id="ddlGender" {...register('ddlGender')} className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}>
                    <option value="0">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                  </select>
                  {errors.ddlGender && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.ddlGender.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="txtDOB">Date of Birth *</Label>
                  <Input id="txtDOB" {...register('txtDOB')} placeholder="DD/MM/YYYY" maxLength={10} />
                  {errors.txtDOB && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.txtDOB.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="txtDOBC">Confirm DOB *</Label>
                  <Input id="txtDOBC" {...register('txtDOBC')} placeholder="DD/MM/YYYY" maxLength={10} />
                  {errors.txtDOBC && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.txtDOBC.message}</p>
                  )}
                </div>
              </div>

              {/* Confirm Gender, Religion, Region */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ddlGenderre">Confirm Gender *</Label>
                  <select id="ddlGenderre" {...register('ddlGenderre')} className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}>
                    <option value="0">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                  </select>
                  {errors.ddlGenderre && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.ddlGenderre.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ddlReligion">Religion *</Label>
                  <select id="ddlReligion" {...register('ddlReligion')} className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}>
                    <option value="0">Select</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Christian">Christian</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Buddhist">Buddhist</option>
                    <option value="Jain">Jain</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.ddlReligion && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.ddlReligion.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ddlRegion">Region *</Label>
                  <select id="ddlRegion" {...register('ddlRegion')} className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}>
                    <option value="0">Select</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Outside Maharashtra">Outside Maharashtra</option>
                    <option value="Outside India">Outside India</option>
                  </select>
                  {errors.ddlRegion && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.ddlRegion.message}</p>
                  )}
                </div>
              </div>

              {/* Income, Mother Tongue, Nationality */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ddlAnnualFamilyIncome">Annual Family Income *</Label>
                  <select id="ddlAnnualFamilyIncome" {...register('ddlAnnualFamilyIncome')} className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}>
                    <option value="0">Select</option>
                    <option value="Below 1 Lakh">Below 1 Lakh</option>
                    <option value="1-2.5 Lakh">1-2.5 Lakh</option>
                    <option value="2.5-5 Lakh">2.5-5 Lakh</option>
                    <option value="5-8 Lakh">5-8 Lakh</option>
                    <option value="Above 8 Lakh">Above 8 Lakh</option>
                  </select>
                  {errors.ddlAnnualFamilyIncome && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.ddlAnnualFamilyIncome.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ddlMotherTongue">Mother Tongue *</Label>
                  <select id="ddlMotherTongue" {...register('ddlMotherTongue')} className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}>
                    <option value="0">Select</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.ddlMotherTongue && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.ddlMotherTongue.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ddlNationality">Nationality *</Label>
                  <select id="ddlNationality" {...register('ddlNationality')} className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}>
                    <option value="0">Select</option>
                    <option value="Indian">Indian</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.ddlNationality && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.ddlNationality.message}</p>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Communication Details Section */}
        <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-secondary)' }}>
                <HomeOutlined className="text-lg text-white" />
              </div>
              <h2 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Communication Details</h2>
            </div>

            <div className="space-y-4">
              {/* Address Lines */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="txtCAdressLine1">Address Line 1 *</Label>
                  <Input id="txtCAdressLine1" {...register('txtCAdressLine1')} maxLength={50} />
                  {errors.txtCAdressLine1 && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.txtCAdressLine1.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="txtCAdressLine2">Address Line 2 *</Label>
                  <Input id="txtCAdressLine2" {...register('txtCAdressLine2')} maxLength={50} />
                  {errors.txtCAdressLine2 && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.txtCAdressLine2.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="txtCAdressLine3">Address Line 3 (Optional)</Label>
                  <Input id="txtCAdressLine3" {...register('txtCAdressLine3')} maxLength={50} />
                </div>
              </div>

              {/* State, District, Taluka, Village */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ddlCState">State *</Label>
                  <select id="ddlCState" {...register('ddlCState')} className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}>
                    <option value="0">Select</option>
                    <option value="Maharashtra">Maharashtra</option>
                  </select>
                  {errors.ddlCState && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.ddlCState.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ddlCDistrict">District *</Label>
                  <select id="ddlCDistrict" {...register('ddlCDistrict')} className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}>
                    <option value="0">Select</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                  </select>
                  {errors.ddlCDistrict && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.ddlCDistrict.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ddlCTaluka">Taluka *</Label>
                  <select id="ddlCTaluka" {...register('ddlCTaluka')} className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}>
                    <option value="0">Select</option>
                    <option value="Andheri">Andheri</option>
                    <option value="Borivali">Borivali</option>
                    <option value="Haveli">Haveli</option>
                    <option value="Mulshi">Mulshi</option>
                    <option value="Bhor">Bhor</option>
                  </select>
                  {errors.ddlCTaluka && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.ddlCTaluka.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ddlCVillage">Village/City *</Label>
                  <select id="ddlCVillage" {...register('ddlCVillage')} className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}>
                    <option value="0">Select</option>
                    <option value="Churchgate">Churchgate</option>
                    <option value="Dadar">Dadar</option>
                    <option value="Kothrud">Kothrud</option>
                    <option value="Shivajinagar">Shivajinagar</option>
                    <option value="Katraj">Katraj</option>
                  </select>
                  {errors.ddlCVillage && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.ddlCVillage.message}</p>
                  )}
                </div>
              </div>

              {/* Pincode and Telephone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="txtCPincode">PIN Code *</Label>
                  <Input id="txtCPincode" {...register('txtCPincode')} maxLength={6} placeholder="6-digit pincode" />
                  {errors.txtCPincode && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.txtCPincode.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>Telephone No (Optional)</Label>
                  <div className="flex gap-2">
                    <Input {...register('txtSTDCode')} placeholder="STD" maxLength={5} className="w-[30%]" />
                    <Input {...register('txtPhoneNo')} placeholder="Phone" maxLength={8} className="w-[70%]" />
                  </div>
                </div>
              </div>

              {/* Warning Notice */}
              <Card style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-warning)' }}>
                <CardContent className="pt-4 pb-4">
                  <p className="text-sm" style={{ color: 'var(--color-foreground)' }}>
                    <strong style={{ color: 'var(--color-warning)' }}>Important:</strong> OTP will be sent to your mobile number for verification.
                    Ensure it's correct. One mobile number per application.
                  </p>
                </CardContent>
              </Card>

              {/* Mobile and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="txtMobileNo">Mobile Number *</Label>
                  <Input id="txtMobileNo" {...register('txtMobileNo')} maxLength={10} placeholder="10-digit mobile" />
                  {errors.txtMobileNo && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.txtMobileNo.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="txtEMailID">Email Address *</Label>
                  <Input id="txtEMailID" {...register('txtEMailID')} type="email" maxLength={100} placeholder="your.email@example.com" />
                  {errors.txtEMailID && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.txtEMailID.message}</p>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Password Section */}
        <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                <LockOutlined className="text-lg text-white" />
              </div>
              <h2 className="text-lg font-bold" style={{ color: 'var(--color-foreground)' }}>Choose Password</h2>
            </div>

            <div className="space-y-4">
              {/* Password Requirements */}
              <Card style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-primary)' }}>
                <CardContent className="pt-4 pb-4">
                  <strong className="text-sm" style={{ color: 'var(--color-foreground)' }}>Password Requirements:</strong>
                  <ul className="mt-2 mb-0 ml-5 text-xs space-y-1" style={{ color: 'var(--color-muted-foreground)' }}>
                    <li>8 to 13 characters long</li>
                    <li>At least one uppercase and one lowercase letter</li>
                    <li>At least one number and one special character (!@#$%^&*-)</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Password Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="txtPassword">Password *</Label>
                  <Input id="txtPassword" {...register('txtPassword')} type="password" maxLength={13} placeholder="Choose a strong password" />
                  {errors.txtPassword && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.txtPassword.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="txtConfirmPassword">Confirm Password *</Label>
                  <Input id="txtConfirmPassword" {...register('txtConfirmPassword')} type="password" maxLength={13} placeholder="Re-enter password" />
                  {errors.txtConfirmPassword && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.txtConfirmPassword.message}</p>
                  )}
                </div>
              </div>

              {/* Captcha */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                <div className="space-y-2">
                  <Label htmlFor="txtSecurityPin">Enter Captcha *</Label>
                  <Input id="txtSecurityPin" {...register('txtSecurityPin')} maxLength={5} placeholder="Type the code shown" className="uppercase" />
                  {errors.txtSecurityPin && (
                    <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.txtSecurityPin.message}</p>
                  )}
                </div>
                <div className="border-2 border-dashed rounded-lg p-4 text-center h-[42px] flex items-center justify-center"
                  style={{ borderColor: 'var(--color-primary)', backgroundColor: 'var(--color-muted)' }}>
                  <span className="text-2xl font-bold tracking-[0.5em]" style={{ color: 'var(--color-primary)' }}>ABCD5</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="text-center pt-2">
          <Button type="submit" disabled={isRegistering} size="lg" className="px-12">
            {isRegistering ? 'Processing...' : 'Save & Proceed →'}
          </Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default RegistrationForm;
