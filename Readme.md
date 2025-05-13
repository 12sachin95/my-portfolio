# 🌐 My Portfolio

This is my personal portfolio website built with React and deployed using GitHub Pages via the gh-pages npm package.

🔗 Live Demo  
https://mr-sachin-rathore.github.io/my-portfolio/
https://your-username.github.io/your-repo-name

Replace your-username and your-repo-name with your actual GitHub username and repository name.

---

## 📁 Project Setup & Deployment Using gh-pages

### 🧱 Step 1: Create a React App

Using Create React App:

```bash
npx create-react-app my-portfolio
cd my-portfolio
```

Or using Vite:

```bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install
```

---

### 🛠️ Step 2: Install gh-pages

```bash
npm install gh-pages --save-dev
```

---

### 📝 Step 3: Add homepage in package.json

In your package.json, add this line (replace values accordingly):

```json
"homepage": "https://your-username.github.io/your-repo-name"
```

---

### 📜 Step 4: Add deploy scripts

Still in package.json, under "scripts", add:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

For Vite apps, the build directory may be dist instead of build:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

---

### ⚙️ Step 5 (Vite Only): Update vite.config.js

If using Vite, edit vite.config.js to include the base path:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
});
```

---

### 📤 Step 6: Initialize Git & Push Code

```bash
git init
git remote add origin https://github.com/your-username/your-repo-name.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

---

### 🚀 Step 7: Deploy to GitHub Pages

```bash
npm run deploy
```

This will push the production build folder (build/ or dist/) to a branch named gh-pages.

---

### 🔧 Step 8: Enable GitHub Pages

1. Go to your GitHub repository.
2. Navigate to Settings → Pages.
3. Under "Source", choose gh-pages branch and "/" folder.
4. Save the settings.

GitHub will publish your site shortly.

---

## ✅ Redeploy After Changes

After making updates to your site:

```bash
npm run deploy
```

---

## 🔪 Troubleshooting

- Ensure your repo is public.
- Make sure the correct base path is set for Vite.
- If build fails, try deleting node_modules and reinstalling.

---

## 🛋️ Contact

For any issues or questions, feel free to reach me at 12sachin95@gmail.com

---

© 2025 Your Name. All rights reserved.
