"use client"
import React, { useState, useEffect, Key } from 'react'
import { useRouter } from 'next/navigation';

interface User {
  id: Key | null | undefined;
_id: string;
firstName: string;
  lastName: string;
  middleInitial: string;
  email: string;
  phoneNumber: string;
  role: string;
  status: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  useEffect(() => {
    // Fetch users from API
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    // Replace with actual API call
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    Object.values(user).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  const handleAddUser = () => {
    router.push('/admin/users/add');
  };

  
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 p-4 md:pt-[5rem] md:px-8">
        <h1 className='text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center'>Manage Users</h1>
        <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-6'>
          <button 
            className='bg-green-700 text-white px-4 py-2 rounded-md mb-2 md:mb-0 w-[10rem]'
            onClick={handleAddUser}
          >
            Add User
          </button>
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full md:flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="py-2 px-4 border-b border-r ">ID</th>
                <th className="py-2 px-4 border-b border-r">Name</th>
                <th className="hidden md:table-cell py-2 px-4 border-b border-r">Email</th>
                <th className="hidden lg:table-cell py-2 px-4 border-b border-r">Phone</th>
                <th className="py-2 px-4 border-b border-r">Role</th>
                <th className="hidden sm:table-cell py-2 px-4 border-b border-r">Status</th>
                <th className="py-2 px-4 border-b">Options</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b border-r">{user.id}</td>
                  <td className="py-2 px-4 border-b border-r">
                    {user.firstName} {user.middleInitial} {user.lastName}
                  </td>
                  <td className="hidden md:table-cell py-2 px-4 border-b border-r">{user.email}</td>
                  <td className="hidden lg:table-cell py-2 px-4 border-b border-r">{user.phoneNumber}</td>
                  <td className="py-2 px-4 border-b border-r">{user.role}</td>
                  <td className="hidden sm:table-cell py-2 px-4 border-b border-r">{user.status}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="text-blue-500 hover:underline mr-2">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users