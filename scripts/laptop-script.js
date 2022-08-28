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

async function getBrands() {
  fetch("https://pcfy.redberryinternship.ge/api/brands")
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
        document.getElementById("drp-brands").appendChild(a);
      });
    });
    console.log("done");
}

getBrands();




async function getCPU() {
  fetch("https://pcfy.redberryinternship.ge/api/cpus")
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
        document.getElementById("drp-cpu").appendChild(a);
      });
    });
    console.log("done");
}

getCPU();




async function getBrands() {
  fetch("https://pcfy.redberryinternship.ge/api/brands")
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
        document.getElementById("drp-brands").appendChild(a);
      });
    });
    console.log("done");
}