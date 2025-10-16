// Referencias
const petBubble = document.getElementById("pet-bubble");
const chatWindow = document.getElementById("chat-window");
const changePetBtn = document.getElementById("change-pet");
const petSelector = document.getElementById("pet-selector");
const petOptions = document.querySelectorAll(".pet-option");
const petName = document.getElementById("chat-pet-name");
const chatMessages = document.getElementById("chat-messages");
const chatText = document.getElementById("chat-text");
const sendBtn = document.getElementById("send-btn");

let selectedPet = localStorage.getItem("selectedPet") || "coneja";

// 🐾 Diccionario de mascotas
const pets = {
  coneja: { icon: "🐰", name: "Conejita" },
  gato: { icon: "🐱", name: "Gatita" },
  nube: { icon: "☁️", name: "Nubecita" },
  mariposa: { icon: "🦋", name: "Mariposa" },
  flor: { icon: "🌸", name: "Flor" },
};

// 🧁 Inicializar
function setPet(petKey) {
  const pet = pets[petKey];
  petBubble.textContent = pet.icon;
  petName.textContent = `${pet.icon} ${pet.name}`;
  localStorage.setItem("selectedPet", petKey);
}
setPet(selectedPet);

// 🐰 Mostrar / ocultar chat
petBubble.addEventListener("click", () => {
  chatWindow.classList.toggle("hidden");
  petSelector.classList.add("hidden");
});

// 🌈 Cambiar mascota
changePetBtn.addEventListener("click", () => {
  petSelector.classList.toggle("hidden");
});

// 🐾 Elegir nueva mascota
petOptions.forEach((opt) => {
  opt.addEventListener("click", () => {
    const newPet = opt.getAttribute("data-pet");
    setPet(newPet);
    petSelector.classList.add("hidden");
  });
});

// 💬 Enviar mensaje
sendBtn.addEventListener("click", sendMessage);
chatText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = chatText.value.trim();
  if (text === "") return;

  addMessage(text, "user");
  chatText.value = "";

  // Simular respuesta de la mascota 🩷
  setTimeout(() => {
    const petReplies = [
      "¡Qué lindo lo que dices! 💕",
      "Aww, me encanta 🐰",
      "Eres genial, sigue así 🌈",
      "¡Eso suena divertido! 😍",
      "Cuenta más, quiero saber 🩷",
    ];
    const random = petReplies[Math.floor(Math.random() * petReplies.length)];
    addMessage(random, "pet");
  }, 1000);
}

// 📜 Agregar mensaje al chat
function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.classList.add("message", type);
  msg.textContent = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
