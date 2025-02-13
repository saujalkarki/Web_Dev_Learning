// document.querySelector("#idName");
// document.querySelectorAll("p");
// document.getElementById("1stDiv");
// document.getElementsByClassName("1stClass");
// document.getElementsByTagName("p");

const tryElement = document.getElementsByClassName("1sth1");
const thisId = document.getElementById("id1");
console.log(thisId);

tryElement[0].addEventListener("click", function () {
  thisId.textContent = "This p tag has been changed";
  tryElement[0].style.color = "green";
});
