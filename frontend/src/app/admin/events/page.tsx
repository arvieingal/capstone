"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Event {
  _id: string;
  event_title: string;
  start_time: string;
  end_time: string;
  description: string;
  location: string;
  attendees: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  // Fetch events from the backend
  useEffect(() => {
    axios.get('/api/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const handleAddEvent = () => {
    router.push('/admin/events/add');
  };

  const handleDelete = (id: string) => {
    axios.delete(`/api/events/delete/${id}`)
      .then(() => {
        setEvents(prevEvents => prevEvents.filter(event => event._id !== id));
      })
      .catch(error => console.error('Error deleting event:', error));
  };

  return (
    <div className='container mx-auto pt-[4rem]'>
      <h1 className='text-2xl font-bold mb-4 flex items-center justify-center'>Manage Events</h1>
      <div className='flex flex-col md:flex-row gap-2 mb-4 pt-[2rem]'>
        <button 
          className='bg-green-800 text-white px-4 py-2 rounded-md w-full md:w-[10rem]'
          onClick={handleAddEvent}
        >
          Add Events
        </button>
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
        />
      </div>
      <table className='w-full border-collapse border border-gray-300 overflow-x-auto '>
        <thead>
          <tr className='bg-green-800 text-white '>
            <th className='border border-gray-300 p-2 font-light'>Event Title</th>
            <th className='border border-gray-300 p-2 font-light'>Start Time</th>
            <th className='border border-gray-300 p-2 font-light'>End Time</th>
            <th className='border border-gray-300 p-2 font-light'>Description</th>
            <th className='border border-gray-300 p-2 font-light'>Location</th>
            <th className='border border-gray-300 p-2 font-light'>Attendees</th>
            <th className='border border-gray-300 p-2 font-light'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.filter(event => event.event_title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(event => (
            <tr key={event._id}>
              <td className='border border-gray-300 p-2'>{event.event_title}</td>
              <td className='border border-gray-300 p-2'>{event.start_time}</td>
              <td className='border border-gray-300 p-2'>{event.end_time}</td>
              <td className='border border-gray-300 p-2'>{event.description}</td>
              <td className='border border-gray-300 p-2'>{event.location}</td>
              <td className='border border-gray-300 p-2'>{event.attendees}</td>
              <td className='border border-gray-300 p-2'>
                <button 
                  className='bg-red-500 text-white px-2 py-1 rounded-md'
                  onClick={() => handleDelete(event._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Events;
