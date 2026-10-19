# Jason Ochola — Portfolio

Personal portfolio for **Jason Ochola**, a Quantitative Researcher & Electrical Engineering Student based in Nairobi, Kenya. The site showcases algorithmic trading research (Bayesian ML & arXiv Alpha models), autonomous systems & embedded hardware engineering, academic projects, and professional background.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Markup | HTML5, semantic sectioning |
| Styling | Custom CSS (modular tokens) + Tailwind CSS (play CDN) + Bootstrap 5 grid |
| Scripting | Vanilla JavaScript (ES modules via IIFEs) |
| Type | Playfair Display · Manrope · DM Mono (Google Fonts) |
| Icons | Lucide · Font Awesome 6 |
| Markdown | marked.js (blog reader) |
| Mail | Web3Forms |

No build step. No framework. Pure high-performance static web application.

---

## Featured Projects

1. **arXiv Gold Quant Alpha** — High-capacity algorithmic intraday strategy on XAUUSD, combining MacKay Bayesian regularized neural networks, structural feature engineering, and time-in-market bounds (+27.2% to +59.4% return on $100k, Net Sharpe 2.001, 100% solvency across 2,000 Monte Carlo runs).
2. **Patrol Drone Lite** — Civilian autonomous mission planner & patrol quadcopter hardware with geofencing, real-time FastAPI telemetry, and onboard flight controllers.
3. **ExamPredict AI** — Academic NLP & machine learning model predicting high-recurrence curriculum examination questions.

---

## Design System

Tokens are defined on `:root` in `main.css`:

```css
--cream:  #07090e   /* obsidian void background */
--paper:  #0b0f19   /* deep cyber card surface */
--maroon: #00f2fe   /* electric cyan primary accent */
--deep:   #3b82f6   /* royal blue secondary accent */
--ink:    #f8fafc   /* crisp white body text */
--muted:  #94a3b8   /* slate secondary text */
--line:   rgba(255, 255, 255, 0.08)
--radius: 1.1rem
```

---

## Terminal Commands

The in-page interactive terminal accepts:

| Command | Output |
|---|---|
| `help` | Directory of available terminal commands |
| `about` | Professional bio, focus areas, and philosophy |
| `quant` | arXiv Gold Quant Alpha architecture & Sharpe metrics |
| `drone` | Patrol Drone Lite autonomous hardware & telemetry stack |
| `coderdojo` | IBM East Africa CoderDojo foundational coding training (2016–2017) |
| `exampredict` | Origin machine learning story & exam question predictor |
| `skills` | Quantitative analysis, machine learning, and EE hardware stack |
| `projects` | Interactive overview of active research and systems |
| `contact` | Direct communication channels (Email, WhatsApp, Instagram) |
| `clear` | Clears the terminal screen |

---

## Local Development

```bash
# Run with Python:
python -m http.server 8080

# Or with Node:
npx serve .
```

Open `http://localhost:8080` in any evergreen browser.

---

## Contact & Socials

- **Email**: jasonochola21@gmail.com
- **WhatsApp**: [+254 757 049 896](https://wa.me/254757049896)
- **Instagram**: [@j.0ch](https://instagram.com/j.0ch/)
- **GitHub**: [jajasofly](https://github.com/jajasofly)

---

## License

Personal portfolio — Jason Ochola. All rights reserved.
