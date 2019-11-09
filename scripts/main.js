let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mslogo.jpg') {
      myImage.setAttribute ('src','images/ms.png');
    } else if(mySrc === 'images/ms.png') {
      myImage.setAttribute ('src','images/microsoft.jpg');
    }
    else {
        myImage.setAttribute ('src','images/mslogo.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Microsoft is amazing, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Microsoft is amazing, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }