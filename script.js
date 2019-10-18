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
      if (!isNaN(pilotNameInput.value)) {
               alert("Pilot Name cannot be a number!");
               event.preventDefault();
         }
      if (!isNaN(copilotName.value)) {
               alert("Co-pilot Name cannot be a number!");
               event.preventDefault();
         }

      })
 });            
         

      
   

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
