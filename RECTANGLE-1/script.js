var rect = document.querySelector("#center");

// console.log(rect.getBoundingClientRect());
rect.addEventListener("mousemove", function (details) {
  var rectangleLocation = rect.getBoundingClientRect();
  var insideRectangleValue = details.clientX - rectangleLocation.left;

  // if (insideRectangleValue < rectangleLocation.width / 2) {
  //   console.log("left");
  // } else {
  //   console.log("right");
  // }

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

// console.log(gsap.utils.mapRange(0, 250, 255, 0, 250));

rect.addEventListener("mouseleave", function () {
  gsap.to(rect, {
    backgroundColor: "white",
  });
});
// rect.style.backgroundColor = "white";
