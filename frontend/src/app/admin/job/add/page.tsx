"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddJob = () => {
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Job data submitted:", jobData);
    // Navigate back to the jobs list
    router.push("/admin/job");
  };

  return (
    <div className="p-4 pt-[4rem] w-full">
      <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">
        Add New Job
      </h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex justify-around w-full">
          <div className="mb-4 w-[40%] flex-col items-center justify-center mx-auto">
            <div className="flex-col justify-center items-center mx-auto">
              <div>
                <label htmlFor="title" className="mb-2">
                  Job Title:
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={jobData.title}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-1 py-1 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>
            </div>
            <div className="flex-col">
              <div>
                <label htmlFor="company" className="mb-2">
                  Company:
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={jobData.company}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-1 py-1 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>
            </div>
            <div className="flex-col">
              <div>
                <label htmlFor="company" className="mb-2">
                  Location:
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={jobData.company}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-1 py-1 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>
            </div>
            <div className="flex-col">
              <div>
                <label htmlFor="status" className="mb-2">
                  Category:
                </label>
              </div>
              <div>
                <select
                  id="status"
                  name="status"
                  value={jobData.status}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-1 py-1 focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option value="">Select Category</option>
                  <option value="">Category 1</option>
                </select>
              </div>
            </div>
            <div className="flex-col">
              <div>
                <label htmlFor="company" className="mb-2">
                  Location:
                </label>
              </div>
              <div>
                <input
                  type="textarea"
                  id="location"
                  name="location"
                  value={jobData.company}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-1 py-1 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>
            </div>
          </div>
          <div className="w-[40%] flex-col mx-auto">
            <div>
              <div>
                <label htmlFor="title" className="mb-2">
                  Job Title:
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={jobData.title}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-1 py-1 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="company" className="mb-2">
                  Company:
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={jobData.company}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-1 py-1 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="company" className="mb-2">
                  Location:
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={jobData.company}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-1 py-1 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={() => router.push("/admin/job")}
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
