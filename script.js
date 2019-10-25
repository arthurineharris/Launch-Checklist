// Write your JavaScript code here!

window.addEventListener("load", function() {
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");

      if (pilotNameInput.value === "" || copilotName.value === "" || fuelLevel.value === "" ||
         cargoMass.value === "") {
            alert("All fields are required!");
            event.preventDefault();
            }

      if (isNaN(cargoMass.value)) {
            alert("Cargo Mass must be a number!");
            event.preventDefault();
            }
      if (isNaN(fuelLevel.value)) {
               alert("Fuel Level must be a number!");
               event.preventDefault();
         }
      if (!isNaN(pilotNameInput.value) && pilotNameInput.value!= "") {
               alert("Pilot Name cannot be a number!");
               event.preventDefault();
         }
      if (!isNaN(copilotName.value) && copilotName.value!= "") {
               alert("Co-pilot Name cannot be a number!");
               event.preventDefault();
         }
            
 
 let pilotStatus = document.getElementById("pilotStatus").innerHTML = (`Pilot ${pilotNameInput.value} is ready for launch.`) ;

 let copilotStatus = document.getElementById("copilotStatus").innerHTML = (`Co-pilot ${copilotName.value} is ready for launch.`);
 
 if (fuelLevel.value < 10000 && fuelLevel.value != "") {
    let faultyItems = document.getElementById("faultyItems");
    faultyItems.style.visibility = 'visible';
    event.preventDefault();

    let fuelStatus = document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch.";
    let launchStatus = document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
   
    document.getElementById("launchStatus").style.color = "red";
    event.preventDefault();
 }

 if (cargoMass.value > 10000) {
    let faultyItems = document.getElementById("faultyItems");
    faultyItems.style.visibility = 'visible';
    event.preventDefault();

    let cargoStatus = document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch.";
    let launchStatus = document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
   
    document.getElementById("launchStatus").style.color = "red";
    event.preventDefault();
 }
  
 function noEmptyFields(){
   if (pilotNameInput.value === "" || copilotName.value === "" || fuelLevel.value === "" ||
   cargoMass.value === "") {
      return false;
   } else {
      return true;
   }
   }
   

 if (cargoMass.value <= 10000 && fuelLevel.value >= 10000 && noEmptyFields()) {
   let faultyItems = document.getElementById("faultyItems");
   faultyItems.style.visibility = 'visible';

   let launchStatus = document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch!";
   document.getElementById("launchStatus").style.color = "green";
   event.preventDefault();
 }

})
})  

fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
   response.json().then( function(json) {
      const div = document.getElementById("missionTarget");
      div.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
        <li>Name: ${json[0].name}</li>
        <li>Diameter: ${json[0].diameter}</li>
        <li>Star: ${json[0].star}</li>
        <li>Distance from Earth: ${json[0].distance}</li>
        <li>Number of Moons: ${json[0].moons}</li>
      </ol>
      <img src="${json[0].image}">
      `;
   })
})

// });

// This block of code shows how to format the HTML once you fetch some planetary JSON!
// <h2>Mission Destination</h2>
// <ol>
//    <li>Name: ${}</li>
//    <li>Diameter: ${}</li>
//    <li>Star: ${}</li>
//    <li>Distance from Earth: ${}</li>
//    <li>Number of Moons: ${}</li>
// </ol>
// <img src="${}">
