"use client"

import { useCalendar } from "../../hooks/useCalendar"
import { useDateRange } from "../../hooks/useDateRange"
import { useState, useEffect } from "react"
import styles from "./Calendar.module.css"
import HeroImage from "./HeroImage"
import CalendarGrid from "./CalendarGrid"
import NotesPanel from "./NotesPanel"

export function Calendar() {
  const { days, currentMonth, nextMonth, prevMonth } = useCalendar()
  const { range, selectDate } = useDateRange()
  
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.spiralHeader}>
        {[...Array(12)].map((_, i) => (
          <div key={i} className={styles.spiralLink} />
        ))}
      </div>

      <div className={styles.heroSection}>
        <HeroImage month={currentMonth} />
        <div className={styles.navButtons}>
          <button onClick={prevMonth} className={styles.navButton} aria-label="Previous month">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button onClick={nextMonth} className={styles.navButton} aria-label="Next month">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.mainLayout}>
        <NotesPanel />
        <CalendarGrid 
          days={days} 
          range={range} 
          onSelect={selectDate} 
        />
      </div>
    </div>
  )
}