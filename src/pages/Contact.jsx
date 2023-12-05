import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Aindriú',
          from_email: form.email,
          to_email: 'aindriu80@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false)
        // TODO: Show success message
        // TODO: Hide an alert

        setForm({ name: '', email: '', message: '' }),
          (error) => {
            console.log(error)
            setLoading(false)
          }
      })
  }

  const handleFocus = () => {}
  const handleBlur = () => {}

  return (
    <section className="relative flex flex-col lg:flex-row max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch</h1>
        <form
          className="flex flex-col w-full gap-7 mt-14 "
          onSubmit={handleSubmit}>
          <label className="font-semibold text-black-500">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Aindriú Mac Giolla Eoin"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleBlur}
            />
          </label>
          <label className="font-semibold text-black-500">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="aindriu@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleBlur}
            />
          </label>
          <label className="font-semibold text-black-500">
            Your Message
            <textarea
              name="message"
              className="textarea"
              placeholder="Enter your message....."
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
