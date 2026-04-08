import Image from "next/image"
import { format } from "date-fns"

export default function HeroImage({ month }: { month: Date }) {

  return (

    <div className="relative h-64 w-full">

      <Image
        src="/calendar.jpg"
        alt="calendar"
        fill
        className="object-cover"
      />

      <div className="absolute bottom-4 right-4 text-white text-xl font-bold">

        {format(month, "MMMM yyyy")}

      </div>

    </div>

  )
}