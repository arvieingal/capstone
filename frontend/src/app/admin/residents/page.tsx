"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Residents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  
  // Mock data for Residents
  interface Resident { // Changed from Residents to Resident for singular
    _id: string;
    fullName: string;
    age: string;
    gender: string;
    birthdate: string;
    category: string;
    sitio: string;
    contact_number: string;
    email: string;
  }

  // Define residentData as an empty array
  const residentData: Resident[] = []; // Removed mock data for residents

  function handleAddResident(event: React.MouseEvent<HTMLButtonElement>): void {
    router.push('/admin/residents/add');
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Manage Residents</h1>
      <div className='flex flex-col md:flex-row gap-2 mb-4 pt-[2rem]'>
        <button 
          className='bg-green-800 text-white px-4 py-2 rounded-md w-full md:w-[10rem]'
          onClick={handleAddResident}
        >
          Add Residents
        </button>
        <input
          type="text"
          placeholder="Search Residents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
        />
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-green-800 text-white">
            <th className="border border-gray-300 p-2 font-light">ID</th>
            <th className="border border-gray-300 p-2 font-light">Full Name</th>
            <th className="border border-gray-300 p-2 font-light">Age</th>
            <th className="border border-gray-300 p-2 font-light">Gender</th>
            <th className="border border-gray-300 p-2 font-light">Birthdate</th>
            <th className="border border-gray-300 p-2 font-light">Category</th>
            <th className="border border-gray-300 p-2 font-light">Sitio</th>
            <th className="border border-gray-300 p-2 font-light">Contact No.</th>
            <th className="border border-gray-300 p-2 font-light">Email</th>
            <th className="border border-gray-300 p-2 font-light">Options</th>
          </tr>
        </thead>
        <tbody>
          {residentData.map((resident) => ( 
            <tr key={resident._id}> 
              <td className="border border-gray-300 p-2">{resident._id}</td>
              <td className="border border-gray-300 p-2">{resident.fullName}</td>
              <td className="border border-gray-300 p-2">{resident.age}</td>
              <td className="border border-gray-300 p-2">{resident.gender}</td>
              <td className="border border-gray-300 p-2">{resident.birthdate}</td>
              <td className="border border-gray-300 p-2">{resident.category}</td>
              <td className="border border-gray-300 p-2">{resident.sitio}</td>
              <td className="border border-gray-300 p-2">{resident.contact_number}</td>
              <td className="border border-gray-300 p-2">{resident.email}</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Residents;