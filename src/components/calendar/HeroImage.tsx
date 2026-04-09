"use client"

import styles from "./Calendar.module.css"

interface HeroImageProps {
  month: Date
}

export default function HeroImage({ month }: HeroImageProps) {
  const monthName = month.toLocaleString('default', { month: 'long' })
  const year = month.getFullYear()

  return (
    <>
      <img 
        src="/calendar_hero.png" 
        alt={`${monthName} visual`} 
        className={styles.heroImage}
      />
      <div className={styles.monthPlate} key={month.getTime()}>
        <div className={styles.yearText}>{year}</div>
        <div className={styles.monthText}>{monthName}</div>
      </div>
    </>
  )
}