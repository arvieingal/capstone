import React from 'react'

export default function UserNavbar() {
    return (
        <div>
            <nav className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-16">
                        {/* Left side: Navigation links */}
                        <div className="flex items-center">
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                        Home
                                    </a>
                                    <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                        Events
                                    </a>
                                    <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                        Library
                                    </a>
                                    <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                        Job Portal
                                    </a>
                                    <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                        About Us
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right side: Login button */}
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6 float-right">
                                <a
                                    href="#"
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Login
                                </a>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="-mr-2 flex md:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {/* Icon for mobile menu */}
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </a>
                        <a href="#" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                            Events
                        </a>
                        <a href="#" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                            Library
                        </a>
                        <a href="#" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                            Job Portal
                        </a>
                        <a href="#" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                            About Us
                        </a>
                        <a href="#" className="bg-blue-500 hover:bg-blue-600 block text-white px-3 py-2 rounded-md text-base font-medium">
                            Login
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
