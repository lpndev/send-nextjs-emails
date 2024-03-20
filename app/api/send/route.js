import Contact from '@/emails/contact'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  const { firstName, lastName, email, subject, message } = await request.json()

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Message from Contact Form',
      react: Contact({
        firstName,
        lastName,
        email,
        subject,
        message,
      }),
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
