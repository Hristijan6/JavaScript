console.log("Homework");

let changedHeader = document.getElementById("myTitle");
changedHeader.innerText = "Changed TEXT!";

let changedParagraph = document.getElementsByTagName("div")[0].children[1];
changedParagraph.innerText = "Changed Text!";

let changedParagraphSecond = document.getElementsByTagName("div")[1].children[0];
changedParagraphSecond.innerText = "Changed Text!";

let changedText = document.getElementsByTagName("text")[0];
changedText.innerText = "Changed Text!"

let changedParagraphThird = document.getElementsByTagName("div")[2].children[0];
changedParagraphThird.innerText = "Changed Text!";

let changedParagraphFourth = document.getElementsByTagName("div")[2].children[1];
changedParagraphFourth.innerText = "Changed Text!";



