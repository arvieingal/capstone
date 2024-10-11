"use client"
import { cloudresourcemanager } from 'googleapis/build/src/apis/cloudresourcemanager';
import { useSession } from 'next-auth/react';
import React, { FormEvent, useState, useEffect, Key} from 'react'

interface EventDetails {
    id: Key | null | undefined;
    summary: string;
    description: string;
    start: string;
    end: string;
    location: string;
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
        id:"",
        summary: "",
        description: "",
        start: "",
        end: "",
        location: "",
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
        <div className="w-full px-4 sm:px-6 lg:px-8 pt-[4rem] ">
        <div className="w-full text-center">
          <h1 className="mb-8 flex items-center justify-center pt-8 sm:pt-12 text-2xl font-bold">
          ADD EVENTS
          </h1>
        </div>
        <div className="w-full space-y-6">
            <form action="" onSubmit={handleScheduleEvent} className='space-y-8 p-4 '>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4"> 
                    <div>
                        <label htmlFor="summary" className="block mb-1">Event Title</label>
                        <input
                            type='text'
                            name='summary'
                            value={eventDetails.summary}
                            onChange={handleChange}
                            className="w-full max-w-md rounded-lg border px-3 py-2 "
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block mb-1">Location</label>
                        <select
                            name='location'
                            value={eventDetails.location}
                            onChange={handleChange}
                            className="w-full max-w-md rounded-lg border px-3 py-2"
                            required
                        >
                            <option value="">Select Location</option>
                            <option value="Baklaw">Baklaw</option>
                            <option value="Ibabao">Ibabao</option>
                            <option value="Kainsikan">Kainsikan</option>
                            <option value="Danao">Danao</option>
                            <option value="Sentro">Sentro</option>
                            <option value="Holy Trinity">Holy Trinity</option>
                            <option value="Kamorosan">Kamorosan</option>
                            <option value="Guiso">Guiso</option>
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="start" className="block mb-1">Start Time</label>
                        <input
                            type='datetime-local'
                            name='start'
                            value={eventDetails.start}
                            onChange={handleChange}
                            className="w-full max-w-md rounded-lg border px-3 py-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block mb-1">Description</label>
                        <textarea
                            name='description'
                            value={eventDetails.description}
                            onChange={handleChange}
                            className="w-full max-w-md rounded-lg border px-3 py-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="end" className="block mb-1">End Time</label>
                        <input
                            type='datetime-local'
                            name='end'
                            value={eventDetails.end}
                            onChange={handleChange}
                            className="w-full max-w-md rounded-lg border px-3 py-2"
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
                                    className="w-full max-w-md rounded-lg border px-3 py-2"
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
                        <button type='button' onClick={addAttendee} className='bg-blue-500 text-white px-4 py-2 rounded mt-2'>Add Another Attendee</button>
                    </div>
                </div>

                <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded'>Schedule Event</button>
                {message && <p>{message}</p>}
            </form>
        </div>
        </div>
    
    )
}
