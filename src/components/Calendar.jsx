import Button from "./ui/Button"
import { Card } from "./ui/Card"
import { ChevronLeft, ChevronRight } from 'react-feather'

export function Calendar() {
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  const currentDate = 28

  return (
    <Card title="August 2024">
      <div className="flex items-center justify-end space-x-2 mb-4">
        <Button title={<ChevronLeft className="h-4 w-4" />} bgColor="bg-gray-200" />
        <Button title={<ChevronRight className="h-4 w-4" />} bgColor="bg-gray-200" />
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {days.map((day) => (
          <div key={day} className="font-medium">
            {day}
          </div>
        ))}
        {Array.from({ length: 35 }).map((_, i) => (
          <Button
            key={i}
            title={(i + 1).toString()}
            bgColor={i + 1 === currentDate ? 'bg-primary text-primary-foreground' : 'bg-transparent'}
          />
        ))}
      </div>
    </Card>
  )
}

