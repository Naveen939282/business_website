// main.js
// This file contains beginner-friendly JavaScript for small UI interactions.

(function () {
  "use strict";

  // Update the footer copyright year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Mobile navigation toggle
  const toggleBtn = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-navigation");

  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu after clicking a nav link (mobile)
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 640px)").matches) {
          nav.classList.remove("open");
          toggleBtn.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // Contact form handling (simple validation)
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const statusEl = document.getElementById("form-status");

  function showStatus(message, ok) {
    if (!statusEl) return;
    statusEl.classList.add("show");
    statusEl.textContent = message;
    statusEl.style.borderColor = ok ? "rgba(34, 197, 94, 0.6)" : "rgba(255, 95, 87, 0.6)";
  }

  function isValidEmail(email) {
    // Simple email check for beginners (not perfect, but good enough for starter projects)
    return email.includes("@") && email.includes(".");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput?.value?.trim() || "";
    const email = emailInput?.value?.trim() || "";
    const message = messageInput?.value?.trim() || "";

    if (!name) {
      showStatus("Please enter your name.", false);
      nameInput?.focus();
      return;
    }

    if (!email || !isValidEmail(email)) {
      showStatus("Please enter a valid email address.", false);
      emailInput?.focus();
      return;
    }

    if (!message) {
      showStatus("Please write a message.", false);
      messageInput?.focus();
      return;
    }

    // For a beginner project, we’re not sending data to a server yet.
    // Later, you can connect this to FastAPI.
    showStatus("✅ Message ready! (Demo) In the next step, you can connect this to the backend.", true);
    form.reset();
  });
})();

