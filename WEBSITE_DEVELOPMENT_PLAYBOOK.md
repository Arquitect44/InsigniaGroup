# Website Development Playbook
**Version 1.0 | Professional Corporate Websites | Based on Insignia Group Project**

---

## 🎯 Purpose
This playbook eliminates wasted time, prevents common mistakes, and ensures every website project starts with professional-grade foundation. Follow this religiously to avoid the BS we dealt with building Insignia Group's site.

---

## ⚡ PRE-PROJECT CHECKLIST

### Before Writing ANY Code:

#### 1. **Design System First**
```
✅ DO: Create globals.css with design tokens FIRST
✅ DO: Define color palette (max 5 colors)
✅ DO: Set up spacing scale (4px base unit)
✅ DO: Establish typography hierarchy (H1-H6)
✅ DO: Define animation timing constants

❌ DON'T: Start building components without design system
❌ DON'T: Use arbitrary values (no random px/colors)
❌ DON'T: Let designers give you 20 different spacing values
```

**Template** (`globals.css`):
```css
@theme {
  /* Colors - Keep it simple */
  --color-primary: #1a1a1a;
  --color-accent: #d4a574;
  --color-background: #ffffff;

  /* Spacing Scale - 4px base */
  --space-2: 0.5rem;   /* 8px */
  --space-4: 1rem;     /* 16px */
  --space-8: 2rem;     /* 32px */
  --space-16: 4rem;    /* 64px */

  /* Animation */
  --duration-fast: 300ms;
  --duration-normal: 500ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
}
```

#### 2. **Project Structure - Day 1**
```
Create these folders immediately:
/components
  /ui (reusable: Button, Section, Container)
  /home (page-specific components)
/app
  /api (if needed)
  page.tsx
  layout.tsx
  globals.css
/public
  /images
  /projects
  /videos
```

#### 3. **Media Assets - Get Right Immediately**
```
✅ DO: Compress videos BEFORE adding to project
✅ DO: Use WebP for all images
✅ DO: Name files descriptively (project-lic-tower.webp)
✅ DO: Optimize on upload, not later

❌ DON'T: Add 43MB video files
❌ DON'T: Use PNG when WebP exists
❌ DON'T: Think "I'll optimize later" (you won't)
```

**Video Compression Command** (save this):
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 32 -preset slow -vf "scale=1920:-2" -an -movflags +faststart output.mp4
```

**Image Conversion** (automate this):
```bash
ffmpeg -i image.png -c:v libwebp -quality 85 image.webp
```

---

## 🏗️ COMPONENT ARCHITECTURE

### Rule #1: Build Reusable UI Components First

**Create immediately:**

1. **Button Component** (`components/ui/Button.tsx`)
```tsx
// Variants: primary, secondary, outline
// Sizes: md, lg
// Includes: hover animations, scale effects, consistent styling
```

2. **Section Component** (`components/ui/Section.tsx`)
```tsx
// Backgrounds: white, warm-gray, charcoal
// Padding: Consistent section spacing
// Container integration
```

3. **Container Component** (`components/ui/Container.tsx`)
```tsx
// Sizes: sm, md, lg, xl, full
// Max-width management
// Responsive padding
```

### Rule #2: Image Rendering Pattern

**THE PATTERN** - Memorize this:
```tsx
<div className="relative aspect-[3/2] overflow-hidden">
  <img
    src="/image.webp"
    alt="Description"
    loading="lazy"
    className="absolute inset-0 min-w-full min-h-full w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
  />
</div>
```

**Why this works:**
- `relative` container with `aspect-ratio` maintains proportions
- `absolute inset-0` makes image fill container
- `min-w-full min-h-full` ensures no gaps
- `object-cover object-center` crops intelligently
- `group-hover:scale-105` adds polish

**What DOESN'T work:**
```tsx
❌ <img src="/image.jpg" className="w-full h-full" />
// Creates gaps, doesn't fill properly
```

---

## 🎨 DESIGN & UX STANDARDS

### Micro-Interactions - Required on ALL Buttons

```tsx
<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
  <button className="... transition-all duration-300 shadow-lg hover:shadow-2xl">
    Button Text
  </button>
</motion.div>
```

**Why:**
- Scale on hover = feels responsive
- Tap feedback = feels real
- Smooth shadows = premium feel
- Duration 300ms = not sluggish, not jarring

### Navigation Link Pattern

```tsx
<Link className="relative group">
  Link Text
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
</Link>
```

Animated underline = modern, not dated.

### Color Usage Philosophy

```
Primary (Charcoal): Text, headers, backgrounds
Accent (Gold): CTAs, highlights, hover states
Never: More than 3 main colors
```

**Contrast Ratios:**
- Text on background: Minimum 4.5:1
- Large text: Minimum 3:1
- Test with WebAIM Contrast Checker

---

## 📊 PERFORMANCE - NON-NEGOTIABLE

### Critical Assets

**Preload in `layout.tsx`:**
```tsx
<head>
  <link rel="preload" href="/hero-video.mp4" as="video" type="video/mp4" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
</head>
```

### Lazy Loading - Every Non-Hero Image

```tsx
<img src="/image.webp" alt="..." loading="lazy" />
```

**Simple rule:** If it's below fold, it's lazy loaded.

### File Size Limits (Hard Rules)

```
Videos: Max 5MB (hero background)
Images: Max 200KB per image
Total page weight: Target under 2MB initial load
```

**If you exceed these, you failed. Go back and optimize.**

---

## 🔍 SEO - Launch Checklist

### Meta Tags (layout.tsx)

```tsx
export const metadata: Metadata = {
  title: "Company | Primary Keyword",
  description: "150-160 characters with primary & secondary keywords",
  keywords: ["keyword1", "keyword2", "keyword3"], // 10-15 max
  openGraph: {
    title: "...",
    description: "...",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};
```

### Structured Data (Schema.org)

**Required JSON-LD:**
1. Organization schema
2. LocalBusiness schema (if applicable)
3. BreadcrumbList schema

```tsx
// components/StructuredData.tsx
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "description": "...",
  "url": "https://...",
  "foundingDate": "2005",
  // ... more fields
};
```

**Why it matters:** Rich snippets in Google, knowledge graph eligibility, local SEO boost.

---

## 🚫 COMMON MISTAKES - AVOID THESE

### 1. **Image Issues** (We Hit This 3 Times)

**Problem:**
```tsx
<img src="/image.jpg" className="w-full h-full object-cover" />
// Doesn't fill container, creates gaps
```

**Solution:**
```tsx
<div className="relative aspect-[3/2] overflow-hidden">
  <img className="absolute inset-0 min-w-full min-h-full w-full h-full object-cover object-center" />
</div>
```

### 2. **Video Files** (Wasted 1 Hour)

**Problem:** Adding 43MB video to project
**Solution:** Compress BEFORE adding. Target: 5MB or less

### 3. **Next.js Cache Issues**

**Problem:** Changes not showing up
**Solution:**
```bash
rm -rf .next && npm run dev
```

Keep this command handy.

### 4. **Component Inconsistency**

**Problem:** Each button looks slightly different
**Solution:** Create ONE Button component, use everywhere

### 5. **Spacing Chaos**

**Problem:** Every section has random padding values
**Solution:** Use design system tokens only

---

## ✅ LAUNCH READINESS CHECKLIST

Before deployment, ALL items must be checked:

### Performance
- [ ] All images converted to WebP
- [ ] Videos compressed to <5MB
- [ ] Lazy loading on all below-fold images
- [ ] Hero video preloaded
- [ ] Lighthouse score >90 (Performance)

### SEO
- [ ] Meta title (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Open Graph tags complete
- [ ] Twitter Card tags complete
- [ ] Structured data (JSON-LD) implemented
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured

### UX/Design
- [ ] All buttons have hover states
- [ ] All links have hover effects
- [ ] Mobile responsive (test on real device)
- [ ] Loading states for async actions
- [ ] Smooth scroll behavior enabled
- [ ] Focus indicators for keyboard nav

### Content
- [ ] All placeholder text replaced
- [ ] All images have alt text
- [ ] Contact info accurate
- [ ] Social links work (if applicable)
- [ ] Copyright year dynamic

### Technical
- [ ] No console errors
- [ ] No broken links (404s)
- [ ] Forms validated (if applicable)
- [ ] Analytics configured
- [ ] Error tracking setup

---

## 🎯 QUALITY STANDARDS

### Rating System (Use This)

**7/10 - Basic**
- Site works
- Content present
- Mobile responsive
- Basic SEO

**8/10 - Professional**
- Above +
- Optimized images
- Smooth animations
- Brand consistency
- Good performance

**9/10 - Exceptional**
- Above +
- Structured data
- Interactive elements
- Micro-interactions
- Lazy loading
- Timeline/storytelling

**10/10 - Outstanding**
- Above +
- Sub-2s load time
- Lighthouse 95+ (all)
- Accessibility AA
- Case studies/depth
- Analytics integrated

**Aim for 9/10 minimum on launch.**

---

## 📋 PROJECT PHASES

### Phase 1: Foundation (Day 1)
1. Create design system (globals.css)
2. Build UI components (Button, Section, Container)
3. Set up project structure
4. Optimize all media assets

### Phase 2: Core Content (Days 2-3)
1. Hero section
2. Stats section
3. Core service/product sections
4. Featured projects/work

### Phase 3: Enhancement (Day 4)
1. Additional content sections
2. Timeline/storytelling
3. Why Choose Us / Differentiators
4. Footer with navigation

### Phase 4: Polish (Day 5)
1. Micro-interactions on all CTAs
2. Image lazy loading
3. SEO meta tags
4. Structured data
5. Performance optimization

### Phase 5: Launch Prep (Day 6)
1. Run through launch checklist
2. Test on multiple devices
3. Fix any remaining issues
4. Deploy

---

## 💬 CLIENT/STAKEHOLDER COMMUNICATION

### Getting Good Assets

**DO:**
- "We need videos under 5MB - here's the compression command"
- "Send images in highest resolution, we'll optimize"
- "What's the priority order for these 10 features?"

**DON'T:**
- Accept giant file uploads without pushing back
- Build everything they ask for (prioritize ruthlessly)
- Let them micromanage spacing/colors after design system is set

### Setting Expectations

**Project Timeline:**
"6-day development cycle for MVP. Additional features post-launch."

**Quality Bar:**
"We're building to 9/10 professional standard, not 6/10 bare minimum."

**Changes:**
"Design system is locked after Day 1. Color/spacing changes after that = delays."

---

## 🔧 TOOLS & COMMANDS

### Essential Commands (Copy/Paste Ready)

**Video Compression:**
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 32 -preset slow -vf "scale=1920:-2" -an -movflags +faststart output.mp4
```

**Image to WebP:**
```bash
ffmpeg -i input.png -c:v libwebp -quality 85 output.webp
```

**Clear Next.js Cache:**
```bash
rm -rf .next && npm run dev
```

**Lighthouse Test:**
```bash
npm install -g lighthouse
lighthouse https://yoursite.com --view
```

### Recommended Tools

- **Design:** Figma (for mockups if needed)
- **Performance:** Lighthouse, WebPageTest
- **Images:** Squoosh.app (quick compression)
- **SEO:** Google Search Console, Schema Validator
- **Analytics:** Vercel Analytics, Google Analytics 4

---

## 📖 FINAL WISDOM

### Lessons from Insignia Group Build

1. **Systems > Styling**
   - Spent 30 mins building design system = saved 3 hours not fixing inconsistencies

2. **Optimize Early**
   - Wasted 1 hour because we added 43MB video first, compressed later

3. **Reusable Components**
   - Built Button component on Day 4 (should've been Day 1)
   - Had to refactor 6 different button implementations

4. **Image Pattern**
   - Hit the "image doesn't fill container" bug 3 times
   - Should've documented the pattern first

5. **Test on Real Devices**
   - Mobile view perfect in browser DevTools
   - Real iPhone showed banner overlap issue
   - Always test on actual devices

### The Golden Rules

1. **Design system first, components second, content third**
2. **Optimize media BEFORE adding to project**
3. **Build reusable, use everywhere**
4. **Performance is not optional**
5. **SEO from day 1, not day 6**

### When You're Stuck

Before asking for help:
1. Did you clear `.next` cache?
2. Did you check the design system for the token?
3. Did you test on actual device?
4. Did you check this playbook?

If yes to all, then ask.

---

## 🚀 DEPLOYMENT

### Pre-Deployment

1. Run full launch checklist
2. Test on 3+ devices
3. Run Lighthouse audit
4. Check Schema.org validator
5. Verify all links work

### Post-Deployment

1. Submit sitemap to Google Search Console
2. Set up Vercel Analytics (automatic)
3. Monitor Core Web Vitals
4. Watch for 404s first week
5. Get client feedback within 48 hours

---

## 🔥 DEPLOYMENT TROUBLESHOOTING - REAL ISSUES

### Issue 1: Vercel Build Failing - ESLint Errors

**Problem:**
Build failed on Vercel with `react/no-unescaped-entities` errors - apostrophes in text content blocking deployment.

**Initial Wrong Approach:**
Manually replacing all apostrophes with `&apos;` in every file - tedious and error-prone.

**Correct Solution:**
Create `.eslintrc.json` to disable problematic rules:

```json
{
  "extends": "next/core-web-vitals",
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "warn"
  }
}
```

**Lesson:** Don't fight ESLint on text content - disable the rule and move on.

---

### Issue 2: Vercel 404 Despite Successful Build

**Problem:**
- Build completed successfully on Vercel
- All routes generated correctly
- Site returned 404 error when accessed
- Local production build worked fine

**Root Cause:**
Vercel wasn't detecting the Next.js framework or build configuration correctly.

**Solution:**
Create explicit `vercel.json` configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "npm install"
}
```

**Why This Works:**
- Explicitly tells Vercel it's a Next.js project
- Specifies exact build command and output directory
- Ensures proper framework preset is used
- Critical for Next.js 15 App Router projects

**Lesson:** Don't assume Vercel auto-detects everything. Explicit configuration prevents deployment issues.

---

### Issue 3: Turbopack in Production Build

**Problem:**
`package.json` had `--turbopack` flag in build script:
```json
"build": "next build --turbopack"
```

**Why This Failed:**
- Turbopack is experimental in Next.js 15
- Not compatible with Vercel production deployments
- Works fine in dev mode

**Solution:**
```json
{
  "scripts": {
    "dev": "next dev --turbopack",     // Keep for dev
    "build": "next build",              // Remove for production
    "start": "next start"
  }
}
```

**Lesson:** Experimental features are for development only. Production builds must use stable tooling.

---

### Issue 4: Real Project Data Integration

**Challenge:**
Migrate from placeholder data to real project information from PDF resume.

**Process:**
1. Extract 19 projects from PDF with addresses, dates, square footage
2. Create typed data structure (`data/projects.ts`)
3. Organize 18 project images in `/public/projects/` with consistent naming
4. Update ProjectGrid component to use real data
5. Ensure all images tracked in git

**File Naming Convention Used:**
```
forte-prep.jpg
ocean-parkway.jpg
43-08-52nd.jpg
lic-tower.jpg
nyu-langone.jpg
```

**Data Structure:**
```typescript
interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  sector: 'residential' | 'commercial' | 'mixed-use' | 'industrial';
  heroImage: string;
  squareFootage?: number;
  numberOfUnits?: number;
  completionDate?: string;
  status: 'completed' | 'in-progress';
  insigniaAdvantage?: string;
}
```

**Lesson:** Organize real data early. Placeholder data creates false confidence.

---

### Deployment Workflow That Actually Works

```bash
# 1. Stage all changes
git add -A

# 2. Check what's being committed
git status

# 3. Commit with descriptive message
git commit -m "Fix: Add Vercel configuration to resolve 404 deployment error"

# 4. Push to trigger Vercel deployment
git push origin master

# 5. Monitor Vercel deployment in dashboard
# Watch for build logs and deployment URL
```

**Important Notes:**
- Every push to master triggers Vercel deployment
- Build logs show real errors (not just warnings)
- Test locally with `npm run build` before pushing
- Vercel deployment takes 2-3 minutes

---

### Vercel-Specific Configuration Files

**Files That Matter:**

1. **`vercel.json`** - Deployment configuration
2. **`.eslintrc.json`** - Linting rules for build
3. **`next.config.ts`** - Next.js framework config
4. **`package.json`** - Build scripts and dependencies

**Critical Build Script Requirements:**
```json
{
  "scripts": {
    "build": "next build",  // NO experimental flags
    "start": "next start",  // Must exist for Vercel
    "lint": "eslint"        // Runs during build
  }
}
```

---

### Common Vercel 404 Causes & Solutions

| Cause | Solution |
|-------|----------|
| Missing `vercel.json` | Create explicit configuration file |
| Experimental build flags | Remove from production build script |
| Wrong output directory | Verify `.next` directory in vercel.json |
| Missing routes | Check `.next/routes-manifest.json` |
| Framework not detected | Specify `"framework": "nextjs"` |

---

### Testing Production Build Locally

**Before pushing to Vercel:**

```bash
# 1. Build for production
npm run build

# 2. Check build output
# Look for: "Creating an optimized production build... ✓"
# Check: All routes listed under "Route (app)"

# 3. Verify .next directory
ls -la .next/
# Should see: app-build-manifest.json, BUILD_ID, routes-manifest.json

# 4. Start production server locally
npm start

# 5. Test at http://localhost:3000
# Verify all pages load without 404s
```

**If local production build works but Vercel fails:**
- Check vercel.json exists
- Verify build command matches local
- Review Vercel build logs for errors
- Ensure all files committed to git

---

### Git Workflow for Vercel Deployments

**Complete Workflow:**

```bash
# Daily development
npm run dev  # Uses turbopack for fast dev

# Before committing
npm run build  # Test production build locally
npm run lint   # Check for errors

# Commit and deploy
git add -A
git commit -m "Descriptive message about changes"
git push origin master

# Vercel auto-deploys from master branch
# Monitor at: dashboard.vercel.com
```

**Branch Strategy:**
- `master` → Production (auto-deploys to Vercel)
- Feature branches → Preview deployments (if configured)

---

### Critical Files Checklist for Deployment

Before first Vercel deployment, verify these files exist:

- [ ] `vercel.json` - Deployment configuration
- [ ] `.eslintrc.json` - Linting rules
- [ ] `next.config.ts` - Next.js config
- [ ] `app/layout.tsx` - Root layout with metadata
- [ ] `app/page.tsx` - Homepage (IS the index file)
- [ ] `.gitignore` - Excludes node_modules, .next, .env
- [ ] All images in `/public/` committed to git

**Common Git Mistakes:**
- Forgetting to commit images in `/public/`
- Adding `.env` files (security risk)
- Committing `.next` build directory (unnecessary)

---

### Next.js 15 App Router Specifics

**Important: `app/page.tsx` IS the index file**

There is NO `index.html` or `index.tsx` in Next.js 15 App Router.

**Route Structure:**
```
app/
├── page.tsx              → / (homepage)
├── layout.tsx            → Root layout
├── approach/page.tsx     → /approach
├── portfolio/page.tsx    → /portfolio
├── contact/page.tsx      → /contact
└── api/contact/route.ts  → /api/contact
```

**Each `page.tsx` exports default component:**
```tsx
export default function Home() {
  return <div>Content</div>;
}
```

**Lesson:** Don't look for `index.html`. Next.js App Router uses convention-based routing.

---

## 📝 PROJECT HANDOFF

### Deliver to Client:

1. **Live URL** with SSL
2. **Admin access** (if CMS)
3. **Analytics access**
4. **Source code** repository
5. **This playbook** (so they can hire others)

### Documentation:

```
/docs
  README.md (how to run locally)
  COMPONENTS.md (component library)
  DESIGN_SYSTEM.md (colors, spacing, typography)
```

---

## ⚡ START EVERY PROJECT WITH THIS

```bash
# 1. Create Next.js project
npx create-next-app@latest project-name

# 2. Create folder structure
mkdir -p components/{ui,home} public/{images,projects,videos}

# 3. Copy globals.css template
# 4. Build UI components (Button, Section, Container)
# 5. Optimize all media assets
# 6. Create design system documentation
# 7. Set up git (.gitignore for node_modules, .env, .next)
```

**Then and only then start building content.**

---

## 🎯 SUCCESS METRICS

Track these for every project:

- **Development Time:** 6 days or less for MVP
- **Lighthouse Performance:** 90+ score
- **Page Load Time:** Under 2 seconds
- **Image Optimization:** All WebP, under 200KB each
- **SEO Score:** Structured data present, meta tags complete
- **Mobile Score:** Perfect on 3+ devices
- **Client Satisfaction:** One-pass approval or minor tweaks only

---

## 💪 MINDSET

**Remember:**

- Fast and sloppy = 2x time fixing issues
- Slow and systematic = ship faster overall
- "I'll optimize later" = you won't
- Reusable components = freedom
- Design system = peace of mind

**Ship 9/10 sites, not 6/10 sites.**

**This playbook eliminates 80% of the pain. Follow it.**

---

*Last Updated: October 2025*
*Based on: Insignia Group website build & deployment*
*Includes: Real-world Vercel deployment troubleshooting*
*For: Future web development projects*
