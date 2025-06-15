# DasVerb 🇩🇪✨

**DasVerb: German grammar, gone hard. But never try-hard.**

Stop snoozing through Deutsch class. Level up your language skills with DasVerb – an intelligent, witty, and modern platform designed to make learning German effective and engaging, especially for Gen Z.

---

## 📚 Official Documentation

- **Full docs, dev notes, and blog:** [See `/docs`](http://localhost:9002/docs) (or `/app/docs/(docs)/` in the repo)
- For deep dives, logic explanations, and dev onboarding, always check the docs!

---

## 🛠️ How It Works

- **Frontend:** Next.js (App Router), React, TypeScript, Tailwind, ShadCN UI
  - All routing is file-based in `/app/`
  - UI is built from modular components in `/src/components/`
  - State is managed with React hooks and context
  - Animations, tooltips, and dark mode are all handled with Tailwind and ShadCN
- **Backend:** Next.js API routes, Genkit, Google Gemini
  - All backend logic is in `/app/api/`
  - AI features use Genkit flows in `/src/ai/flows/` and Google Gemini
  - API keys and secrets are stored in `.env.local` and never exposed to the client
- **Docs:** All official docs, dev notes, and blog are in `/app/docs/(docs)/` (MDX-based)

---

## 📝 What's New / Dev Log

**Changelog & Progress Blog**

- **Project Cleanup:** All duplicate '2' folders and files have been removed for a clean, organized structure.
- **Dark Mode Toggle:** Instantly switch between light and dark themes for eye comfort.
- **Animated Gradient Logo:** The DasVerb logo now features a beautiful, animated gradient for modern branding.
- **Dictionary Revamp:**
  - Articles (der/die/das) styled for clarity.
  - Massive expansion of word list and categories (Family, Work, School, Colors, Numbers, etc).
  - Search bar, category filter, and interactive tooltips with fun facts.
  - Add/remove favorites with a click.
- **AI Helper, Grammar Fixer, Story Generator:**
  - Improved input contrast in dark mode.
  - Unified, accessible UI.
- **Dashboard Tabs:** Overview, Dictionary, and Grammar Lessons are now tabbed and interactive.
- **Lessons:**
  - "German Greetings" lesson is now clickable and features a custom visual (with Blush/AI art support).
  - Lesson pages ready for modular, visual, and interactive content.
- **General:**
  - Improved navigation, header, and site-wide consistency.
  - Project structure and codebase refactored for scalability.

> _This README is also a living blog of the project's progress. Each major update is logged here for transparency and future reference._

---

## 👋 About The Project

DasVerb is a Next.js application built with a focus on a clean, modern user experience and powerful AI-driven learning tools. We aim to provide a learning environment that's both fun and genuinely effective, helping you conquer the complexities of the German language with a smile (and maybe a bit of side-eye at our AI tutor's dry humor).

### 🚀 Key Features

*   **Landing Page:** A Gen Z-focused introduction to what DasVerb offers.
*   **User Authentication:** (Planned with Firebase Auth) Secure sign-up and login.
*   **Personalized Dashboard:** Track your progress, learning streaks, and get recommended lessons.
*   **Interactive Lessons:** Dynamic content covering grammar, vocabulary, with quizzes and fill-in-the-blank exercises.
*   **Smart Vocab Flashcards:** Themed vocabulary decks using Spaced Repetition System (SRS), complete with audio and relevant GIFs/images.
*   **AI Grammar Fixer (DasVerb's Grammar Guru):** Get your German sentences corrected by an AI tutor that provides clear, witty, and well-formatted explanations.
*   **AI Story Generator:** Practice your vocabulary by co-creating stories with an AI in various fun and quirky styles (e.g., TikTok drama, fairy tale).
*   **Dictionary:** Massive, categorized, interactive, and fun—now with tooltips, favorites, and search.
*   **Dark Mode:** Toggle for instant eye comfort.
*   **Beautiful Branding:** Animated gradient logo, modern UI, and custom visuals in lessons.

### 🛠️ Tech Stack

*   **Frontend:**
    *   [Next.js](https://nextjs.org/) (App Router, Server Components)
    *   [React](https://reactjs.org/)
    *   [TypeScript](https://www.typescriptlang.org/)
*   **Styling:**
    *   [Tailwind CSS](https://tailwindcss.com/)
    *   [ShadCN UI](https://ui.shadcn.com/) (for UI components)
*   **AI & Backend Logic:**
    *   [Genkit by Firebase](https://firebase.google.com/docs/genkit) (for AI flow orchestration)
    *   [Google Gemini](https://ai.google.dev/) (as the primary language model via Genkit)
*   **Platform & Services (Planned/Used):**
    *   [Firebase](https://firebase.google.com/) (Authentication, Hosting, potentially Firestore/Database)

## 🏗️ Project Structure (Updated)

```
dasVerb/
├── app/                # Main Next.js App Router (routes, pages, layouts, API)
│   ├── dashboard/      # Dashboard page and widgets
│   ├── lessons/        # Lessons library and progress
│   ├── flashcards/     # Flashcard decks
│   ├── ai-helper/      # General AI helper tool
│   ├── grammar-fixer/  # AI grammar correction tool
│   ├── story-generator/# AI story generator tool
│   ├── docs/           # Documentation (MDX-based)
│   ├── ...             # Other feature folders (login, signup, vibe-check, etc.)
│   ├── api/            # API routes (serverless functions)
│   ├── layout.tsx      # Global layout (header, footer, container)
│   ├── globals.css     # Main CSS import for Tailwind
│   └── page.tsx        # Main landing page
├── src/                # Source code (components, ai, hooks, lib)
│   ├── components/     # All React components (UI, features, layout, shared)
│   ├── ai/             # AI logic, Genkit flows, and Gemini integration
│   ├── lib/            # Shared utilities and helper functions
│   ├── hooks/          # Custom React hooks
│   └── types/          # TypeScript type definitions (if present)
├── public/             # Static assets (images, icons, etc.)
├── styles/             # Global styles (Tailwind, custom CSS)
├── ...                 # Config files, scripts, etc.
```

### `/app/`
- Main entry for all routes, layouts, and API endpoints using Next.js App Router.
- Each folder = a route (e.g., `/dashboard`, `/lessons`, `/flashcards`, `/ai-helper`, `/vibe-check`, `/signup`, `/login`, `/grammar-fixer`, `/story-generator`)
- `api/` — API routes (serverless functions, e.g., `/api/ai-helper/route.ts`)
- `layout.tsx` — Global layout (header, footer, providers)
- `globals.css` — Main CSS import for Tailwind
- `page.tsx` — Main landing page

### `/src/components/`
- All React components, organized for reusability and clarity.
- `ui/` — ShadCN UI components (Button, Card, Input, etc.)
- `dashboard/` — Dashboard-specific widgets (stats, quick views)
- `layout/` — Header, Footer, and layout wrappers
- `landing/` — Landing page sections (hero, features, testimonials, etc.)
- `shared/` — Reusable helpers (WordTooltip, ClientOnly, etc.)
- `ai-helper-form.tsx`, `grammar-fixer-form.tsx`, `story-generator-form.tsx` — Feature forms
- `logo.tsx` — Animated gradient logo

### `/src/ai/`
- All AI and backend logic, especially Genkit flows and Gemini integration.
- `flows/` — Each file is a Genkit flow (e.g., `ai-helper-flow.ts`, `grammar-fixer.ts`, `ai-story-generator.ts`, `word-details-flow.ts`)
- `genkit.ts` — Genkit initialization/config
- `dev.ts` — Genkit dev server entry

### `/src/lib/`
- Shared utilities and helper functions.
- `utils.ts` — General helpers (formatting, etc.)

### `/src/hooks/`
- Custom React hooks for state, effects, and UI logic.
- `use-mobile.tsx` — Detects mobile devices
- `use-toast.ts` — Toast notification logic

### `/src/types/`
- TypeScript type definitions and interfaces (if present).

### `/public/`
- Static assets (images, lesson art, icons, etc.)

### `/styles/`
- Tailwind config and global CSS.

### `/app/docs/(docs)/`
- All official documentation, blog, and dev notes (MDX-based).

---

## 🗒️ Dev Notes

- Use the docs for onboarding, logic explanations, and best practices
- All new features should be documented in `/app/docs/(docs)/`
- See the dev notes and blog for gotchas, tips, and recent changes

---

## 🏁 Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

*   **Node.js:** v18.x or later recommended. You can download it from [nodejs.org](https://nodejs.org/).
*   **npm** or **yarn:** Comes with Node.js or can be installed separately.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/dripz0r/dasVerb.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd dasVerb
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

### Environment Variables

This project uses Genkit for its AI features, which connects to Google's Gemini models. You'll need an API key from Google AI Studio.

1.  **Create a `.env.local` file** in the root of your project:
    ```bash
    touch .env.local
    ```
2.  **Add your Google AI Studio API key** to the `.env.local` file:
    ```env
    GOOGLE_AI_API_KEY=YOUR_GOOGLE_GEMINI_API_KEY
    ```
    Replace `YOUR_GOOGLE_GEMINI_API_KEY` with your actual key. You can obtain one from [Google AI Studio](https://aistudio.google.com/app/apikey).

    *Note: As Firebase integration progresses, additional environment variables for Firebase project configuration might be needed here.*

### Running the Application

Run with Webpack (not Turbopack):
```bash
npm run dev
```

Visit [http://localhost:9002/docs](http://localhost:9002/docs) for docs and onboarding.

## 🗂️ Git Workflow & Branching

We recommend the following workflow for contributing and managing your work:

- **Create a new branch for each feature or fix:**
  ```bash
  git checkout -b feature/your-feature-name
  ```
- **Commit your changes:**
  ```bash
  git add .
  git commit -m "Describe your changes"
  ```
- **Push your branch to GitHub:**
  ```bash
  git push -u origin feature/your-feature-name
  ```
- **If you create a new branch and see an error about no upstream branch:**
  ```bash
  git push --set-upstream origin your-branch-name
  ```
- **Open a Pull Request** on GitHub to merge your changes into `main`.

> **Tip:** Keep your `main` branch clean and up-to-date by regularly pulling changes:
> ```bash
> git checkout main
> git pull origin main
> ```

---

## 🗒️ Documenting the Process

This README is not just for setup—it's a living blog and changelog of the project. As new features are added, bugs are fixed, or the design evolves, updates will be logged here. This helps track progress and makes onboarding easier for new contributors.

For deep dives, see the [Official Docs](/docs) and [Dev Notes](/docs/dev-notes).

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

If you have a suggestion that would make DasVerb better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! ⭐

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/YourAmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/YourAmazingFeature`)
5.  Open a Pull Request

Please try to follow the existing coding style and add tests for any new features if applicable.

## 📝 License

Distributed under the MIT License.

---

Happy coding, and viel Spaß beim Deutschlernen! 🚀
