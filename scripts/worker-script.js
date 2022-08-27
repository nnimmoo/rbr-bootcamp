// let response = fetch("https://pcfy.redberryinternship.ge/api/teams");

// fetch("https://pcfy.redberryinternship.ge/api/teams")
//     .then(response => {
//         let x = response.json();
//        console.log(x);
//     //    console.log(response.data);
//     })
//     .catch(error => {
//        console.log("err"+ error);
//     });



async function getTeams()
{
fetch("https://pcfy.redberryinternship.ge/api/teams") //1
  .then((response) => response.json()) //2
  .then((user) => {
    let ret = user.data;
    console.log(ret);
    ret.forEach(element => {
        let a = document.createElement("a");
            a.id= element.id;
            a.innerText = element.name;
            a.className="dropdown-item";
            document.getElementsByClassName("dropdown-menu")[0].appendChild(document.createElement("li").appendChild(a)); 
    });
    return(user.data); //3
  });
}

getTeams();