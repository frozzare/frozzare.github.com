'use client'

import { useEffect, useState } from 'react'

export type DataPoint = {
  year: number
  value: number
}

export function VerticalBarChart({ data }: { data: DataPoint[] }) {
  const formatter = new Intl.NumberFormat('sv-SE')
  const max = Math.max(...data.map(d => d.value))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="bg-f-blue p-4 flex flex-col gap-3">
      {data.map(({ year, value }) => {
        const width = (value / max) * 100
        const barWidth = Math.max(width, 12)

        return (
          <div
            key={year}
            className="flex items-center gap-3"
          >
            <div className="flex-1">
              <div
                className="
                  h-10
                  min-w-[72px]
                  bg-f-pink
                  rounded-full
                  transition-[width] duration-700 ease-out motion-reduce:transition-none
                  flex items-center
                  px-4
                  text-slate-900
                  font-semibold
                "
                style={{ width: `${mounted ? barWidth : 0}%` }}
              >
                {year}
              </div>
            </div>
            <span className="w-28 text-right text-sm text-white/80 tabular-nums">
              {formatter.format(value)}
            </span>
          </div>
        )
      })}
    </div>
  )
}
