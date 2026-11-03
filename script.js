//your JS code here. If required.
const boxes = document.querySelectorAll(".panel");

  boxes.forEach((box) => {
	box.addEventListener("mouseover", () => {
	  boxes.forEach((b) => {
		b.classList.remove("active");
		b.childNodes[1].textContent = ``;
	  });
	  box.classList.add("active");
	  console.log(box.childNodes);
	  box.childNodes[1].textContent = box.dataset.text;
	});
	box.addEventListener("mouseout", () => {
	  box.classList.remove("active");
	  box.childNodes[1].textContent = ``;

	  let isContains = false;
	  boxes.forEach((box) => {
		if (box.classList.contains("active")) {
		  isContains = true;
		}
	  });
	  if (!isContains) {
		boxes[0].classList.add("active");
		boxes[0].childNodes[1].textContent = boxes[0].dataset.text;
	  }
	});
});