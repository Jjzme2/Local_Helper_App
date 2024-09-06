import emailjs from '@emailjs/browser'

// IDs
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID

const contactId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID
const newSubId = import.meta.env.VITE_EMAILJS_NEW_SUBSCRIBER_ID

// Variables
const domain = import.meta.env.VITE_WEB_DOMAIN
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

function sendNewSubscriberEmail(email) {
  // EmailJS
  const templateParams = {
    my_website_address: domain,
    to_email: servicesEmail,
    email: email
  }

  emailjs.send(serviceId, newSubId, templateParams, publicKey)
}

export { sendContactEmail, sendNewSubscriberEmail }
