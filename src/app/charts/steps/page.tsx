import steps from '../../../../data/steps.json'
import { DataPoint, VerticalBarChart } from '@/components/VerticalBarChart'

const data: DataPoint[] = steps as DataPoint[]

const dateFormatter = new Intl.DateTimeFormat('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })
const numberFormatter = new Intl.NumberFormat('sv-SE')
const total = data.reduce((sum, { value }) => sum + value, 0)
const years = data.map(d => d.year)
const minYear = Math.min(...years)
const maxYear = Math.max(...years)

export default function Steps() {
  return (
    <div className="container mx-auto p-4">
      <div className="p-6">
        <div className="text-xs uppercase tracking-widest text-white/60">
          Frozzare's yearly steps
        </div>
        <div className="text-3xl font-semibold text-white tabular-nums">
          {numberFormatter.format(total)}
        </div>
        <div className="text-xs text-white/50">
          {minYear}–{maxYear}
        </div>
      </div>
      <VerticalBarChart data={data} />
      <div className="text-xs text-white/50 p-4">
        <p>Last updated: {dateFormatter.format(new Date())}</p>
      </div>
    </div>
  )
}
