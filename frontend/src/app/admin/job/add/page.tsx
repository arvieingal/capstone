"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SweetAlert from "@/components/SweetAlert";

const AddJob = () => {
  const [jobData, setJobData] = useState({
    jobName: "",
    description: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    status: "Open",
  });
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend API to add a job
      const response = await fetch("http://localhost:8000/api/jobs", {
        // Fixed URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          job_name: jobData.jobName,
          description: jobData.description,
          company: jobData.company,
          location: jobData.location,
          start_date: jobData.startDate,
          end_date: jobData.endDate,
          status: jobData.status,
        }),
      });

      if (response.ok) {
        SweetAlert.showSuccess('Awesome! Successfully added job')
        // Job added successfully, you can navigate to the job listing page
        router.push("/admin/job");
        console.log("Tdada", response)
      } else {
        const errorData = await response.json();
        console.error("Error adding job:", errorData);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="p-4 pt-[4rem]">
      <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">
        Add New Job
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="mb-4 ">
            <label htmlFor="jobName" className="block mb-2">
              Job Name
            </label>
            <input
              type="text"
              id="jobName"
              name="jobName" // Fixed name attribute
              value={jobData.jobName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4 ">
            <label htmlFor="description" className="block mb-2">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={jobData.description}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="company" className="block mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={jobData.company}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={jobData.location}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="startDate" className="block mb-2">
              Start Date
            </label>
            <input
              type="date" // Changed to 'date' type for calendar
              id="startDate"
              name="startDate"
              value={jobData.startDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="endDate" className="block mb-2">
              End Date
            </label>
            <input
              type="date" // Changed to 'date' type for calendar
              id="endDate"
              name="endDate"
              value={jobData.endDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block mb-2">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={jobData.status}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
            >
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => router.push("/admin/jobs")}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2 rounded-md"
          >
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
