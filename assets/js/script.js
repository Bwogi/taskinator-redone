// console.dir(window.document)
// console.dir(window.document.characterSet)
// console.dir(window.document.children)

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

var imgButtonEl = document.querySelector("#img");
imgButtonEl.addEventListener("click", function() {
    var imgSection = document.querySelector(".images");
    var newImgEl = document.createElement("img");
    newImgEl.src = "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

    var captionEl = document.createElement("p");
    captionEl.textContent = 'Photo by Glenn Carstens-Peters';


    imgSection.appendChild(newImgEl);
    imgSection.appendChild(captionEl);



})