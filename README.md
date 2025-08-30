# Feature Showcase – MERN Stack Internship Task

This project implements a **Feature Showcase section** based on the provided reference UI for the Preva Care MERN Stack Internship final-round task. The component is built with **React and Tailwind CSS**, ensuring a clean, responsive, and interactive experience.

---

#### DEMO LINK

<pre>
  <a href="https://prevacareiphoneshowcase.netlify.app/">https://prevacareiphoneshowcase.netlify.app/</a>
</pre>

## **Features**

### 1. **Interactive Feature Points (Right Side)**
- Clickable feature list with active state highlighting (blue indicator).
- Dynamically updates:
  - iPhone mockup image
  - Heading
  - Description text on the left panel.

### 2. **Left/Right Arrows (Navigation)**
- Navigate through features manually.
- Supports both forward and backward switching.

### 3. **Scroll Behavior**
- Section remains **sticky** when in view.
- **Auto-advances** features (1 → 5) while scrolling.
- After the last feature, normal scrolling resumes.

### 4. **Mobile Responsiveness**
- Optimized layout for mobile devices.
- Tap-friendly controls and proper spacing.
- Responsive stacking (`flex-col` on mobile, `flex-row` on desktop).

---

## **Tech Stack**
- **React.js** – Component-based architecture
- **Tailwind CSS** – For styling and responsiveness

---

## **Installation & Setup**
```bash
# Clone the repository
git clone https://github.com/your-username/feature-showcase.git

# Navigate into the project directory
cd feature-showcase

# Install dependencies
npm install

# Start the development server
npm start
