import AccountSummaryCard from './account-summary-card'
import useSummary from '@/hooks/useSummary'

export default function AccountSummary() {
  const { income, outcome, total } = useSummary()

  return (
    <section className='flex w-full justify-center'>
      <div className='flex w-full max-w-7xl justify-center items-center gap-8 px-12 -mt-20'>
        <AccountSummaryCard type="income" value={income} />
        <AccountSummaryCard type="outcome" value={outcome} />
        <AccountSummaryCard type="total" value={total} />
      </div>
    </section>
  )
}