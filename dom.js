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

