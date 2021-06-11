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
    listItemEl.textContent += " " + selectInput.value;


    // place it back onto the DOM on the html virtual page
    listEl.appendChild(listItemEl);

}

formEl.addEventListener("submit", createTaskHandler);


// console.log(buttonEl)

// Ask TA about refactoring this code as in
// var createTaskHandler = function(){}



// buttonEl.addEventListener("click", function() {
//     // qns: where in the html code do you want to place the list item? ul.task-list
//     // which element type do you want to create? li 
//     // does it have a class? if yes, what is it?  task-item
//     // ---------------------



//     // lets capture the area for list items 
//     var taskListEl = document.querySelector(".task-list");
//     // then we create a list item 
//     var taskItemEl = document.createElement("li");
//     // then we add a the same class as the previous list item 
//     taskItemEl.className = "task-item";
//     // add text content to the list item 
//     taskItemEl.textContent = "new task appended";
//     // we add the list item to the list items area 
//     taskListEl.appendChild(taskItemEl);

// });