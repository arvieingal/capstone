"use client"
import { cloudresourcemanager } from 'googleapis/build/src/apis/cloudresourcemanager';
import { useSession } from 'next-auth/react';
import React, { FormEvent, useState } from 'react'

interface EventDetails {
    summary: string;
    description: string;
    start: string;
    end: string;
    attendees: Array<{ email: string }>
    reminders: {
        useDefault: boolean;
        overrides: Array<{ method: string; minutes: number }>
    }
}

export default function ScheduleEvent() {
    const { data: session } = useSession()
    const [message, setMessage] = useState<string>("")

    const [eventDetails, setEventDetails] = useState<EventDetails>({
        summary: "",
        description: "",
        start: "",
        end: "",
        attendees: [{ email: "" }],
        reminders: {
            useDefault: false,
            overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "popup", minutes: 10 },
            ]
        }
    })

    console.log({ accessToken: session?.accessToken, eventDetails })

    const handleScheduleEvent = async (e: FormEvent) => {
        e.preventDefault()

        if (!session || !session.accessToken) return;

        const eventDetailsWithTimezone = {
            ...eventDetails,
            start: `${eventDetails.start}:00+08:00`,
            end: `${eventDetails.end}:00+08:00`,
        }

        try {
            const res = await fetch("/api/schedule-event", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    accessToken: session.accessToken,
                    eventDetails: eventDetailsWithTimezone,
                })
            })

            const data = await res.json()
            if (res.ok) {
                setMessage("Event scheduled successfully!")
            } else {
                setMessage(data.error || "Failed to schedule event.")
            }
        } catch (error) {
            setMessage("Error scheduling event.")
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setEventDetails((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleAttendeeChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newAttendees = eventDetails.attendees.map((attendee, i) =>
            i === index ? { ...attendee, email: e.target.value } : attendee
        )
        setEventDetails((prev) => ({
            ...prev,
            attendees: newAttendees,
        }))
    }

    const addAttendee = () => {
        setEventDetails((prev) => ({
            ...prev,
            attendees: [...prev.attendees, { email: '' }]
        }))
    }

    const removeAttendee = (index: number) => {
        const newAttendees = eventDetails.attendees.filter((_, i) => i !== index)
        setEventDetails((prev) => ({
            ...prev,
            attendees: newAttendees,
        }))
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <form action="" onSubmit={handleScheduleEvent} className='space-y-4 p-4 border-2 border-gray-300 rounded'>
                <div>
                    <label htmlFor="summary">Event Title</label>
                    <input
                        type='text'
                        name='summary'
                        value={eventDetails.summary}
                        onChange={handleChange}
                        className='block border-2 p-2 rounded w-full'
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        name='description'
                        value={eventDetails.description}
                        onChange={handleChange}
                        className='block border-2 p-2 rounded w-full'
                        required
                    />
                </div>

                <div>
                    <label htmlFor="start">Start Time</label>
                    <input
                        type='datetime-local'
                        name='start'
                        value={eventDetails.start}
                        onChange={handleChange}
                        className='block border-2 p-2 rounded w-full'
                        required
                    />
                </div>

                <div>
                    <label htmlFor="end">End Time</label>
                    <input
                        type='datetime-local'
                        name='end'
                        value={eventDetails.end}
                        onChange={handleChange}
                        className='block border-2 p-2 rounded w-full'
                        required
                    />
                </div>

                <div>
                    <label>Attendees</label>
                    {eventDetails.attendees.map((attendee, index) => (
                        <div key={index} className='flex space-x-2 mb-2'>
                            <input
                                type='email'
                                value={attendee.email}
                                onChange={(e) => handleAttendeeChange(index, e)}
                                className="border-2 p-2 rounded w-full"
                                placeholder="Attendee email"
                                required
                            />
                            {eventDetails.attendees.length > 1 && (
                                <button
                                    type='button'
                                    onClick={() => removeAttendee(index)}
                                    className='bg-red-500 text-white px-4 py-2 rounded'
                                >Remove</button>
                            )}
                        </div>
                    ))}
                    <button type='button' onClick={addAttendee} className='bg-blue-500 text-white px-4 py-2 rounded'>Add Another Attendee</button>
                </div>

                <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded'>Schedule Event</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    )
}
