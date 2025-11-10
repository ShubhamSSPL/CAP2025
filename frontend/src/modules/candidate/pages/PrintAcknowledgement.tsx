/**
 * Print Acknowledgement - Matching PH2024 Structure
 * Receipt-cum-Acknowledgement for Pharmacy Admissions CAP 2025
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrinterOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from '@/shared/components/ui';
import { useAppSelector } from '@/shared/store/store';

export const PrintAcknowledgement: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.login);
  const applicationState = useAppSelector((state) => state.application);

  React.useEffect(() => {
    if (!applicationState.isCompleted) {
      navigate('/candidate/dashboard');
    }
  }, [applicationState.isCompleted, navigate]);

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    navigate('/candidate/dashboard');
  };

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-container, .print-container * {
            visibility: visible;
          }
          .print-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none !important;
          }
          @page {
            margin: 15mm;
          }
        }

        .app-form-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 0;
        }

        .app-form-table td, .app-form-table th {
          border: 1px solid #000;
          padding: 6px 8px;
          font-size: 12px;
          vertical-align: middle;
        }

        .app-form-table th {
          background-color: #f0f0f0;
          font-weight: bold;
          text-align: left;
        }

        .app-form-table td[align="right"] {
          text-align: right;
          width: 25%;
        }

        .app-form-table td[align="center"] {
          text-align: center;
        }

        @media print {
          .app-form-table td, .app-form-table th {
            font-size: 10px;
            padding: 4px 6px;
          }
        }
      `}</style>

      <div className="min-h-screen p-4 print:p-0">
        {/* Action Buttons - Hidden on print */}
        <div className="mb-6 flex items-center justify-between no-print max-w-7xl mx-auto">
          <Button variant="outline" onClick={handleBack}>
            <ArrowLeftOutlined className="mr-2" />
            Back to Dashboard
          </Button>
          <Button onClick={handlePrint}>
            <PrinterOutlined className="mr-2" />
            Print Acknowledgement
          </Button>
        </div>

        {/* Printable Content */}
        <div className="print-container max-w-7xl mx-auto bg-white">
          {/* Header Row 1 - Academic Year and Title */}
          <table className="app-form-table">
            <tbody>
              <tr>
                <td style={{ width: '89%' }}>
                  <font size="2">
                    <b>First Year of Four Year Degree Course in Pharmacy & First Year of Six Year Post Graduate Degree Course in Pharm. D. for the Academic Year 2025-26</b>
                  </font>
                </td>
                <td align="right" style={{ borderLeft: '0' }}>
                  <font size="2">
                    <b>Acknowledgement</b>
                  </font>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Header Row 2 - Government Branding */}
          <table className="app-form-table">
            <tbody>
              <tr>
                <td style={{ width: '10%', borderTop: '0', borderRight: '0' }} align="center">
                  <img src="/WebsiteLogo.png" alt="Website Logo" style={{ width: '73px', height: 'auto' }} />
                </td>
                <td style={{ width: '80%', borderTop: '0', borderLeft: '0', borderRight: '0' }} align="center">
                  <b>
                    <img src="/WebsiteLogoOld_Print.png" alt="CET Cell Logo" />
                    <br />
                    <font size="4">G</font><font size="2">OVERNMENT</font>{' '}
                    <font size="4">O</font><font size="2">F</font>{' '}
                    <font size="4">M</font><font size="2">AHARASHTRA</font>
                    <br />
                    <font size="4">S</font><font size="2">TATE</font>{' '}
                    <font size="4">C</font><font size="2">OMMON</font>{' '}
                    <font size="4">E</font><font size="2">NTRANCE</font>{' '}
                    <font size="4">T</font><font size="2">EST</font>{' '}
                    <font size="4">C</font><font size="2">ELL,</font>{' '}
                    <font size="4">M</font><font size="2">AHARASHTRA</font>{' '}
                    <font size="4">S</font><font size="2">TATE</font>
                    <br />
                    <font size="1">8th Floor, New Excelsior Building, A.K.Nayak Marg, Fort, Mumbai-400001. (M.S.)</font>
                    <br />
                    <br />
                    Receipt-cum-Acknowledgement for Admission to First Year of Four Year Degree Course in Pharmacy & First Year of Six Year Post Graduate Degree Course in Pharm. D. for the Academic Year 2025-26
                  </b>
                </td>
                <td style={{ width: '10%', borderTop: '0', borderLeft: '0' }} align="center">
                  <img src="/ARAFINAL.png" alt="ARA Logo" style={{ width: '73px', height: 'auto' }} />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Application ID Row */}
          <table className="app-form-table">
            <tbody>
              <tr>
                <td style={{ borderTop: '0' }} align="center">
                  <font size="3">
                    Application ID:{' '}
                    <b>{applicationState.applicationId || 'PH2025XXXXXX'}</b>
                    &nbsp;&nbsp;
                    Application Version No:{' '}
                    <b>1</b>
                  </font>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Personal Details */}
          <table className="app-form-table">
            <tbody>
              <tr>
                <th style={{ borderTop: '0' }} colSpan={4} align="left">
                  Personal Details
                </th>
              </tr>
              <tr>
                <td align="right">Candidate's Full Name</td>
                <td colSpan={2}>
                  <b>{applicationState.personalDetails?.fullName || 'N/A'}</b>
                </td>
                <td align="center" rowSpan={12} style={{ width: '15%' }}>
                  <div style={{ width: '133px', height: '171px', border: '1px solid #999', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    Photo
                  </div>
                  <div style={{ width: '133px', height: '57px', border: '1px solid #999', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Sign
                  </div>
                </td>
              </tr>
              <tr>
                <td align="right">Father's Name</td>
                <td colSpan={2}>
                  <b>{applicationState.familyDetails?.fatherName || 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">Mother's Name</td>
                <td colSpan={2}>
                  <b>{applicationState.familyDetails?.motherName || 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">Gender</td>
                <td colSpan={2}>
                  <b>{applicationState.personalDetails?.gender || 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">Date of Birth</td>
                <td colSpan={2}>
                  <b>{applicationState.personalDetails?.dateOfBirth || 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">Candidature Type</td>
                <td colSpan={2}>
                  <b>{applicationState.personalDetails?.domicile || 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">Home University</td>
                <td colSpan={2}>
                  <b>N/A</b>
                </td>
              </tr>
              <tr>
                <td align="right">Category</td>
                <td colSpan={2}>
                  <b>{applicationState.categoryDetails?.category || 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">Category for Admission</td>
                <td colSpan={2}>
                  <b>{applicationState.categoryDetails?.category || 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">Applied for EWS</td>
                <td colSpan={2}>
                  <b>{applicationState.categoryDetails?.category === 'EWS' ? 'Yes' : 'No'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">Person with Disability</td>
                <td colSpan={2}>
                  <b>{applicationState.categoryDetails?.isDifferentlyAbled ? `Yes - ${applicationState.categoryDetails?.disabilityType}` : 'No'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">Defence Type</td>
                <td colSpan={2}>
                  <b>{applicationState.categoryDetails?.isDefencePersonDependant ? applicationState.categoryDetails?.defenceCategory : 'No'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">Is Orphan Candidate</td>
                <td colSpan={3}>
                  <b>{applicationState.categoryDetails?.isOrphan ? 'Yes' : 'No'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">Applied for TFWS Seats</td>
                <td colSpan={3}>
                  <b>No</b>
                </td>
              </tr>
              <tr>
                <td align="right">Minority Candidature Type</td>
                <td colSpan={3}>
                  <b>{applicationState.categoryDetails?.isMinority ? applicationState.categoryDetails?.minorityType : 'No'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">MHT-CET Application Fee Paid (Rs.)</td>
                <td>
                  <b>800</b>
                </td>
                <td align="right">Online Application Fee Paid (Rs.)</td>
                <td>
                  <b>1000</b>
                </td>
              </tr>
              <tr>
                <td align="right">Nationality</td>
                <td colSpan={3}>
                  <b>{applicationState.personalDetails?.nationality || 'Indian'}</b>
                </td>
              </tr>

              {/* Qualification Details */}
              <tr>
                <th colSpan={4} align="left">
                  Qualification Details
                </th>
              </tr>
              <tr>
                <td style={{ width: '25%' }} align="center">
                  <b>Qualification</b>
                </td>
                <td style={{ width: '25%' }} align="center">
                  <b>Marks Obtained</b>
                </td>
                <td style={{ width: '25%' }} align="center">
                  <b>Marks OutOf</b>
                </td>
                <td style={{ width: '25%' }} align="center">
                  <b>Percentage</b>
                </td>
              </tr>
              <tr>
                <td align="right">HSC Physics Marks</td>
                <td align="center">
                  <b>{applicationState.hscDetails?.physicsMarks || 'N/A'}</b>
                </td>
                <td align="center">
                  <b>100</b>
                </td>
                <td align="center">
                  <b>{applicationState.hscDetails?.physicsMarks ? ((parseInt(applicationState.hscDetails.physicsMarks) / 100) * 100).toFixed(2) : 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">HSC Chemistry Marks</td>
                <td align="center">
                  <b>{applicationState.hscDetails?.chemistryMarks || 'N/A'}</b>
                </td>
                <td align="center">
                  <b>100</b>
                </td>
                <td align="center">
                  <b>{applicationState.hscDetails?.chemistryMarks ? ((parseInt(applicationState.hscDetails.chemistryMarks) / 100) * 100).toFixed(2) : 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">HSC Mathematics Marks</td>
                <td align="center">
                  <b>{applicationState.hscDetails?.mathematicsMarks || 'N/A'}</b>
                </td>
                <td align="center">
                  <b>100</b>
                </td>
                <td align="center">
                  <b>{applicationState.hscDetails?.mathematicsMarks ? ((parseInt(applicationState.hscDetails.mathematicsMarks) / 100) * 100).toFixed(2) : 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">HSC Aggregate Marks</td>
                <td align="center">
                  <b>{applicationState.hscDetails?.totalMarks || 'N/A'}</b>
                </td>
                <td align="center">
                  <b>600</b>
                </td>
                <td align="center">
                  <b>{applicationState.hscDetails?.percentage || 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">SSC Board</td>
                <td colSpan={3}>
                  <b>{applicationState.sscDetails?.boardName || 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">SSC Passing Year</td>
                <td>
                  <b>{applicationState.sscDetails?.passingYear || 'N/A'}</b>
                </td>
                <td align="right">SSC Seat Number</td>
                <td>
                  <b>{applicationState.sscDetails?.seatNumber || 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">HSC Board</td>
                <td colSpan={3}>
                  <b>{applicationState.hscDetails?.boardName || 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">HSC Passing Year</td>
                <td>
                  <b>{applicationState.hscDetails?.passingYear || 'N/A'}</b>
                </td>
                <td align="right">HSC Seat Number</td>
                <td>
                  <b>{applicationState.hscDetails?.seatNumber || 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">HSC Passing Status</td>
                <td colSpan={3}>
                  <b>{applicationState.hscDetails?.attemptNumber === '1' ? 'First Attempt' : 'Passed'}</b>
                </td>
              </tr>

              {/* MHT-CET Details */}
              <tr>
                <th colSpan={4} align="left">
                  MHT-CET 2025 Details
                </th>
              </tr>
              <tr>
                <td align="right">Appeared for CET</td>
                <td>
                  <b>{applicationState.qualifyingExamDetails?.examName === 'MHT-CET' ? 'Yes' : 'No'}</b>
                </td>
                <td align="right">Roll No</td>
                <td>
                  <b>{applicationState.qualifyingExamDetails?.examRollNumber || 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">Physics</td>
                <td>
                  <b>{applicationState.qualifyingExamDetails?.physicsMarks || 'N/A'}</b>
                </td>
                <td align="right">Chemistry</td>
                <td>
                  <b>{applicationState.qualifyingExamDetails?.chemistryMarks || 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">Mathematics</td>
                <td>
                  <b>{applicationState.qualifyingExamDetails?.mathematicsMarks || 'N/A'}</b>
                </td>
                <td align="right">Biology</td>
                <td>
                  <b>{applicationState.qualifyingExamDetails?.biologyMarks || 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">Total PCM</td>
                <td>
                  <b>
                    {applicationState.qualifyingExamDetails?.physicsMarks &&
                     applicationState.qualifyingExamDetails?.chemistryMarks &&
                     applicationState.qualifyingExamDetails?.mathematicsMarks
                      ? (
                          parseInt(applicationState.qualifyingExamDetails.physicsMarks) +
                          parseInt(applicationState.qualifyingExamDetails.chemistryMarks) +
                          parseInt(applicationState.qualifyingExamDetails.mathematicsMarks)
                        ).toString()
                      : 'N/A'}
                  </b>
                </td>
                <td align="right">Total PCB</td>
                <td>
                  <b>
                    {applicationState.qualifyingExamDetails?.physicsMarks &&
                     applicationState.qualifyingExamDetails?.chemistryMarks &&
                     applicationState.qualifyingExamDetails?.biologyMarks
                      ? (
                          parseInt(applicationState.qualifyingExamDetails.physicsMarks) +
                          parseInt(applicationState.qualifyingExamDetails.chemistryMarks) +
                          parseInt(applicationState.qualifyingExamDetails.biologyMarks)
                        ).toString()
                      : 'N/A'}
                  </b>
                </td>
              </tr>

              {/* NEET Details */}
              <tr>
                <th colSpan={4} align="left">
                  NEET 2025 Details
                </th>
              </tr>
              <tr>
                <td align="right">Appeared for NEET</td>
                <td>
                  <b>{applicationState.qualifyingExamDetails?.examName === 'NEET' ? 'Yes' : 'No'}</b>
                </td>
                <td align="right">Roll No</td>
                <td>
                  <b>{applicationState.qualifyingExamDetails?.examName === 'NEET' ? applicationState.qualifyingExamDetails?.examRollNumber : 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">Physics</td>
                <td>
                  <b>{applicationState.qualifyingExamDetails?.examName === 'NEET' ? applicationState.qualifyingExamDetails?.physicsMarks : 'N/A'}</b>
                </td>
                <td align="right">Chemistry</td>
                <td>
                  <b>{applicationState.qualifyingExamDetails?.examName === 'NEET' ? applicationState.qualifyingExamDetails?.chemistryMarks : 'N/A'}</b>
                </td>
              </tr>
              <tr>
                <td align="right">Biology (Botany & Zoology)</td>
                <td>
                  <b>{applicationState.qualifyingExamDetails?.examName === 'NEET' ? applicationState.qualifyingExamDetails?.biologyMarks : 'N/A'}</b>
                </td>
                <td align="right">Total</td>
                <td>
                  <b>{applicationState.qualifyingExamDetails?.totalMarks || 'N/A'}</b>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Documents Table */}
          <table className="app-form-table">
            <tbody>
              <tr>
                <th align="left" style={{ borderTop: '0' }}>
                  List of Documents Verified at Scrutiny Center
                </th>
              </tr>
              <tr>
                <td>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f0f0f0' }}>
                        <th style={{ border: '1px solid #000', padding: '4px', width: '10%', textAlign: 'center' }}>Sr. No.</th>
                        <th style={{ border: '1px solid #000', padding: '4px', textAlign: 'left' }}>Document Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ border: '1px solid #000', padding: '4px', textAlign: 'center' }}>1</td>
                        <td style={{ border: '1px solid #000', padding: '4px' }}>Photograph</td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #000', padding: '4px', textAlign: 'center' }}>2</td>
                        <td style={{ border: '1px solid #000', padding: '4px' }}>Signature</td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #000', padding: '4px', textAlign: 'center' }}>3</td>
                        <td style={{ border: '1px solid #000', padding: '4px' }}>SSC Marksheet</td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #000', padding: '4px', textAlign: 'center' }}>4</td>
                        <td style={{ border: '1px solid #000', padding: '4px' }}>HSC Marksheet</td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #000', padding: '4px', textAlign: 'center' }}>5</td>
                        <td style={{ border: '1px solid #000', padding: '4px' }}>Leaving Certificate</td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #000', padding: '4px', textAlign: 'center' }}>6</td>
                        <td style={{ border: '1px solid #000', padding: '4px' }}>CET/NEET Scorecard</td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #000', padding: '4px', textAlign: 'center' }}>7</td>
                        <td style={{ border: '1px solid #000', padding: '4px' }}>Aadhar Card</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Declaration */}
          <table className="app-form-table">
            <tbody>
              <tr>
                <td style={{ borderTop: '0' }} colSpan={2}>
                  <center>
                    <b>
                      <font size="2">Declaration</font>
                    </b>
                  </center>
                  <br />
                  <p align="justify" style={{ textIndent: '60px' }}>
                    I have read all the rules of admission and Information brochure for admission to UG courses 2025 and on understanding these Rules, I have filled this Application Form for Admission to First Year Under Graduate Technical Course in B.Pharmacy & Post Graduate Pharm.D Admissions 2025-26. The information given by me in this application is true to the best of my knowledge & belief. If at later stage, it is found that I have furnished wrong information and/or forgery/Xerox copy or submitted false certificate(s), I am aware that my admission stands cancelled and fees paid by me will be forfeited. Further I will be subject to legal and/or penal action as per the provisions of the law.
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: '60%' }}>
                  Place: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Date:{' '}
                  <b>
                    {applicationState.submittedAt
                      ? new Date(applicationState.submittedAt).toLocaleDateString('en-IN')
                      : '_______________'}
                  </b>
                </td>
                <td style={{ width: '40%' }} align="center" valign="bottom" rowSpan={3}>
                  <div style={{ width: '133px', height: '57px', border: '1px solid #999', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Signature
                  </div>
                  Signature of Applicant
                  <br />(<b>{applicationState.personalDetails?.fullName || ''}</b>)
                </td>
              </tr>
              <tr>
                <td>
                  Last Modified On:{' '}
                  <b>
                    {applicationState.submittedAt
                      ? new Date(applicationState.submittedAt).toLocaleString('en-IN')
                      : 'N/A'}
                  </b>
                </td>
              </tr>
              <tr>
                <td>Last Modified By: <b>{user?.name || 'Candidate'}</b></td>
              </tr>
              <tr>
                <th colSpan={2}>For Office Use Only</th>
              </tr>
              <tr>
                <td>
                  Printed On:{' '}
                  <b>{new Date().toLocaleString('en-IN')}</b>
                </td>
                <td align="center" valign="bottom" rowSpan={3}>
                  <b>Seal & Signature of the Issuing SC Officer</b>
                </td>
              </tr>
              <tr>
                <td>Confirmed On: <b>_______________</b></td>
              </tr>
              <tr>
                <td>Confirmed By: <b>_______________</b></td>
              </tr>
            </tbody>
          </table>

          {/* Print Button - Only visible on screen */}
          <div className="mt-6 text-center no-print">
            <Button onClick={handlePrint} size="lg">
              <PrinterOutlined className="mr-2" />
              Print Acknowledgement
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintAcknowledgement;
