// Contact: the dark block at the bottom — contact links, the form, and the footer.
// The form checks the fields first, then sends the message through Web3Forms.
import { useState } from 'react'
import Footer from './Footer.jsx'
import { contact } from '../data.js'

// One checking function per field. Each returns an error message, or '' if OK.
const validators = {
  name: (value) => (value.trim().length > 0 ? '' : 'Enter your name.'),
  email: (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (value.trim().length === 0) return 'Enter your email.'
    if (!pattern.test(value)) return 'Enter a valid email address.'
    return ''
  },
  message: (value) =>
    value.trim().length >= 10 ? '' : 'Message should be at least 10 characters.',
}

const emptyForm = { name: '', email: '', message: '' }

export default function Contact() {
  // "State" is data React remembers and re-draws the page for when it changes.
  const [values, setValues] = useState(emptyForm) // what the user typed
  const [errors, setErrors] = useState(emptyForm) // error message per field
  const [status, setStatus] = useState({ type: '', text: '' }) // message under the button

  // Runs every time the user types in a field.
  function handleChange(event) {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  // Runs when the user leaves a field: check that one field right away.
  function handleBlur(event) {
    const { name, value } = event.target
    setErrors({ ...errors, [name]: validators[name](value) })
  }

  async function handleSubmit(event) {
    event.preventDefault() // stop the browser from reloading the page

    // Check all fields before sending.
    const newErrors = {
      name: validators.name(values.name),
      email: validators.email(values.email),
      message: validators.message(values.message),
    }
    setErrors(newErrors)

    const hasError = Object.values(newErrors).some((message) => message !== '')
    if (hasError) {
      setStatus({ type: 'error', text: 'Please fix the fields above before sending.' })
      return
    }

    setStatus({ type: '', text: 'Sending...' })

    try {
      // FormData collects every field in the form, including the hidden ones.
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(event.target),
      })
      const data = await response.json()

      if (response.status === 200 || data.success) {
        setStatus({ type: 'success', text: 'Message sent — thanks for reaching out.' })
        setValues(emptyForm)
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setStatus({
        type: 'error',
        text: 'Something went wrong. Please try again or email me directly.',
      })
    }
  }

  return (
    <section id="contact" className="contact-band" data-section>
      <div className="wrap">
        <div className="contact">
          <div>
            <h2>{contact.heading}</h2>
            <p className="lead">{contact.text}</p>

            <ul className="reach">
              {contact.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener">
                    <span className={`text-${link.color}`}>{link.label}</span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className="form" onSubmit={handleSubmit} noValidate>
            <input type="hidden" name="access_key" value={contact.formAccessKey} />
            {/* Hidden trap field: real people leave it empty, spam bots tick it. */}
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} />

            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name ? 'is-invalid' : ''}
              />
              <span className="field-error">{errors.name}</span>
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email ? 'is-invalid' : ''}
              />
              <span className="field-error">{errors.email}</span>
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.message ? 'is-invalid' : ''}
              ></textarea>
              <span className="field-error">{errors.message}</span>
            </div>

            <button type="submit" className="btn bg-cobalt">Send message</button>

            <p className={`form-status ${status.type}`} role="status" aria-live="polite">
              {status.text}
            </p>
          </form>
        </div>

        <Footer />
      </div>
    </section>
  )
}
