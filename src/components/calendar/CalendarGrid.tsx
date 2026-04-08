"use client"

import DayCell from "./DayCell"
import { isWithinInterval, isSameDay } from "date-fns"

export default function CalendarGrid({
  days,
  range,
  onSelect
}: any) {

  return (

    <div className="grid grid-cols-7 gap-2">

      {days.map((day: Date) => {

        const isStart = range.start && isSameDay(day, range.start)
        const isEnd = range.end && isSameDay(day, range.end)

        const isInRange =
          range.start &&
          range.end &&
          isWithinInterval(day, {
            start: range.start,
            end: range.end
          })

        return (
          <DayCell
            key={day.toString()}
            date={day}
            onSelect={onSelect}
            isStart={!!isStart}
            isEnd={!!isEnd}
            isSelected={!!(isStart || isEnd)}
            isInRange={!!isInRange}
          />
        )

      })}

    </div>

  )
}