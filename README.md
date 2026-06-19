# Bhavesh Sonawane Portfolio

Premium futuristic 3D portfolio built with React, Vite, Tailwind CSS, Framer Motion, Three.js, React Three Fiber, GSAP, React Icons, and EmailJS.

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## EmailJS Setup

Create a `.env` file using `.env.example`:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The contact form sends these fields:

- `from_name`
- `from_email`
- `phone`
- `subject`
- `message`

## Resume Download

Place the resume PDF here:

```text
public/Bhavesh-Sonawane-Resume.pdf
```

The hero section download button already points to that path.
