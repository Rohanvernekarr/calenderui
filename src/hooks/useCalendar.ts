"use client"

import { useState } from "react"
import { getMonthDays } from "../utils/calendar"

export function useCalendar() {

  const [currentMonth, setCurrentMonth] = useState(new Date())

  const days = getMonthDays(currentMonth)

  const nextMonth = () => {
    const next = new Date(currentMonth)
    next.setMonth(next.getMonth() + 1)
    setCurrentMonth(next)
  }

  const prevMonth = () => {
    const prev = new Date(currentMonth)
    prev.setMonth(prev.getMonth() - 1)
    setCurrentMonth(prev)
  }

  return {
    days,
    currentMonth,
    nextMonth,
    prevMonth
  }
}