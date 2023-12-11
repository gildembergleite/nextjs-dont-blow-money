import { ReactNode } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import ArrowUpIcon from '../Icons/arrow-up'
import ArrowDownIcon from '../Icons/arrow-down'
import DollarSignIcon from '../Icons/dollar-sign'
import formatCurrency from '@/lib/utils/format-currency'

interface AccountSummaryCardProps {
  type: 'income' | 'outcome' | 'total'
  value: number
}

export default function AccountSummaryCard({ type, value }: AccountSummaryCardProps) {
  const formattedValue = formatCurrency(value)
  const backgroundColor = type === 'total' && 'bg-primary'

  let title: string
  let icon: ReactNode
  let color: string

  switch (type) {
  case 'income': 
    title = 'Entrada'
    color = 'text-primary'
    icon = <ArrowUpIcon />
    break
  case 'outcome':
    title = 'Saída'
    color = 'text-destructive'
    icon = <ArrowDownIcon />
    break
  case 'total':
    title = 'Total'
    color = 'text-white'
    icon = <DollarSignIcon />
    break
  }
  
  return (
    <Card className={`${backgroundColor} w-full rounded-[6px]`}>
      <CardHeader>
        <div className='flex justify-between items-center'>
          <h2 className='text-white/80'>
            {title}
          </h2>
          <div className={`${color} w-8 h-8`}>
            {icon}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className='text-3xl font-bold'>
          {formattedValue}
        </p>
      </CardContent>
    </Card>
  )
}