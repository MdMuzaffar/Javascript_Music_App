window.addEventListener('click', () => {
    const sound = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll(".pads div");

    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            sound[index].currentTime = 0;
            sound[index].play();
        })
    })
})

const inputValue = document.getElementById('inputValue');
const addTask = document.getElementById('addTask');
const listTask = document.getElementById('listTask');

const inputCheck = () => {
    debugger
    return inputValue;
}

console.log(inputCheck())

addTask.addEventListener('click', () => {
    const inputText = inputValue.value.trim();
    if (inputText !== '') {
        const taskItems = document.createElement('li');
        taskItems.innerHTML = `<input type="checkbox">
                                <span> ${inputText}</span>
                                <button> Delete</button>`;
    }

    listTask.appendChild(taskItems);
    inputValue.value = '';
});

// listTask.addEventListener('click', (event) => {
//     if (event.target.tagName === 'BUTTON') {
//         event.target.parentElement.remove();
//     } else if (event.target.tagName === 'INPUT') {
//         event.target.nextElementSibling.classList.toogle('completed');
//     }
// });

// const taskInput = document.getElementById('taskInput');
// const addTaskButton = document.getElementById('addTask');
// const taskList = document.getElementById('taskList');

// addTaskButton.addEventListener('click', () => {
//     const taskText = taskInput.value.trim();
//     if (taskText !== '') {
//         const taskItem = document.createElement('li');
//         taskItem.innerHTML = `
//                     <input type="checkbox">
//                     <span>${taskText}</span>
//                     <button>Delete</button>
//                 `;

//         taskList.appendChild(taskItem);

//         taskInput.value = ''; // Clear the input field
//     }
// });

// taskList.addEventListener('click', (event) => {
//     if (event.target.tagName === 'BUTTON') {
//         event.target.parentElement.remove(); // Remove the task when the delete button is clicked
//     } else if (event.target.tagName === 'INPUT') {
//         event.target.nextElementSibling.classList.toggle('completed'); // Toggle the "completed" class
//     }
// });

localStorage.setItem('amazon_user', JSON.stringify(res.data));