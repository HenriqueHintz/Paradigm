# Paradigm Companies — Real Estate Corporate Platform
*Premium institutional web platform for a luxury real estate development firm.*

<div align="center">
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
</div>

<br />

## 📖 About

This project is a high-end, editorial-style institutional web platform built for Paradigm Companies, a multidisciplinary real estate firm operating in the Mid-Atlantic region. 

The primary objective was to replace a generic legacy layout with a **premium, performance-oriented digital experience** that reflects the company's authority in luxury real estate, construction, and property management. It features a scalable component architecture, a strongly typed dynamic data layer, and cinematic-grade animations.

## 🚀 Key Features

- **Cinematic Hero Animations**: High-performance staggered letter-by-letter reveal sequences using `framer-motion` with dynamic blur and glow effects.
- **Dynamic Data Layer**: Complete backend-as-code implementation (`src/data`) mocking a headless CMS for properties, leadership team, awards, and testimonials.
- **Interactive Modals**: Fully accessible, keyboard-navigable executive biography modals for the C-Suite leadership team.
- **Advanced Portfolio Filtering**: Client-side multi-criteria search and filtering (by city, property type, and text search) for the communities portfolio.
- **Premium Design System**: Custom tailored Navy, Gold, and Cream token palette implemented via Tailwind config, utilizing asymmetrical bento-grid layouts and bespoke typography.

## 🛠 Technologies

| Technology | Purpose |
|------------|---------|
| **React 19** | Core UI library for component-based architecture |
| **TypeScript** | Strict type safety for data models and component props |
| **Vite** | Ultra-fast build tool and development server |
| **Tailwind CSS** | Utility-first styling and custom design system tokens |
| **Framer Motion** | Complex orchestrations and cinematic layout animations |
| **React Router** | Client-side routing and declarative navigation |

## 📁 Project Structure

```text
src/
├── components/       # Reusable UI elements (Header, Footer, Cards, Modals)
├── data/             # Strongly typed data layer (properties.ts, team.ts, etc.)
├── pages/            # Main route views (Home, About, Communities, Contact)
├── App.tsx           # Application router configuration
├── main.tsx          # React application entry point
└── tailwind.config   # Design system tokens (colors, typography, animations)
```

## ⚙️ Setup & Installation

**Prerequisites:** Node.js 18+

1. Clone the repository
```bash
git clone https://github.com/HenriqueHintz/paradigm-corporate-platform.git
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 📊 Status

🟢 **Production-Ready**: The MVP is complete, optimized, and ready for deployment.

---

Author  
**Henrique Hintz**  

GitHub: [https://github.com/HenriqueHintz](https://github.com/HenriqueHintz)  
Instagram: [https://www.instagram.com/henriquehtz/](https://www.instagram.com/henriquehtz/)
