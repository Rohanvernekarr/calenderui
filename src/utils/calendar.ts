import { 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth 
} from "date-fns"
import { CalendarDay } from "../types/calendar"

export function getMonthDays(date: Date): CalendarDay[] {
  const start = startOfWeek(startOfMonth(date), { weekStartsOn: 1 })
  const end = endOfWeek(endOfMonth(date), { weekStartsOn: 1 })

  return eachDayOfInterval({ start, end }).map(d => ({
    date: d,
    isCurrentMonth: isSameMonth(d, date),
    isToday: d.toDateString() === new Date().toDateString()
  }))
}