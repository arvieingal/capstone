"use client"
import { useRouter } from "next/navigation";
import React, { useState } from 'react'

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter(); // {{ edit_1 }}
  
  const documents = [
    {
      id: '001',
      name: 'Annual Report 2023',
      type: 'PDF',
      category: 'Financial',
      dateIssued: '2023-12-31',
      issuingAuthority: 'Finance Department',
      accessLevel: 'Confidential',
    },
    {
      id: '002',
      name: 'Employee Handbook',
      type: 'DOCX',
      category: 'HR',
      dateIssued: '2023-01-15',
      issuingAuthority: 'Human Resources',
      accessLevel: 'Internal',
    },
    // Add more dummy data as needed
  ]
  function handleAddDocuments(event: React.MouseEvent<HTMLButtonElement>): void {
    router.push('/admin/documents/add');
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-bold text-center py-6">Manage Documents</h1>
      <div className='flex flex-col md:flex-row gap-2 mb-4 pt-[2rem]'>
        <button 
          className='bg-green-800 text-white px-4 py-2 rounded-md w-full md:w-[10rem]'
          onClick={handleAddDocuments}
        >
          Add Document
        </button>
        <input
          type="text"
          placeholder="Search Documents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
        />
      </div>
      <table className="min-w-full bg-white border border-gray-300  ">
        <thead>
          <tr className="bg-green-800 text-white text-[14px] font-light  ">
            <th className="px-4 py-2 border font-light">Document ID</th>
            <th className="px-4 py-2 border font-light">Document Name</th>
            <th className="px-4 py-2 border font-light">Document Type</th>
            <th className="px-4 py-2 border font-light">Category</th>
            <th className="px-4 py-2 border font-light">Date Issued</th>
            <th className="px-4 py-2 border font-light">Issuing Authority</th>
            <th className="px-4 py-2 border font-light">Access Level</th>
            <th className="px-4 py-2 border font-light">Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td className="px-4 py-2 border">{doc.id}</td>
              <td className="px-4 py-2 border">{doc.name}</td>
              <td className="px-4 py-2 border">{doc.type}</td>
              <td className="px-4 py-2 border">{doc.category}</td>
              <td className="px-4 py-2 border">{doc.dateIssued}</td>
              <td className="px-4 py-2 border">{doc.issuingAuthority}</td>
              <td className="px-4 py-2 border">{doc.accessLevel}</td>
              <td className="px-4 py-2 border">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Documents