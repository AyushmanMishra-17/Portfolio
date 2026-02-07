---

```md
# 🌐 Personal Portfolio Website

A modern, animated personal portfolio website built to showcase my skills, experience, education, and projects in a clean and professional way.

This portfolio is designed with a strong focus on:
- Clear personal branding
- Smooth animations and modern UI
- Recruiter-friendly structure
- Scalability for adding future projects

---

## ✨ Features

- 🎨 **Modern UI** with gradients, glassmorphism, and smooth layouts
- 🎥 **Framer Motion animations** for sections, timelines, and interactions
- 📊 **Skills Section**
  - Technical skills
  - Soft skills
- 🧑‍💼 **Experience Timeline**
  - College positions
  - Posts and responsibilities
- 🎓 **Education Timeline**
  - Class 10th
  - Class 12th
  - Courses
  - Certificates
- 📁 **Projects Page** (separate route)
- 📱 **Fully Responsive** (mobile, tablet, desktop)
- 🌙 **Dark theme aesthetic**
- 🔗 **React Router** for multi-page navigation
- 🌍 **Deployed on Vercel**

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Framer Motion
- React Router DOM

**Deployment**
- Vercel

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
│   │   ├── Navbar.jsx
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

````

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/Portfolio.git
cd Portfolio
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## 🌍 Deployment

This portfolio is deployed using **Vercel**.

### Deployment steps:

1. Push the repository to GitHub
2. Import the repository into Vercel
3. Set the following build configuration:

   * **Framework:** Vite
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
4. Add a `vercel.json` file for React Router support:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## 🧠 Future Enhancements

* Add more projects (AI & Full-Stack based)
* Add achievements and awards section
* Integrate a contact form with email support
* Custom domain integration
* SEO optimization

---

## 👤 Author

**Ayushman Mishra**
Machine Learning & Full-Stack Developer

* GitHub: [https://github.com/AyushmanMishra-17](https://github.com/AyushmanMishra-17)
* Portfolio: *(Live URL after deployment)*

---

## 📜 License

This project is for **personal portfolio use**.
Feel free to explore the code, but please do not reuse the design as-is without permission.
