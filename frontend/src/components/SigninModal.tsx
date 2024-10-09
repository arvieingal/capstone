import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; 

interface SignupModalProps {
  onClose: () => void;
  onSwitchToLogin?: () => void;  
}


const SignupModal: React.FC<SignupModalProps> = ({ onClose, onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNo: "",  
    employmentStatus: "",  
    addressMunicipality: "Dalaguete", 
    barangay: "", 
    sitio: "",  
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [currentStep, setCurrentStep] = useState(1);

  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentStep(2); 
  };

  const handleBack = () => {
    onClose(); // Close the modal when back is clicked
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

    if (formData.password !== formData.confirmPassword) {
      ("Passwords do not match");
      return;
    }
    if (!formData.agreeTerms) {
      ("Please agree to the terms and conditions");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3001/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const responseData = await response.json(); // Parse the JSON response
  
      if (response.ok) {
        (responseData.message);  
        onClose();  
        router.push('/'); 
      } else {
     
        (responseData.message);  
      }
    } catch (error) {
      console.error("Signup error:", error);
      ("An error occurred during signup");
    }
  };
  
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="w-full max-w-[30rem] rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold">{currentStep === 2 ? "Sign Up - Step 1" : "Sign Up - Step 2"}</h2>
        <form onSubmit={currentStep === 1 ? handleNext : handleSubmit}>
          {currentStep === 1 && (
            // First Form
            <div>
              {/* Full Name Input */}
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>

              {/* Username Input */}
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>

              {/* Phone No. Input */}
              <div className="mb-4">
                <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
                  Phone No.
                </label>
                <input
                  type="tel"
                  id="phoneNo"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>

              {/* Employment Status Dropdown */}
              <div className="mb-4">
                <label htmlFor="employmentStatus" className="block text-sm font-medium text-gray-700">
                  Employment Status
                </label>
                <select
                  id="employmentStatus"
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                >
                  <option value="">Select Employment Status</option>
                  <option value="Employed">Employed</option>
                  <option value="Unemployed">Unemployed</option>
                </select>
              </div>

              {/* Next Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-[#165B4B] py-2 text-white transition duration-200 hover:bg-green-800 flex items-center justify-center"
              >
                Next <span className="ml-2">&#8594;</span> 
              </button>
            </div>
          )}
          {currentStep === 2 && (
            // Second Form
            <div>
              <div className="mb-4">
                <label htmlFor="addressMunicipality" className="block text-sm font-medium text-gray-700">
                  Municipality
                </label>
                <select
                  id="addressMunicipality"
                  name="addressMunicipality"
                  value={formData.addressMunicipality}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                >
                  <option value="Cebu">Cebu</option>
                </select>
              </div>

              {/* Barangay Dropdown */}
              <div className="mb-4">
                <label htmlFor="barangay" className="block text-sm font-medium text-gray-700">
                  Barangay
                </label>
                <select
                  id="barangay"
                  name="barangay"
                  value={formData.barangay}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                >
                 
                  <option value="Lumbang">Lumbang</option>
                </select>
              </div>

              {/* Sitio Dropdown */}
              <div className="mb-4">
                <label htmlFor="sitio" className="block text-sm font-medium text-gray-700">
                  Sitio
                </label>
                <select
                  id="sitio"
                  name="sitio"
                  value={formData.sitio}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                >
                  <option value="">Select Sitio</option>
                  <option value="Baklaw">Baklaw</option>
                  <option value="Ibabao">Ibabao</option>
                  <option value="Kainsikan">Kainsikan</option>
                  <option value="Danao">Danao</option>
                  <option value="Sentro">Sentro</option>
                  <option value="Holy Trinity">Holy Trinity</option>
                  <option value="Kamorosan">Kamorosan</option>
                  <option value="Guiso">Guiso</option>
                </select>
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>

              {/* Confirm Password Input */}
              <div className="mb-4">
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-green-600 border-gray-300 rounded"
                  id="terms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  Agree to the Terms and Conditions
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-[#165B4B] py-2 text-white transition duration-200  hover:bg-green-800 flex items-center justify-center"
              >
                Sign Up <span className="ml-2">&#8594;</span> 
              </button>
            </div>
            
          )}
           {/* Back Button */}
           <button
                type="button"
                onClick={handleBack} 
                className="w-full rounded-lg bg-gray-300 py-2 text-black transition duration-200 hover:bg-gray-400 mt-2" 
              >
                Back
              </button>

        </form>
        <p className="mt-4 text-sm text-gray-600 flex justify-center">
          Already have an account?{" "}
          <button
            className="text-green-700 hover:text-green-900 underline"
            onClick={(e) => {
              e.preventDefault();
              if (typeof onSwitchToLogin === 'function') {
                onSwitchToLogin();
              } else {
                console.error('onSwitchToLogin is not a function');
                onClose();
              }
            }}
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;