const result_images = [
    '910.png',
    '78.png',
    '56.png',
    '34.png',
    '12.png',
]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getResultImgUrl(result) {
    let url = 'img/';
    switch(result) {
        case 10:
        case 9: url += result_images[0]; break;
        case 8:
        case 7: url += result_images[1]; break;
        case 6:
        case 5: url += result_images[2]; break;
        case 4:
        case 3: url += result_images[3]; break;
        case 2:
        case 1: 
        case 0: url += result_images[4]; break;
    }

    console.log(url);
    return url;
}

let sample_count = prompt("Какое количество примеров вы хотите решить?", [4]);
if(!parseInt(sample_count)) {
    sample_count = 4;
}

document.write(`<p class="info">Вам было предложено ${sample_count} примера</p>`);

let solving_results = [];
let correct_answer_count = 0;
let incorrect_answer_count = 0;
for(let i = 0; i < sample_count; i++) {
    const first_number = getRandomInt(1, 10);
    const second_number = getRandomInt(1, 10);
    const correct_answer = first_number * second_number;

    let user_answer = prompt(`Сколько будет ${first_number}*${second_number}?`);
    user_answer = parseInt(user_answer);
    if(!user_answer) {
        user_answer = 0;
    }

    let result = user_answer === correct_answer ? true : false;
    solving_results.push({
        result,
        correct_answer,
        user_answer,
        problem: `${first_number}*${second_number}`
    });

    user_answer === correct_answer ? correct_answer_count++ : incorrect_answer_count++;
} 

solving_results.forEach((solving) => {
    const solving_feedback = `
        <p class="${solving.result ? 'correct' : 'incorrect'}">
            ${solving.problem}=${solving.user_answer}
            ${!solving.result ? `- Правильный ответ: ${solving.correct_answer}` : ''}
        </p>
        
    `;
    document.write(solving_feedback);
});

const testing_result = Math.round(correct_answer_count/sample_count*10);

document.write(`
    <p class="info">
        Правильных ответов: ${correct_answer_count}; Неправильных ответов: ${incorrect_answer_count}
    </p>
`)
document.write(`<h1>Ваша оценка - ${testing_result} из 10</h1>`)
document.write(`<img class="res_img" src="${getResultImgUrl(testing_result)}" />`)


