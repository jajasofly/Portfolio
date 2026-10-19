(() => {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (window.lucide) lucide.createIcons();
  
  const about = document.getElementById("about");
  const footer = document.querySelector(".site-footer");
  const backToTop = document.getElementById("back-to-top");
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          observer.unobserve(e.target);
        }
      }),
    { threshold: 0.15 },
  );
  document.querySelectorAll(".reveal").forEach((e) => observer.observe(e));
  const items = [...document.querySelectorAll("[data-parallax]")];
  let y = scrollY,
    ticking = false;
  const motion = () => {
    ticking = false;
    const footerVisible = footer && footer.getBoundingClientRect().top < innerHeight;
    backToTop?.classList.toggle(
      "is-visible",
      about && about.getBoundingClientRect().bottom <= 0 && !footerVisible,
    );
    if (!reduced)
      items.forEach((e) => {
        const n = Number(e.dataset.parallax) || 0;
        e.style.transform = `translate3d(0,${(y - e.offsetTop + innerHeight / 2) * n}px,0)`;
      });
  };
  addEventListener(
    "scroll",
    () => {
      y = scrollY;
      if (!ticking) {
        requestAnimationFrame(motion);
        ticking = true;
      }
    },
    { passive: true },
  );
  motion();
  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  });
  const commands = {
    help: `Available shell systems:
  - about       View engineer & quant profile
  - quant       Inspect arXiv Gold Alpha & TINs empirical results
  - drone       Inspect Patrol Drone Lite autonomous mission system
  - coderdojo   Review IBM East Africa CoderDojo training (2016-2017)
  - exampredict Inspect first ML project (question recurrence model)
  - skills      Inspect mathematical, ML, EE & system proficiencies
  - projects    Enumerate active engineering & research projects
  - clear       Wipe terminal logs
  - contact     Open the communication channel`,
    about: `================ JASON PROFILE ================
FOCUS       : Quantitative Research & Electrical Engineering
EDUCATION   : Diploma in Electrical & Electronic Engineering (2023 - Present)
FOUNDATION  : IBM East Africa CoderDojo (2016 - 2017)
QUANT       : Self-taught Quantitative Analysis (Jan 2025 - Present)
ETHOS       : Discrete signals, mathematical discipline, empirical proof`,
    quant: `================ ARXIV GOLD ALPHA AUDIT ================
BENCHMARK   : 50 arXiv Architectures Screened on XAUUSD M30
CHAMPION    : 1-Trade-A-Day: Unified Arch A (Bayesian Bound + TIN)
NET SHARPE  : 2.001 (Out-of-Sample 2025-2026)
WIN RATE    : 55.0% across 420 audited trades
MAX DD      : 8.96% on $100k account (Prop-firm compliant)
MONTE CARLO : 100.0% capital solvency across 1,000 bootstrap runs
EVIDENCE    : github.com/jajasofly/arxiv-gold-quant-alpha`,
    drone: `================ PATROL DRONE LITE SYSTEM ================
ARCHITECTURE: FastAPI + SQLite + WebSockets Telemetry
GEOSPATIAL  : WGS84 GeoJSON site boundaries & dynamic no-fly zones
ROUTING     : Autonomous waypoint path generation with battery margin
SIMULATION  : Integrated FakeDrone flight execution & mission audit
LOCATION    : Local system at D:\\Drone project`,
    coderdojo: `================ IBM EAST AFRICA CODERDOJO ================
INSTITUTION : IBM East Africa
PROGRAMME   : CoderDojo Computational Training
2016        : Basic Level Web Coding (HTML/CSS & Logic)
2017        : Intermediate Level Web Coding (Algorithms & Scripting)
IMPACT      : First computational spark that led to EE and Quant`,
    exampredict: `================ EXAMPREDICT AI (FIRST ML PROJECT) ================
PURPOSE     : Built to help girlfriend prepare for academic examinations
METHODOLOGY : NLP keyword extraction & question frequency recurrence
DATASET     : Historical past examination papers & syllabus coverage
OUTCOME     : Forecasted high-probability exam question distributions`,
    skills: `================ SKILLS & TECHNICAL PROFICIENCIES ================
QUANT FINANCE: Bayesian Evidence Shrinkage, Differentiable TINs, Monte Carlo
ENGINEERING  : Discrete Signals, Filter Design, Circuit Dynamics, Fourier Analysis
MACHINE LRN  : PyTorch, Scikit-Learn, Feature Pipelines, Time-Series CV, NLP
AUTONOMOUS   : FastAPI, WGS84 GeoJSON Geofencing, WebSockets Telemetry, SQLite
CORE STACK   : Python, JavaScript/TypeScript, SQL, Linux CLI, Git CI/CD`,
    projects: `1. ARXIV GOLD QUANT ALPHA - 50 arXiv models, Bayesian TINs, Net Sharpe 2.001
2. PATROL DRONE LITE     - Autonomous flight planning, geofencing & live telemetry
3. EXAMPREDICT AI        - Machine learning exam question recurrence model`,
    contact: `Directing communication pipeline...
Status: Open for quant research, electrical engineering & machine learning roles.
Use the contact form below to connect.`,
  };
  const out = document.getElementById("terminal-text-output"),
    screen = document.getElementById("terminal-screen"),
    input = document.getElementById("terminal-input");
  const print = (text) => {
    if (!out) return;
    out.textContent = text;
    screen.scrollTop = screen.scrollHeight;
  };
  window.switchTab = (tab) => {
    document
      .querySelectorAll(".terminal-tab")
      .forEach((e) => e.classList.remove("active"));
    document.getElementById(`tab-${tab}`)?.classList.add("active");
    print(commands[tab] || commands.help);
  };
  switchTab("about");
  input?.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    const v = input.value.trim().toLowerCase();
    input.value = "";
    if (!v) return;
    const response =
      v === "clear"
        ? "bash terminal log cleared."
        : commands[v] ||
          `Command not recognized: '${v}'. Type 'help' to review directory.`;
    out.textContent += `\n\njajasofly:~$ ${v}\n${response}`;
    screen.scrollTop = screen.scrollHeight;
  });
  const status = document.getElementById("form-status"),
    form = document.getElementById("contact-form"),
    submit = document.getElementById("form-submit-btn"),
    subject = document.getElementById("subject"),
    otherWrap = document.getElementById("subject-other-wrapper"),
    other = document.getElementById("subject-other"),
    key = "82721d04-a172-4ed6-b5dd-928285bec7b8";
  subject?.addEventListener("change", () => {
    const show = subject.value === "custom_request";
    otherWrap?.classList.toggle("hidden", !show);
    if (other) {
      other.required = show;
      if (!show) other.value = "";
    }
  });
  window.handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!status || !form || !submit) return;
    status.className = "hidden";
    const hCaptchaToken = form.querySelector(
      'textarea[name="h-captcha-response"]',
    )?.value;
    if (!hCaptchaToken) {
      status.className = "bg-red-950/40";
      status.textContent = "Please complete the hCaptcha verification.";
      return;
    }
    submit.disabled = true;
    submit.querySelector("span").textContent = "Sending...";
    try {
      const message = document.getElementById("message")?.value || "";
      const selectedSubject =
        subject?.value === "custom_request"
          ? other?.value.trim() || "Custom request"
          : subject?.selectedOptions[0]?.textContent.trim() || "Website inquiry";
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: key,
          name: document.getElementById("name")?.value || "",
          email: document.getElementById("email")?.value || "",
          subject: selectedSubject,
          message,
          replyto: document.getElementById("email")?.value || "",
          "h-captcha-response": hCaptchaToken,
        }),
      });
      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
      } catch {
        result = { message: responseText };
      }
      if (!response.ok || result.success !== true) {
        throw new Error(result.message || `Request failed (${response.status})`);
      }
      status.className = "bg-emerald-950/40";
      status.textContent = "Message sent. I will be in touch soon.";
      form.reset();
    } catch (error) {
      status.className = "bg-red-950/40";
      status.textContent =
        error instanceof TypeError
          ? "Unable to reach the contact service. Check your connection and try again."
          : error.message || "The contact service rejected the request. Please try again.";
    } finally {
      submit.disabled = false;
      submit.querySelector("span").textContent = "Send message";
    }
  };
})();
