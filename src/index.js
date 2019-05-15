const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});
let button = document.getElementsByClassName("btn")[0];
button.addEventListener('click',getApi);
function getApi(){
  fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then(returnedData 
            //json =>  {
            //console.log(json.results[0].name);
            //fullname.innerText = `${json.results[0].name.first} ${json.results[0].name.last}`
            //grabs first and last name of data from json
          //}
    )
}

function returnedData(data){
  let shortData = data.results[0]
  dataFullname(shortData);
  dataEmail(shortData);
  dataAddress(shortData);
  dataPhone(shortData);
  dataBirth(shortData);
  //console.log(data);
}

function dataFullname(data){
  fullname.innerText = `${data.name.first} ${data.name.last}`
}

function dataEmail(data){
  let email = document.getElementById('email');
  email.innerText = data.email;
}

function dataAddress(data){
  let street = document.getElementById('street');
  let city = document.getElementById('city');
  let state = document.getElementById('state');
  let postcode = document.getElementById('postcode');
  street.innerText = data.location.street;
  city.innerText = data.location.city;
  state.innerText = data.location.state;
  postcode.innerText = data.location.postcode;
}

function dataPhone(data){
  let phone = document.getElementById('phone');
  let cell = document.getElementById('cell');
  phone.innerText = data.phone;
  cell.innerText = data.cell;
}

function dataBirth(data){
  let dateOfBirth = document.getElementById('date_of_birth');
  dateOfBirth.innerText = data.dob.date;
}