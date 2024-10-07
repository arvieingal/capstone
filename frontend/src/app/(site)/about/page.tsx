import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-6 flex justify-center items-center">About Our Barangay</h1>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Barangay Officials</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Hon. Ma. Elena A. Entoma", position: "Punong Barangay", photo: "/landing" },
            { name: "Hon. Venus A. Entoma", position: "Kagawad", photo: "/images/photo2.jpg" },
            { name: "Hon. Jessica E. Osorno", position: "Kagawad", photo: "/landing/Jhec Osorno.png" },
            { name: "Hon. Felisa C. Tangpos", position: "Kagawad", photo: "/landing/photo4.jpg" },
            { name: "Hon. Benigna Debalucos", position: "Kagawad", photo: "/landing/photo5.jpg" },
            { name: "Hon. Christopher Caritero", position: "Kagawad", photo: "/landing/photo6.jpg" },
            { name: "Hon. Cristy L. Abadanio", position: "Kagawad", photo: "/landing/photo7.jpg" },
            { name: "Hon. Eduardo Jr. M. Cabahug", position: "Kagawad", photo: "/landing/photo8.jpg" },
          ].map((official, index) => (
            <div key={index} className="text-center">
              <Image src={official.photo} alt="Officials Photo" width={100} height={100} className="mb-2 rounded-full" />
              <p className="text-sm font-semibold">{official.name}</p>
              <p className="text-xs text-gray-600">{official.position}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">SK Officials</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Hon. Jayson L. Genilo", position: "SK Chairman", photo: "/landing/Jayson Genilo.png" },
            { name: "Hon. Bob Anthony L. Rubin", position: "SK Kagawad", photo: "/landing/Bob Anthony.png" },
            { name: "Hon. Hannah Mae Limbaga", position: "SK Kagawad", photo: "/landing/Hannah Mae Limbaga.png" },
            { name: "Hon. Belen Entoma", position: "SK Kagawad", photo: "/landing/Belen.png" },
            { name: "Hon. Bryle C. Canares", position: "SK Kagawad", photo: "/landing/photo13.jpg" },
            { name: "Hon. Jinky T. Caritero", position: "SK Kagawad", photo: "/landing/photo14.jpg" },
            { name: "Hon. Kent Dominic L. Abadanio", position: "SK Kagawad", photo: "/landing/Kent Dominic.png" },
            { name: "Hon. Vince Luige Nacorda", position: "SK Kagawad", photo: "/landing/Vince Luigi.png" },
          ].map((official, index) => (
            <div key={index} className="text-center">
              <Image src={official.photo} alt={official.name} width={100} height={100} className="mb-2 rounded-full" />
              <p className="text-sm font-semibold">{official.name}</p>
              <p className="text-xs text-gray-600">{official.position}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Emergency Hotlines</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <ul className="grid grid-cols-2 gap-4">
            <li><strong>Barangay Hall:</strong> 123-4567</li>
            <li><strong>Police:</strong> 911</li>
            <li><strong>Fire Department:</strong> 160</li>
            <li><strong>Ambulance:</strong> 117</li>
            <li><strong>Disaster Response:</strong> 111-1234</li>
            <li><strong>Health Center:</strong> 123-7890</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About