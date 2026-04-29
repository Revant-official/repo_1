document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const reserveForm = document.querySelector(".reserve-form");
  const formSuccess = document.querySelector(".form-success");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navToggle.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        navToggle.click();
      }
    });
  }

  if (reserveForm) {
    reserveForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (formSuccess) {
        formSuccess.textContent =
          "Thanks! Your request has been received, and a host will confirm shortly.";
      }
      reserveForm.reset();
    });
  }
});
