import React from 'react'

const Documents = () => {
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

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-bold text-center py-6">Manage Documents</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-green-800 text-white text-[14px] font-light">
            <th className="px-4 py-2 border">Document ID</th>
            <th className="px-4 py-2 border">Document Name</th>
            <th className="px-4 py-2 border">Document Type</th>
            <th className="px-4 py-2 border">Category</th>
            <th className="px-4 py-2 border">Date Issued</th>
            <th className="px-4 py-2 border">Issuing Authority</th>
            <th className="px-4 py-2 border">Access Level</th>
            <th className="px-4 py-2 border">Actions</th>
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