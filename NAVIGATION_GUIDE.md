# Quick Reference Guide - Navigation & Routes

## 🔗 Route Mapping

| Page | Route | File Location |
|------|-------|---------------|
| Home | `/` | `src/pages/Home.tsx` |
| About Us | `/about` | `src/pages/AboutUs.tsx` |
| Services | `/services` | `src/pages/ServicesPage.tsx` |
| Why Us | `/why-us` | `src/pages/WhyUs.tsx` |
| Contact | `/contact` | `src/pages/ContactPage.tsx` |
| 404 | `*` | `src/pages/NotFound.tsx` |

## 📋 Navigation Menu Items

```javascript
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];
```

## 🎨 Active Page Highlighting

The Header component automatically highlights the current page using:
```javascript
location.pathname === link.href ? "text-primary" : "text-foreground"
```

## 🔄 Page Flow

```
┌─────────────┐
│    HOME     │ ← Landing page
└──────┬──────┘
       │
       ├──→ About Us (Learn about company)
       │
       ├──→ Services (Explore offerings)
       │
       ├──→ Why Us (Understand benefits)
       │
       └──→ Contact (Get in touch)
```

## 📱 Mobile Menu

- Hamburger icon appears on screens < 1024px
- Full navigation menu slides down
- Active page highlighted
- Quick Enquiry button included
- Phone number link included

## 🎯 Call-to-Action Buttons

### Header
- "Quick Enquiry" → `/contact`

### Home Page
- "Get a Quote" → `/contact`
- "Call Us Now" → `tel:9880013779`
- "View All Services" → `/services`
- "Get a Free Quote" → `/contact`

### Services Page
- "Get a Quote" (per service) → `/contact`
- "Contact Our Team" → `/contact`

### Why Us Page
- Implicit CTAs lead to contact

### Footer
- All navigation links
- Contact information

## 🛠️ Component Structure

```
App.tsx
├── ScrollToTop (auto-scroll on navigation)
└── Routes
    ├── Home
    │   └── Layout
    │       ├── Header
    │       ├── [Page Content]
    │       └── Footer
    ├── AboutUs
    │   └── Layout
    ├── ServicesPage
    │   └── Layout
    ├── WhyUs
    │   └── Layout
    ├── ContactPage
    │   └── Layout
    └── NotFound
        └── Layout
```

## 🎨 Shared Components

### Layout.tsx
Wraps all pages with:
- Header (navigation)
- Main content area
- Footer

### Header.tsx
- Logo (links to home)
- Desktop navigation
- Mobile hamburger menu
- Quick Enquiry button
- Active page highlighting

### Footer.tsx
- Brand info
- Quick links
- Services list
- Contact info
- Copyright

### ScrollToTop.tsx
- Automatically scrolls to top on route change
- Improves UX

## 📝 Content Distribution

### Home Page
- Hero + CTA
- Stats (30+, 1000+, 10K+, 500+)
- Why Air Control Matters (4 cards)
- Services Overview (6 cards)
- Why Trust Us (5 promises)
- Final CTA

### About Us Page
- Hero
- Company Story + Stats
- Vision & Mission
- Engineering Expertise (6 items)
- Core Values (3 items)

### Services Page
- Hero
- 6 Detailed Service Cards:
  - HVAC Systems & AHUs
  - Kitchen Ventilation
  - Industrial Fans & Blowers
  - Ducting & Air Distribution
  - Dehumidification Solutions
  - Retrofit & Custom Projects
- Custom Solution CTA

### Why Us Page
- Hero
- Why Air Control Matters (4 benefits)
- Health & Safety Benefits
- Energy Savings Visualization
- Why Trust Us (5 promises)
- Quality Standards (6 items)

### Contact Page
- Hero
- Quick Info Cards (4 items)
- Google Map
- Contact Form
- Full Contact Details

## 🚀 Testing Checklist

- [ ] All navigation links work
- [ ] Active page highlighting works
- [ ] Mobile menu opens/closes
- [ ] Scroll to top on navigation
- [ ] All CTAs link correctly
- [ ] Contact form validates
- [ ] Responsive on mobile
- [ ] Responsive on tablet
- [ ] Responsive on desktop
- [ ] 404 page works
- [ ] Footer links work

## 💡 Tips

1. **Adding New Pages**: 
   - Create page in `src/pages/`
   - Add route in `App.tsx`
   - Add link in `Header.tsx` navLinks
   - Add link in `Footer.tsx` if needed

2. **Styling Consistency**:
   - Use `section-padding` for sections
   - Use `container-narrow` for content width
   - Use `section-title` for headings
   - Use `section-subtitle` for descriptions

3. **Navigation**:
   - Use `<Link to="/path">` from react-router-dom
   - Don't use `<a href="#">` for internal links
   - External links can use `<a href="tel:">` or `<a href="mailto:">`

---

**Ready to Launch!** 🎉
