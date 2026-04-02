// ==========================
// SECTION SWITCH
// ==========================
function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ==========================
// DISEASE DATABASE (50+)
// ==========================
let diseases = [

{ name:"Flu", sym:["fever","cough","cold","body pain","बुखार","खांसी"] },
{ name:"Common Cold", sym:["cold","sneeze","runny nose","सर्दी"] },
{ name:"Migraine", sym:["headache","light","नौसिया","सिर दर्द"] },
{ name:"Diabetes", sym:["thirst","urination","fatigue","प्यास"] },
{ name:"Asthma", sym:["breathing","wheezing","सांस"] },
{ name:"Food Poisoning", sym:["vomiting","diarrhea","उल्टी","दस्त"] },
{ name:"Malaria", sym:["fever","chills","sweating","ठंड लगना"] },
{ name:"Dengue", sym:["fever","joint pain","platelet","शरीर दर्द"] },
{ name:"Typhoid", sym:["fever","weakness","पेट दर्द"] },
{ name:"Heart Issue", sym:["chest pain","pressure","छाती दर्द"] },
{ name:"Allergy", sym:["rash","itching","खुजली"] },
{ name:"Anemia", sym:["fatigue","weakness","कमजोरी"] },
{ name:"Covid", sym:["fever","cough","loss smell"] },
{ name:"Pneumonia", sym:["breathing","fever"] },
{ name:"Kidney Stone", sym:["back pain","urine pain"] },
{ name:"Ulcer", sym:["stomach pain","burning"] },
{ name:"Depression", sym:["sad","low mood"] },
{ name:"Anxiety", sym:["fear","stress"] },
{ name:"Arthritis", sym:["joint pain"] },
{ name:"Bronchitis", sym:["cough","mucus"] },
{ name:"Hepatitis", sym:["jaundice","fatigue"] },
{ name:"Jaundice", sym:["yellow skin"] },
{ name:"Thyroid", sym:["weight gain","fatigue"] },
{ name:"Obesity", sym:["weight","fat"] },
{ name:"Gastric", sym:["gas","stomach"] },
{ name:"Sinus", sym:["nose","headache"] },
{ name:"Tuberculosis", sym:["cough","blood"] },
{ name:"Stroke", sym:["numbness","speech"] },
{ name:"Cancer", sym:["weight loss","lump"] },
{ name:"Chickenpox", sym:["rash","fever"] },
{ name:"Measles", sym:["rash","cough"] },
{ name:"Mumps", sym:["swelling"] },
{ name:"Eczema", sym:["skin","itching"] },
{ name:"Psoriasis", sym:["skin","red"] },
{ name:"Back Pain", sym:["back","pain"] },
{ name:"Ear Infection", sym:["ear pain"] },
{ name:"Eye Infection", sym:["red eye"] },
{ name:"Dehydration", sym:["thirst"] },
{ name:"Heat Stroke", sym:["heat","fever"] },
{ name:"Appendicitis", sym:["lower pain"] },
{ name:"Gallstones", sym:["pain","nausea"] },
{ name:"Pancreatitis", sym:["pain","vomit"] },
{ name:"Insomnia", sym:["sleep","stress"] },
{ name:"Vertigo", sym:["dizziness"] },
{ name:"Sciatica", sym:["leg pain"] },
{ name:"Hypertension", sym:["bp","pressure"] },
{ name:"Hypotension", sym:["low bp"] },
{ name:"Acidity", sym:["burning","gas"] },
{ name:"Parkinson", sym:["tremor","shaking hands","कंपन"] },
{ name:"Alzheimer", sym:["memory loss","confusion","भूलना"] },
{ name:"Epilepsy", sym:["seizure","fits","दौरे"] },
{ name:"Multiple Sclerosis", sym:["vision loss","numbness","सुन्न"] },
{ name:"Lupus", sym:["rash","joint pain","autoimmune"] },
{ name:"Fibromyalgia", sym:["chronic pain","fatigue"] },
{ name:"Celiac Disease", sym:["gluten","stomach","diarrhea"] },
{ name:"Crohn Disease", sym:["intestinal pain","diarrhea"] },
{ name:"Ulcerative Colitis", sym:["bloody stool","pain"] },
{ name:"Pancreatic Cancer", sym:["weight loss","jaundice"] },

{ name:"Brain Tumor", sym:["headache","vision problem"] },
{ name:"Leukemia", sym:["fatigue","bleeding","infection"] },
{ name:"Lymphoma", sym:["swelling","night sweat"] },
{ name:"Melanoma", sym:["skin spot","dark mole"] },
{ name:"Sickle Cell", sym:["pain crisis","anemia"] },

{ name:"Huntington Disease", sym:["movement","behavior"] },
{ name:"ALS", sym:["muscle weakness","speech problem"] },
{ name:"Guillain Barre", sym:["paralysis","weakness"] },
{ name:"Myasthenia Gravis", sym:["muscle fatigue"] },
{ name:"Narcolepsy", sym:["sleep attack","day sleep"] },

{ name:"Sleep Apnea", sym:["snoring","breathing stop"] },
{ name:"Vertigo", sym:["dizziness","balance"] },
{ name:"Meniere Disease", sym:["ear ringing","vertigo"] },
{ name:"Tinnitus", sym:["ringing ear"] },

{ name:"Glaucoma", sym:["vision loss","eye pressure"] },
{ name:"Cataract", sym:["blur vision"] },
{ name:"Retinal Detachment", sym:["flash","floaters"] },

{ name:"Endometriosis", sym:["pelvic pain"] },
{ name:"PCOS", sym:["irregular periods"] },
{ name:"Infertility", sym:["no pregnancy"] },

{ name:"Hemophilia", sym:["bleeding","clot issue"] },
{ name:"Thrombosis", sym:["clot","swelling"] },

{ name:"Chikungunya", sym:["joint pain","fever"] },
{ name:"Zika Virus", sym:["rash","fever"] },

{ name:"Rabies", sym:["fear water","bite"] },
{ name:"Tetanus", sym:["muscle stiffness"] },

{ name:"Hypoglycemia", sym:["low sugar","dizziness"] },
{ name:"Hyperthyroidism", sym:["weight loss","fast heart"] },
{ name:"Hypothyroidism", sym:["weight gain","fatigue"] },

{ name:"Acromegaly", sym:["large hands","growth"] },
{ name:"Cushing Syndrome", sym:["fat face","weight gain"] },

{ name:"Addison Disease", sym:["low bp","fatigue"] },
{ name:"Sepsis", sym:["infection","high fever"] },

{ name:"Shock", sym:["low bp","cold skin"] },
{ name:"Heat Exhaustion", sym:["sweating","weakness"] },

{ name:"Frostbite", sym:["cold skin","numb"] },
{ name:"Altitude Sickness", sym:["headache","breathing"] }
];

// ==========================
// CHATBOT
// ==========================
function sendMessage() {

  let input = document.getElementById("chatInput");
  let chat = document.getElementById("chatMessages");

  let msg = input.value.toLowerCase();
  if (!msg) return;

  chat.innerHTML += `<div style="text-align:right">${msg}</div>`;
  input.value = "";

  let bestMatch = "समझ नहीं आया";
  let maxScore = 0;

  diseases.forEach(d => {

    let score = 0;

    d.sym.forEach(s => {
      if (msg.includes(s)) score++;
    });

    if (score > maxScore) {
      maxScore = score;
      bestMatch = d.name;
    }

  });

  let reply;

  if (maxScore === 0) {
    reply = "मुझे उस क्षेत्र के बारे में जानकारी नहीं है।";
  } else {
    reply = `संभावना है कि आपको ${bestMatch} हो सकता है। कृपया डॉक्टर से सलाह लें।`;
  }

  chat.innerHTML += `<div style="color:lightblue">${reply}</div>`;
  chat.scrollTop = chat.scrollHeight;
}
// STORE FILE TEMP
let currentPDF = "";

// UPLOAD FUNCTION
function uploadReport() {

  let fileInput = document.getElementById("fileInput");
  let file = fileInput.files[0];

  if (!file) {
    alert("कृपया PDF चुनें");
    return;
  }

  // CREATE URL
  let url = URL.createObjectURL(file);

  // SAVE CURRENT FILE
  currentPDF = url;

  // ADD TO LIST
  let list = document.getElementById("reportList");

  let div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    📄 ${file.name}
    <br>
    <button onclick="openPDF('${url}')">देखें</button>
  `;

  list.appendChild(div);

  fileInput.value = "";
}

// OPEN PDF
function openPDF(url) {
  document.getElementById("pdfViewer").src = url;
  currentPDF = url;
}

// PRINT PDF
function printPDF() {

  if (!currentPDF) {
    alert("पहले PDF खोलें");
    return;
  }

  let frame = document.getElementById("pdfViewer");

  frame.contentWindow.focus();
  frame.contentWindow.print();
}