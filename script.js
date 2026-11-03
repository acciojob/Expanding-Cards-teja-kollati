const boxes = document.querySelectorAll(".panel");

  boxes.forEach((box) => {
	box.addEventListener("mouseover", () => {
	  boxes.forEach((b) => b.classList.remove("active"));
	  box.classList.add("active");
	});

	box.addEventListener("mouseleave", () => {
	  box.classList.remove("active");
	  boxes[0].classList.add("active");
	});
});