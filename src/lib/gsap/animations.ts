const canAnimate = () =>
  typeof window !== 'undefined' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const heroReveal = async (selector = '[data-hero]') => {
  if (!canAnimate()) return;
  const { gsap } = await import('gsap');
  gsap.fromTo(selector, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' });
};

export const revealOnScroll = async (selector = '[data-reveal]') => {
  if (!canAnimate()) return;
  const { gsap } = await import('gsap');
  const els = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      gsap.to(entry.target, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.2 });
  els.forEach((el) => {
    gsap.set(el, { opacity: 0, y: 14 });
    observer.observe(el);
  });
};

export const countUp = async (selector = '[data-count]') => {
  if (!canAnimate()) return;
  const { gsap } = await import('gsap');
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    const target = Number(el.dataset.target || 0);
    const obj = { val: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        gsap.to(obj, {
          val: target,
          duration: 1,
         onUpdate: () => {
  el.textContent = Math.round(obj.val).toLocaleString();
});
        observer.disconnect();
      });
    }, { threshold: 0.4 });
    observer.observe(el);
  });
};
