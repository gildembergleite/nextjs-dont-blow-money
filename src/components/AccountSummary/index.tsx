import AccountSummaryCard from './account-summary-card'

export default function AccountSummary() {
  return (
    <section className='flex w-full justify-center'>
      <div className='flex w-full max-w-7xl justify-center items-center gap-8 px-12 -mt-20'>
        <AccountSummaryCard type="income" value={1500000} />
        <AccountSummaryCard type="expense" value={480000} />
        <AccountSummaryCard type="total" value={1020000} />
      </div>
    </section>
  )
}