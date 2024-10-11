"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const AddDocuments = () => {
  const [documentsData, setdocumentsData] = useState({
    documentsName: '',
    description: '',
    company: '',
    location: "",
    startDate: "",
    endDate: "",
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
  }

  return (
    <div className="p-4 pt-[4rem]">
    <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Add New Documents</h1>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className='grid grid-cols-2 gap-4 w-full'>
      <div className="mb-4 ">
        <label htmlFor="title" className="block mb-2">Job Name</label>
        <input
          type="text"
          id="jobName"
          name="title"
          value={jobData.jobName}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
          required
        />
      </div>
      </div>
      </form>
      </div>
  )
}

export default AddDocuments
