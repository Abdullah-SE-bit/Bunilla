// Advertised titles and specialization supplied in the user's recruitment brief.
// No salaries, benefits, hours, requirements or deadlines were supplied.
export const careers = {
  title: "Careers at Bunilla",
  description: "Bunilla is hiring in I-8, Islamabad. Browse the five advertised kitchen and women’s hiring roles and contact the hiring team on WhatsApp.",
  hero: {
    label: "Careers at Bunilla", first: "Come work", italic: "at Bunilla.",
    body: "We’re getting ready to open in I-8, Islamabad, and we’re looking for people to join our team.",
    cta: "See open positions", caption: "Bunilla launch imagery", photoAlt: "Bunilla cups on a café counter in the brand’s launch imagery",
  },
  openings: { label: "Open positions", title: "Find your role", italic: "at Bunilla.", body: "These are the roles we’ve advertised for I-8, Islamabad. Choose a position to ask our hiring team how to apply." },
  categories: [
    { id: "kitchen", label: "Kitchen team", number: "01", intro: "We’re hiring for two roles in the kitchen.", roles: [
      { id: "head-chefs", title: "Head Chefs", detail: "English Breakfast & Continental", message: "Hi Bunilla, I'm interested in the Head Chef position for English Breakfast and Continental. Could you please share the application details?" },
      { id: "kitchen-helpers", title: "Kitchen Helpers", detail: "", message: "Hi Bunilla, I'm interested in the Kitchen Helper position. Could you please tell me how to apply?" },
    ] },
    { id: "women", label: "Women’s hiring", number: "02", intro: "The following three roles were included in our women’s hiring announcement.", roles: [
      { id: "female-cashiers", title: "Female Cashiers", detail: "", message: "Hi Bunilla, I'm interested in the Female Cashier position. Could you please tell me how to apply?" },
      { id: "sales-girls", title: "Sales Girls", detail: "", message: "Hi Bunilla, I'm interested in the Sales Girl position. Could you please tell me how to apply?" },
      { id: "cleaners-housekeeping", title: "Cleaners / Housekeeping", detail: "", message: "Hi Bunilla, I'm interested in the Cleaners / Housekeeping position. Could you please tell me how to apply?" },
    ] },
  ],
  whatsappNumber: "923099086081", displayNumber: "03099086081", apply: "Apply on WhatsApp",
  contact: {
    label: "Talk to the hiring team", title: "Have a question?", body: "Message us on WhatsApp about the role you’re interested in. The hiring team can share the application details.",
    numberLabel: "Hiring WhatsApp", hint: "Select the number to copy it, or open WhatsApp below.",
    cta: "Message the hiring team", note: "WhatsApp opens with a suggested message. You can edit it before sending.",
    message: "Hi Bunilla, I'd like to ask about your advertised jobs in I-8, Islamabad. Could you please share the hiring details?",
  },
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${careers.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
