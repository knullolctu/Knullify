# Knullify — Free Online File Converter

> **Convert files instantly in your browser. No upload. No server. No signup. 100% Free.**

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?logo=github)](https://knullolctu.github.io/Knullify/)
[![Tools](https://img.shields.io/badge/Tools-16-brightgreen)](#-16-conversion-tools)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🌐 Live Demo

👉 **[https://knullolctu.github.io/Knullify/](https://knullolctu.github.io/Knullify/)**

---

## ✨ Features

Knullify is a fully client-side file conversion tool. Everything runs in your browser — your files **never leave your device**.

### 🔄 16 Conversion Tools

| # | Tool | Description |
|---|------|-------------|
| 1 | 🖼️ **PNG → JPG** | Convert PNG to JPG with custom quality & background color |
| 2 | 🖼️ **JPG → PNG** | Convert JPG/JPEG to lossless PNG |
| 3 | 📄 **PDF → Image** | Export every PDF page as a high-resolution PNG (up to 4x scale) |
| 4 | 🖼️ **Image → PDF** | Combine multiple images into a single PDF document |
| 5 | ✍️ **Text → Image** | Render text on canvas — custom font, color, size & background |
| 6 | 🔍 **Image → Text** | OCR — extract text from images (English, Hindi, French, German, Spanish) |
| 7 | 📑 **PDF → Text** | Extract all text content from a PDF, page by page |
| 8 | 📝 **Text → PDF** | Generate a formatted PDF from plain text with custom styling |
| 9 | 📐 **Image Resizer** | Resize to exact pixels with aspect-ratio lock, multiple output formats |
| 10 | 🗜️ **Image Compressor** | Reduce image file size with live before/after stats |
| 11 | 🔗 **Merge Images** | Stitch images vertically or horizontally with custom gap & color |
| 12 | 📏 **PDF Resizer** | Change page **dimensions** (A4, A3, A5, B5, Letter, Legal, Custom mm). Content scales to fit. Use this for printing on a specific paper size — not for reducing file storage size. |
| 13 | 📎 **PDF Merger** | Merge multiple PDFs into one — drag to reorder files. Optional: set a target output file size in KB/MB. |
| 14 | 🗜️ **PDF Compressor** | Reduce **file storage size** (KB/MB) for email, uploads & form submissions. Page dimensions stay exactly the same. Choose preset level (Screen/eBook/Printer/Prepress) or set an exact target KB/MB. |
| 15 | 📝 **DOCX → PDF** | Convert Word (.docx) documents to PDF — headings, paragraphs, bold/italic and lists preserved. |

> **💡 PDF Resizer vs PDF Compressor — What's the difference?**
>
> | | PDF Resizer | PDF Compressor |
> |--|------------|----------------|
> | **Changes** | Page dimensions (A4, Letter, mm) | File storage size (KB, MB) |
> | **Page layout** | Changes to new size | Stays exactly the same |
> | **Use case** | Print on specific paper, fix layout | Email attachment, govt form upload |
> | **File size effect** | Little to no change | Significantly smaller file |

### 🛡️ Why Knullify?

- 🔒 **100% Private** — Files never leave your device or browser
- ⚡ **Blazing Fast** — No upload wait, instant processing
- 🆓 **Always Free** — No limits, no watermarks, no login
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- 🌐 **Offline Capable** — Most features work without internet after first load
- ♿ **Accessible** — ARIA labels, keyboard navigation, semantic HTML
- 🔍 **SEO Optimized** — Meta tags, Open Graph, Twitter Card, Schema.org JSON-LD
- 📦 **Zero Dependencies** — No npm, no build step, just open `index.html`

---

## 🛠️ Tech Stack

| Library | Purpose |
|---------|---------|
| [PDF.js](https://mozilla.github.io/pdf.js/) | PDF rendering, page export & text extraction |
| [jsPDF](https://github.com/parallax/jsPDF) | PDF generation — images, text, resize, merge, compress |
| [Tesseract.js](https://tesseract.projectnaptha.com/) | In-browser OCR (image to text, multi-language) |
| [Mammoth.js](https://github.com/mwilliamson/mammoth.js) | DOCX parsing for DOCX → PDF conversion |
| Vanilla HTML/CSS/JS | No framework — pure web, zero build step |

---

## 🚀 Getting Started

### Option 1 — Use it directly
Visit **[https://knullolctu.github.io/Knullify/](https://knullolctu.github.io/Knullify/)** — no installation needed.

### Option 2 — Run locally

```bash
# Clone the repository
git clone https://github.com/knullolctu/Knullify.git

# Enter the folder
cd Knullify

# Open in browser (no build step needed!)
open index.html
# or: double-click index.html in your file explorer
```

That's it. No `npm install`, no build process, no dependencies to manage.

### Option 3 — Deploy to GitHub Pages

1. Fork this repo
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder `/`
4. Your live URL: `https://yourusername.github.io/Knullify/`

---

## 📁 Project Structure

```
Knullify/
├── index.html      # Main HTML — all UI, SEO meta tags, structured data
├── style.css       # All styling — responsive, dark theme, animations
├── script.js       # All 16 converter tools — pure vanilla JavaScript
├── LICENSE         # MIT License
└── README.md       # You are here
```

---

## ℹ️ Notes on Specific Features

### DOCX → PDF
Uses Mammoth.js to extract raw text content and jsPDF to generate a cleanly formatted PDF. Basic heading detection is applied (short all-caps lines are bolded). Complex DOCX formatting like tables, images, and custom styles is simplified in the output.

### PDF Compressor — Target File Size
The compressor uses a **binary search algorithm** to hit your requested KB/MB target. It renders each page as JPEG at varying quality levels (up to 10 iterations) until within ~8% of your target. Page dimensions are never changed.

### PDF Resizer — Content Scaling
When resizing to a new page size, content is scaled proportionally and centered on the new page. Use "Scale content to fit" checkbox (on by default) to ensure nothing is cropped.

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** this repository
2. **Create** a new branch: `git checkout -b feature/amazing-tool`
3. **Commit** your changes: `git commit -m 'Add: new converter tool'`
4. **Push** to your branch: `git push origin feature/amazing-tool`
5. **Open a Pull Request**

### Ideas for contributions
- WebP ↔ PNG/JPG converter
- SVG to PNG export
- GIF to video / video to GIF
- Image color picker / palette extractor
- Batch file processing
- PDF page splitter / extractor
- PDF → DOCX (requires server-side processing for accurate formatting)
- Dark/light mode toggle
- i18n / Hindi language support

---

## 🐛 Bug Reports

Found a bug? [Open an issue](https://github.com/knullolctu/Knullify/issues) with:
- Browser name and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if possible

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

You are free to use, modify, distribute, and even use this commercially. Just keep the license notice.
