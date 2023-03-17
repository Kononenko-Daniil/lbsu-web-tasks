function start_test() {
    const test_num_input = document.getElementById('num_input');
    const test_num = test_num_input.value;
    mathTasks = [];
    get_all_variants(test_num);
    showTasks();
}

let mathTasks = [];

function open_home() {
    window.location.href = 'index.html';
}

function checkTasks() {
    let tasks_block = document.getElementById('tasks_card');
    let resultTaskHTML = "";

    let user_result = 0;
    for(let i = 0; i < mathTasks.length; i++) {
        const input_result = document.getElementById(`task_input_${i}`);
        const result = input_result.value;

        resultTaskHTML += `
            <div class="task_block">
                <p>${mathTasks[i].first} * ${mathTasks[i].second} = </p>
                <input 
                    class="${parseInt(result) === mathTasks[i].result ? "input-success" : "input-error"}" 
                    id="task_input_${mathTasks[i].id}" 
                    value="${result}">
            </div>
        `;

        if(parseInt(result) === mathTasks[i].result) {
            user_result++;
        }
    }

    resultTaskHTML += `
        <h1>Твой результат - ${user_result}/${mathTasks.length}</h1>
    `;
    tasks_block.innerHTML = resultTaskHTML;
    if (user_result === mathTasks.length) {
        alert("Поздравляю!!! Ты решил все без ошибок)))")
    }
}
let maxRandom = 20;
function setMaxRandom() {
    let rand_max = document.getElementById('random_max').value;
    maxRandom = rand_max;
    alert("Верхняя граница рандома успешно установлена)");
}
function showTasks() {
    let tasks_block = document.getElementById('tasks_card');
    if (tasks_block.style.display === 'none') {
        tasks_block.style.display = 'flex';
    }
    let tasksHTML = "";
    mathTasks.forEach(task => {
        tasksHTML += `
            <div class="task_block">
                <p>${task.first} * ${task.second} = </p>
                <input id="task_input_${task.id}">
            </div>
        `;
    });
    tasksHTML += `
        <button class="btn success" onclick="checkTasks()">Проверить</button>
    `;
    tasks_block.innerHTML = tasksHTML;
}

function get_all_variants(test_num) {
    for(let i = 0; i < test_num; i++) {
        const num_first = getRandomInt(1, maxRandom);
        const num_second = getRandomInt(1, maxRandom);
        const result = num_first * num_second;

        const mathTask = {
            id: i,
            first: num_first,
            second: num_second,
            result: result
        }

        mathTasks.push(mathTask);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }