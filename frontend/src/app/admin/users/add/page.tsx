"use client";
import React, { useState } from "react";
import Button from "@/components/AdminButton";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
import SweetAlert from '@/components/SweetAlert'

const Add = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone_number: "",  
    employment_status: "",  
    Municipality: "Dalaguete", 
    barangay: "Lumbang", 
    sitio: "",
    role: "", // Included role in required fields
    status:"",  
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  function handleAdd(): void {
    // Check if all required fields are filled
    const requiredFields = [
      formData.fullName,
      formData.username,
      formData.email,
      formData.phone_number,
      formData.employment_status,
      formData.Municipality,
      formData.barangay,
      formData.sitio,
      formData.role,
      formData.status,
    ];
    
    const handleUserAdd = async () => {
      const allFieldsFilled = requiredFields.every(value => value !== "");
      
      if (allFieldsFilled) {
        const result = await SweetAlert.showTheSuccess("Are you sure you want to add this user?");
        if (result) {
          await SweetAlert.showTheSuccess("User added successfully!");
          console.log("User added:", formData);
        }
      } else {
        await SweetAlert.showTheSuccess("Please fill in all required fields before adding a user.");
      }
    } 
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement | HTMLSelectElement; // Explicitly type the target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "number" ? Number(value) : value,
    }));
  };

  function handleCancel(): void {
    console.log("Action cancelled");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  }
  
  
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="w-full text-center">
        <h1 className="mb-8 flex items-center justify-center pt-8 sm:pt-12 text-2xl font-bold">
        ADD USER
        </h1>
      </div>
      <form className="flex flex-col lg:flex-row w-full gap-8 lg:gap-16 max-w-6xl mx-auto mt-[8rem]" onSubmit={handleSubmit}>
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
              className="w-full max-w-md rounded-lg border px-3 py-2"
              required
            />
          </div>
          <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
              className="w-full max-w-md rounded-lg border px-3 py-2"
            />
          </div>
          <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
              className="w-full max-w-md rounded-lg border px-3 py-2"
              required
            />
          </div>
          <div>
          <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                  Phone No.
                </label>
                <input
                  type="tel"
                  id="phone_nunber"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
              className="w-full max-w-md rounded-lg border px-3 py-2"
              required
            />
          </div>
          <div>
          <label htmlFor="employmentStatus" className="block text-sm font-medium text-gray-700">
                  Employment Status
                </label>
                <select
                  id="employment_status"
                  name="employment_status"
                  value={formData.employment_status}
                  onChange={handleChange}
                 className="w-full max-w-md rounded-lg border px-3 py-2"
                  required
                >
                  <option value="">Select Employment Status</option>
                  <option value="Employed">Employed</option>
                  <option value="Unemployed">Unemployed</option>
                </select>
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
        <div>
        <label htmlFor="addressMunicipality" className="block text-sm font-medium text-gray-700">
                  Municipality
                </label>
                <select
                  id="addressMunicipality"
                  name="addressMunicipality"
                  value={formData.Municipality}
                  onChange={handleChange}
                  className="w-full max-w-md rounded-lg border px-3 py-2"
                  required
                >
                  <option value="Cebu">Cebu</option>
                </select>
          </div>
          <div>
          <label htmlFor="barangay" className="block text-sm font-medium text-gray-700">
                  Barangay
                </label>
                <select
                  id="barangay"
                  name="barangay"
                  value={formData.barangay}
                  onChange={handleChange}
                  className="w-full max-w-md rounded-lg border px-3 py-2"
                  required
                >
                  <option value="Lumbang">Lumbang</option>
                </select>
          </div>
          <div>
          <label htmlFor="sitio" className="block text-sm font-medium text-gray-700">
                  Sitio
                </label>
                <select
                  id="sitio"
                  name="sitio"
                  value={formData.sitio}
                  onChange={handleChange}
                   className="w-full max-w-md rounded-lg border px-3 py-2"
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
          <div>
            <label htmlFor="role" className="mb-2 block text-sm font-medium">Role</label>
            <select
               id="role"
               name="role"
               value={formData.role}
               onChange={handleChange}
              className="w-full max-w-md rounded-lg border px-3 py-2"
              required
            >
              <option value="">Select a role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div>
            <label htmlFor="status" className="mb-2 block text-sm font-medium">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full max-w-md rounded-lg border px-3 py-2"
              required
            >
              <option value="">Select a status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex items-center justify-center">
          <div className="flex  gap-4 pt-[5rem]">
            <Button variant="cancel" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="add"  type="submit">
              Add User
            </Button>
          </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;