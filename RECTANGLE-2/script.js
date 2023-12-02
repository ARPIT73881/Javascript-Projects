window.addEventListener("mousemove", function (details) {
  var xvalue = gsap.utils.mapRange(
    0,
    window.innerWidth,
    200,
    window.innerWidth - 200,
    details.clientX
  );
  gsap.to("#rect", {
    left: xvalue,
    ease: Power3,
  });
});
