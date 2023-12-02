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

var rectangle = document.querySelector("#rect");
rect.addEventListener("mousemove", function (details) {
  var rectangleLocation = rect.getBoundingClientRect();
  var insideRectangleValue = details.clientX - rectangleLocation.left;

  if (insideRectangleValue < rectangleLocation.width / 2) {
    var redColor = gsap.utils.mapRange(
      0,
      rectangleLocation.width / 2,
      255,
      0,
      insideRectangleValue
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor},0,0)`,
      ease: Power4,
    });
  } else {
    var blueColor = gsap.utils.mapRange(
      rectangleLocation.width / 2,
      rectangleLocation.width,
      0,
      255,
      insideRectangleValue
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${blueColor})`,
      ease: Power4,
    });
  }
});

rect.addEventListener("mouseleave", function () {
  gsap.to(rect, {
    backgroundColor: "green",
  });
});
