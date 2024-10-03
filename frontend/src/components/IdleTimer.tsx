'use client'
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

export default function IdleTimer({ timeout = 10 * 60 * 1000 }) {
    const [lastActivity, setLastActivity] = useState<number>(Date.now())
    const router = useRouter()

    useEffect(() => {
        const resetTimer = () => {
            setLastActivity(Date.now())
        }

        const checkIdleTime = () => {
            const currentTime = Date.now()
            const timeDiff = currentTime - lastActivity
            if (timeDiff > timeout) {
                signOut({ callbackUrl: '/' })
            }
        }

        const handleSessionExpiration = () => {
            signOut({ redirect: false })

            Swal.fire({
                icon: 'warning',
                title: 'Session Expired',
                text: 'Your session has expired due to inactivity. Please sign in again.',
            }).then(() => {
                router.push('/')
            })
        }

        window.addEventListener("mousemove", resetTimer)
        window.addEventListener("keydown", resetTimer)
        window.addEventListener("scroll", resetTimer)
        window.addEventListener("touchstart", resetTimer)

        const interval = setInterval(checkIdleTime, 60 * 1000)

        return () => {
            window.removeEventListener("mousemove", resetTimer)
            window.removeEventListener("keydown", resetTimer)
            window.removeEventListener("scroll", resetTimer)
            window.removeEventListener("touchstart", resetTimer)
            clearInterval(interval)
        }
    }, [lastActivity, timeout, router]);

    return null
}
