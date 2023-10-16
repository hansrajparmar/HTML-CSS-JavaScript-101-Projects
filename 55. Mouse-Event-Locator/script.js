const box = document.querySelector(".main");

window.addEventListener("mousemove", (event) => {
  box.innerHTML = `
        <div class="cursor-event">
        ${event.clientX}
        <h4>Mouse X Position(px)</h4>
      </div>
      <div class="cursor-event">
      ${event.clientY}
      <h4>Mouse Y Position(px)</h4>
      </div>
  `;
});