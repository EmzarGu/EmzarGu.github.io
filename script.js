const ticker = document.querySelector(".ticker");

if (ticker) {
  ticker.innerHTML += ticker.innerHTML;
}

const diagnoses = {
  alignment:
    "Classic nodding allergy. Everyone agreed so hard that nobody noticed the decision escaped through the air vent.",
  portfolio:
    "The buffet is open. Every project has a tiny plate, nothing has enough food, and someone is still asking for dessert.",
  ai: "Tempting. But first check whether the machine needs intelligence, or just fewer buttons and one spreadsheet that tells the truth.",
};

const diagnosisStamps = {
  alignment: "NOD?",
  portfolio: "∞",
  ai: "AI?",
};

const diagnosticButtons = document.querySelectorAll("[data-diagnosis]");
const diagnosticOutput = document.querySelector(".diagnostic-output .result-text");
const diagnosticStamp = document.querySelector(".result-stamp span");

diagnosticButtons.forEach((button) => {
  button.addEventListener("click", () => {
    diagnosticButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    diagnosticOutput.textContent = diagnoses[button.dataset.diagnosis];
    diagnosticStamp.textContent = diagnosisStamps[button.dataset.diagnosis];
  });
});

document.querySelectorAll(".receipt-grid article, .diagnostic-panel").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 3;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -3;
    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});
