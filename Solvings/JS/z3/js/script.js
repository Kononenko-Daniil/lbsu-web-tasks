function showInfoClick() {
    let block = document.getElementById('hidden_block');
    if(block.style.display === "" || block.style.display === "none") {
        block.style.display = 'flex';
    }
}

function closeInfoClick() {
    let block = document.getElementById('hidden_block');
    if(block.style.display === 'flex') {
        block.style.display = 'none';
    }
}

function answer() {
    const input = document.getElementById('answer');
    const user_answer = input.value;
    if(user_answer === "Ворняны-Жодишки") {
        alert("Правильный ответ))");
    } else {
        alert("Неправильный ответ((");
    }
}

function setActiveImg() {
    let img = document.getElementById('vandrouki_img');
    img.src = 'images/active.gif';
}

function setNonActiveImg() {
    let img = document.getElementById('vandrouki_img');
    img.src = 'images/gray.gif';
}