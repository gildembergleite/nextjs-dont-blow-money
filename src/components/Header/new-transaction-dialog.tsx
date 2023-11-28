'use client'

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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Input } from '@/components/ui/input'
import ArrowUpIcon from '../Icons/arrow-up'
import ArrowDownIcon from '../Icons/arrow-down'
import { Label } from '../ui/label'
import { useState } from 'react'

export function NewTransactionDialog() {
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null)

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value)
    console.log(selectedRadio)
  }
  
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
          <RadioGroup className='flex w-full'>
            <Button
              className={`w-full h-full rounded-[6px] p-0 overflow-hidden ${
                selectedRadio === 'income' ? 'bg-primary' : 'text-primary hover:bg-background/60'
              }`}
              onClick={() => handleRadioChange('income')}
              variant={'secondary'}
            >
              <Label
                className='flex items-center justify-center gap-2 w-full h-full py-4 px-6 cursor-pointer'
                htmlFor='income'
              >
                <RadioGroupItem className='sr-only' value="income" id="income" />
                <div className='w-6 h-6'><ArrowUpIcon /></div>
                <span className='text-white'>Entrada</span>
              </Label>
            </Button>

            <Button
              className={`w-full h-full rounded-[6px] p-0 overflow-hidden ${
                selectedRadio === 'outcome' ? 'bg-destructive' : 'text-destructive hover:bg-background/60'
              }`}
              onClick={() => handleRadioChange('outcome')}
              variant={'secondary'}
            >
              <Label
                className='flex items-center justify-center gap-2 w-full h-full py-4 px-6 cursor-pointer'
                htmlFor='outcome'
              >
                <RadioGroupItem className='sr-only' value="outcome" id="outcome" />
                <div className='w-6 h-6'><ArrowDownIcon /></div>
                <span className='text-white'>Saída</span>
              </Label>
            </Button>
          </RadioGroup>
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
