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
import ArrowUpIcon from '../Icons/arrow-up'

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
            type='text'
            placeholder='Descrição'
            id="description"
          />
          <Input
            type='text'
            placeholder='Preço'
            id="price"
          />
          <Input
            type='text'
            placeholder='Categoria'
            id="category"
          />
        </div>
        <div className='flex w-full px-6 gap-4 mt-2'>
          <Button
            className='w-full h-full py-4 rounded-[6px] gap-2 bg-background focus:bg-primary'
            variant={'ghost'}
          >
            <div className='w-6 h-6'><ArrowUpIcon /></div>
            Entrada
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
