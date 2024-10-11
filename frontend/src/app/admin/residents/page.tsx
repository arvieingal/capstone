"use client"
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

// Updated Resident interface to match the table columns
interface Resident {
  id: string;
  full_name: string;
  sitio: string;
  birthdate: string;
  gender: string;
  age: string;
  email: string;
  category: string;
  contact_number: string;
}

const Residents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [residentData, setResidentData] = useState<Resident[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Function to fetch resident data
    const fetchResidents = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/residents');
        if (response.ok) {
          const data = await response.json();
          setResidentData(data);
        } else {
          throw new Error('Failed to fetch residents');
        }
      } catch (error) {
        console.error('Error fetching residents:', error);
      }
    };

    fetchResidents(); // Call the function when the component mounts
  }, []); // Empty dependency array to run only once on mount

  function handleAddResident(event: React.MouseEvent<HTMLButtonElement>): void {
    router.push('/admin/residents/add');
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Manage Residents</h1>
      <div className='flex flex-row  gap-2 mb-4 pt-[2rem]'>
        <button 
          className='bg-green-800 text-white px-4 py-2 rounded-md w-[10rem]'
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
      <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300  ">
        <thead>
          <tr className="bg-green-800 text-white ">
            <th className="border border-gray-300 p-2 font-light overflow-x-auto">ID</th>
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
          {residentData
            .filter((resident) => 
              resident.full_name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((resident) => ( 
            <tr key={resident.id}> 
              <td className="border border-gray-300 p-2">{resident.id}</td>
              <td className="border border-gray-300 p-2">{resident.full_name}</td>
              <td className="border border-gray-300 p-2">{resident.age}</td>
              <td className="border border-gray-300 p-2">{resident.gender}</td>
              <td className="border border-gray-300 p-2">{formatDate(resident.birthdate)}</td>
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
      
    </div>
  );
};

export default Residents;
