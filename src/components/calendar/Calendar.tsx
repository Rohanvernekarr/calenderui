"use client"

import { useState, useMemo } from "react"
import { useCalendar } from "../../hooks/useCalendar"
import styles from "./Calendar.module.css"
import HeroImage from "./HeroImage"
import CalendarGrid from "./CalendarGrid"
import NotesPanel from "./NotesPanel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DateRange } from "../../types/calendar"
import { clsx } from "clsx"

interface CalendarProps {
  initialDate?: Date
  mode?: 'single' | 'range'
  onSelect?: (range: DateRange) => void
  showNotes?: boolean
  className?: string
  style?: React.CSSProperties
}

export function Calendar({ 
  initialDate = new Date(), 
  mode = 'range',
  onSelect,
  showNotes = true,
  className,
  style
}: CalendarProps) {
  const { days, currentMonth, nextMonth, prevMonth, direction, goToToday } = useCalendar(initialDate)
  const [range, setRange] = useState<DateRange>({ startDate: null, endDate: null })

  const handleSelectDate = (date: Date) => {
    let newRange: DateRange;
    
    if (mode === 'single') {
      newRange = { startDate: date, endDate: date }
    } else {
      if (!range.startDate || (range.startDate && range.endDate)) {
        newRange = { startDate: date, endDate: null }
      } else if (date < range.startDate) {
        newRange = { startDate: date, endDate: null }
      } else {
        newRange = { ...range, endDate: date }
      }
    }
    
    setRange(newRange)
    onSelect?.(newRange)
  }

  const clearRange = () => {
    const empty = { startDate: null, endDate: null }
    setRange(empty)
    onSelect?.(empty)
  }
  
  return (
    <div className={clsx(styles.calendarContainer, className)} style={style}>
      <div className={styles.spiralHeader}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.spiralLink} />
        ))}
      </div>

      <div className={styles.heroSection}>
        <HeroImage month={currentMonth} />
      </div>

      <div className={styles.mainLayout}>
        {showNotes && (
          <NotesPanel range={range} month={currentMonth} onClearRange={clearRange} />
        )}
        
        <div className={styles.gridSection}>
          <div className={styles.navigationHeader} style={!showNotes ? { justifyContent: 'space-between' } : {}}>
            {!showNotes && (
              <div className={styles.monthLabel}>
                {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </div>
            )}
            <div className={styles.navGroup}>
              <button onClick={prevMonth} className={styles.navButton} aria-label="Previous month">
                <ChevronLeft size={22} strokeWidth={2.5} />
              </button>
              <button onClick={goToToday} className={styles.todayButton} aria-label="Go to today">
                TODAY
              </button>
              <button onClick={nextMonth} className={styles.navButton} aria-label="Next month">
                <ChevronRight size={22} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          <CalendarGrid 
            days={days} 
            range={range} 
            onSelect={handleSelectDate} 
            direction={direction}
            monthKey={currentMonth.getTime()}
          />
        </div>
      </div>
    </div>
  )
}