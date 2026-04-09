import { Calendar } from "@/src/components/calendar"

export default function Home() {
  return (
    <main style={{ padding: '2rem', width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Calendar />
    </main>
  )
}