// var buttonEl = document.querySelector('#save-task');
var formEl = document.querySelector('#task-form');
var listEl = document.querySelector('#tasks-to-do');
// var nameInput = document.querySelector('#task-name');
var nameInput = document.querySelector("input[name='task-name']");
// var selectInput = document.querySelector('#task-type')
var selectInput = document.querySelector("select[name='task-type']");
console.log(selectInput);

// formEl.addEventListener("submit", myFunction);

// buttonEl.addEventListener('click', function(event) 

const createTaskHandler = (event) => {
    // don't reload or refresh page 
    event.preventDefault();
    // create a list item element 
    var listItemEl = document.createElement('li');
    // give it a class name 
    listItemEl.className = 'task-item';
    // capture value from form input as list item text content
    // listItemEl.innerHTML = nameInput.value;
    // listItemEl.innerHTML += "<br>" + selectInput.value;
    listItemEl.textContent = nameInput.value;
    // listItemEl.textContent += " " + selectInput.value;

    // lets create a div to hold the task client Information
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    // lets add html content to it 
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + nameInput.value + "</h3>" + "<span class=''>" + selectInput.value + "</span>";
    // place it back onto the DOM on the html virtual page
    listEl.appendChild(taskInfoEl);

}

formEl.addEventListener("submit", createTaskHandler);