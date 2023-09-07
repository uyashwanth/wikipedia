var addbtn = document.getElementById("add-task")
var taskInput = document.getElementById("task")
var tasklist = document.getElementById("tasks")

addbtn.addEventListener("click", function(){
    var task = taskInput.value
    addtask(task)
    taskInput.value = ""
}
)
function addTask() {
    var li = document.createElement("li")
    li.innerHTML = task
    taskList.appendChild(li)
}