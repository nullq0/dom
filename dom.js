//console.dir(document);
//console.log(document.domain);
//console.log(document.title);
//console.log(document.head);
//console.log(document.all);

document.title = "DOM vezba";

let items = document.getElementById("items");
let listItems = document.getElementsByClassName("list-item");

for(let i=0; i < listItems.length; i++)
{
    //listItems[i].style.color = "white";
    if(i%2==0)
    {
        listItems[i].style.backgroundColor = "#D8B0DE";
    }
    else listItems[i].style.backgroundColor = "#B0DEBA";
}

document.getElementById("lista").textContent = "Nesto";

listItems[3].textContent = "neki item";

//querySelector
document.querySelector("#paragraf p").style.backgroundColor = "#B0DEBA";

//parentNode
console.log(items.parentNode);
//items.parentNode.style.backgroundColor="blue";

//parentElement
console.log(items.parentElement);

//childNodes
console.log(items.childNodes)

//sibling
items.previousElementSibling.style.color = "#245C71"
items.nextElementSibling.style.color = "#00B9FF"

let drugiElement = document.getElementsByClassName("list-item")[1];

drugiElement.parentElement.previousElementSibling.style.backgroundColor = "#9DF8";

//div

let newDiv = document.createElement('div');

newDiv.id = "new-div"
newDiv.className = "new-div-class"

let newDivText = document.createTextNode("Hello World");

newDiv.appendChild(newDivText);

let container = document.querySelector("#container");

let h2 = document.querySelector("#container h2");

container.insertBefore(newDiv,h2);

//addListItem

let liItems = document.querySelectorAll(".list-item");
let itemContainer = document.querySelector("#items");

let newLi = document.createElement('li');
newLi.className = 'list-item'
let newLiText = document.createTextNode("hi!!!");
newLi.appendChild(newLiText);

itemContainer.insertBefore(newLi,liItems[0]);

//add p

let prviDiv = document.getElementById("paragraf")
let textContainer = document.querySelector("#paragraf p");

let newParagraf = document.createElement('p');
let newPtext = document.createTextNode("neki text");
newParagraf.appendChild(newPtext);

prviDiv.insertBefore(newParagraf,textContainer);

//addListItem-Form

let textBox = document.getElementById("textBox");
let button = document.getElementById("button");

let addNewItemToList = function(){
    let text = textBox.value;
    let newLi = document.createElement('li');
    newLi.className = 'list-item'
    let newLiText = document.createTextNode(text);
    newLi.appendChild(newLiText);
    if(text!="") itemContainer.insertBefore(newLi,itemContainer.lastChild.nextSibling);
}

button.addEventListener('click',addNewItemToList);