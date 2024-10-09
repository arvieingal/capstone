import React from "react";

const Admin = () => {
  const cardData = [
    { icon: "/admin/users.png", title: "Total Users", value: 550 },
    { icon: "/admin/events.png", title: "Total Events", value: 120 },
    { icon: "/admin/jobs.png", title: "Total Jobs", value: 320 },
    { icon: "/admin/library.png", title: "Total Library", value: "15%" },
    { icon: "/admin/residents.png", title: "Total Citizens", value: 1250 },
    { icon: "/admin/documents.png", title: "Total Documents", value: 42 },
  ];

  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-end mb-4">
        <h1 className="text-2xl font-bold">Account</h1>
        <div className="ml-4">
          {/* Add your account profile component or image here */}
    
        </div>
      </div>
      <div className="pt-4 pl-[1rem] flex flex-row space-x-2">
        {cardData.map((card, index) => (
          <div key={index} className="flex flex-col items-center justify-center rounded-lg border border-green-500 bg-white p-4 w-[16%]">
            <img src={card.icon} alt={card.title} className="w-10 h-10" /> {/* Updated to use an image */}
            <span className="mt-2">{card.title}</span>
            <span className="text-2xl font-bold mt-1">{card.value}</span>
          </div>
        ))}
      </div>
      <div className="items-center justify-between grid grid-cols-3 gap-8 pt-[2rem] px-[1.5rem]">
        <div className="col-span-1 bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-4">Users Graph</h2>
          {/* Add your graph component here */}
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            Graph Placeholder
          </div>
        </div>
        <div className="col-span-1 bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-4">Events Graph</h2>
          {/* Add your graph component here */}
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            Graph Placeholder
          </div>
        </div>
        <div className="col-span-1 bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-4">Job Graph</h2>
          {/* Add your upcoming events list or component here */}
          <div className="h-64 overflow-y-auto">
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            Graph Placeholder
          </div>
        
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Admin;