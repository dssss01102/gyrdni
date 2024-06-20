document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.getElementById("customCursor");

  document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });

  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.classList.add("link-hover");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("link-hover");
    });
  });

  document.addEventListener("mousedown", () => {
    // Check if text is being selected
    document.addEventListener("selectionchange", handleSelectionChange);
  });

  document.addEventListener("mouseup", () => {
    // Remove the selectionchange listener and reset the cursor if no text is selected
    document.removeEventListener("selectionchange", handleSelectionChange);
    if (document.getSelection().toString() === "") {
      cursor.classList.remove("text-select");
    }
  });

  function handleSelectionChange() {
    if (document.getSelection().toString() !== "") {
      cursor.classList.add("text-select");
    } else {
      cursor.classList.remove("text-select");
    }
  }
});
