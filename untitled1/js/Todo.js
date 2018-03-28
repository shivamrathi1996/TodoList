var list = document.createElement("ol");
list.id = "list";
list.className = "list";

var addTask = document.getElementById("inputBtn");
addTask.addEventListener('click', function (){

    // checking whether the field is empty
    var task = document.getElementById("task").value;
    if(task=="") alert("Are you sure you do not have any task to do?");
    else
    {
        // adding an element
        addElement (list, task);

        //clear the input field
        document.getElementById("task").value ="";
    }
}, false);

function addElement(ol, text)
{
    var element = document.createElement("li");
    element.id = "element";
    element.className = "element";
    element.appendChild(document.createTextNode(text));
    ol.appendChild(element);
    document.getElementById("board").appendChild(ol);

    //adding a remove button
    addRemoveBtn(element);

    //adding a function which change the decoration of the text
    addCrossStyle(element);
}

function addRemoveBtn(li)
{
    //creating a remove button
    var removeTask = document.createElement("input");
    removeTask.setAttribute("type", "button");
    removeTask.setAttribute("value", "Remove");
    removeTask.setAttribute("class", "remove");

    //remove task function
    removeTask.addEventListener('click', function (){
        li.parentNode.removeChild(li);
    }, false);
    li.appendChild(removeTask);
}

function addCrossStyle(li)
{
    var check = false;

    li.addEventListener('click', function (){
        if (check==false)
        {
            li.style.textDecoration = "line-through";
            li.style.textDecorationColor = "red";
            check = true;
        }
        else
        {
            li.style.textDecoration = "none";
            check = false;
        }
    }, false);
}