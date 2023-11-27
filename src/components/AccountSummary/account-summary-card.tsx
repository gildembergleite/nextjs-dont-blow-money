import { Card, CardContent, CardHeader } from '../ui/card'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import formatCurrency from '@/lib/utils/format-currency'

import Image from 'next/image'
import arrowUp from '../../../public/icons/arrow-up.svg'
import arrowDown from '../../../public/icons/arrow-down.svg'
import dollarSign from '../../../public/icons/dollar-sign.svg'

interface AccountSummaryCardProps {
  type: 'income' | 'expense' | 'total'
  value: number
}

export default function AccountSummaryCard({ type, value }: AccountSummaryCardProps) {
  const formattedValue = formatCurrency(value)
  const backgroundColor = type === 'total' && 'bg-primary'

  let title: string
  let icon: StaticImport

  switch (type) {
  case 'income': 
    title = 'Entrada'
    icon = arrowUp
    break
  case 'expense':
    title = 'Saída'
    icon = arrowDown
    break
  case 'total':
    title = 'Total'
    icon = dollarSign
    break
  }
  
  return (
    <Card className={`${backgroundColor} w-full rounded-[6px]`}>
      <CardHeader>
        <div className='flex justify-between items-center'>
          <h2 className='text-white/80'>
            {title}
          </h2>
          <Image src={icon} alt='' />
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