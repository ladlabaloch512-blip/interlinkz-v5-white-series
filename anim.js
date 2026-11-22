// Interlinkz Variant 5, D5 sequences.
// Desktop only. Content is fully visible without JS and on mobile.
// ScrollTrigger from tweens set immediateRender: false, so nothing is
// pre-hidden: elements sit fully visible until their animation moment.
(function () {
  if (!window.gsap) return;
  if (window.matchMedia("(max-width: 860px)").matches) return;
  gsap.registerPlugin(ScrollTrigger);

  /* D5 frame sequence: the IZ mark beside the headline assembles */
  var mark = document.querySelector(".seq-d5");
  if (mark) {
    var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".seq-d5 .d5-i", { y: -24, opacity: 0, duration: 0.55, stagger: 0.08 })
      .from(".seq-d5 .d5-zt-l", { x: -30, opacity: 0, duration: 0.5 }, "-=0.25")
      .from(".seq-d5 .d5-zt-r", { x: 30, opacity: 0, duration: 0.5 }, "<")
      .from(".seq-d5 .d5-zd", { x: -18, y: 12, opacity: 0, duration: 0.55 }, "-=0.2")
      .from(".seq-d5 .d5-zb-l", { x: -30, opacity: 0, duration: 0.5 }, "-=0.25")
      .from(".seq-d5 .d5-zb-r", { x: 30, opacity: 0, duration: 0.5 }, "<");
  }

  /* D5 connector: the spokes draw out from the centre and the Z hub
     assembles piece by piece, linking the four service cards */
  document.querySelectorAll(".ws-grid-wrap").forEach(function (wrap) {
    var h = wrap.querySelector(".ws-spoke-h");
    var v = wrap.querySelector(".ws-spoke-v");
    var zp = wrap.querySelectorAll(".ws-zp");
    if (!h || !v || !zp.length) return;
    var tl2 = gsap.timeline({ scrollTrigger: { trigger: wrap, start: "top 82%", once: true } });
    tl2.from(h, { scaleX: 0, transformOrigin: "center", duration: 0.5, ease: "power2.out", immediateRender: false }, 0)
       .from(v, { scaleY: 0, transformOrigin: "center", duration: 0.5, ease: "power2.out", immediateRender: false }, 0.15)
       .from(zp, { scale: 0, opacity: 0, transformOrigin: "center", duration: 0.35, stagger: 0.13, ease: "back.out(2.2)", immediateRender: false }, 0.35);
  });

  /* The Link Chain row: the lines draw and the steps light in sequence */
  document.querySelectorAll(".chain-row").forEach(function (row) {
    var links = row.querySelectorAll(".chain-link");
    var steps = row.querySelectorAll(".ws-step, .chain-step");
    if (!links.length && !steps.length) return;
    var tl3 = gsap.timeline({ scrollTrigger: { trigger: row, start: "top 88%", once: true } });
    if (links.length) tl3.from(links, { scaleX: 0, transformOrigin: "left center", duration: 0.45, stagger: 0.16, ease: "power2.out", immediateRender: false }, 0);
    if (steps.length) tl3.from(steps, { opacity: 0.25, duration: 0.3, stagger: 0.16, immediateRender: false }, 0);
  });
})();
