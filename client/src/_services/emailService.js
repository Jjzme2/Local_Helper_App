import emailjs from '@emailjs/browser'

const domain = import.meta.env.VITE_WEB_DOMAIN
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const contactId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID
const newServiceId = import.meta.env.VITE_EMAILJS_NEW_SERVICE_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const servicesEmail = import.meta.env.VITE_SERVICES_EMAIL

function sendContactEmail(form) {
  // EmailJS
  const templateParams = {
    my_website_address: domain,
    to_email: servicesEmail,
    name: form.name,
    email: form.email,
    message: form.message
  }

  emailjs.send(serviceId, contactId, templateParams, publicKey)
}

function sendNewServiceEmail(form) {
  // EmailJS
  const templateParams = {
    my_website_address: domain,
    to_email: servicesEmail,
    name: form.name,
    category: form.category,
    description: form.description,
    notes: form.notes,
    budget: form.budget,
    time: form.time,
    location: form.location,
    email: form.email
    // consent: form.consent,
    // attachment: form.attachment
  }

  emailjs.send(serviceId, newServiceId, templateParams, publicKey)
}

export { sendContactEmail, sendNewServiceEmail }
