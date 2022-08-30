
async function getLaptops() {
    fetch("https://pcfy.redberryinternship.ge/api/laptops?token=5f64482042a4148d23e5d20ab64faaa8")
      .then((response) => response.json())
      .then((user) => {
        let ret = user.data;
        console.log(ret);
        // ret.forEach(element => {
        //     console.log(element);
        // });
      });
      console.log("done");
  }
  
  getLaptops();
  