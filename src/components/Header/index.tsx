import Image from 'next/image'
import Link from 'next/link'

import logo from '../../../public/images/logo.svg'
import { Button } from '../ui/button'

export default function Header() {
  return (
    <header className="flex w-full h-52 justify-center bg-input">
      <div className="flex w-full max-w-7xl px-12 mt-10 justify-between items-start">
        <div className='flex gap-2 items-center'>
          <Image width={42} height={42} src={logo} alt='' />
          <Link href="#" className='text-2xl font-bold'>
            {'Don\'t Blow Money'}
          </Link>
        </div>
        <div className='flex'>
          <Button variant={'default'} size={'lg'} className='text-white'>
            Nova transação
          </Button>
        </div>
      </div>
    </header>
  )
}