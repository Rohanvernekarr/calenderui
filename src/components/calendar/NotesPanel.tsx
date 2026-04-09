"use client"

import { useState, useEffect } from "react"
import styles from "./Calendar.module.css"

export default function NotesPanel() {
  const [note, setNote] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem("calendar_notes")
    if (saved) setNote(saved)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setNote(value)
    localStorage.setItem("calendar_notes", value)
  }

  return (
    <div className={styles.notesSection}>
      <h3 className={styles.notesTitle}>Notes</h3>
      <textarea
        className={styles.notesArea}
        placeholder="Jot down some memos..."
        value={note}
        onChange={handleChange}
      />
    </div>
  )
}