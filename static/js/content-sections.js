(() => {
  const contact = document.getElementById("contact");
  if (!contact || document.getElementById("blog")) return;

  const blog = document.createElement("section");
  blog.id = "blog";
  blog.className = "content-section content-section--cream";
  blog.innerHTML = `
    <div class="container-xxl px-4 px-xl-5">
      <div class="content-section__heading">
        <div>
          <p class="eyebrow"><span></span> Notes from the studio</p>
          <h2 class="section-title">Ideas worth <em>sharing.</em></h2>
        </div>
      </div>
      <div class="content-slider">
        <div class="content-track" data-slider="blog">
          <a class="content-card" href="blog.html?post=designing-for-the-pause">
            <img class="content-card__image" src="static/assets/blog-designing.jpg" alt="Code editor on a laptop" loading="lazy">
            <div class="content-card__body">
              <span class="content-card__meta">Craft / 01</span>
              <h3>Designing for the pause</h3>
              <p>Why thoughtful interfaces give people room to understand before they ask for action.</p>
            </div>
          </a>
          <a class="content-card" href="blog.html?post=ai-generated-code">
            <img class="content-card__image" src="static/assets/blog-ai-code.jpg" alt="AI generated code" loading="lazy">
            <div class="content-card__body">
              <span class="content-card__meta">AI Code / 02</span>
              <h3>Faster development or faster technical debt</h3>
              <p>Faster development or faster technical debt? A look at the trade-offs between speed and maintainability in modern development practices using Artificial Intelligence.</p>
            </div>
          </a>
          <a class="content-card" href="blog.html?post=the-hidden-security-risks-of-vibe-coding">
            <img class="content-card__image" src="static/assets/blog-security.jpg" alt="Person working at a desk" loading="lazy">
            <div class="content-card__body">
              <span class="content-card__meta">Systems security / 03</span>
              <h3>Vibe coded systems hidden security risks</h3>
              <p>Exploring the potential security vulnerabilities in modern vibe coded software systems.</p>
            </div>
          </a>
          <a class="content-card" href="blog.html?post=ai-coding-agents">
            <img class="content-card__image" src="static/assets/blog-agents.jpg" alt="Developer working with code" loading="lazy">
            <div class="content-card__body">
              <span class="content-card__meta">AI Agents / 04</span>
              <h3>Making complexity legible with AI</h3>
              <p>Are software developers becoming managers? How artificial intelligence can help us understand and manage complex systems.</p>
            </div>
          </a>
          <a class="content-card" href="blog.html?post=tool-poisoning-attacks">
            <img class="content-card__image" src="static/assets/blog-tooling.jpg" alt="Creative workspace with sketches" loading="lazy">
            <div class="content-card__body">
              <span class="content-card__meta">Attacks / 05</span>
              <h3>Tool poisoning attacks</h3>
              <p>Exploring the potential security vulnerabilities in modern development tools and workflows.</p>
            </div>
          </a>
        </div>
        <div class="slider-controls">
          <button class="slider-button" data-slider-action="prev" data-slider-target="blog" aria-label="Previous blog post">
            <i data-lucide="arrow-left"></i>
          </button>
          <button class="slider-button" data-slider-action="next" data-slider-target="blog" aria-label="Next blog post">
            <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    </div>`;

  const faqs = document.createElement("section");
  faqs.id = "faqs";
  faqs.className = "content-section content-section--cream";
  faqs.innerHTML = `<div class="container-xxl px-4 px-xl-5"><div class="content-section__heading"><div><p class="eyebrow"><span></span> Before we begin</p><h2 class="section-title">A few clear <em>answers.</em></h2></div></div><div class="faq-list"><div class="faq-item"><button class="faq-question" type="button" aria-expanded="false">What kind of work do you take on?<i data-lucide="chevron-down"></i></button><div class="faq-answer"><div><p>Product interfaces, full-stack applications, interactive websites, real-time dashboards, and the systems that support them.</p></div></div></div><div class="faq-item"><button class="faq-question" type="button" aria-expanded="false">How do you usually start a project?<i data-lucide="chevron-down"></i></button><div class="faq-answer"><div><p>We begin with a short conversation about the problem, the people involved, and the outcome that would make the work worthwhile. From there I shape a focused first step.</p></div></div></div><div class="faq-item"><button class="faq-question" type="button" aria-expanded="false">Can you work with an existing team or codebase?<i data-lucide="chevron-down"></i></button><div class="faq-answer"><div><p>Yes. I am comfortable joining an existing product team, extending an established system, or taking a focused feature from idea through release.</p></div></div></div><div class="faq-item"><button class="faq-question" type="button" aria-expanded="false">Where are you based?<i data-lucide="chevron-down"></i></button><div class="faq-answer"><div><p>I am based in Nairobi and work remotely across time zones.</p></div></div></div></div></div>`;

  contact.before(blog, faqs);

  const sliderTimers = new Map();
  const sliderPositions = new Map();
  const moveSlider = (track, direction) => {
    const card = track?.querySelector(".content-card, .testimonial-card");
    if (!card) return;

    const secondCard = card.nextElementSibling;
    const step = secondCard
      ? secondCard.offsetLeft - card.offsetLeft
      : card.getBoundingClientRect().width;
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    const maxIndex = Math.max(0, Math.round(maxScroll / step));
    const currentIndex = sliderPositions.has(track)
      ? sliderPositions.get(track)
      : Math.round(track.scrollLeft / step);
    const nextIndex =
      (currentIndex + direction + maxIndex + 1) % (maxIndex + 1);
    const nextPosition = Math.min(nextIndex * step, maxScroll);

    sliderPositions.set(track, nextIndex);
    track.scrollTo({ left: nextPosition, behavior: "smooth" });
  };
  const restartSlider = (track) => {
    const name = track.dataset.slider;
    window.clearInterval(sliderTimers.get(name));
    sliderTimers.set(
      name,
      window.setInterval(() => moveSlider(track, 1), 6000),
    );
  };
  document.querySelectorAll("[data-slider-action]").forEach((button) =>
    button.addEventListener("click", () => {
      const track = document.querySelector(
        `[data-slider="${button.dataset.sliderTarget}"]`,
      );
      moveSlider(track, button.dataset.sliderAction === "next" ? 1 : -1);
      restartSlider(track);
    }),
  );
  document.querySelectorAll("[data-slider]").forEach((track) => {
    const firstCard = track.querySelector(".content-card, .testimonial-card");
    const secondCard = firstCard?.nextElementSibling;
    const step = secondCard
      ? secondCard.offsetLeft - firstCard.offsetLeft
      : firstCard?.getBoundingClientRect().width || 1;
    sliderPositions.set(track, Math.round(track.scrollLeft / step));
    restartSlider(track);
    track.addEventListener("mouseenter", () =>
      window.clearInterval(sliderTimers.get(track.dataset.slider)),
    );
    track.addEventListener("mouseleave", () => restartSlider(track));
    track.addEventListener("focusin", () =>
      window.clearInterval(sliderTimers.get(track.dataset.slider)),
    );
    track.addEventListener("focusout", () => restartSlider(track));
  });

  document.querySelectorAll(".faq-question").forEach((question) =>
    question.addEventListener("click", () => {
      const item = question.closest(".faq-item");
      const wasOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item.is-open").forEach((openItem) => {
        openItem.classList.remove("is-open");
        openItem
          .querySelector(".faq-question")
          .setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("is-open");
        question.setAttribute("aria-expanded", "true");
      }
    }),
  );

  if (window.lucide) lucide.createIcons();
})();
