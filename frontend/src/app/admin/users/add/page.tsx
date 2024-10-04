"use client";
import React, { useState } from "react";
import Button from "@/components/AdminButton";

const Add = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "", // Ensure this field is included in the form
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

  function handleAdd(): void {
    // Implement the logic to add a user
    console.log("User added:", formData);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement | HTMLSelectElement; // Explicitly type the target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "number" ? Number(value) : value,
    }));
  };

  function handleCancel(): void {
    // Implement the logic to cancel the action
    console.log("Action cancelled");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement the logic to submit the form data
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
          <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
                  Phone No.
                </label>
                <input
                  type="tel"
                  id="phoneNo"
                  name="phoneNo"
                  value={formData.phoneNo}
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
                  id="employmentStatus"
                  name="employmentStatus"
                  value={formData.employmentStatus}
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
                  value={formData.addressMunicipality}
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
            <Button variant="add" onClick={handleAdd}>
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