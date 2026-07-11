# Miles Jennings Portfolio

This is a Vite + React portfolio site.

## Basic Development Flow

### 1. Open the project
Open a terminal in the project folder:

```bash
cd C:\Users\joshm\Downloads\My-Tailwind-Portfolio
```

### 2. Install dependencies
Run this once after cloning the repo, or again if `node_modules` is missing:

```bash
npm install
```

### 3. Start the local website
Run the development server:

```bash
npm run dev
```

Vite will usually show a local link like `http://localhost:5173/`. Open that in your browser to view the site.

### 4. Make edits
Edit files inside `src/`.

Common files:
- `src/components/AboutSection.jsx`
- `src/components/HeroSection.jsx`
- `src/components/ProjectsSection.jsx`
- `src/components/SkillsSection.jsx`
- `src/components/ContactSection.jsx`

The site should update automatically after you save changes.

### 5. Check your work
If you want to catch issues before pushing:

```bash
npm run build
npm run lint
```

### 6. Push changes to the repo
When you are ready to update the website:

```bash
git status
git add .
git commit -m "Update portfolio content"
git push
```

If your live site is connected to this GitHub repo, pushing to the tracked branch will update the deployed website automatically.

## Notes

- This project uses Node.js and npm, not a Python virtual environment.
- If `npm run dev` says `vite` is missing, run `npm install` again.
- If the site does not load, check the terminal for the port Vite is using.
