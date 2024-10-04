"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const AddJob = () => {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    status: 'Open'
  })
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setJobData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Job data submitted:', jobData)
    // Navigate back to the jobs list
    router.push('/admin/jobs')
  }

  return (
    <div className="p-4 pt-[4rem]">
      <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Add New Job</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2">Job Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={jobData.title}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block mb-2">Company</label>
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
          <label htmlFor="status" className="block mb-2">Status</label>
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
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => router.push('/admin/jobs')}
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
  )
}

export default AddJob