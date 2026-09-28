document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("authForm");
  const emailInput = document.getElementById("emailUser");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const userEmail = emailInput.value.trim();

      if (userEmail !== "") {
        alert(`¡Bienvenido/a! Has ingresado con el correo: ${userEmail}`);
        emailInput.value = "";
      }
    });
  }

  const addButtons = document.querySelectorAll(".add-btn");
  const countBadge = document.querySelector(".counter-val");

  if (countBadge && addButtons.length > 0) {
    let selectedCount = 0;

    addButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        selectedCount++;
        countBadge.textContent = selectedCount;
      });
    });
  }

  const mediaFrame = document.getElementById("mediaFrame");
  const videoPlayer = document.getElementById("featuredVideo");

  if (mediaFrame && videoPlayer) {
    mediaFrame.addEventListener("mouseenter", () => {
      mediaFrame.classList.add("is-hovered");
      videoPlayer.pause();
    });

    mediaFrame.addEventListener("mouseleave", () => {
      mediaFrame.classList.remove("is-hovered");
      videoPlayer.play();
    });
  }
});