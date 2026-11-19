// Interlinkz Variant 5, D5 sequence: the IZ mark beside the headline assembles.
// Desktop only. Content is fully visible without JS and on mobile (settled mark).
(function () {
  if (!window.gsap) return;
  if (window.matchMedia("(max-width: 860px)").matches) return;
  var mark = document.querySelector(".seq-d5");
  if (!mark) return;
  gsap.registerPlugin(ScrollTrigger);
  var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.from(".seq-d5 .d5-i", { y: -24, opacity: 0, duration: 0.55, stagger: 0.08 })
    .from(".seq-d5 .d5-zt-l", { x: -30, opacity: 0, duration: 0.5 }, "-=0.25")
    .from(".seq-d5 .d5-zt-r", { x: 30, opacity: 0, duration: 0.5 }, "<")
    .from(".seq-d5 .d5-zd", { x: -18, y: 12, opacity: 0, duration: 0.55 }, "-=0.2")
    .from(".seq-d5 .d5-zb-l", { x: -30, opacity: 0, duration: 0.5 }, "-=0.25")
    .from(".seq-d5 .d5-zb-r", { x: 30, opacity: 0, duration: 0.5 }, "<");
})();
