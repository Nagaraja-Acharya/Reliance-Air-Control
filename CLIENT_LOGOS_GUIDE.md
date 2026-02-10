# Client Logos Section - Setup Guide

## 🎨 What Was Added

A new animated client logos section has been added to the homepage with:
- Infinite horizontal scrolling animation (right to left)
- Smooth 30-second loop
- Hover to pause animation
- Grayscale effect with color on hover
- Fully responsive design

## 📍 Location

The ClientLogos section appears on the Home page between:
- "Why Clients Trust Reliance Air Control" section
- Final CTA section

## 🖼️ How to Add Real Client Logos

### Step 1: Prepare Your Logo Images

1. Collect client logo images (PNG or SVG format recommended)
2. Recommended dimensions: 150-200px width, 60-80px height
3. Save logos in: `src/assets/clients/`

Example structure:
```
src/
└── assets/
    └── clients/
        ├── client1.png
        ├── client2.png
        ├── client3.png
        └── ...
```

### Step 2: Update the ClientLogos Component

Open `src/components/ClientLogos.tsx` and replace the placeholder data:

```typescript
// Replace this:
const clients = [
  { name: "Client 1", logo: "https://via.placeholder.com/150x80/1e3a8a/ffffff?text=Client+1" },
  // ...
];

// With your real logos:
import client1 from "@/assets/clients/client1.png";
import client2 from "@/assets/clients/client2.png";
// ... import more logos

const clients = [
  { name: "Company Name 1", logo: client1 },
  { name: "Company Name 2", logo: client2 },
  // Add as many as you need (8-12 recommended)
];
```

### Step 3: Adjust Animation Speed (Optional)

In `src/index.css`, find the animation:

```css
.animate-scroll {
  animation: scroll 30s linear infinite;
  /* Change 30s to make it faster (20s) or slower (40s) */
}
```

## 🎯 Features

### Infinite Scroll
- Logos scroll continuously from right to left
- Seamless loop (duplicated set for smooth transition)
- No gaps or jumps

### Interactive
- **Hover to pause**: Animation pauses when user hovers over logos
- **Grayscale effect**: Logos are grayscale by default
- **Color on hover**: Individual logos show color when hovered

### Responsive
- Adjusts spacing on mobile devices
- Maintains aspect ratio
- Smooth on all screen sizes

## 🎨 Customization Options

### Change Direction (Right to Left → Left to Right)

In `src/index.css`:
```css
@keyframes scroll {
  0% {
    transform: translateX(-50%); /* Start from left */
  }
  100% {
    transform: translateX(0); /* Move to right */
  }
}
```

### Remove Grayscale Effect

In `src/components/ClientLogos.tsx`, remove `grayscale` classes:
```typescript
// Change from:
className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"

// To:
className="flex-shrink-0 mx-8 transition-all duration-300"
```

### Adjust Logo Size

In `src/components/ClientLogos.tsx`:
```typescript
// Change h-16 to h-12 (smaller) or h-20 (larger)
className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
```

### Adjust Spacing Between Logos

In `src/components/ClientLogos.tsx`:
```typescript
// Change mx-8 to mx-4 (closer) or mx-12 (further apart)
className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
```

## 📱 Mobile Optimization

The section is already optimized for mobile with:
- Responsive padding
- Proper overflow handling
- Touch-friendly hover states

## 🚀 Testing

1. Run `npm run dev`
2. Navigate to homepage
3. Scroll down to "Our Valued Clients" section
4. Verify:
   - [ ] Logos are scrolling smoothly
   - [ ] Animation loops seamlessly
   - [ ] Hover pauses animation
   - [ ] Individual logos show color on hover
   - [ ] Responsive on mobile

## 💡 Tips

1. **Logo Quality**: Use high-resolution logos (2x size) for retina displays
2. **Consistent Height**: Keep all logos similar height for visual balance
3. **File Size**: Optimize images (use PNG-8 or SVG) to keep page load fast
4. **Number of Logos**: 8-12 logos work best for smooth scrolling
5. **Background**: Logos should have transparent backgrounds

## 🎨 Alternative Styles

### Two Rows of Logos
If you have many clients, you can create two rows scrolling in opposite directions. Let me know if you need this implementation!

### Grid Layout (No Animation)
For a static grid of logos instead of scrolling, let me know and I can provide that alternative.

---

**Current Status**: ✅ Animated scrolling section added with placeholder logos
**Next Step**: Replace placeholder images with real client logos
