# DasVerb 🇩🇪✨

**DasVerb: German grammar, gone hard. But never try-hard.**

Stop snoozing through Deutsch class. Level up your language skills with DasVerb – an intelligent, witty, and modern platform designed to make learning German effective and engaging, especially for Gen Z.

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

1.  **Create a `.env` file** in the root of your project:
    ```bash
    touch .env
    ```
2.  **Add your Google AI Studio API key** to the `.env` file:
    ```env
    GOOGLE_API_KEY=YOUR_GOOGLE_GEMINI_API_KEY
    ```
    Replace `YOUR_GOOGLE_GEMINI_API_KEY` with your actual key. You can obtain one from [Google AI Studio](https://aistudio.google.com/app/apikey).

    *Note: As Firebase integration progresses, additional environment variables for Firebase project configuration might be needed here.*

### Running the Application

You'll need to run two separate development servers: one for the Next.js frontend and one for the Genkit AI flows.

1.  **Start the Next.js Development Server:**
    Open a terminal and run:
    ```bash
    npm run dev
    ```
    This will start the web application, typically available at `http://localhost:9002`.

2.  **Start the Genkit Development Server:**
    Open a *new, separate* terminal and run:
    ```bash
    npm run genkit:dev
    ```
    (For automatic reloading on Genkit flow changes, you can use `npm run genkit:watch`)
    This starts the Genkit developer UI, usually available at `http://localhost:4000`. Here you can inspect, test, and trace your AI flows.

## 📖 Project Structure Overview

A brief look at some key directories:

*   `src/app/`: Contains all the pages and routes for the Next.js application (using App Router).
*   `src/components/`: Shared React components used across the application.
    *   `src/components/ui/`: UI components from ShadCN.
    *   `src/components/landing/`: Components specific to the landing page.
    *   `src/components/layout/`: Layout components like Header and Footer.
*   `src/ai/`: Home for all Genkit AI-related code.
    *   `src/ai/flows/`: Defines the AI flows (e.g., `grammar-fixer.ts`, `ai-story-generator.ts`).
    *   `src/ai/genkit.ts`: Genkit initialization and global configuration.
*   `public/`: Static assets.

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
