"use client"

import { useState, useEffect } from "react"

export default function NotesPanel() {

  const [notes, setNotes] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem("calendar-notes")
    if (saved) setNotes(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem("calendar-notes", notes)
  }, [notes])

  return (

    <div className="flex flex-col gap-2">

      <h2 className="font-semibold text-lg">
        Notes
      </h2>

      <textarea
        className="w-full h-40 border rounded-md p-3"
        placeholder="Write notes..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

    </div>

  )
}