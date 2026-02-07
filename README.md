---

# 🌐 Personal Portfolio Website

A modern, animated personal portfolio website built to showcase my skills, experience, education, and projects in a clean, professional, and recruiter-friendly manner.

This portfolio focuses on strong personal branding, smooth UI animations, and a scalable structure for adding advanced projects over time.

---

## ✨ Features

* 🎨 Modern UI with gradients, glassmorphism, and clean layouts
* 🎥 Smooth animations using Framer Motion
* 🧠 Skills section (Technical + Soft Skills)
* 🧑‍💼 Experience section for college posts and responsibilities
* 🎓 Education timeline (Class 10th, Class 12th, Courses, Certificates)
* 📁 Dedicated Projects page
* 📱 Fully responsive (mobile, tablet, desktop)
* 🌙 Dark-themed professional aesthetic
* 🔗 React Router for multi-page navigation
* 🌍 Ready for deployment on Vercel

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Framer Motion
* React Router DOM

### Deployment

* Vercel

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   └── favicon.jpg
│
├── src/
│   ├── assets/
│   │   └── profile.jpg
│   │
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── ExperienceTimeline.jsx
│   │   ├── EducationTimeline.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── SectionDivider.jsx
│   │   └── BackgroundGlow.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProjectsPage.jsx
│   │
│   ├── app.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Portfolio.git
cd Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## 🌍 Deployment (Vercel)

This project is designed for deployment on **Vercel**.

### Deployment Steps:

1. Push the repository to GitHub
2. Import the repository into Vercel
3. Set the build configuration:

   * Framework Preset: **Vite**
   * Build Command: `npm run build`
   * Output Directory: `dist`

### React Router Fix (Required)

Create a `vercel.json` file in the project root:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## 🧠 Future Enhancements

* Add advanced AI & full-stack projects
* Add achievements and awards section
* Add a contact form with email integration
* SEO optimization
* Custom domain integration

---

## 👤 Author

**Ayushman Mishra**
Machine Learning & Full-Stack Developer

* GitHub: [https://github.com/AyushmanMishra-17](https://github.com/AyushmanMishra-17)
* Portfolio: Live URL (after deployment)

---

## 📜 License

This project is intended for **personal portfolio use**.
Please do not reuse the design or structure directly without permission.

---
