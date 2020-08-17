var likeCounter = 1;

function commentHere() {
  let userComment = document.querySelector("#inputId1").value; // we are not using innerHTML wy bcz this is a form element

  const newElement = document.createEement("div");
  newElement.textContent = userComment; 
  newElement.style.background = "royalblue";
  newElement.style.color = "white";
  newElement.style.margin = "4px";

  const commentBox = document.querySelector("#commentBox");

  commentBox.insertBefore(newElement, commentBox.firstChild);

  document.querySelector("#inputId1").value = "";
}

function likeHere() {
  likeCounter++;

  let btnElement = document.querySelector("#btnid");
  btnElement.innerHTML = "Like " + likeCounter;
}