'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required!' }),
  lastName: z.string().min(1, { message: 'Last name is required!' }),
  email: z
    .string()
    .min(1, { message: 'Email address is required!' })
    .email({ message: 'Invalid email address!' }),
  subject: z.string().min(1, { message: 'Subject is required!' }),
  message: z.string().min(1, { message: 'Message is required!' }),
})

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  async function onSubmit(formData) {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Email sent successfully!')
      } else {
        toast.error('Failed to send email:', response.statusText)
      }
    } catch (error) {
      toast.error('Error sending email:', error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        <div className='flex w-full flex-col items-center gap-6 sm:flex-row'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel htmlFor='firstName'>Fist Name</FormLabel>
                <FormControl>
                  <Input
                    id='firstName'
                    type='text'
                    placeholder='John'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                <FormControl>
                  <Input
                    id='lastName'
                    type='text'
                    placeholder='Doe'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        </div>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormControl>
                <Input
                  id='email'
                  type='email'
                  placeholder='email@example.com'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='subject'>Subject</FormLabel>
              <FormControl>
                <Input
                  id='subject'
                  type='text'
                  placeholder='Message subject'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='message'>Message</FormLabel>
              <FormControl>
                <Textarea
                  id='message'
                  placeholder='Your message...'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}
