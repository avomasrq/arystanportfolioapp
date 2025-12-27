# Portfolio App

A modern, dark-themed portfolio application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Dark Theme Design**: Elegant black background with white text
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI Components**: 
  - Fixed header with navigation
  - Hero section with dynamic text overlay
  - Call-to-action section with booking buttons
  - Footer with quick links and contact information
- **Smooth Animations**: Scroll-triggered text changes and hover effects

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio app/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with portrait
│   ├── CTA.tsx         # Call-to-action section
│   └── Footer.tsx      # Footer with links
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

## Customization

- Replace the placeholder portrait image in `components/Hero.tsx`
- Update contact information in `components/CTA.tsx`
- Modify text content in respective component files
- Adjust colors and styling in `tailwind.config.js` and `app/globals.css`

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

