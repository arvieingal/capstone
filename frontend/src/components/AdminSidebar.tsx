"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const AdminSidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-green-800 p-4 text-white">
        <div className="space-y-6 pl-[1rem]">
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center pt-[10rem] text-l font-medium">
              <Image src="/admin/home.svg" alt="Home" width={40} height={20} />
              <Link href="/admin">
                <span
                  className={`pl-[1rem] ${isActive("/admin") ? "underline" : ""}`}
                >
                  Dashboard
                </span>
              </Link>
            </div>
            <div className="flex items-center pt-[1rem] text-l font-medium">
              <Image
                src="/admin/group.svg"
                alt="Users"
                width={30}
                height={20}
              />
              <Link href="/admin/users">
                <span
                  className={`pl-[1.5rem] ${isActive("/admin/users") ? "underline" : ""}`}
                >
                  Users
                </span>
              </Link>
            </div>

            <div className="flex items-center pt-[1rem] text-l font-medium">
              <Image
                src="/admin/calendar_month.svg"
                alt="Events"
                width={35}
                height={20}
              />
              <Link href="/admin/events">
                <span
                  className={`pl-[1.5rem] ${isActive("/admin/events") ? "underline" : ""}`}
                >
                  Events
                </span>{" "}
              </Link>
            </div>
            <div className="flex items-center pt-[1rem] text-l font-medium">
              <Image src="/admin/work.svg" alt="Jobs" width={35} height={20} />
              <Link href="/admin/job">
                <span
                  className={`pl-[1.5rem] ${isActive("/admin/job") ? "underline" : ""}`}
                >
                  Jobs
                </span>
              </Link>
            </div>
            <div className="flex items-center pt-[1rem] text-l font-medium">
              <Image
                src="/admin/dictionary.svg"
                alt="Library"
                width={35}
                height={20}
              />
              <Link href="/admin/library">
                <span
                  className={`pl-[1.5rem] ${isActive("/admin/library") ? "underline" : ""}`}
                >
                  Library
                </span>
              </Link>
            </div>
            <div className="flex items-center pt-[1rem] text-l font-medium">
              <Image
                src="/admin/dvr.svg"
                alt="Residents"
                width={35}
                height={20}
              />
              <Link href="/admin/residents">
                <span
                  className={`pl-[1.5rem] ${isActive("/admin/residents") ? "underline" : ""}`}
                >
                  Residents
                </span>
              </Link>
            </div>
            <div className="flex items-center pt-[1rem] text-l font-medium">
              <Image
                src="/admin/documents.svg"
                alt="Documents"
                width={35}
                height={20}
              />
              <Link href="/admin/documents">
                <span
                  className={`pl-[1.5rem] ${isActive("/admin/documents") ? "underline" : ""}`}
                >
                  Documents
                </span>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default AdminSidebar;
