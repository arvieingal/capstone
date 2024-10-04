"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/UserNavbar";
import { useRouter } from "next/navigation";
import LoginModal from "@/components/LoginModal";
import UserNavbar from "@/components/UserNavbar";
type DataProps = {
  message: String;
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataProps | null>(null);
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setData({ message: "" });
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className="p-4">
      </div>
      <div className="flex h-[60rem]">
        <div className="pl-[4rem] pt-[20rem]">
          <div className="w-[60rem]">
            <p className="font-poppins text-[4rem] font-semibold text-[#1CC19B]">
              Empowering Youth, <br /> Building Communities
            </p>
          </div>
          <p className="text-[2rem]">
            Connecting You to Opportunities and Resources <br /> for a Brighter
            Future
          </p>
          <div className="pt-[2rem]">
             <button
          className="flex h-[3rem] w-[10rem] items-center justify-center rounded-lg bg-[#00BFA5]"
          onClick={() => setShowLoginModal(true)}
        >
          <p className="text-xl font-medium tracking-wide text-white">
            Get Started
          </p>
        </button>
          </div>
        </div>
        {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
      </div>
      <div className="pt-2">
        <div className="h-[35rem] bg-[#E7E9E8]">
          <div className="pt-[8rem] text-2xl">
            <p className="flex items-center justify-center">
              Welcome to{" "}
              <span className="font-medium text-[#1CC19B]">
                {" "}
                YouthPathways{" "}
              </span>{" "}
            </p>
            <p className="flex items-center justify-center">
              Your Gateway to Opportunities and Resources for a Brighter Future
            </p>
            <p className="w-[120rem] pl-[10rem] pt-[2rem]">
              At <span className="text-[#1CC19B]"> YouthPathways </span>, we are
              dedicated to empowering young individuals by connecting them with
              valuable opportunities, resources, and community activities.
              Whether you're looking for the latest job openings, seeking to
              participate in meaningful events, or searching for helpful
              articles and guides, YouthPathways is here to support you every
              step of the way.
            </p>
            <p className="w-[120rem] pl-[10rem] pt-[2rem]">
              Start exploring the wealth of opportunities and resources
              available to you. Whether you're a student, a job seeker, or
              simply looking to make a difference in your community,
              YouthPathways is here to help you pave the way to a brighter
              future.
            </p>
          </div>
          <div className="flex items-center justify-center pt-[4rem]">
            <h1 className="pt-[8rem] text-xl font-semibold">Upcoming Events</h1>
          </div>
          <div className="flex justify-around pt-4">
            <div>
              <p>Youth Leadership Summit</p>
              <div className="pt-[4rem]">
                <div className="rounded-lg bg-[#10293A] pl-4 pt-4 text-white">
                  <Image
                    src="/user/user-home-7.svg"
                    width={300}
                    height={100}
                    alt="Image"
                  />
                  <p className="font-Poppins w-[20rem] pl-4">
                    Join us for a day of inspiring talks, workshops, and
                    networking opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute">Community Cleanup Day</div>
            <div className="pl-[4rem] pt-[5rem]">
              <div className="rounded-lg bg-[#10293A] pl-4 pt-4 text-white">
                <Image
                  src="/user/user-home-8.svg"
                  width={300}
                  height={100}
                  alt="Image"
                />
                <div className="font-Poppins w-[20rem] pl-4">
                  Join us for a day of inspiring talks, workshops, and
                  networking opportunities.
                </div>
              </div>
            </div>
            <div className="absolute pl-[90rem]">
              Fire Safety and First Aid Seminar
            </div>
            <div className="pt-[5rem]">
              <div className="rounded-lg bg-[#10293A] pl-4 pt-4 text-white">
                <Image
                  src="/user/user-home-9.svg"
                  width={300}
                  height={100}
                  alt="Image"
                />
                <div className="font-Poppins w-[20rem] pl-4">
                  Join us for a day of inspiring talks, workshops, and
                  networking opportunities.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
