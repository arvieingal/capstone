import React from "react";

const Admin = () => {
  const cardData = [
    { icon: "icon", title: "Total Users", value: 550 },
    { icon: "icon", title: "Total Events", value: 120 },
    { icon: "icon", title: "Total Jobs", value: 320 },
    { icon: "icon", title: "Total Library", value: "15%" },
    { icon: "icon", title: "Total Citizens", value: 1250 },
    { icon: "icon", title: "Total Health Records", value: 42 },
    { icon: "icon", title: "Total Documents", value: 42 },
  ];

  return (
    <div className="bg-gray-100">
      <div className="pt-4 pl-[1rem] flex flex-row space-x-4">
        {cardData.map((card, index) => (
          <div key={index} className="flex flex-col items-center justify-center rounded-lg border border-green-500 bg-white p-4 w-[18%]">
            <span className="material-icons text-l">{card.icon}</span>
            <span className="mt-2">{card.title}</span>
            <span className="text-2xl font-bold mt-1">{card.value}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6 pt-[2rem]">
        <div className="col-span-1 bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-4">Total Users Graph</h2>
          {/* Add your graph component here */}
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            Graph Placeholder
          </div>
        </div>
        <div className="col-span-1 bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-4">Total Citizens Graph</h2>
          {/* Add your graph component here */}
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            Graph Placeholder
          </div>
        </div>
        <div className="col-span-1 bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
          {/* Add your upcoming events list or component here */}
          <div className="h-64 overflow-y-auto">
            <ul className="space-y-2">
              <li>Event 1</li>
              <li>Event 2</li>
              <li>Event 3</li>
              {/* Add more events as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;