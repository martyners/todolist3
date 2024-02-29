{
    const tasks = [

    ];
    
    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
            done: false,
        });
        render();
    }

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;

        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", removeTask)
        });

        const toggleDoneButtons = document.querySelectorAll('.js-done');
        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
       });
    };

    const render = () => {
        let htmlString = '';
        for (const task of tasks) {
            htmlString += `
                <li class="list__item">
                    <button class="list__button js-done"> ${task.done? "&#10003;" : ""} </button>    
                    <span class="list__task${task.done ? ' list__task--done' : ''}"> ${task.content} </span>
                   <button class="list_button--remove js-remove"> &#128465; </button>
                </li>
            `;
        };
        document.querySelector('.js-tasks').innerHTML = htmlString;

        bindEvents();
    };
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        const inputTask = document.querySelector(".js-newTask");
        
        const newTaskContent = inputTask.value.trim();
        inputTask.focus(); 
        
        if (newTaskContent === "") {
            return;
        }
        inputTask.value = "";
        addNewTask(newTaskContent);
    }
    
    
    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit)
    };

    init();
};
