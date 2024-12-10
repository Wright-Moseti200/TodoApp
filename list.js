let button = document.querySelector("button");
let list = document.querySelector("ul");

function add()
{

    let input = document.querySelector("input").value;
    let li = document.createElement("li");
    li.innerHTML = input;
    list.appendChild(li);
    let span = document.createElement("span");
    span.className = "delete";
    li.appendChild(span);

    span.onclick = function ()
    {
        list.removeChild(li);
    }
    
    li.onclick = function ()
    {
        li.classList.toggle("checked");
    }

 }


button.addEventListener("click", add);
