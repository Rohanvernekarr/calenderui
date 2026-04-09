"use client"

import styles from "./Calendar.module.css"

interface DayCellProps {
  date: Date
  isCurrentMonth: boolean
  isToday: boolean
  isInRange: boolean
  isStart: boolean
  isEnd: boolean
  onSelect: (date: Date) => void
}

export default function DayCell({
  date,
  isCurrentMonth,
  isToday,
  isInRange,
  isStart,
  isEnd,
  onSelect
}: DayCellProps) {
  const isSelected = isStart || isEnd
  const isSingle = isStart && isEnd

  let className = styles.dayCell
  if (!isCurrentMonth) className += ` ${styles.outOfMonth}`
  if (isToday) className += ` ${styles.today}`
  if (isInRange) className += ` ${styles.inRange}`
  if (isStart) className += ` ${styles.rangeStart}`
  if (isEnd) className += ` ${styles.rangeEnd}`
  if (isSingle) className += ` ${styles.rangeSingle}`

  return (
    <button
      onClick={() => isCurrentMonth && onSelect(date)}
      className={className}
    >
      {date.getDate()}
    </button>
  )
}