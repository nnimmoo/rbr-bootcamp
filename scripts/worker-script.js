let response = fetch("https://pcfy.redberryinternship.ge/api/teams");

fetch("https://pcfy.redberryinternship.ge/api/teams")
    .then(response => {
       console.log( response.json());
    //    console.log(response.data);
    })
    .catch(error => {
       console.log("err"+ error);
    });


