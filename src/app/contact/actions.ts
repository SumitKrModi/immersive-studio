"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export type FormState = {
  success: boolean
  message: string
}

export async function submitContactForm(prevState: any, formData: FormData): Promise<FormState> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const mission = formData.get("mission") as string

  // Simple validation
  if (!name || !email || !mission) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["delivered@resend.dev"], // This should be replaced by the user's verified email later
      subject: `New Transmission from ${name}`,
      html: `
        <h2>New Message from Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${mission}</p>
      `,
    })

    if (error) {
      console.error("Resend Error:", error)
      return {
        success: false,
        message: "Failed to send transmission. Please check your API key.",
      }
    }

    return {
      success: true,
      message: "Mission successful! Your message has been sent.",
    }
  } catch (error) {
    console.error("Submission Error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
