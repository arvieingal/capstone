// "use client"
// import { Inter } from "next/font/google";
// import "./globals.css";
// import ProvidersWrappers from "@/components/ProvidersWrappers";
// import IdleTimer from "@/components/IdleTimer";
// import UserNavbar from "@/components/UserNavbar"; // Import UserNavbar
// import { useEffect, useState } from "react"; // Add useEffect and useState

// const inter = Inter({ subsets: ["latin"] });
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [isMounted, setIsMounted] = useState(false); // State to track mount status

//   useEffect(() => {
//     setIsMounted(true); // Set to true after component mounts
//   }, []);

//   return (
//     <ProvidersWrappers>
//       <html lang="en">
//         <IdleTimer />
//         <UserNavbar /> 
//         <body className={inter.className}>
//           {children}
//         </body>
//       </html>
//     </ProvidersWrappers>
//   );
// }

"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import ProvidersWrappers from "@/components/ProvidersWrappers";
import IdleTimer from "@/components/IdleTimer";
import UserNavbar from "@/components/UserNavbar"; // Import UserNavbar
import { useEffect, useState } from "react"; // Add useEffect and useState

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMounted, setIsMounted] = useState(false); // State to track mount status

  useEffect(() => {
    setIsMounted(true); // Set to true after component mounts
  }, []);

  if (!isMounted) return null; // Return null until the component is mounted

  return (
    <ProvidersWrappers>
      <html lang="en">
        <body className={inter.className}>
          <IdleTimer />
          <UserNavbar /> {/* Render only after mounting */}
          {children} {/* Render only after mounting */}
        </body>
      </html>
    </ProvidersWrappers>
  );
}
