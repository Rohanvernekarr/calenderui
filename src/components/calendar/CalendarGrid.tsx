"use client"

import styles from "./Calendar.module.css"
import DayCell from "./DayCell"
import { CalendarDay, DateRange } from "../../types/calendar"

interface CalendarGridProps {
  days: CalendarDay[]
  range: DateRange
  onSelect: (date: Date) => void
  direction: 'forward' | 'backward' | null
  monthKey: number
}

const WEEKDAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

export default function CalendarGrid({ days, range, onSelect, direction, monthKey }: CalendarGridProps) {
  const isDateInRange = (date: Date) => {
    if (!range.startDate || !range.endDate) return false
    return date >= range.startDate && date <= range.endDate
  }

  const isStart = (date: Date) => range.startDate?.toDateString() === date.toDateString()
  const isEnd = (date: Date) => range.endDate?.toDateString() === date.toDateString()

  const animationClass = direction === 'forward' 
    ? styles.slideForwardEnter 
    : direction === 'backward' 
      ? styles.slideBackwardEnter 
      : ""

  return (
    <div className={styles.calendarGrid}>
      <div className={styles.dayNames}>
        {WEEKDAYS.map(day => (
          <div key={day} className={styles.dayNameShort}>{day}</div>
        ))}
      </div>
      <div 
        key={monthKey} 
        className={`${styles.daysGrid} ${animationClass}`}
      >
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