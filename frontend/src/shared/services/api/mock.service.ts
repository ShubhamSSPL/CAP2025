/**
 * Mock API Service
 * Simulates backend responses with dummy data
 */

// Simulated database
const mockDatabase = {
  users: [] as any[],
  applications: [] as any[],
};

// Helper to simulate API delay
const delay = (ms: number = 1000) => new Promise(resolve => setTimeout(resolve, ms));

// Generate random application ID
const generateApplicationId = () => {
  const prefix = 'PH2025';
  const random = Math.floor(10000000 + Math.random() * 90000000);
  return `${prefix}${random}`;
};

// Generate OTP (6 digits)
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Store OTPs temporarily
const otpStore = new Map<string, { otp: string; expiresAt: number }>();

export class MockAPIService {
  /**
   * Register new user
   */
  static async register(data: any): Promise<any> {
    await delay(1500);

    // Check if mobile already exists
    const existingUser = mockDatabase.users.find(u => u.mobileNo === data.txtMobileNo);
    if (existingUser) {
      throw new Error('Mobile number already registered');
    }

    // Generate application ID
    const applicationId = generateApplicationId();

    // Generate OTP
    const otp = generateOTP();

    // Store OTP (expires in 5 minutes)
    otpStore.set(applicationId, {
      otp,
      expiresAt: Date.now() + 5 * 60 * 1000
    });

    // Save user to mock database
    const newUser = {
      applicationId,
      ...data,
      createdAt: new Date().toISOString(),
      verified: false
    };
    mockDatabase.users.push(newUser);

    // Log OTP to console for testing
    console.log('🔐 Registration OTP:', otp, 'for Application ID:', applicationId);

    return {
      success: true,
      message: 'Registration successful! OTP sent to your mobile number.',
      applicationId,
      mobileNumber: data.txtMobileNo,
      email: data.txtEMailID
    };
  }

  /**
   * Verify OTP
   */
  static async verifyOTP(applicationId: string, otp: string): Promise<any> {
    await delay(800);

    // Check if OTP exists
    const storedOTP = otpStore.get(applicationId);

    if (!storedOTP) {
      throw new Error('Invalid application ID or OTP expired');
    }

    // Check if OTP expired
    if (Date.now() > storedOTP.expiresAt) {
      otpStore.delete(applicationId);
      throw new Error('OTP has expired. Please request a new one.');
    }

    // Verify OTP
    if (storedOTP.otp !== otp) {
      throw new Error('Invalid OTP. Please try again.');
    }

    // Mark user as verified
    const user = mockDatabase.users.find(u => u.applicationId === applicationId);
    if (user) {
      user.verified = true;
    }

    // Remove used OTP
    otpStore.delete(applicationId);

    console.log('✅ OTP Verified successfully for:', applicationId);

    return {
      success: true,
      message: 'OTP verified successfully!',
      verified: true
    };
  }

  /**
   * Resend OTP
   */
  static async resendOTP(applicationId: string, mobileNo: string): Promise<any> {
    await delay(1000);

    // Find user
    const user = mockDatabase.users.find(u => u.applicationId === applicationId);

    if (!user) {
      throw new Error('Invalid application ID');
    }

    if (user.txtMobileNo !== mobileNo) {
      throw new Error('Mobile number does not match');
    }

    // Generate new OTP
    const otp = generateOTP();

    // Store OTP (expires in 5 minutes)
    otpStore.set(applicationId, {
      otp,
      expiresAt: Date.now() + 5 * 60 * 1000
    });

    console.log('🔐 Resent OTP:', otp, 'for Application ID:', applicationId);

    return {
      success: true,
      message: 'OTP sent successfully!'
    };
  }

  /**
   * Login
   */
  static async login(applicationId: string, password: string): Promise<any> {
    await delay(1200);

    // Find user
    const user = mockDatabase.users.find(u => u.applicationId === applicationId);

    if (!user) {
      throw new Error('Invalid Application ID or Password');
    }

    if (user.txtPassword !== password) {
      throw new Error('Invalid Application ID or Password');
    }

    if (!user.verified) {
      throw new Error('Please verify your mobile number first');
    }

    console.log('✅ Login successful for:', applicationId);

    return {
      success: true,
      message: 'Login successful!',
      user: {
        applicationId: user.applicationId,
        name: user.txtCandidateName,
        email: user.txtEMailID,
        mobileNo: user.txtMobileNo
      },
      token: 'mock_jwt_token_' + applicationId
    };
  }

  /**
   * Get all registered users (for debugging)
   */
  static getRegisteredUsers() {
    return mockDatabase.users.map(u => ({
      applicationId: u.applicationId,
      name: u.txtCandidateName,
      mobile: u.txtMobileNo,
      email: u.txtEMailID,
      verified: u.verified
    }));
  }

  /**
   * Get current OTPs (for debugging)
   */
  static getCurrentOTPs() {
    const otps: any[] = [];
    otpStore.forEach((value, key) => {
      otps.push({
        applicationId: key,
        otp: value.otp,
        expiresIn: Math.floor((value.expiresAt - Date.now()) / 1000) + 's'
      });
    });
    return otps;
  }
}

// Make it accessible in console for debugging
if (typeof window !== 'undefined') {
  (window as any).MockAPI = MockAPIService;
  console.log('💡 Tip: Use window.MockAPI.getRegisteredUsers() to see all users');
  console.log('💡 Tip: Use window.MockAPI.getCurrentOTPs() to see active OTPs');
}
