# HIBRADE Website

A professional website for HIBRADE - a website services company based in Jakarta, Indonesia.

## About HIBRADE

HIBRADE provides professional website services including:
- Web Development
- Web Management
- SEO Services

## Features

- **Responsive Design**: Mobile-first approach that works seamlessly on all devices
- **Clean UI**: Dark blue and white color scheme with modern typography
- **SEO-Friendly**: Optimized meta tags, semantic HTML5, proper heading hierarchy
- **Interactive Features**:
  - Responsive navigation with mobile menu
  - Portfolio filtering by category
  - FAQ accordion
  - Testimonials carousel
  - Contact form with validation
  - localStorage for form submissions
- **No External Dependencies**: Pure HTML, CSS, and vanilla JavaScript

## Project Structure

```
hibradenew/
├── index.html          # Home/Landing page
├── about.html          # About page
├── services.html       # Services page with details
├── portfolio.html      # Portfolio with filtering
├── pricing.html        # Pricing tiers
├── contact.html        # Contact form and info
├── css/
│   └── style.css       # All styling
├── js/
│   └── script.js       # All functionality
├── assets/
│   ├── images/
│   └── icons/
└── README.md           # This file
```

## Pages

1. **Home** (`index.html`)
   - Hero section with CTA
   - Services overview
   - Featured projects
   - Testimonials carousel

2. **About** (`about.html`)
   - Company story and mission
   - Core values
   - Team information

3. **Services** (`services.html`)
   - Detailed service cards
   - Web Development details
   - Web Management details
   - SEO Services details

4. **Portfolio** (`portfolio.html`)
   - Project gallery
   - Category filtering (Web Development, Web Management, SEO)
   - Impact statistics

5. **Pricing** (`pricing.html`)
   - Web Development packages (3 tiers)
   - Web Management packages (3 tiers)
   - SEO packages (3 tiers)
   - FAQ section

6. **Contact** (`contact.html`)
   - Contact form with validation
   - Contact information
   - Social media links
   - FAQ section

## Contact Information

- **Email**: info@hibrade.net
- **Phone**: 0018021821
- **Location**: Jakarta, Indonesia
- **Social Media**: Instagram, X (Twitter), LinkedIn, Facebook

## Technology Stack

- **HTML5**: Semantic markup, accessibility features
- **CSS3**: Custom CSS with CSS Grid, Flexbox, CSS Variables
- **JavaScript (ES6+)**: Vanilla JS, no external libraries
- **localStorage**: Form submissions persistence

## Design Specifications

- **Primary Color**: #1B5E20 (Dark Green/Blue)
- **Secondary Color**: #2E7D32
- **Text Color**: #333333
- **Background**: #FFFFFF
- **Typography**: System fonts (Inter, Poppins fallback)

## Key Features

### Navigation
- Sticky header
- Responsive mobile menu toggle
- Active link highlighting
- Smooth scrolling

### Contact Form
- Real-time validation
- Error messages
- localStorage persistence (auto-save)
- Success notifications

### Portfolio
- Filter by category
- Smooth animations
- Responsive grid layout

### FAQ
- Accordion toggle
- Smooth animations
- Multiple questions per section

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px, 480px
- Optimized for all screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Optimized CSS with CSS variables
- Vanilla JavaScript (no external libraries)
- Semantic HTML for better SEO
- Proper meta tags for social sharing
- Smooth animations with CSS transitions

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Proper heading hierarchy
- Alt text for images
- Color contrast compliance

## SEO Features

- Proper meta tags (description, keywords, author)
- Open Graph tags for social sharing
- Semantic heading structure (H1-H6)
- Mobile-friendly design
- Fast load times
- Clean URL structure

## JavaScript Console Commands

For debugging and testing:

```javascript
// View all form submissions
HIBRADE.viewSubmissions()

// Clear all submissions
HIBRADE.clearSubmissions()
```

## Getting Started

1. Clone or download the project
2. Open `index.html` in a web browser
3. Navigate through all pages
4. Test the contact form and other interactive features

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --primary-color: #1B5E20;
  --primary-dark: #0a3d0e;
  --primary-light: #4c8c4a;
  /* ... more variables */
}
```

### Contact Information
Update contact details in:
- `index.html` (hero CTA, footer)
- `contact.html` (contact form, contact info section)
- All pages (footer section)

### Services & Pricing
Update service descriptions and pricing in:
- `services.html` (service details)
- `pricing.html` (pricing tiers)

## License

© 2024 HIBRADE. All rights reserved.

## Support

For questions or support:
- Email: info@hibrade.net
- Phone: 0018021821
