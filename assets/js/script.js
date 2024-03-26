// Selects the form
let form = document.querySelector(".addNewTaskForm");


// Selects,creates a variable for the yet to be done tasks and sets the counter to zero
let tasksToBeDoneCounter = document.querySelector(".tasksToBeDoneCounter");
let counterToBeDone = 0;


// Selects,creates a variable for the completed tasks and sets the counter to zero
let doneTasksCounter = document.querySelector(".doneTasksCounter");
let counterDone = 0;


// Function for clearing the error message
function clearErrorMessage() {
    document.querySelector(".errorMessage").innerHTML = "";
};


// An event listner is added to the form
form.addEventListener("submit", function addNewTask(event) {

    // Disrupts the default actions of the form when a submit action or event occurs
    event.preventDefault()


    // A check on wether a value was added to the input before submission
    if (document.querySelector(".newTaskInput").value == "") {

        document.querySelector(".errorMessage").innerHTML = "Please Input Task";

        return
    }

    
    // IF A VALUE WAS ADDED THE ACTIONS (THAT IS, A TODO TASK IS CREATED) BELOW TAKES PLACE


    // A div element is created and appended to element with the "tasksToBeDoneContainer" class
    let taskToBeDoneContainer = document.createElement("div");
    taskToBeDoneContainer.setAttribute("class", "taskToBeDoneContainer");
    document.querySelector(".tasksToBeDoneContainer").append(taskToBeDoneContainer);


    let taskToBeDone = document.createElement("div");
    taskToBeDone.setAttribute("class", "taskToBeDone");
    taskToBeDoneContainer.append(taskToBeDone);


    let task = document.createElement("p");
    task.setAttribute("class", "task")
    task.innerHTML = document.querySelector(".newTaskInput").value;
    taskToBeDone.append(task);


    let taskDoneAndtaskDeleteContainer = document.createElement("div");
    taskDoneAndtaskDeleteContainer.setAttribute("class", "taskDoneAndtaskDeleteContainer");
    taskToBeDone.append(taskDoneAndtaskDeleteContainer);


    let taskDone = document.createElement("button");
    taskDone.setAttribute("class", "taskDone");
    taskDoneAndtaskDeleteContainer.append(taskDone);


    let taskDoneImg = document.createElement("img");
    taskDoneImg.setAttribute("src", "./assets/svg/taskDone.svg");
    taskDone.append(taskDoneImg);


    let taskDelete = document.createElement("button");
    taskDone.setAttribute("class", "taskDelete");
    taskDone.after(taskDelete);


    let taskDeleteImg = document.createElement("img");
    taskDeleteImg.setAttribute("src", "./assets/svg/taskDelete.svg");
    taskDelete.append(taskDeleteImg);


    counterToBeDone += 1;
    tasksToBeDoneCounter.innerHTML = counterToBeDone;

    document.querySelector(".newTaskInput").value = "";


    let taskDeleteClicked = false;
    taskDelete.addEventListener("click", function taskDelete(event) {
        event.preventDefault()

        taskDeleteClicked = true

        if (taskDeleteClicked == true) {

            taskToBeDoneContainer.remove()

            counterToBeDone -= 1;
            tasksToBeDoneCounter.innerHTML = counterToBeDone;
            return
        }
    })


    let taskDoneClicked = false;
    taskDone.addEventListener("click", function taskDone(event) {
        event.preventDefault()

        taskDoneClicked = true

        if (taskDoneClicked == true) {

            counterDone += 1;
            doneTasksCounter.innerHTML = counterDone;

            counterToBeDone -= 1;
            tasksToBeDoneCounter.innerHTML = counterToBeDone;

            taskToBeDoneContainer.remove()

            let doneTaskContainer = document.createElement("div");
            doneTaskContainer.setAttribute("class", "doneTaskContainer");
            document.querySelector(".doneTasksContainer").append(doneTaskContainer);


            let doneTask = document.createElement("div");
            doneTask.setAttribute("class", "doneTask");
            doneTaskContainer.append(doneTask);


            let taskDone = document.createElement("p");
            taskDone.setAttribute("class", "taskDone")
            taskDone.innerHTML = task.innerHTML;
            doneTask.append(taskDone);

            return
        }
    })

    
})

