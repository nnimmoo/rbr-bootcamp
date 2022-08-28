function shower(element) {
  document.getElementById(element).classList.add("show");
}


window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

async function getTeams() {
  fetch("https://pcfy.redberryinternship.ge/api/teams")
    .then((response) => response.json())
    .then((user) => {
      let ret = user.data;
      console.log(ret);
      ret.forEach(element => {
        let a = document.createElement("a");
        a.id = element.id;
        a.innerText = element.name;
        a.addEventListener('click', function () {
          document.getElementsByClassName("dropbtn")[0].textContent = element.name;
        });
        document.getElementById("drp-team").appendChild(a);
      });
    });
    console.log("done");
}

getTeams();

async function getPositions() {
  fetch("https://pcfy.redberryinternship.ge/api/positions")
    .then((response) => response.json())
    .then((user) => {
      let ret = user.data;
      console.log(ret);
      ret.forEach(element => {
        let a = document.createElement("a");
        a.id = element.id;
        a.innerText = element.name;
        a.addEventListener('click', function () {
          document.getElementsByClassName("dropbtn")[1].textContent = element.name;
        });
        document.getElementById("drp-position").appendChild(a);
      });
    });
    console.log("done");
}

getPositions();


function validation(){
  let temp= document.getElementById("username").value;
  let valid= true;
  console.log('aq var dzia');
  if (!(temp.length > 2 && (/^[\u10d0-\u10f0]*$/).test(temp))){
    valid = false;
    console.log("wrong name");
    return;
  }
  console.log("stage 0");
  temp = document.getElementById("lastname").value;
  if(!(temp.length > 2 && (/^[\u10d0-\u10f0]*$/).test(temp))){
      valid = false;
      console.log("wrong surname");
      return;
    }
    console.log("stage 1");
  
  if(document.getElementsByClassName("dropbtn")[0].textContent == "თიმი"){
    console.log("wrong თიმი");
    return;
  } 
  if(document.getElementsByClassName("dropbtn")[1].textContent == "პოზიცია"){
    console.log("wrong პოზიცია");
    return;
  }
  temp= document.getElementById("email").value;
  if( /^[a-zA-Z]+$/.test(temp) && !temp.endsWith("@redberry.ge")){
    console.log("wrong email");
    return;
  }
  console.log("everything good")
  location.assign("../pages/laptop-info.html")
}
