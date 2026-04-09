"use client"

import { useCalendar } from "../../hooks/useCalendar"
import { useDateRange } from "../../hooks/useDateRange"
import styles from "./Calendar.module.css"
import HeroImage from "./HeroImage"
import CalendarGrid from "./CalendarGrid"
import NotesPanel from "./NotesPanel"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Calendar() {
  const { days, currentMonth, nextMonth, prevMonth } = useCalendar()
  const { range, selectDate, clearRange } = useDateRange()
  
  return (
    <div className={styles.calendarContainer} key={currentMonth.getTime()}>
      <div className={styles.spiralHeader}>
        {[...Array(12)].map((_, i) => (
          <div key={i} className={styles.spiralLink} />
        ))}
      </div>

      <div className={styles.heroSection}>
        <HeroImage month={currentMonth} />
        <div className={styles.navButtons}>
          <button onClick={prevMonth} className={styles.navButton} aria-label="Previous month">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextMonth} className={styles.navButton} aria-label="Next month">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className={styles.mainLayout}>
        <NotesPanel range={range} month={currentMonth} onClearRange={clearRange} />
        <CalendarGrid 
          days={days} 
          range={range} 
          onSelect={selectDate} 
        />
      </div>
    </div>
  )
}