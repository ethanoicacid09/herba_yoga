const yogaTips = [
  "Start your day with 5 minutes of deep breathing.",
  "Try the Mountain Pose to improve posture.",
  "Practice mindfulness during your yoga routine.",
  "Drink warm herbal tea before yoga for better flexibility.",
];

const herbTips = [
  "Ashwagandha reduces stress and boosts stamina.",
  "Ginger helps with digestion and inflammation.",
  "Neem purifies the blood and improves skin health.",
  "Turmeric fights inflammation and supports immunity.",
];

document.getElementById("yogaTip").textContent =
  yogaTips[Math.floor(Math.random() * yogaTips.length)];

document.getElementById("herbTip").textContent =
  herbTips[Math.floor(Math.random() * herbTips.length)];
const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});


