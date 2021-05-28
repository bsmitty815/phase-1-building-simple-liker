// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

  // Your JavaScript code goes here!
const heart = document.querySelectorAll(".like-glyph"); //set up a for loop so that
 for (let i=0; i < heart.length; i++) {           // it goes through all the classes
  heart[i].addEventListener('click', heartSwitch);  // and then when clicked goes to its function
}


    mimicServerCall("fakeurl")
        .then(data => heartSwitch(data))
        .catch(function(error) {
          const modal = document.getElementById('modal')
          modal.className = "";
          modal.innerText = error;
          setTimeout(() =>  modal.className = ".hidden", 3000); //hiding error message
        });


    function heartSwitch(e){ // function to switch the heart
      //heart.textContent = e.target
      console.log(e.target.innerHTML) // sets the event target to the innerhtml
          if (e.target.innerHTML === EMPTY_HEART) { // set to empty
            e.target.innerHTML = FULL_HEART  // no fill it
            heart.className = "activated-heart";
          } else {
            e.target.innerHTML = EMPTY_HEART // else empty it
            heart.className = "";
          }
      };

  
    




//event listener click
// everytime you click a heart the heart fills up









//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
