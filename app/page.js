import ContactForm from '@/components/ui/contact-form'

export default function Home() {
  return (
    <main className='relative flex h-screen w-full flex-col items-center justify-center'>
      <section className='flex w-full max-w-screen-md flex-col items-center justify-center px-5'>
        <ContactForm />
      </section>
    </main>
  )
}
