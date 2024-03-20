import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

export default function Contact({
  firstName,
  lastName,
  email,
  subject,
  message,
}) {
  return (
    <Html>
      <Head />
      <Preview>New message from my portfolio website.</Preview>
      <Tailwind>
        <Body className='bg-zinc-950 font-sans text-zinc-50'>
          <Section className='max-w-3xl px-5'>
            <Container className='my-2 text-center'>
              <Heading as='h1' className='text-3xl font-bold'>
                New contact form!
              </Heading>
            </Container>
            <Container className='my-4 rounded-lg border border-zinc-100 bg-zinc-50 px-5 pb-5 text-zinc-950'>
              <Heading as='h3'>Data received:</Heading>
              <Section>
                <Text className='font-semibold'>First Name</Text>
                <Container className='rounded-lg bg-zinc-100 p-5'>
                  {firstName}
                </Container>
                <Text className='font-semibold'>Last Name</Text>
                <Container className='rounded-lg bg-zinc-100 p-5'>
                  {lastName}
                </Container>
                <Text className='font-semibold'>Email</Text>
                <Container className='rounded-lg bg-zinc-100 p-5'>
                  {email}
                </Container>
                <Text className='font-semibold'>Subject</Text>
                <Container className='rounded-lg bg-zinc-100 p-5'>
                  {subject}
                </Container>
                <Text className='font-semibold'>Message</Text>
                <Container className='rounded-lg bg-zinc-100 p-5'>
                  {message}
                </Container>
              </Section>
            </Container>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  )
}
