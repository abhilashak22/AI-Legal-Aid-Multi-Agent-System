/* ── WatsonX Orchestrate Integration ── */
window.wxOConfiguration = {
  orchestrationID: "fcd1b3321c9a4bb383e100a4111bb877_6c6c1d58-5430-4ae8-b313-b4cf52686d4d",
  hostURL: "https://au-syd.watson-orchestrate.cloud.ibm.com",
  rootElementID: "root",
  deploymentPlatform: "ibmcloud",
  crn: "crn:v1:bluemix:public:watsonx-orchestrate:au-syd:a/fcd1b3321c9a4bb383e100a4111bb877:6c6c1d58-5430-4ae8-b313-b4cf52686d4d::",
  chatOptions: {
    agentId: "9e0b19f2-0874-4dad-8d55-2c662ec482b7"
  }
};

setTimeout(function () {
  const script = document.createElement('script');
  script.src = `${window.wxOConfiguration.hostURL}/wxochat/wxoLoader.js?embed=true`;
  script.addEventListener('load', function () {
    wxoLoader.init();
  });
  document.head.appendChild(script);
}, 0);

/* ── Open embedded WatsonX chat widget ── */
function openChat() {
  // Try the official wxoLoader API first
  if (window.wxoLoader && typeof window.wxoLoader.open === 'function') {
    window.wxoLoader.open();
    return;
  }
  // Fallback: click the toggle button rendered inside #root by the widget
  const root = document.getElementById('root');
  if (root) {
    const btn = root.querySelector('button');
    if (btn) { btn.click(); return; }
  }
  // Last resort: scroll to the widget so user can see it
  document.getElementById('root').scrollIntoView({ behavior: 'smooth' });
}

/* ── Mobile menu toggle ── */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* ── Animated counter ── */
function animateCounters() {
  const counters = document.querySelectorAll('.countup');
  counters.forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString();
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

/* ── Trigger counter when hero is visible ── */
const heroObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animateCounters();
    heroObserver.disconnect();
  }
}, { threshold: 0.3 });
heroObserver.observe(document.getElementById('hero'));

/* ── Scroll-reveal for cards ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .area-card, .tcard, .step').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  revealObserver.observe(el);
});

/* ── Nav background on scroll ── */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(10,22,40,0.98)';
  } else {
    nav.style.background = 'rgba(10,22,40,0.92)';
  }
});
