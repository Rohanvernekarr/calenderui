"use client"

import styles from "./Calendar.module.css"
import DayCell from "./DayCell"
import { CalendarDay, DateRange } from "../../types/calendar"

interface CalendarGridProps {
  days: CalendarDay[]
  range: DateRange
  onSelect: (date: Date) => void
}

const WEEKDAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

export default function CalendarGrid({ days, range, onSelect }: CalendarGridProps) {
  const isDateInRange = (date: Date) => {
    if (!range.startDate || !range.endDate) return false
    return date >= range.startDate && date <= range.endDate
  }

  const isStart = (date: Date) => range.startDate?.toDateString() === date.toDateString()
  const isEnd = (date: Date) => range.endDate?.toDateString() === date.toDateString()

  return (
    <div className={styles.calendarGrid}>
      <div className={styles.dayNames}>
        {WEEKDAYS.map(day => (
          <div key={day} className={styles.dayNameShort}>{day}</div>
        ))}
      </div>
      <div className={styles.daysGrid}>
        {days.map((day, i) => (
          <DayCell
            key={i}
            date={day.date}
            isCurrentMonth={day.isCurrentMonth}
            isToday={day.date.toDateString() === new Date().toDateString()}
            isInRange={isDateInRange(day.date)}
            isStart={isStart(day.date)}
            isEnd={isEnd(day.date)}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  )
}