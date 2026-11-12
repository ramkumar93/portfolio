# Ramkumar Ketti Moorthy — Portfolio

Personal portfolio website for **Ramkumar Ketti Moorthy**, Lead Full Stack Engineer. Built with **Angular 21** using standalone components and responsive Dark/Light mode theme system.

🌐 **Live Website**: [https://ramkumar93.github.io/portfolio/](https://ramkumar93.github.io/portfolio/)

---

## 🛠️ Tech Stack

- **Framework**: Angular 21 (Standalone Components, modern `@if` / `@for` control flow)
- **Styling**: SCSS with CSS Custom Properties for Dark/Light theme switching
- **Language**: TypeScript
- **Deployment**: Automated via GitHub Actions to GitHub Pages
- **Build Tooling**: Angular Application Builder with Vite & esbuild

---

## 💻 Local Development

1. Clone repository:
   ```bash
   git clone https://github.com/ramkumar93/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npx ng serve
   ```
   Open [http://localhost:4200/](http://localhost:4200/) in your browser.

---

## 🚀 Building for Production

```bash
npx ng build --base-href /portfolio/
```
The production bundle will be output to `dist/ramkumar-portfolio/browser`.
