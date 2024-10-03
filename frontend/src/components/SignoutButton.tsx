"use client"
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Swal from 'sweetalert2'

export default function SignoutButton() {
    const { data: session } = useSession()
    const router = useRouter()

    const handleLogout = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will be logged out of your account',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log me out',
        })

        if (result.isConfirmed) {
            await signOut({ redirect: false }).then(() => {
                router.push('/')
            })
        }
    }

    return (
        <div>
            {session && <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">Sign out</button>}
        </div>
    )
}
