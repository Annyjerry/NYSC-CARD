let profileImageData = "";

// IMAGE UPLOAD
document.getElementById("imageUpload").onchange = function(e) {
  const reader = new FileReader();
  reader.onload = () => profileImageData = reader.result;
  reader.readAsDataURL(e.target.files[0]);
};

// GET FIRST NAME
function getFirstName(fullName) {
  return fullName.split(" ")[0];
}

// AUTO RESIZE TEXT
function autoResizeText(el) {
  let size = 24;
  el.style.fontSize = size + "px";

  while (el.scrollWidth > el.offsetWidth && size > 12) {
    size--;
    el.style.fontSize = size + "px";
  }
}

// GENERATE CARD
function generateCard() {
  const fullName = document.getElementById("name").value;
  const firstName = getFirstName(fullName);

  document.getElementById("cardName").innerText = fullName;
  document.querySelector(".heading").innerText = "Congratulations " + firstName;

  document.getElementById("cardPosition").innerText =
    "Position: " + document.getElementById("position").value;

  document.getElementById("cardQuote").innerText =
    document.getElementById("quote").value;

  document.getElementById("cardState").innerText =
    "State: " + document.getElementById("state").value;

  document.getElementById("cardSchool").innerText =
    "Institution: " + document.getElementById("school").value;

  document.getElementById("cardCourse").innerText =
    "Course: " + document.getElementById("course").value;

  document.getElementById("cardHobbies").innerText =
    "Hobbies: " + document.getElementById("hobbies").value;

  document.getElementById("cardDOB").innerText =
    "DOB: " + document.getElementById("dob").value;

  document.getElementById("cardContact").innerText =
    "Contact: " + document.getElementById("contact").value;

  document.getElementById("cardScripture").innerText =
    "Scripture: " + document.getElementById("scripture").value;

  document.getElementById("cardFood").innerText =
    "Food: " + document.getElementById("food").value;

  document.getElementById("cardEncouragement").innerText =
    document.getElementById("encouragement").value;

  document.getElementById("profileImage").src = profileImageData;

  const theme = document.getElementById("theme").value;
  document.getElementById("card").className = "card " + theme;

  autoResizeText(document.getElementById("cardName"));
}

// DOWNLOAD
function downloadCard() {
  html2canvas(document.getElementById("card"), { scale: 3 }).then(canvas => {
    let link = document.createElement("a");
    link.download = "card.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}