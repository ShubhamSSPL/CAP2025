# Testing Guide for CAP 2025 Application

## 🚀 Quick Start - How to Test the Complete Flow

### **Option 1: Using Browser Console (Easiest)**

1. **Start the development server:**
   ```bash
   cd frontend
   npm run dev
   ```

2. **Open browser** at `http://localhost:5173`

3. **Set Mock Credentials in Console:**
   Open browser DevTools (F12) and paste this in Console:
   ```javascript
   // Set demo credentials for login
   localStorage.setItem('mockApplicationId', 'PH202512345678');
   localStorage.setItem('mockPassword', 'Test@123');
   localStorage.setItem('mockMobileNumber', '9876543210');
   localStorage.setItem('mockEmail', 'test@example.com');
   console.log('✅ Demo credentials set! You can now login with:');
   console.log('Application ID: PH202512345678');
   console.log('Password: Test@123');
   ```

4. **Go to Login Page** and use these credentials:
   - **Application ID:** `PH202512345678`
   - **Password:** `Test@123`
   - **DOB:** Any date (not validated in mock mode)

5. **After Login:**
   - Click "Start Application" button
   - Navigate through the 10-step form
   - Test all features

---

### **Option 2: Complete Registration Flow**

1. **Go to Homepage:** `http://localhost:5173`

2. **Click "New Registration"**

3. **Fill Registration Form:**
   - Select Exam: Any option (MHT-CET, JEE, NEET)
   - Seat Number: Any number (e.g., `M1234567`)
   - Fill all required fields
   - Create a password (remember it!)

4. **OTP Verification:**
   - You'll get an Application ID (save it!)
   - **DEMO MODE:** Enter ANY 6-digit number as OTP
   - Example: `123456` or `111111` or `000000` (all work!)

5. **Registration Success:**
   - Save your Application ID
   - Click "Proceed to Login"

6. **Login:**
   - Use your Application ID and Password
   - Click "Sign In"

7. **Dashboard:**
   - Click "Start Application"
   - Complete the 10-step form

---

### **Option 3: Using URL Parameters (Advanced)**

Navigate directly to test pages:

- **Homepage:** `http://localhost:5173/`
- **Registration:** `http://localhost:5173/registration`
- **Login:** `http://localhost:5173/login`
- **Dashboard:** `http://localhost:5173/candidate/dashboard`
- **Application Form:** `http://localhost:5173/candidate/application`

---

## 🧪 Testing the 10-Step Application Form

Once logged in and on the Application Form page:

### **Step-by-Step Testing:**

1. **Step 1 - Personal Details:**
   - Fill name, gender, DOB
   - Enter Aadhar (12 digits)
   - Enter mobile and email
   - Click "Save & Continue"

2. **Step 2 - Family Details:**
   - Enter father's and mother's information
   - Fill income details
   - Click "Save & Continue"

3. **Step 3 - Category Details:**
   - Select category (OPEN, OBC, SC, ST, etc.)
   - Check special categories if applicable
   - Click "Save & Continue"

4. **Step 4 - Qualifying Exam:**
   - Select exam type
   - Enter marks and ranks
   - Click "Save & Continue"

5. **Step 5 - HSC Details:**
   - Enter 12th standard details
   - Fill subject marks
   - Click "Save & Continue"

6. **Step 6 - SSC Details:**
   - Enter 10th standard details
   - Click "Save & Continue"

7. **Step 7 - Additional Details:**
   - Fill extra-curricular activities
   - Enter emergency contact
   - Click "Save & Continue"

8. **Step 8 - Address Details:**
   - Enter permanent address
   - Check "same as permanent" for correspondence
   - Click "Save & Continue"

9. **Step 9 - Document Upload:**
   - Upload photo, signature
   - Upload required certificates
   - Click "Save & Continue"

10. **Step 10 - Preview & Submit:**
    - Review all details
    - Click "Edit" to fix any errors
    - Check both agreement boxes
    - Click "Submit Application"

---

## 🐛 Troubleshooting

### **Can't Login?**

**Solution 1:** Set credentials manually in console (see Option 1 above)

**Solution 2:** Complete full registration flow with OTP

**Solution 3:** Clear all storage and try again:
```javascript
localStorage.clear();
sessionStorage.clear();
location.reload();
```

### **Application Form Not Loading?**

Make sure you're logged in first:
1. Login at `/login`
2. Go to Dashboard
3. Click "Start Application"

### **Form Not Saving Data?**

Check Redux DevTools:
- Install Redux DevTools Extension
- Open DevTools → Redux tab
- Check `application` state

---

## 🔍 Debug Tools

### **Check Registered Users:**
```javascript
window.MockAPI.getRegisteredUsers()
```

### **Check Active OTPs:**
```javascript
window.MockAPI.getCurrentOTPs()
```

### **Check Current Login Status:**
```javascript
console.log('Auth Token:', localStorage.getItem('authToken'));
console.log('App ID:', localStorage.getItem('mockApplicationId'));
```

### **View Redux State:**
Open Redux DevTools or:
```javascript
console.log(window.__REDUX_DEVTOOLS_EXTENSION__?.()?.getState());
```

---

## ✅ Expected Behavior

1. **Registration:** Creates Application ID → Sends OTP → Verifies with ANY 6-digit → Success
2. **Login:** Uses Application ID + Password → Redirects to Dashboard
3. **Application Form:** 10 steps with progress indicator → Auto-saves → Submit at end
4. **Navigation:** Can go back/forward between steps → Data persists in Redux

---

## 📞 Need Help?

If issues persist:
1. Check browser console for errors
2. Verify `MOCK_MODE = true` in service files
3. Clear all browser data and start fresh
4. Check network tab (should see no real API calls)

---

## 🎯 Quick Test Commands

Run in browser console:

```javascript
// Setup test credentials
localStorage.setItem('mockApplicationId', 'PH202512345678');
localStorage.setItem('mockPassword', 'Test@123');
localStorage.setItem('mockMobileNumber', '9876543210');
localStorage.setItem('mockEmail', 'test@example.com');

// Navigate to login
window.location.href = '/login';

// After login, go to application
// window.location.href = '/candidate/application';
```

---

**Happy Testing! 🚀**
