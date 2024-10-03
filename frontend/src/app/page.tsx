"use client"
import AuthLogin from "@/components/AuthLogin";
import UserNavbar from "@/components/UserNavbar";

export default function Home() {
  return (
    <>
      <div>
        <UserNavbar />
        <AuthLogin />
      </div>
    </>
  );
}
