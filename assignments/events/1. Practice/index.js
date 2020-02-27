//Select the section with an id of container without using querySelector.

let section = document.getElementById("container");

//Select the section with an id of container using querySelector.

let section1 = document.querySelector("#container");

//Select all of the list items with a class of "second".

let secondLi = document.querySelectorAll(".second");

//Select a list item with a class of third, but only the list item inside of the ol tag.

let thirdOl = document.querySelector("ol .third");

//Give the section with an id of container the text "Hello!".

// section1.innerText = "Hello";

//Add the class main to the div with a class of footer.

let footer1 = document.querySelector(".footer");
footer1.classList.add("main");

//Remove the class main on the div with a class of footer.

let footer2 = document.querySelector(".main");
footer2.classList.remove("footer1");

//Create a new li element.

let newLi = document.createElement("li");
document.body.appendChild(newLi);

//Give the li the text "four".

newLi.innerText="four";

//Append the li to the ul element.

let ul = document.querySelector("ul");
ul.append(newLi);

//Loop over all of the list inside the ol tag and give them a background color of "green".

let olCheck = document.querySelector("ol").children;
olCheck = Array.from(olCheck);
olCheck.forEach(x => x.style.background="green");

//Remove the div with a class of footer.
footer2.remove();
