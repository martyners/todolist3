{
    const tasks = [
        {
            content: 'zadanie1',
            done: false,
        },
        {
            content: 'zadanie2',
            done: true,
        },
    ];

    const clearInputAndFocus = () => {
        const inputTask = document.querySelector(".js-newTask");
        inputTask.value = "";
        inputTask.focus(); 
    }
    
    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
            done: false,
        });
        render();

        clearInputAndFocus();
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
                    <button class="list__button js-done">${task.done? "&#10003;" : ""}</button>    
                    <span class="list__task${task.done ? ' list__task--done' : ''}">${task.content}</span>
                   <button class="list_button--remove js-remove">&#128465;</button>
                </li>
            `;
        };
        document.querySelector('.js-tasks').innerHTML = htmlString;

        bindEvents();
    };

    const onFormSubmit = (event) => {
            event.preventDefault();
            const newTaskContent = document.querySelector(".js-newTask").value.trim();

            if (newTaskContent === "") {
                return;
            }
            addNewTask(newTaskContent);
            
    }
    
    
    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit)
    };

    init();
};
