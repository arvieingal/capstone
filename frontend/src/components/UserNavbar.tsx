"use client";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import LoginModal from "@/components/LoginModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Library", href: "/library" },
  { name: "Job Portal", href: "/job" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await signOut({ redirect: false }).then(() => {
      router.push("/");
    });
  };

  return (
    <div className="bg-[#165B4B] py-6">
      <div className="container flex items-center justify-between">
        {/* Left side: Logo and Navigation */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide text-white">
            KaUnite
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-20 pl-[8rem]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  href={link.href}
                  key={link.name}
                  className={isActive ? "text-gray-400" : "text-white"}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right side: Login Button */}
        <div>
          <button
            onClick={() => setShowLoginModal(true)}
            className=" text-white cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </div>
  );
}
