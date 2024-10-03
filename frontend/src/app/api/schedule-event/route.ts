import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server'
import React from 'react'

interface EventDetails {
    summary: string;
    description: string;
    start: string
    end: string
    attendees: Array<{ email: string }>
    reminders: {
        useDefault: boolean
        overrides: Array<{ method: string; minutes: number }>
    }
}

export async function POST(req: NextRequest) {
    const { accessToken, eventDetails }: { accessToken: string; eventDetails: EventDetails } = await req.json()

    const oauth2Client = new google.auth.OAuth2(
        process.env.CLIENT_ID as string,
        process.env.CLIENT_SECRET as string,
    )
    oauth2Client.setCredentials({ access_token: accessToken })

    const calendar = google.calendar({ version: "v3", auth: oauth2Client })

    try {
        const event = await calendar.events.insert({
            calendarId: "primary",
            requestBody: {
                summary: eventDetails.summary,
                description: eventDetails.description,
                start: {
                    dateTime: eventDetails.start,
                    timeZone: "Asia/Manila",
                },
                end: {
                    dateTime: eventDetails.end,
                    timeZone: "Asia/Manila"
                },
                attendees: eventDetails.attendees,
                reminders: eventDetails.reminders,
            }
        })

        return NextResponse.json({ message: "Event Scheduled successfully", event })
    } catch (error) {
        console.error("Error scheduling event:", error)
        return NextResponse.json({ error: "Failed to schedule event" }, { status: 500 })
    }
}
