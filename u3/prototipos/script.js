const fileInput = document.getElementById("fileInput");
const playlist = document.getElementById("playlist");
const audio = document.getElementById("audio");
const vinyl = document.getElementById("vinyl");
const cover = document.getElementById("cover");
const trackTitle = document.getElementById("trackTitle");
const artistName = document.getElementById("artistName");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const progressCircle = document.querySelector(".progress-ring circle");

let songs = [];
let currentIndex = 0;
const radius = 160;
const circumference = 2 * Math.PI * radius;
progressCircle.style.strokeDasharray = circumference;

function updateProgress() {
  const progress = audio.currentTime / audio.duration;
  progressCircle.style.strokeDashoffset =
    circumference - progress * circumference;
  if (audio.ended) nextSong();
}

function loadSong(index) {
  const song = songs[index];
  if (!song) return;
  const url = URL.createObjectURL(song);
  audio.src = url;
  trackTitle.textContent = song.name.replace(/\.[^/.]+$/, "");
  artistName.textContent = "Tu música local 💕";
  cover.src = ""; // No metadatos, solo genérico
  vinyl.classList.add("spinning");
  audio.play();
  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
  highlightActive(index);
}

function highlightActive(index) {
  document.querySelectorAll(".track-item").forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });
}

playBtn.onclick = () => {
  audio.play();
  vinyl.classList.add("spinning");
  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
};
pauseBtn.onclick = () => {
  audio.pause();
  vinyl.classList.remove("spinning");
  playBtn.classList.remove("hidden");
  pauseBtn.classList.add("hidden");
};
document.getElementById("next").onclick = () => nextSong();
document.getElementById("prev").onclick = () => prevSong();

audio.addEventListener("timeupdate", updateProgress);

fileInput.addEventListener("change", (e) => {
  songs = Array.from(e.target.files);
  playlist.innerHTML = "";
  songs.forEach((song, i) => {
    const item = document.createElement("div");
    item.classList.add("track-item");
    item.innerHTML = `
      <div class="thumb" style="background-image:url('https://placekitten.com/60/60')"></div>
      <div class="track-meta">
        <div class="track-name">${song.name.replace(/\.[^/.]+$/, "")}</div>
        <div class="track-sub">Archivo local</div>
      </div>
    `;
    item.onclick = () => {
      currentIndex = i;
      loadSong(i);
    };
    playlist.appendChild(item);
  });
});

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
}
function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
}
