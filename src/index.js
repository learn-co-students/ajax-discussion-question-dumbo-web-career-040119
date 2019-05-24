console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

const profilePicture = document.getElementById('profile_picture')
const birth = document.getElementById('date_of_birth')

const newButton = document.getElementById("new")
newButton.addEventListener('click', ()=>{
  fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( res => addUser(res.results[0]) )
})

function addUser(res){
    profilePicture.setAttribute('src', res.picture.large)
    fullname.innerText = `${res.name.title} ${res.name.first} ${res.name.last}`
    email.innerText = res.email
    street.innerText = res.location.street
    city.innerText = res.location.city
    state.innerText = res.location.state
    postcode.innerText =res.location.postcode
    phone.innerText = res.phone
    cell.innerText = res.cell
    birth.innerText = res.dob.date

}
