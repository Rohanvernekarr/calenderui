"use client"

import { useCalendar } from "../../hooks/useCalendar"
import { useDateRange } from "../../hooks/useDateRange"

import CalendarGrid from "./CalendarGrid"
import HeroImage from "./HeroImage"
import NotesPanel from "./NotesPanel"

export default function Calendar() {

  const {
    days,
    currentMonth,
    nextMonth,
    prevMonth
  } = useCalendar()

  const { range, selectDate } = useDateRange()

  return (

    <div className="max-w-4xl mx-auto bg-white rounded-xl text-black shadow-lg overflow-hidden">

      <HeroImage month={currentMonth} />

      <div className="flex justify-between p-4">

        <button onClick={prevMonth}>
         Prev
        </button>

        <button onClick={nextMonth}>
          Next 
        </button>

      </div>

      <div className="p-6 grid md:grid-cols-2 gap-6">

        <CalendarGrid
          days={days}
          range={range}
          onSelect={selectDate}
        />

        <NotesPanel />

      </div>

    </div>

  )
}