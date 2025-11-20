# Flexible Drag & Drop Template System

## Overview
A complete drag-and-drop page building system for HubSpot CMS that maintains your brand styles while giving you maximum flexibility to build custom pages quickly.

## 🎯 What's Included

### Main Template
**Location:** `src/theme/my-theme/templates/flexible-page.hubl.html`

This template allows you to:
- Drag and drop modules to build pages
- Reorder sections easily
- Add/remove content blocks without code
- Maintain consistent branding across all pages

### 📦 Reusable Section Modules

All modules are fully editable through the HubSpot page editor:

#### 1. **Content Section** (`ContentSection`)
**Location:** `src/theme/my-theme/components/modules/ContentSection/index.tsx`

Perfect for text-heavy content with optional CTA.

**Fields:**
- Eyebrow text (optional)
- Heading
- Rich text content
- Text alignment (left/center)
- Background color (white, light peach, gradient)
- Button text & URL (optional)

**Use Cases:**
- About sections
- Service descriptions
- General content blocks

---

#### 2. **Two Column Section** (`TwoColumnSection`)
**Location:** `src/theme/my-theme/components/modules/TwoColumnSection/index.tsx`

Side-by-side layout with image and content.

**Fields:**
- Eyebrow text (optional)
- Heading
- Rich text content
- Image upload
- Image position (left/right)
- Button text & URL (optional)

**Use Cases:**
- Product features with images
- Team member profiles
- Process explanations

---

#### 3. **Feature Grid** (`FeatureGrid`)
**Location:** `src/theme/my-theme/components/modules/FeatureGrid/index.tsx`

Responsive grid of features with icons.

**Fields:**
- Section heading
- Subtitle
- Repeatable features (up to 12):
  - Icon (emoji or text)
  - Title
  - Description

**Use Cases:**
- Product features
- Service offerings
- Benefits lists

---

#### 4. **Testimonial Section** (`TestimonialSection`)
**Location:** `src/theme/my-theme/components/modules/TestimonialSection/index.tsx`

Showcase customer reviews and feedback.

**Fields:**
- Section heading
- Subtitle (optional)
- Repeatable testimonials (up to 12):
  - Quote
  - Author name
  - Role/title (optional)

**Use Cases:**
- Customer testimonials
- Case study quotes
- Social proof

---

#### 5. **Stats Section** (`StatsSection`)
**Location:** `src/theme/my-theme/components/modules/StatsSection/index.tsx`

Display key metrics and numbers.

**Fields:**
- Section heading (optional)
- Repeatable stats (up to 8):
  - Value (e.g., "100+", "$7.8M")
  - Label (e.g., "Customers", "Revenue")

**Use Cases:**
- Company metrics
- Impact numbers
- Performance indicators

---

#### 6. **Spacer** (`Spacer`)
**Location:** `src/theme/my-theme/components/modules/Spacer/index.tsx`

Add vertical spacing between sections.

**Fields:**
- Height (Small: 40px, Medium: 80px, Large: 120px, Extra Large: 160px)

**Use Cases:**
- Visual breathing room
- Section separation
- Layout adjustments

---

#### 7. **Divider** (`Divider`)
**Location:** `src/theme/my-theme/components/modules/Divider/index.tsx`

Visual separator between sections.

**Fields:**
- Style (solid, dashed, dotted, gradient)
- Color (brand pink, dark gray, medium gray, light gray)

**Use Cases:**
- Section breaks
- Content separation
- Visual organization

---

## 🎨 Existing Product Modules

All of these can also be dragged into the flexible template:

- **ProductHero** - Hero section with title, subtitle, and CTA
- **SystemIntro** - 3-pillar introduction with links
- **PlatformSection** - Platform features with stats
- **ExperienceSection** - Journey steps with case study
- **IntelligenceSection** - Features with metrics
- **CTASection** - Call-to-action with modal
- **Navigation** - Site navigation (fixed at top)
- **Footer** - Site footer (fixed at bottom)

---

## 🚀 How to Use

### Creating a New Flexible Page

1. **In HubSpot:**
   - Go to Marketing → Website → Website Pages
   - Click "Create" → "Website page"
   - Choose "Flexible Page (Drag & Drop)" template

2. **Building Your Page:**
   - Click on any section to edit it
   - Use the "+" button to add new modules
   - Drag modules to reorder them
   - Delete modules you don't need

3. **Adding Modules:**
   - Click the "+" button in the drag-and-drop area
   - Browse available modules:
     - Content Section
     - Two Column Section
     - Feature Grid
     - Testimonial Section
     - Stats Section
     - Spacer
     - Divider
     - Plus all product modules

4. **Editing Content:**
   - Click on any module to open the editor
   - Change text, images, colors, etc.
   - All changes are saved automatically
   - Preview before publishing

---

## 🎯 Common Page Layouts

### Landing Page Example
```
1. ProductHero (or ContentSection with centered text)
2. Feature Grid
3. Two Column Section (benefits)
4. Stats Section
5. Testimonial Section
6. CTASection
```

### About Page Example
```
1. ContentSection (company story)
2. Divider
3. Stats Section (company metrics)
4. Spacer (large)
5. Feature Grid (values/culture)
6. Testimonial Section (employee quotes)
```

### Service Page Example
```
1. ProductHero
2. Content Section (overview)
3. Feature Grid (service features)
4. Spacer (medium)
5. Two Column Section (detailed feature 1)
6. Two Column Section (detailed feature 2, image left)
7. Stats Section (results)
8. CTASection
```

---

## 🎨 Design System

All modules use consistent styling:

### Colors
- **Brand Pink:** `#FF4B7E`
- **Pink Gradient:** `linear-gradient(135deg, #FF4B7E 0%, #FF6B9D 100%)`
- **Background Peach:** `#FFFBF8`
- **Dark Text:** `#1a1a1a`
- **Body Text:** `#4a4a4a`
- **Light Text:** `#6B7280`

### Typography
- **Headlines:** `var(--font-headline)` - Responsive sizing with `clamp()`
- **Body:** 1.15rem with 1.7 line-height
- **Small Text:** 0.95rem

### Spacing
- **Section Padding:** 80px top/bottom, 20px left/right
- **Max Width:** 1200px (centered)
- **Grid Gap:** 2rem standard

### Components
- **Border Radius:** 16px for cards, 50px for buttons
- **Shadows:** `0 4px 16px rgba(0, 0, 0, 0.06)` for cards
- **Button Shadow:** `0 8px 24px rgba(255, 75, 126, 0.3)`

---

## 📝 Tips & Best Practices

1. **Use Spacers Wisely**
   - Add breathing room between dense sections
   - Create visual hierarchy

2. **Alternate Backgrounds**
   - Switch between white and light peach backgrounds
   - Use gradients for emphasis

3. **Image Positioning**
   - Alternate image positions in Two Column Sections
   - Creates visual rhythm

4. **CTA Placement**
   - Place CTAs after value propositions
   - Use multiple CTAs on long pages

5. **Mobile Responsiveness**
   - All modules are mobile-responsive by default
   - Grids automatically stack on small screens
   - Test on mobile before publishing

6. **Content Length**
   - Keep headings concise (5-10 words)
   - Paragraphs should be 2-3 sentences
   - Use bullet points in rich text for scanability

---

## 🔧 Technical Details

### File Structure
```
src/theme/my-theme/
├── templates/
│   ├── flexible-page.hubl.html (main template)
│   ├── homepage.hubl.html
│   └── product.hubl.html
├── components/modules/
│   ├── ContentSection/
│   ├── TwoColumnSection/
│   ├── FeatureGrid/
│   ├── TestimonialSection/
│   ├── StatsSection/
│   ├── Spacer/
│   ├── Divider/
│   └── ... (product modules)
└── styles/
    └── global.css
```

### Key Technologies
- **HubSpot CMS React 2025.2**
- **HubL Templates** - Drag & drop areas
- **React Components** - TSX modules
- **CSS-in-JS** - Inline styling for portability

---

## 🆘 Troubleshooting

### Module Not Appearing in Editor
- Check folder permissions: `chmod 755 [module-folder]`
- Verify `meta.label` is set
- Re-deploy the project

### Styling Issues
- All styles are inline - no CSS conflicts
- Check browser console for errors
- Ensure `global.css` is loaded

### Field Not Saving
- Check field name isn't reserved (`label`, `name`)
- Verify field type matches value
- Check for typos in field names

---

## 📚 Additional Resources

- **HubSpot CMS Docs:** https://developers.hubspot.com/docs/cms
- **React Components:** https://developers.hubspot.com/docs/cms/building-blocks/modules/react
- **Field Types:** https://developers.hubspot.com/docs/cms/building-blocks/module-fields

---

## ✅ Deployment Status

**Current Build:** #119
**Status:** ✅ Deployed Successfully
**Date:** 2025-11-19

All modules are live and ready to use in the HubSpot page editor!

---

**View in HubSpot:** https://app.hubspot.com/developer-projects/512371/project/hxMC-react
