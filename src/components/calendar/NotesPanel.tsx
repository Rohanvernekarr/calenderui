"use client"

import { useState, useEffect } from "react"
import styles from "./Calendar.module.css"
import { DateRange } from "../../types/calendar"
import { NotebookPen, History } from "lucide-react"

interface NotesPanelProps {
  range: DateRange
  month: Date
  onClearRange: () => void
}

export default function NotesPanel({ range, month, onClearRange }: NotesPanelProps) {
  const [allNotes, setAllNotes] = useState<Record<string, string>>({})
  const [currentNote, setCurrentNote] = useState("")

  const getActiveKey = () => {
    if (range.startDate && range.endDate) {
      return `range_${range.startDate.toDateString()}_${range.endDate.toDateString()}`
    }
    if (range.startDate) {
      return `date_${range.startDate.toDateString()}`
    }
    return `month_${month.getFullYear()}_${month.getMonth()}`
  }

  const activeKey = getActiveKey()

  useEffect(() => {
    const saved = localStorage.getItem("calendar_notes_map")
    if (saved) {
      const parsed = JSON.parse(saved)
      setAllNotes(parsed)
      setCurrentNote(parsed[activeKey] || "")
    }
  }, [])

  useEffect(() => {
    setCurrentNote(allNotes[activeKey] || "")
  }, [activeKey, allNotes])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setCurrentNote(value)
    
    const updatedNotes = { ...allNotes, [activeKey]: value }
    setAllNotes(updatedNotes)
    localStorage.setItem("calendar_notes_map", JSON.stringify(updatedNotes))
  }

  const getLabel = () => {
    if (range.startDate && range.endDate) return "Date Range Notes"
    if (range.startDate) return `${range.startDate.getDate()} ${range.startDate.toLocaleString('default', { month: 'short' })} Notes`
    return "Monthly Journal"
  }

  return (
    <div className={styles.notesSection}>
      <h3 className={styles.notesTitle}>
        <NotebookPen size={18} />
        {getLabel()}
      </h3>
      <textarea
        className={styles.notesArea}
        placeholder={range.startDate ? "Write your plans for this selection..." : "What's on your mind for this month?"}
        value={currentNote}
        onChange={handleChange}
      />
      
      {range.startDate && (
        <div className={styles.notesFooter}>
          <button onClick={onClearRange} className={styles.clearRangeButton}>
            <History size={16} />
            Show Monthly Notes
          </button>
          <div className={styles.selectionClearHint}>
            <strong>Selection:</strong> {range.startDate.toLocaleDateString()} 
            {range.endDate ? ` — ${range.endDate.toLocaleDateString()}` : ''}
          </div>
        </div>
      )}
    </div>
  )
}