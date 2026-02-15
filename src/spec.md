# Specification

## Summary
**Goal:** Build a modern, industrial blue/white single-page B2B packaging manufacturer marketing website with key sections, a working contact form, and basic SEO.

**Planned changes:**
- Implement a consistent industrial blue/white theme (typography, spacing, buttons, section styling, icon style) with responsive and accessible UI.
- Create a single-page layout with header navigation and smooth in-page scrolling to: Homepage (hero), About Us, Products, Why Choose Us, Contact; add a footer with contact details and quick links.
- Build the Homepage hero with a large banner, the exact tagline “Strong Packaging. Safe Delivery. Trusted Quality.”, a short intro, and a “Contact Us” button that scrolls to Contact.
- Add About Us copy describing reliability, quality focus, B2B bulk supply, competitive pricing, and timely delivery.
- Add Products section listing: Corrugated Boxes, Carton Packaging, Bubble Wrap, Packaging Rolls, Custom Printed Packaging (each with a short B2B-friendly description).
- Add “Why Choose Us” section highlighting: Premium Quality Materials, Bulk Supply Capability, On-Time Delivery, Affordable Pricing.
- Create Contact section showing Phone: 7050223696 and Email: p1204631@gmail.com, the CTA text “Contact us today for bulk orders and custom packaging solutions.”, a WhatsApp button (wa.me), and a contact form (Name, Phone, Email, Message) with basic validation.
- Implement backend (single Motoko actor) APIs to submit and persist contact messages, and optionally list stored messages for future admin use.
- Wire the frontend form to the backend with loading/success/error states (clear on success; preserve inputs on error).
- Add basic SEO (title, meta description, semantic headings, Open Graph/Twitter tags).
- Add and use generated static image assets from `frontend/public/assets/generated` (hero banner, logo, product category icons) with performance-conscious usage.

**User-visible outcome:** Visitors can browse a professional, mobile-friendly packaging manufacturer site, view products and trust points, and submit a contact request (or message via WhatsApp) with clear confirmation/error feedback.
