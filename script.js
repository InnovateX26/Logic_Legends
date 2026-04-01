// ==========================
// SECTION SWITCH
// ==========================
function showSection(id) {
  let sections = document.querySelectorAll(".section");
  sections.forEach(s => s.classList.remove("active"));

  let active = document.getElementById(id);
  if (active) active.classList.add("active");
}

// ==========================
// LOGOUT
// ==========================
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

// ==========================
// 🤖 AI HEALTHCARE CHATBOT
// ==========================
function sendMessage() {

  let input = document.getElementById("chatInput");
  let chat = document.getElementById("chatMessages");

  if (!input || !chat) {
    alert("Chatbot not connected properly!");
    return;
  }

  let msg = input.value.trim();
  if (!msg) return;

  // ==========================
  // USER MESSAGE
  // ==========================
  let userMsg = document.createElement("div");
  userMsg.innerText = msg;
  userMsg.style.textAlign = "right";
  userMsg.style.margin = "8px";
  userMsg.style.background = "#3b82f6";
  userMsg.style.padding = "8px 12px";
  userMsg.style.borderRadius = "10px";
  userMsg.style.color = "white";

  chat.appendChild(userMsg);

  input.value = "";

  // ==========================
  // BOT THINKING
  // ==========================
  let typing = document.createElement("div");
  typing.innerText = "🤖 Thinking...";
  typing.style.margin = "8px";
  typing.style.color = "gray";
  chat.appendChild(typing);

  // ==========================
  // RESPONSE LOGIC
  // ==========================
  setTimeout(() => {

    typing.remove();

    let text = msg.toLowerCase();
    let reply = "";

    // GREETING
    if (text.includes("hi") || text.includes("hello")) {
      reply = "Hello 👋 Tell me your symptoms, I’ll try to help you.";
    }

    // FEVER + COUGH
    else if (text.includes("fever") && text.includes("cough")) {
      reply = "It may be flu or viral infection. Take rest, drink fluids, and consult a doctor if needed.";
    }

    // FEVER
    else if (text.includes("fever")) {
      reply = "You may have a fever. Stay hydrated and take proper rest.";
    }

    // HEADACHE
    else if (text.includes("headache")) {
      reply = "This may be due to stress or migraine. Try resting in a calm place.";
    }

    // VOMITING / DIARRHEA
    else if (text.includes("vomiting") || text.includes("diarrhea")) {
      reply = "This could be food poisoning. Drink plenty of fluids and avoid outside food.";
    }

    // BREATHING ISSUE
    else if (text.includes("breathing")) {
      reply = "Breathing issues can be serious. Please consult a doctor immediately.";
    }

    // CHEST PAIN
    else if (text.includes("chest pain")) {
      reply = "🚨 Chest pain is serious. Please call emergency services immediately.";
    }

    // COLD
    else if (text.includes("cold")) {
      reply = "Looks like a common cold. Keep yourself warm and drink warm fluids.";
    }

    // BODY PAIN
    else if (text.includes("body pain")) {
      reply = "Body pain may be due to weakness or infection. Take rest.";
    }

    // FATIGUE
    else if (text.includes("tired") || text.includes("fatigue")) {
      reply = "You may be exhausted. Get proper sleep and rest.";
    }

    // STOMACH ISSUE
    else if (text.includes("stomach")) {
      reply = "It could be a gastric issue. Avoid spicy food and stay hydrated.";
    }

    // DEFAULT
    else {
      reply = "I understand. Can you describe your symptoms more clearly?";
    }

    // ==========================
    // BOT MESSAGE
    // ==========================
    let botMsg = document.createElement("div");
    botMsg.innerText = reply;
    botMsg.style.margin = "8px";
    botMsg.style.background = "#1e293b";
    botMsg.style.padding = "10px 12px";
    botMsg.style.borderRadius = "10px";
    botMsg.style.color = "lightblue";

    chat.appendChild(botMsg);

    chat.scrollTop = chat.scrollHeight;

  }, 600);
}

// ==========================
// ENTER KEY SUPPORT
// ==========================
document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById("chatInput");

  if (input) {
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  }
});