import Head from "next/head"
import steps from "../../../data/steps.json"
import { DataPoint, VerticalBarChart } from "@/components/VerticalBarChart"

const data: DataPoint[] = steps as DataPoint[]

const dateFormatter = new Intl.DateTimeFormat("sv-SE", {
  year: "numeric",
  month: "long",
  day: "numeric",
})

const numberFormatter = new Intl.NumberFormat("sv-SE")

const total = data.reduce((sum, { value }) => sum + value, 0)
const years = data.map(d => d.year)
const minYear = Math.min(...years)
const maxYear = Math.max(...years)

export default function Steps() {
  const now = new Date()

  return (
    <>
      <Head>
        <title>Steps – Fredrik Forsmo</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main className="container mx-auto p-4">
        {/* Summary */}
        <section className="p-6">
          <h1 className="text-xs uppercase tracking-widest text-white/60">
            Fredrik’s yearly steps
          </h1>

          <div className="text-3xl font-semibold text-white tabular-nums">
            {numberFormatter.format(total)}
          </div>

          <p className="text-xs text-white/50">
            {minYear}–{maxYear}
          </p>
        </section>

        {/* Chart */}
        <section aria-label="Yearly steps chart">
          <VerticalBarChart data={data} />
        </section>

        {/* Meta */}
        <footer className="p-4">
          <p className="text-xs text-white/50">
            Last updated:{" "}
            <time dateTime={now.toISOString()}>
              {dateFormatter.format(now)}
            </time>
          </p>
        </footer>
      </main>
    </>
  )
}
