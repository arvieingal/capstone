'use client'
import React, { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Document {
  _id: string;
  document_title: string;
  category: string;
  type: string;
  date_added: string;
}

const Library: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredUsers, setFilteredUsers] = useState<Document[]>([]); 
  const router = useRouter()

  function handleAddLibrary(event: React.MouseEvent<HTMLButtonElement>): void {
    router.push('/admin/library/add')
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="p-4 pt-[4rem]">
      <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Manage Library</h1>
      <div className='flex flex-row  items-center gap-2 md:space-x-4 mb-4 md:mb-6'>
          <button 
            className='bg-green-800 text-white px-4 py-2 rounded-md w-[10rem]'
            onClick={handleAddLibrary}
          >
            Add Library
          </button>
          <input
            type="text"
            placeholder="Search library items..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full md:flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-green-800 text-white">
            <th className="border border-gray-300 p-2 font-light">Id</th>
            <th className="border border-gray-300 p-2 font-light"> Document Title</th>
            <th className="border border-gray-300 p-2 font-light">Category</th>
            <th className="border border-gray-300 p-2 font-light">Type</th>
            <th className="border border-gray-300 p-2 font-light">Date Added</th>
            <th className="border border-gray-300 p-2 font-light">Options</th>
          </tr>
        </thead>
        <tbody>
        {filteredUsers.map(documents => ( // Use 'documents' instead of 'item'
            <tr key={documents._id}> // Use 'documents._id' for the key
              <td className="border border-gray-300 p-2">{documents._id}</td> 
              <td className="border border-gray-300 p-2">{documents.document_title}</td> 
              <td className="border border-gray-300 p-2">{documents.category}</td> 
              <td className="border border-gray-300 p-2">{documents.type}</td> 
              <td className="border border-gray-300 p-2">{documents.date_added}</td> 
              <td className="border border-gray-300 p-2">
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

export default Library