const targetDate = new Date("2026-05-28T15:00:00+03:00").getTime();

function pad(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  const now = Date.now();
  const diff = Math.max(targetDate - now, 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = pad(days);
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");
const icon = document.getElementById("musicIcon");
const text = document.getElementById("musicText");
const openInvitation = document.getElementById("openInvitation");

function setMusicState(isPlaying) {
  icon.textContent = isPlaying ? "❚❚" : "♪";
  text.textContent = isPlaying ? "Pause music" : "Play music";
  toggle.setAttribute("aria-label", isPlaying ? "Pause background music" : "Play background music");
}

async function playMusic() {
  try {
    await music.play();
    setMusicState(true);
  } catch (error) {
    setMusicState(false);
  }
}

toggle.addEventListener("click", async () => {
  if (music.paused) {
    await playMusic();
  } else {
    music.pause();
    setMusicState(false);
  }
});

openInvitation.addEventListener("click", () => {
  playMusic();
});
