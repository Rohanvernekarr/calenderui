"use client"

import { useState } from "react"
import { getMonthDays } from "../utils/calendar"

export function useCalendar(initialDate: Date = new Date()) {
  const [currentMonth, setCurrentMonth] = useState(initialDate)
  const [direction, setDirection] = useState<'forward' | 'backward' | null>(null)

  const days = getMonthDays(currentMonth)

  const nextMonth = () => {
    setDirection('forward')
    const next = new Date(currentMonth)
    next.setMonth(next.getMonth() + 1)
    setCurrentMonth(next)
  }

  const prevMonth = () => {
    setDirection('backward')
    const prev = new Date(currentMonth)
    prev.setMonth(prev.getMonth() - 1)
    setCurrentMonth(prev)
  }

  const goToToday = () => {
    const today = new Date()
    setDirection(today > currentMonth ? 'forward' : 'backward')
    setCurrentMonth(today)
  }

  return {
    days,
    currentMonth,
    nextMonth,
    prevMonth,
    direction,
    goToToday
  }
}