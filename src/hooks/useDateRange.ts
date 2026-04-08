"use client"

import { useState } from "react"
import { DateRange } from "../types/calendar"

export function useDateRange() {

  const [range, setRange] = useState<DateRange>({
    startDate: null,
    endDate: null
  })

  const selectDate = (date: Date) => {

    if (!range.startDate) {
      setRange({ startDate: date, endDate: null })
      return
    }

    if (!range.endDate) {

      if (date < range.startDate) {
        setRange({
          startDate: date,
          endDate: range.startDate
        })
      } else {
        setRange({
          startDate: range.startDate,
          endDate: date
        })
      }

      return
    }

    setRange({
      startDate: date,
      endDate: null
    })
  }

  return {
    range,
    selectDate
  }
}