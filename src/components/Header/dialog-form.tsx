'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Input } from '../ui/input'

import ArrowUpIcon from '../Icons/arrow-up'
import ArrowDownIcon from '../Icons/arrow-down'

const dialogFormSchema = z.object({
  description: z.string({
    invalid_type_error: 'Você deve inserir uma descrição válida.',
    required_error: 'O campo descrição deve ser preenchido.',
  }),
  amount: z.coerce.number({
    invalid_type_error: 'Você deve inserir apenas números.',
    required_error: 'Você deve inserir o valor da transação.',
  }),
  category: z.string({
    invalid_type_error: 'Você deve inserir uma categoria válida.',
    required_error: 'O campo descrição deve ser preenchido.',
  }),
  type: z.enum(['income', 'outcome'], {
    required_error: 'Você precisa escolher uma opção.',
  })
})

type DialogFormValues = z.infer<typeof dialogFormSchema>

export function DialogForm() {
  const form = useForm<DialogFormValues>({
    resolver: zodResolver(dialogFormSchema)
  })

  function onSubmit(data: DialogFormValues) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-6 pb-6">

        {/* DESCRIPTION FIELD */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl className='w-full'>
                <Input
                  type='text'
                  placeholder='Descrição da transação...'
                  className='w-full'
                  defaultValue={field.value}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )
          }
        />

        {/* AMOUNT FIELD */}
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl className='w-full'>
                <Input
                  type='text'
                  placeholder='Insira um valor...'
                  className='w-full'
                  defaultValue={field.value}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* CATEGORY FIELD */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl className='w-full'>
                <Input
                  type='text'
                  placeholder='Insira um endereço de email válido...'
                  className='w-full'
                  defaultValue={field.value}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* RADIO GROUP TYPES OF PLAN */}
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => {
            return (
              <FormItem className="space-y-1">
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex my-6"
                >
                  <FormItem className='w-full'>
                    <FormLabel className="text-primary [&:has([data-state=unchecked])>div]:hover:bg-background/70 [&:has([data-state=unchecked])>div]:bg-background [&:has([data-state=checked])>div]:border-primary [&:has([data-state=checked])>div]:bg-primary [&:has([data-state=checked])>div]:text-white">
                      <div className='flex items-center justify-center gap-2 py-4 w-full cursor-pointer rounded-[6px]'>
                        <FormControl>
                          <RadioGroupItem className='border-white text-white sr-only' value="income" />
                        </FormControl>
                        <div className='w-6 h-6'><ArrowUpIcon /></div>
                        <span className='text-white'>Entrada</span>
                      </div>
                    </FormLabel>
                  </FormItem>

                  <FormItem className='w-full'>
                    <FormLabel className="text-destructive [&:has([data-state=unchecked])>div]:hover:bg-background/70 [&:has([data-state=unchecked])>div]:bg-background [&:has([data-state=checked])>div]:border-destructive [&:has([data-state=checked])>div]:bg-destructive [&:has([data-state=checked])>div]:text-white">
                      <div className='flex items-center justify-center gap-2 py-4 w-full cursor-pointer rounded-[6px]'>
                        <FormControl>
                          <RadioGroupItem className='border-white text-white sr-only' value="outcome" />
                        </FormControl>
                        <div className='w-6 h-6'><ArrowDownIcon /></div>
                        <span className='text-white'>Saída</span>
                      </div>
                    </FormLabel>
                  </FormItem>

                </RadioGroup>
              </FormItem>
            )
          }}
        />

        <Button
          className='w-full py-6 rounded-[6px] text-white font-bold'
          type="submit"
        > 
          Cadastrar
        </Button>
      </form>
    </Form>
  )
}