// Selecting elements
let firstChild = document.querySelector(".first-child");
let parent = document.querySelector(".parent");

// document.parentNode;
// document.children;
// document.childNodes;
// document.firstElementChild;
// document.lastElementChild;
// document.nextElementSibling;
// document.previousElementSibling

// Parent Node Traversal
console.log("Parent Node:", firstChild.parentNode);

// Child Node Traversal
console.log("Children of Parent:", parent.children);
console.log("First Child:", parent.firstElementChild);
console.log("Last Child:", parent.lastElementChild);

// Sibling Node Traversal
console.log("Next Sibling of First Child:", firstChild.nextElementSibling);
console.log(
  "Previous Sibling of Last Child:",
  document.querySelector(".last-child").previousElementSibling
);

// All Child Nodes (Including Text and Comments)
console.log(
  "All Child Nodes (including text and comments):",
  parent.childNodes
);

firstChild.addEventListener("dblclick", function () {
  document.querySelector(".last-child").textContent =
    "This is the clicked element.";

  document.querySelector(".second-child").textContent =
    "This is the second clicked element.";

  document.querySelector(".second-child").style.color = "red";

  const newChild = document.createElement("p");
  newChild.classList.add("child", "first-child");
  newChild.innerText = "New Child";
  document.querySelector(".parent").appendChild(newChild);
});

// Adding event listeners to each element to demonstrate bubbling
document.getElementById("grandparent").addEventListener("click", function () {
  console.log("Grandparent Clicked!");
  alert("Grandparent Clicked!");
});

document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent Clicked!");
  alert("Parent Clicked!");
});

document.getElementById("child").addEventListener("click", function (e) {
  console.log("Child Clicked!");
  alert("Child Clicked!");
});

// e.stopPropagation();

// event deligation
// document.getElementById("item1").addEventListener("click", function () {
//   alert("Item 1 clicked");
// });

// document.getElementById("item2").addEventListener("click", function () {
//   alert("Item 2 clicked");
// });

// document.getElementById("item3").addEventListener("click", function () {
//   alert("Item 3 clicked");
// });

document.getElementById("list").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    alert(event.target.textContent);
    console.log();
  }
});
