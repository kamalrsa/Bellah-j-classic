// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCpoZEJpoWY9pI4dNU-sJ7hlzFTyPEpV7s",
  authDomain: "registration-form-bff5f.firebaseapp.com",
  projectId: "registration-form-bff5f",
  storageBucket: "registration-form-bff5f.appspot.com",
  messagingSenderId: "1096840382319",
  appId: "1:1096840382319:web:9a7464c2b6357ab6f98a9a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference for information collections
let registeredInfo = firebase.database().ref("infos");

//listen for a submit
document.querySelector(".register-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const message = document.getElementById("message").value;
  const sport = document.getElementById("sport").value;
  //console.log(name, email, mobile, message, sport);
  //alert("Registration Successfull");
  saveInfo(name, email, mobile, message, sport);
  sendEmail(name, email, mobile, message, sport);

  // show alert
  document.querySelector(".alert").style.display = "block";

  document.querySelector(".register-form").reset();
}

//Save info to firebase
function saveInfo(name, email, mobile, message, sport) {
  let newInfo = registeredInfo.push();
  newInfo
    .set({
      name: name,
      email: email,
      mobile: mobile,
      message: message,
      sport: sport,
    })
    .then(() => {
      console.log("data saved");
    })
    .catch((error) => {
      console.log(error);
    });
  retrieveInfo();
}

//retrieve Infos
function retrieveInfo() {
  let ref = firebase.database().ref("infos");
  ref.on("value", getData);
}

function getData(data) {
  let info = data.val();
  let keys = Object.keys(info);

  for (let i = 0; i < keys.length; i++) {
    let infoData = keys[i];
    let name = info[infoData].name;
    let email = info[infoData].email;
    let mobile = info[infoData].mobile;
    let message = info[infoData].message;
    let sport = info[infoData].sport;
    console.log(name, email, mobile, message, sport);
    let infoResult = document.querySelector(".info-result");
    infoResult.innerHTML += `<div> 
    <p> Name:${name} <br/>
    <a>Email: ${email} </a> <br/>
    Mobile:${mobile} <br/>
    Description:${message} <br/> 
     Sport:${sport}
     </p>
    </div>`;
  }
}

//send email Info

function sendEmail(name, email, mobile, message, sport) {
  Email.send({
    HOST: "smtp.gmail.com",
    Username: "kamalrsa@gmail.com",
    Password: "uijbvwrnxegarozd",
    To: "kamalrsa@gmail.com",
    From: "kamalrsa@gmail.com",
    Subject: `${name} sent you a message`,
    Body: `Name: ${name} <br/>Mobile:${mobile} <br/> Email: ${email} <br/> Description:${message} <br/> Sport: ${sport}`,
  })
    .then((data) => {
      console.log("data send");
    })
    .catch((error) => {
      console.log(error);
    });
}

//nav mobile version

const mobileBtn = document.getElementById("mobile-cta");
nav = document.querySelector("nav");
mobileBtnExit = document.getElementById("mobile-exit");
mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});
mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});
