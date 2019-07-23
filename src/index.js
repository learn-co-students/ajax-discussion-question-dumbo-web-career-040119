// const fullname = document.getElementById("fullname");
// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?
//
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("CONTENT LOADED!");
// });

function slapItOnTheDom(data) {

  const person = data.results[0]

  document.getElementById('fullname').innerText = person.name.first + " " + person.name.last

  document.getElementById('email').innerText = person.email

  document.getElementById('street').innerText = person.location.street

  document.getElementById('city').innerText = person.location.city

  document.getElementById('state').innerText = person.location.state

  document.getElementById('postcode').innerText = person.location.postcode

  document.getElementById('phone').innerText = person.phone

  document.getElementById('cell').innerText = person.cell

  document.getElementById('date_of_birth').innerText = person.dob.date

  document.getElementById('profile_picture').src = person.picture.large

}


function buttonClicked() {
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(slapItOnTheDom)
}


document.addEventListener("DOMContentLoaded", function(){
  var button = document.querySelector(".btn-primary")
  button.addEventListener("click", buttonClicked)
})
