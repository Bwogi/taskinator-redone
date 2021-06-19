var taskIdCounter = 0;
// var buttonEl = document.querySelector('#save-task');
var formEl = document.querySelector('#task-form');
var listEl = document.querySelector('#tasks-to-do');


const taskFormHandler = (event) => {
    // don't reload or refresh page 
    event.preventDefault();
    // var nameInput = document.querySelector('#task-name');
    var nameInput = document.querySelector("input[name='task-name']").value;
    // var selectInput = document.querySelector('#task-type')
    var selectInput = document.querySelector("select[name='task-type']").value;
    // check if values empty 
    if (!nameInput || !selectInput) {
        // var theAlert = document.querySelector("#alert");
        // theAlert.setAttribute("style", "color:red");
        // theAlert.textContent = "You will need to fill out the task form";
        alert("You need to fill out the task form");
        return false;
    }
    // reset form 
    formEl.reset();
    // package up the data into an object 
    var taskDataObj = {
        name: nameInput,
        type: selectInput
    };
    console.log(taskDataObj)
    console.dir(taskDataObj)
        // send the object as an argument to create tasks 
    createTaskEl(taskDataObj);
};


const createTaskEl = (theObject) => {
    // create a list item element 
    var listItemEl = document.createElement('li');
    // give it a class name 
    listItemEl.className = 'task-item';
    // lets add a task id 
    listItemEl.setAttribute("data-task-id", taskIdCounter);
    // lets create a div to hold the task client Information
    var taskInfoEl = document.createElement("div");
    // give it a class 
    taskInfoEl.className = "task-info";
    // lets add html content to it 
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + theObject.name + "</h3><span class='task-type'>" + theObject.type + "</span>";

    // add these to the list item 
    listItemEl.appendChild(taskInfoEl);

    // add the buttons 
    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);
    // place it back onto the DOM on the html virtual page
    listEl.appendChild(listItemEl);

    // increase task counter for next unique id 
    taskIdCounter++;
};

var createTaskActions = (taskId) => {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    // create edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    // create delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    // create select input 
    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(statusSelectEl);

    // add options to the select 
    var statusChoices = ["To Do", "In Progress", "Completed"];
    for (var i = 0; i < statusChoices.length; i++) {
        // create option element
        var statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);

        // append to select
        statusSelectEl.appendChild(statusOptionEl);
    }
    return actionContainerEl;
}

formEl.addEventListener("submit", taskFormHandler);