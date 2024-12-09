/* eslint-disable react/prop-types */

import { Card } from "./ui/Card"


function MetricCard({ title, value, subtitle }) {
  return (
    <Card>
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <div className="mt-2 text-2xl font-bold">{value}</div>
      {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
    </Card>
  )
}

export function MetricsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Current Routine"
        value="Spring 2024"
        subtitle="Revision: 4"
      />
      <MetricCard title="Number of class today" value="156" />
      <MetricCard title="Free Rooms" value="2" />
      <MetricCard title="Slot conflicts" value="3" />
    </div>
  )
}

