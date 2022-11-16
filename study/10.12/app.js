const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // hidden이 반복 사용되므로
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value; // 유저이름 저장
    loginForm.classList.add(HIDDEN_CLASSNAME); // 저장 후 form 숨김
    localStorage.setItem(USERNAME_KEY, username); // 유저 이름 기억하기
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintGreetings(savedUsername);
}
