"use client"

import { useCalendar } from "../../hooks/useCalendar"
import { useDateRange } from "../../hooks/useDateRange"
import styles from "./Calendar.module.css"
import HeroImage from "./HeroImage"
import CalendarGrid from "./CalendarGrid"
import NotesPanel from "./NotesPanel"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Calendar() {
  const { days, currentMonth, nextMonth, prevMonth, direction, goToToday } = useCalendar()
  const { range, selectDate, clearRange } = useDateRange()
  
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.spiralHeader}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.spiralLink} />
        ))}
      </div>

      <div className={styles.heroSection}>
        <HeroImage month={currentMonth} />
      </div>

      <div className={styles.mainLayout}>
        <NotesPanel range={range} month={currentMonth} onClearRange={clearRange} />
        
        <div className={styles.gridSection}>
          <div className={styles.navigationHeader}>
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
            onSelect={selectDate} 
            direction={direction}
            monthKey={currentMonth.getTime()}
          />
        </div>
      </div>
    </div>
  )
}