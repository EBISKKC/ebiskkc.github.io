const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/images.jpeg") {
    myImage.setAttribute("src", "images/fire.jpeg");
  } else {
    myImage.setAttribute("src", "images/images.jpeg");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if(!myName){
        setUserName();
    }
    else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} さん、一緒に火を消さないか？`;
    }
  }

  if(!localStorage.getItem("name")){
    setUserName();
  }else{
const storedName = localStorage.getItem("name");
    myHeading.textContent =`火を消しに来たんだよね、${storedName}`;
  }

myButton.onclick=()=>{
    setUserName();
};