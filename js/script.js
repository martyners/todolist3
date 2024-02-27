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
    }

    const render = () => {
        let htmlString = '';
        for (const task of tasks) {
            htmlString += `
            <li${task.done ? ' class="list__listItem--done"' : ''}>
                <button class="js-remove">usuń</button>
                ${task.content}
            </li>
        `;
        };
        document.querySelector('.js-tasks').innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", removeTask)
        })
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
