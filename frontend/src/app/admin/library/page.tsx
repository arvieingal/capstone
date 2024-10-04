'use client'
import React, { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

const libraryItems = [
  { id: 1, title: 'Introduction to React', category: 'Programming', type: 'Article', dateAdded: '2023-04-15', status: 'Active', link: 'https://example.com/react-intro' },
  { id: 2, title: 'Company Policy', category: 'HR', type: 'Document', dateAdded: '2023-04-10', status: 'Active', link: 'https://example.com/policy.pdf' },
  { id: 3, title: 'Useful Resources', category: 'General', type: 'Link', dateAdded: '2023-04-05', status: 'Inactive', link: 'https://example.com/resources' },
]

const Library: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  function handleAddLibrary(event: React.MouseEvent<HTMLButtonElement>): void {
    // Navigate to the add library item page
    router.push('/admin/library/add')
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="p-4 pt-[4rem]">
      <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Manage Library</h1>
      <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-6'>
          <button 
            className='bg-green-700 text-white px-4 py-2 rounded-md mb-2 md:mb-0 w-[10rem]'
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
            <th className="border border-gray-300 p-2 font-light">Title</th>
            <th className="border border-gray-300 p-2 font-light">Category</th>
            <th className="border border-gray-300 p-2 font-light">Type</th>
            <th className="border border-gray-300 p-2 font-light">Date Added</th>
            <th className="border border-gray-300 p-2 font-light">Status</th>
            <th className="border border-gray-300 p-2 font-light">Options</th>
          </tr>
        </thead>
        <tbody>
          {libraryItems.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 p-2">{item.id}</td>
              <td className="border border-gray-300 p-2">{item.title}</td>
              <td className="border border-gray-300 p-2">{item.category}</td>
              <td className="border border-gray-300 p-2">{item.type}</td>
              <td className="border border-gray-300 p-2">{item.dateAdded}</td>
              <td className="border border-gray-300 p-2">{item.status}</td>
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