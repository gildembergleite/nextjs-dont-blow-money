import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { DialogForm } from './dialog-form'

export function NewTransactionDialog() {
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'default'} className='text-white rounded-[6px]'>
            Nova transação
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-card border-2 border-card">
        <DialogHeader className='ml-6 mt-6'>
          <DialogTitle className='text-2xl'>
            Nova transação
          </DialogTitle>
          <DialogDescription>
            Insira os dados para cadastrar uma nova transação.
          </DialogDescription>
        </DialogHeader>
        <DialogForm />
      </DialogContent>
    </Dialog>
  )
}
