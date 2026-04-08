"use client"

import { DayCellProps } from "../../types/calendar"
import clsx from "clsx"

export default function DayCell({
  date,
  isSelected,
  isInRange,
  isStart,
  isEnd,
  onSelect
}: DayCellProps) {

  return (

    <button
      onClick={() => onSelect(date)}
      className={clsx(
        "h-10 w-10 flex items-center justify-center rounded-md text-sm transition",

        isInRange && "bg-blue-200",
        (isStart || isEnd) && "bg-blue-600 text-white",
        isSelected && "bg-blue-600 text-white"
      )}
    >
      {date.getDate()}
    </button>

  )
}