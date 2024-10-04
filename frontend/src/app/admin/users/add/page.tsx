"use client";
import React from "react";
import Button from "@/components/AdminButton";

const Add = () => {
  function handleAdd(): void {
    throw new Error("Function not implemented.");
  }

  function handleCancel(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="w-full text-center">
        <h1 className="mb-8 flex items-center justify-center pt-8 sm:pt-12 text-2xl font-bold">
          Add User
        </h1>
      </div>
      <form className="flex flex-col lg:flex-row w-full gap-8 lg:gap-16 max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <label htmlFor="fname" className="mb-2 block text-sm font-medium">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="w-full max-w-md rounded-lg border px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="lname" className="mb-2 block text-sm font-medium">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              className="w-full max-w-md rounded-lg border px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="mname" className="mb-2 block text-sm font-medium">M.I</label>
            <input
              type="text"
              id="mname"
              name="mname"
              className="w-full max-w-md rounded-lg border px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full max-w-md rounded-lg border px-3 py-2"
              required
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full max-w-md rounded-lg border px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="role" className="mb-2 block text-sm font-medium">Role</label>
            <select
              id="role"
              name="role"
              className="w-full max-w-md rounded-lg border px-3 py-2"
              required
            >
              <option value="">Select a role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div>
            <label htmlFor="status" className="mb-2 block text-sm font-medium">Status</label>
            <select
              id="status"
              name="status"
              className="w-full max-w-md rounded-lg border px-3 py-2"
              required
            >
              <option value="">Select a status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex pl-[11rem] gap-4 pt-[5rem]">
            <Button variant="cancel" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="add" onClick={handleAdd}>
              Add User
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;