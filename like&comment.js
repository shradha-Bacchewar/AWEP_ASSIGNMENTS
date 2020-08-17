// var commentCounter = 1;
var likeCounter = 1;


function commentHere(){

    // capture user input
    let userComment = document.querySelector("#inputId").value; //since it is form element

    // //create new element
    // const newElement = document.createElement('div')
    // // newElement.textContent = " User Comment..." + commentCounter;  //concatnate the counter
    // newElement.textContent = userComment;


    // //add styling to new element
    // newElement.style.background = "tomato";
    // newElement.style.color = "white";
    // newElement.style.margin = "4px";


    

    // comment box element
   const commentBox = document.querySelector("#commentBox");

   //append the new element to parent
   // commentBox.appendChild(newElement);
   
   // add new comment at the top.
   commentBox.insertBefore(newElement,commentBox.firstChild);

   //increament the comment counter
  // commentCounter++;

   //   clean the input box   
   document.querySelector("#inputId").value = ""
}

function likeHere(){
   let btnElement = document.querySelector("#btnid");

   btnElement.innerHTML = "Like" + likeCounter;

   likeCounter++;
}