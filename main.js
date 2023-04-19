// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
let errorModal = document.querySelector("div#modal");
errorModal.className = "hidden";
const input = document.querySelectorAll(".like-glyph");
input.forEach((element) => {
  element.addEventListener("click", callbackfn);
});

function callbackfn(event) {
  let heartTarget = event.target;

  mimicServerCall()
    .then(function () {
      if (heartTarget.innerHTML === EMPTY_HEART) {
        heartTarget.innerHTML = FULL_HEART;
        heartTarget.className = "activated-heart";
      } else {
        heartTarget.innerHTML = EMPTY_HEART;
        heartTarget.className = "like-glyph";
      }
    })
    .catch((error) => {
      errorModal = "";
      document.querySelector("#modal-message").innerHTML = error.message;
    });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
