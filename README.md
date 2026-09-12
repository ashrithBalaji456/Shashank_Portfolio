<div align="center">

# 💼 Shashank Kudha — Developer Portfolio

### Backend Developer Portfolio • Modern React Experience • Responsive Design • Direct Contact Workflow

<a href="https://shashank-portfolio-rust.vercel.app/">
  <img src="https://img.shields.io/badge/🚀_LIVE_PORTFOLIO-Visit_Now-0A66C2?style=for-the-badge" alt="Live Portfolio" />
</a>

<br/><br/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&center=true&vCenter=true&width=1050&lines=Backend+Developer+Portfolio;Java+%2B+Spring+Boot+%2B+REST+APIs+%2B+PostgreSQL;Modern+React+Portfolio+Powered+by+Vite;Dark+%2F+Light+Themes+%2B+Glassmorphism+%2B+Micro-Interactions;Explore+Skills.+Experience.+Projects.+Connect+Directly." alt="Typing SVG" />

<br/>

<img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Lucide-Icons-F56565" />
<img src="https://img.shields.io/badge/Oxlint-Code_Quality-7C3AED" />
<img src="https://img.shields.io/badge/UI-Responsive-0EA5E9" />
<img src="https://img.shields.io/badge/Theme-Dark_%2F_Light-111827" />
<img src="https://img.shields.io/badge/Deployment-Vercel-000000?logo=vercel" />

<br/><br/>

<a href="https://shashank-portfolio-rust.vercel.app/">🌐 Live Demo</a>
&nbsp;&nbsp;•&nbsp;&nbsp;
<a href="https://github.com/ashrithBalaji456/Shashank_Portfolio">📦 Source Code</a>

</div>

---

## 📌 Project Overview

**Shashank Portfolio** is a modern, responsive, single-page developer portfolio built with **React 19** and **Vite 5**.

The website presents **Shashank Kudha** as a backend developer specializing in technologies such as Java, Spring Boot, Spring Security, REST APIs and PostgreSQL.

Rather than functioning as a simple static résumé, the portfolio creates a complete visitor journey:

> **Landing Page → Professional Introduction → Technical Identity → About → Skills → Experience → Projects → Resume Download → Social Profiles → Contact Form → Email Delivery**

The application combines a professional developer-focused interface with responsive layouts, glassmorphism, theme switching, interactive technology icons, social profile navigation, résumé access and an AJAX-based contact workflow.

---

## 🌐 Live Application

<div align="center">

### 🚀 Experience the Portfolio

<a href="https://shashank-portfolio-rust.vercel.app/">
  <img src="https://img.shields.io/badge/Open_Live_Portfolio-shashank--portfolio--rust.vercel.app-0A66C2?style=for-the-badge&logo=vercel&logoColor=white" />
</a>

</div>

---

## ✨ Key Features

- Responsive single-page portfolio experience
- Backend-developer-focused personal branding
- Hero section with professional introduction
- Smooth section-based navigation
- Desktop and mobile navigation experiences
- Dark and light theme support
- Glassmorphic cards and surfaces
- Premium technology icon interactions
- Individual brand-inspired icon glow effects
- Skills and technology presentation
- Professional experience section
- Project showcase
- Education and career information
- GitHub profile integration
- LinkedIn profile integration
- Downloadable résumé
- Contact form with asynchronous submission
- Success and failure feedback states
- Responsive layouts for desktop, tablet and mobile
- SEO-oriented title and metadata
- Vercel deployment

---

## 🏗️ Application Architecture

```mermaid
flowchart TD
    VISITOR[Portfolio Visitor]

    subgraph CLIENT[React + Vite Application]
        APP[App Component]
        NAV[Header Navigation]
        HERO[Hero Section]
        ABOUT[About Section]
        SKILLS[Skills / Tech Identity]
        EXPERIENCE[Experience Section]
        PROJECTS[Projects Section]
        CONTACT[Contact Section]
        THEME[Theme Controller]
        MOBILE[Mobile Navigation]
    end

    SOCIAL[GitHub / LinkedIn]
    RESUME[Resume File]
    MAIL[Form Submission Service]
    VERCEL[Vercel Hosting]

    VISITOR --> VERCEL
    VERCEL --> APP

    APP --> NAV
    APP --> HERO
    APP --> ABOUT
    APP --> SKILLS
    APP --> EXPERIENCE
    APP --> PROJECTS
    APP --> CONTACT
    APP --> THEME
    APP --> MOBILE

    HERO --> SOCIAL
    HERO --> RESUME
    CONTACT --> MAIL
```

---

## 🔄 Complete Visitor Workflow

```mermaid
flowchart TD
    A[Visitor Opens Live Portfolio] --> B[Vercel Serves React Application]
    B --> C[React Application Mounts]
    C --> D[Hero Section Appears]

    D --> E{Visitor Action}

    E -->|Explore Profile| F[Read About Section]
    F --> G[Explore Technical Skills]
    G --> H[Review Experience]
    H --> I[Explore Projects]

    E -->|View Professional Profile| J[Open LinkedIn]
    E -->|View Code Profile| K[Open GitHub]
    E -->|Download Resume| L[Download Resume File]

    I --> M[Continue to Contact Section]
    M --> N[Enter Name + Email + Message]
    N --> O[Submit Contact Form]
    O --> P[AJAX Request]
    P --> Q{Submission Result}

    Q -->|Success| R[Show Success Feedback]
    Q -->|Failure| S[Show Error Feedback]

    R --> T[Potential Professional Connection]
    S --> N
```

---

## 🧭 Navigation Workflow

The portfolio uses a single-page navigation model.

```mermaid
flowchart LR
    HEADER[Header] --> HOME[Home]
    HEADER --> ABOUT[About]
    HEADER --> EXPERIENCE[Experience]
    HEADER --> PROJECTS[Projects]
    HEADER --> CONTACT[Contact]

    HOME --> HERO[Hero Section]
    ABOUT --> BIO[Professional Summary]
    EXPERIENCE --> TIMELINE[Career Experience]
    PROJECTS --> CARDS[Project Showcase]
    CONTACT --> FORM[Contact Form]
```

This keeps the browsing experience fast and avoids unnecessary page transitions.

---

## 🦸 Hero Section Workflow

```mermaid
flowchart TD
    HERO[Hero Section] --> INTRO[Developer Introduction]
    HERO --> ROLE[Backend Developer Identity]
    HERO --> CTA[Primary Actions]
    HERO --> TECH[Technology Identity Icons]

    CTA --> RESUME[Download Resume]
    CTA --> CONTACT[Contact / Connect]

    TECH --> TERMINAL[Java / Terminal Identity]
    TECH --> DATABASE[Database Identity]
    TECH --> JS[JavaScript]
    TECH --> GITHUB[GitHub Profile]
    TECH --> LINKEDIN[LinkedIn Profile]
```

The latest UI evolution gives technology icons premium glassmorphic boxes with individual brand-inspired glow states and hover transformations.

---

## 🎨 Technology Icon Interaction System

```mermaid
flowchart LR
    IDLE[Glass Icon Box] --> HOVER{Hover}
    HOVER --> JAVA[Terminal: Blue Glow]
    HOVER --> DB[Database: Purple Glow]
    HOVER --> JS[JavaScript: Yellow Glow]
    HOVER --> GH[GitHub: Neutral Glow]
    HOVER --> LI[LinkedIn: Brand Blue Glow]

    JAVA --> TRANSFORM[Translate Up + Scale]
    DB --> TRANSFORM
    JS --> TRANSFORM
    GH --> TRANSFORM
    LI --> TRANSFORM
```

The icon system uses:

- backdrop blur,
- translucent surfaces,
- border transitions,
- radial highlight overlays,
- drop shadows,
- individual brand colors,
- scale animation,
- vertical hover movement,
- theme-specific color behavior.

---

## 🌗 Theme Workflow

```mermaid
stateDiagram-v2
    [*] --> DefaultTheme
    DefaultTheme --> DarkMode
    DefaultTheme --> LightMode
    DarkMode --> LightMode: Toggle Theme
    LightMode --> DarkMode: Toggle Theme
```

The visual system supports both dark and light themes, with adjusted backgrounds, text contrast, glass surfaces, icon colors, shadows and hover states.

---

## 📱 Responsive Experience

```mermaid
flowchart TD
    SCREEN[Viewport Size] --> CHECK{Screen Width}

    CHECK -->|Desktop| DESKTOP[Full Header Navigation]
    CHECK -->|Tablet| TABLET[Adaptive Grid + Spacing]
    CHECK -->|Mobile| MOBILE[Compact Header + Mobile Menu]

    DESKTOP --> CONTENT[Portfolio Content]
    TABLET --> CONTENT
    MOBILE --> CONTENT
```

The portfolio adapts navigation, spacing, content layout and interaction areas for multiple screen sizes.

---

## 📬 Contact Form Workflow

The contact section uses asynchronous form submission so visitors can send a message without leaving the portfolio.

```mermaid
sequenceDiagram
    actor Visitor
    participant UI as Contact Form
    participant React as React Handler
    participant Service as Form Submission Service
    participant Inbox as Email Inbox

    Visitor->>UI: Enter contact information
    Visitor->>UI: Write message
    Visitor->>UI: Click Send
    UI->>React: Submit event
    React->>React: Prevent page reload
    React->>Service: AJAX form submission

    alt Successful submission
        Service->>Inbox: Deliver message
        Service-->>React: Success response
        React-->>UI: Show success feedback
    else Submission fails
        Service-->>React: Error response
        React-->>UI: Show retry/error state
    end
```

### Contact Pipeline

```text
Visitor
   ↓
Contact Form
   ↓
React Submit Handler
   ↓
AJAX Request
   ↓
Form Delivery Service
   ↓
Configured Email Inbox
   ↓
Success / Error UI Feedback
```

---

## 📄 Resume Download Workflow

```mermaid
flowchart LR
    VISITOR[Visitor] --> BUTTON[Download Resume Button]
    BUTTON --> FILE[Resume Asset]
    FILE --> BROWSER[Browser Download]
    BROWSER --> REVIEW[Recruiter Reviews Resume]
```

This gives recruiters direct access to the résumé without requiring additional navigation.

---

## 🔗 Social Profile Workflow

```mermaid
flowchart TD
    PORTFOLIO[Portfolio] --> HERO[Hero / Header Actions]
    HERO --> GH[GitHub Profile]
    HERO --> LI[LinkedIn Profile]

    GH --> CODE[Repositories + Technical Work]
    LI --> NETWORK[Professional Experience + Network]
```

---

## ⚛️ React Application Flow

```mermaid
flowchart TD
    HTML[index.html] --> MAIN[src/main.jsx]
    MAIN --> ROOT[React Root]
    ROOT --> APP[App.jsx]
    APP --> STATE[UI State]
    APP --> SECTIONS[Portfolio Sections]
    APP --> EVENTS[Event Handlers]
    APP --> CSS[App.css / Styling]

    STATE --> THEME[Theme State]
    STATE --> MENU[Mobile Menu State]
    STATE --> FORM[Contact Form State]

    EVENTS --> NAV[Navigation Actions]
    EVENTS --> TOGGLE[Theme Toggle]
    EVENTS --> SUBMIT[Form Submission]
```

---

## 🧰 Technology Stack

| Technology | Purpose |
|---|---|
| React 19.2 | Component-driven UI |
| React DOM 19.2 | Browser rendering |
| Vite 5.4 | Development server and production build |
| JavaScript | UI behavior and application logic |
| Lucide React | Consistent icon system |
| CSS | Responsive design, themes and animations |
| CSS Custom Properties | Theme-aware design tokens |
| Oxlint | JavaScript and React code quality |
| Form Submission API | Contact-message delivery |
| Vercel | Production deployment |

---

## 📂 Project Structure

```text
Shashank_Portfolio/
│
├── public/
│   ├── favicon.svg
│   └── resume / static assets
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── assets/
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── oxlint.config.json
└── README.md
```

---

## 🔍 SEO & Browser Metadata

The project includes portfolio-oriented browser metadata describing the owner as a backend developer based in Hyderabad, India, with specialization around Java, Spring Boot, Spring Security, REST APIs and PostgreSQL.

```text
Search / Shared Link
        ↓
HTML Metadata
        ↓
Developer Name + Role
        ↓
Technology Specialization
        ↓
Portfolio Discoverability
```

For future improvement, Open Graph and Twitter Card metadata can be added for richer social previews.

---

## 🚀 Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/ashrithBalaji456/Shashank_Portfolio.git
cd Shashank_Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open the local URL shown by Vite, typically:

```text
http://localhost:5173
```

### 4. Create Production Build

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

## 🌍 Deployment Workflow

```mermaid
flowchart LR
    DEV[Local Development] --> GIT[Git Commit]
    GIT --> GITHUB[GitHub Repository]
    GITHUB --> VERCEL[Vercel Build]
    VERCEL --> BUILD[npm run build]
    BUILD --> CDN[Production Deployment]
    CDN --> LIVE[Live Portfolio]
```

### Production

**Live Portfolio:**  
https://shashank-portfolio-rust.vercel.app/

---

## 🧪 Manual Testing Checklist

- [ ] Portfolio loads correctly on the live deployment.
- [ ] Header navigation reaches the correct sections.
- [ ] Mobile menu opens and closes correctly.
- [ ] Hero CTA buttons work.
- [ ] Resume button downloads or opens the correct résumé.
- [ ] GitHub profile opens in a new tab.
- [ ] LinkedIn profile opens in a new tab.
- [ ] Dark theme renders correctly.
- [ ] Light theme renders correctly.
- [ ] Technology icons animate on hover.
- [ ] Project cards are readable on mobile.
- [ ] Contact form validates required fields.
- [ ] Contact form sends successfully.
- [ ] Success state appears after submission.
- [ ] Failure state is understandable and retryable.
- [ ] Layout works on desktop, tablet and mobile.
- [ ] No horizontal overflow appears on small screens.
- [ ] Production build completes successfully.

---

## 🎯 User Journey

```mermaid
journey
    title Recruiter Journey Through the Portfolio
    section Discovery
      Open portfolio: 5: Recruiter
      Read developer identity: 5: Recruiter
    section Evaluation
      Review technical skills: 5: Recruiter
      Explore experience: 4: Recruiter
      Inspect projects: 5: Recruiter
      Visit GitHub: 5: Recruiter
    section Decision
      Download resume: 5: Recruiter
      Visit LinkedIn: 4: Recruiter
      Send contact message: 5: Recruiter
```

---

## 🧠 Engineering Concepts Demonstrated

This project demonstrates:

- React single-page application development
- Component-driven UI thinking
- State-driven theme management
- Responsive navigation
- Mobile-first adaptation
- Event handling
- Asynchronous form submission
- External service integration
- CSS custom properties
- Glassmorphism
- Micro-interactions
- Hover-state design systems
- Brand-aware icon styling
- Responsive grids
- Semantic portfolio structure
- SEO metadata
- Static production deployment
- Git-based deployment workflow

---

## 🔐 Production Considerations

For further production hardening:

- Keep email-service configuration outside public frontend code where applicable.
- Add bot protection or CAPTCHA to the contact form if spam increases.
- Add rate limiting through a backend/serverless contact endpoint for stronger abuse prevention.
- Add analytics with privacy-aware configuration.
- Add a custom domain.
- Add Content Security Policy headers.
- Add Open Graph metadata.
- Add Twitter/X Card metadata.
- Optimize image assets to WebP or AVIF.
- Add Lighthouse performance checks to CI.
- Add automated accessibility testing.

---

## 📈 Future Enhancements

- [ ] Framer Motion section transitions
- [ ] Animated page loading sequence
- [ ] GitHub API project statistics
- [ ] Dynamic repository cards
- [ ] Blog or technical writing section
- [ ] Project filtering by technology
- [ ] Detailed project case-study pages
- [ ] Certification section
- [ ] GitHub contribution visualization
- [ ] Visitor analytics
- [ ] Custom domain
- [ ] Open Graph social cards
- [ ] PWA support
- [ ] Accessibility audit
- [ ] Lighthouse CI
- [ ] Contact form CAPTCHA
- [ ] Serverless contact API
- [ ] Automated deployment checks

---

## 🔗 Important Links

| Resource | Link |
|---|---|
| 🌐 Live Portfolio | [Visit Live Application](https://shashank-portfolio-rust.vercel.app/) |
| 📦 Source Repository | [Shashank_Portfolio](https://github.com/ashrithBalaji456/Shashank_Portfolio) |
| 👨‍💻 GitHub Profile | [Shashank51-code](https://github.com/Shashank51-code) |
| 💼 LinkedIn | [Shashank Kudha](https://www.linkedin.com/in/shashank-kudha-5ba284252/) |

---

## 👨‍💻 Portfolio Owner

<div align="center">

### Shashank Kudha

**Backend Developer**

Java • Spring Boot • Spring Security • REST APIs • PostgreSQL

<a href="https://github.com/Shashank51-code">
  <img src="https://img.shields.io/badge/GitHub-Shashank51--code-181717?style=for-the-badge&logo=github" />
</a>
<a href="https://www.linkedin.com/in/shashank-kudha-5ba284252/">
  <img src="https://img.shields.io/badge/LinkedIn-Shashank_Kudha-0A66C2?style=for-the-badge&logo=linkedin" />
</a>

</div>

---

## ⭐ Support

If you like the portfolio design or find the implementation useful for learning React, responsive portfolio design, theme systems and interactive UI development, consider starring the repository.

<div align="center">

### Built with ⚛️ React • ⚡ Vite • 🟨 JavaScript • 🎨 CSS • ▲ Vercel

**Build skills. Showcase work. Create opportunities.**

⭐ Star the repository if you find it useful.

</div>
