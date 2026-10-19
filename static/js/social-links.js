(() => {
  const contactDetails = document.querySelector('.contact-details');
  if (!contactDetails || contactDetails.querySelector('.social-links')) return;

  const links = [
    ['https://github.com/jajasofly', 'GitHub', 'fa-github'],
    ['https://wa.me/+254757049896', 'WhatsApp', 'fa-whatsapp'],
    ['https://www.instagram.com/j.0ch/', 'Instagram', 'fa-instagram']
  ];

  const socialLinks = document.createElement('div');
  socialLinks.className = 'social-links';
  socialLinks.setAttribute('aria-label', 'Social links');

  links.forEach(([url, label, icon]) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', label);
    link.title = label;
    link.innerHTML = `<i class="fa-brands ${icon}" aria-hidden="true"></i>`;
    socialLinks.appendChild(link);
  });

  contactDetails.appendChild(socialLinks);
})();
