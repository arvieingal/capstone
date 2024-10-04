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
    addressMunicipality: "Cebu", 
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
    setCurrentStep(2); // Move to the next step
  };

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Client-side validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!formData.agreeTerms) {
      alert("Please agree to the terms and conditions");
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
        // Show the success message and proceed
        alert(responseData.message);  // This will show "Signup successful"
        onClose();  // Assuming this closes the signup form
        router.push('/');  // Redirect to the homepage after successful signup
      } else {
        // If there's an error from the server, show the error message
        alert(responseData.message);  // Display the error message from the server
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup");
    }
  };
  
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="w-full max-w-[30rem] rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold">{currentStep === 1 ? "Sign Up - Step 1" : "Sign Up - Step 2"}</h2>
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
                className="w-full rounded-lg bg-[#165B4B] py-2 text-white transition duration-200 hover:bg-green-800"
              >
                Next
              </button>
            </div>
          )}
          {currentStep === 2 && (
            // Second Form
            <div>
              {/* Password Input */}
              {/* Address (Municipality) Dropdown */}
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
                  <option value="">Select Barangay</option>
                  <option value="Ablayan">Ablayan</option>
                  <option value="Babayongan">Babayongan</option>
                  <option value="Balud">Balud</option>
                  <option value="Banhigan">Banhigan</option>
                  <option value="Bulak">Bulak</option>
                  <option value="Caleriohan">Caleriohan</option>
                  <option value="Caliongan">Caliongan</option>
                  <option value="Casay">Casay</option>
                  <option value="Catolohan">Catolohan</option>
                  <option value="Cawayan">Cawayan</option>
                  <option value="Consolacion">Consolacion</option>
                  <option value="Coro">Coro</option>
                  <option value="Dugyan">Dugyan</option>
                  <option value="Dumalan">Dumalan</option>
                  <option value="Jolomaynon">Jolomaynon</option>
                  <option value="Lanao">Lanao</option>
                  <option value="Langkas">Langkas</option>
                  <option value="Lumbang">Lumbang</option>
                  <option value="Malones">Malones</option>
                  <option value="Maloray">Maloray</option>
                  <option value="Mananggal">Mananggal</option>
                  <option value="Manlapay">Manlapay</option>
                  <option value="Mantalongon">Mantalongon</option>
                  <option value="Nalhub">Nalhub</option>
                  <option value="Obo">Obo</option>
                  <option value="Obong">Obong</option>
                  <option value="Panas">Panas</option>
                  <option value="Poblacion">Poblacion</option>
                  <option value="Sacsac">Sacsac</option>
                  <option value="Salug">Salug</option>
                  <option value="Tabon">Tabon</option>
                  <option value="Tapun">Tapun</option>
                  <option value="Tuba">Tuba</option>
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
            </div>
          )}
          {currentStep === 2 && (
            // Second Form
            <div>
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
                className="w-full rounded-lg bg-[#165B4B] py-2 text-white transition duration-200 hover:bg-green-800"
              >
                Sign Up
              </button>
            </div>
          )}
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