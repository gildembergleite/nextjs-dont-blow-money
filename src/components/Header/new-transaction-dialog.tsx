import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

import arrowUp from '../../../public/icons/arrow-up.svg'
import arrowDown from '../../../public/icons/arrow-down.svg'

export function NewTransactionDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'default'} className='text-white rounded-[6px]'>
            Nova transação
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-card">
        <DialogHeader className='ml-6 mt-6'>
          <DialogTitle className='text-2xl'>
            Nova transação
          </DialogTitle>
          <DialogDescription>
            Insira os dados para cadastrar uma nova transação.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 px-6">
          <Input
            className="py-6 rounded-[6px]"
            placeholder='Descrição'
            id="description"
            value=""
          />
          <Input
            className="py-6 rounded-[6px]"
            placeholder='Preço'
            id="price"
            value=""
          />
          <Input
            className="py-6 rounded-[6px]"
            placeholder='Categoria'
            id="category"
            value=""
          />
        </div>
        <div className='flex w-full px-6 gap-4 mt-2'>
          <Button variant={'secondary'} className='w-full h-full py-4 rounded-[6px]'>
            <Image src={arrowUp} alt='' />
            Entrada
          </Button>
          <Button variant={'secondary'} className='w-full h-full py-4 rounded-[6px]'>
            <Image src={arrowDown} alt='' />
            Saída
          </Button>
        </div>
        <DialogFooter className='px-6 py-2 my-6'>
          <Button
            className='w-full h-full py-4 rounded-[6px] text-white font-bold'
            type="submit"
          > 
            Cadastrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
