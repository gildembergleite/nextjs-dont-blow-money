import { Skeleton } from '../ui/skeleton'

export default function TableRowSkeleton() {
  return (
    <div className='flex gap-4 w-full h-10'>
      <Skeleton className='w-[15%] h-full bg-zinc-700' />
      <Skeleton className='w-full h-full bg-zinc-700' />
      <Skeleton className='w-[60%] h-full bg-zinc-700' />
      <Skeleton className='w-[60%] h-full bg-zinc-700' />
      <Skeleton className='w-[60%] h-full bg-zinc-700' />
    </div>
  )
}