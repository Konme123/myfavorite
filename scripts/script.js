






dragElement(document.getElementById("mydiv"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id )) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id ).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

let email = document.getElementById("email");
let password = document.getElementById("password");

let u = 'julius';
let p = 'ilovefish';


let container = document.querySelector('.container');
let logContainer = document.querySelector('#mydiv');
let logIn = 0;


function submit(){
  console.log(email.value);
  console.log(password.value.length);
  if(email.value == u && password.value == p){
      container.style.filter = "blur(0px)";
      logContainer.style.transform = "translateY(-100%)";
      logIn = 1;
      document.querySelector(".popup").classList.add("active")
      document.querySelector(".iframe").classList.add("active")
      

  }else if(password.value.length < 8){
      alert("Password must be 8 characters long");
  }else{
      alert("Wrong Username and Password");
  }
}





;
