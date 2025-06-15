# Project Bootup: DasVerb Phoenix 🔥

I’m working on the latest iteration of my German learning site using:
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Shadcn UI
- Firebase (for deployment + analytics)
- MDX-based documentation powered by Contentlayer (not Nextra)

🧠 My goal is to teach German and make docs that help both learners and dev contributors.

🎯 TASKS FOR TODAY:

## 🛠️ Fix /docs Not Found Issue
- [ ] Migrate MDX files from /pages/docs to /content/docs
- [ ] Install and set up `contentlayer` and `next-contentlayer`
- [ ] Create `app/docs/page.tsx` to render `index.mdx`
- [ ] Scaffold the `Mdx` component to render content
- [ ] Make sure `next.config.js` and `contentlayer.config.ts` are correctly set up

## 📁 Organize File Structure
- [ ] Clean up any leftover `/pages/docs` structure
- [ ] Ensure `/content/docs/*.mdx` files render on `/docs` route
- [ ] Create sidebar system or at least a TOC in index.mdx

## ⚙️ Cursor Workspace Setup
- [ ] Create `.vscode/settings.json` with:
```json
{
  "editor.formatOnSave": true,
  "files.autoSave": "onWindowChange",
  "tailwindCSS.includeLanguages": { "plaintext": "html" },
  "editor.wordWrap": "on",
  "typescript.tsdk": "node_modules/typescript/lib"
}
 Install key extensions:

Tailwind IntelliSense

ESLint

Prettier

Headwind

Firebase Tools

MDX support

💬 Docs Setup Reminder
Docs live in /content/docs/

Routed through app/docs/page.tsx

Use allDocs from contentlayer/generated

Mdx renderer lives in /components/mdx/mdx.tsx

✨ Final Touch
Help me:

Keep grammar resources clean and interactive

Build a consistent dev blog in /content/blog/

Create a /content/dev-notes.mdx where I log everything I learn