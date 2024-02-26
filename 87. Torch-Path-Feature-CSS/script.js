let gurucodes = document.documentElement;

gurucodes.addEventListener("mousemove", (e) => {
  gurucodes.style.setProperty("--1", e.clientX + "px");
  gurucodes.style.setProperty("--2", e.clientY + "px");
});
