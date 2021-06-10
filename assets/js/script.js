var buttonEl = document.querySelector('button');
// console.log(buttonEl)

buttonEl.addEventListener("click", function() {
    // qns: where in the html code do you want to place the list item? ul.task-list
    // which element type do you want to create? li 
    // does it have a class? if yes, what is it?  task-item
    // ---------------------


    // lets capture the area for list items 
    var taskListEl = document.querySelector(".task-list");
    // then we create a list item 
    var taskItemEl = document.createElement("li");
    // then we add a the same class as the previous list item 
    taskItemEl.className = "task-item";
    // add text content to the list item 
    taskItemEl.textContent = "new task appended";
    // we add the list item to the list items area 
    taskListEl.appendChild(taskItemEl);

});