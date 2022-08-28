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
          let children = document.querySelector(".dropdown-content").children;
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
          // let children = document.querySelector(".dropdown-content").children;
          document.getElementsByClassName("dropbtn")[1].textContent = element.name;
        });
        document.getElementById("drp-position").appendChild(a);
      });
    });
    console.log("done");
}

getPositions();
