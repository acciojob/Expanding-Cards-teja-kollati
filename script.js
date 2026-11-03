const boxes = document.querySelectorAll(".panel");

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        boxes.forEach((b) => {
            b.classList.remove("active");
        });

        box.classList.add("active");

    });
});