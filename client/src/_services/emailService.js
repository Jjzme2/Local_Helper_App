import emailjs from 'emailjs-com'

const domain = import.meta.env.VUE_APP_WEB_DOMAIN
const serviceId = import.meta.env.VUE_APP_EMAILJS_SERVICE_ID
const contactId = import.meta.env.VUE_APP_EMAILJS_CONTACT_TEMPLATE_ID
const newServiceId = import.meta.env.VUE_APP_EMAILJS_NEW_SERVICE_TEMPLATE_ID
const publicKey = import.meta.env.VUE_APP_EMAILJS_PUBLIC_KEY

function sendContactEmail(senderName, senderEmail, message) {
  // EmailJS
  const templateParams = {
    my_website_address: domain,
    name: senderName,
    email: senderEmail,
    message: message
  }

  emailjs.send(serviceId, contactId, templateParams, publicKey)
}

function sendNewServiceEmail(form) {
  // EmailJS
  const templateParams = {
    my_website_address: domain,
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
