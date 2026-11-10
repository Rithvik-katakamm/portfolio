// One place for contact links used across the page.
// BOOKING_URL: paste your Cal.com / Calendly link here. While it's empty,
// every "Book a call" button falls back to opening an email to EMAIL.
export const BOOKING_URL = ''
export const EMAIL = 'rithvik.katakamm@gmail.com'
export const LINKEDIN = 'https://linkedin.com/in/rithvikkatakam/'
export const GITHUB = 'https://github.com/Rithvik-katakamm'

export const bookingHref =
  BOOKING_URL ||
  `mailto:${EMAIL}?subject=${encodeURIComponent("Let's talk")}`
