function create_number_block(number) {
    let block = document.createElement("div");
    block.className = "inner_card";
    block.innerHTML += "<p>"
    for(let i = 2; i <= 20; i++) {
        block.innerHTML += `${number}×${i}=${number*i}<br>`;
    } 
    block.innerHTML+= "</p>"

    return block;
}

function generate_table() {
    for(let i = 1;i<=20;i++) {
        const table_card = document.getElementById("table_card");
        table_card.append(create_number_block(i));
    }
}

function empty_table() {
    let block = document.getElementById("table_card");
    block.innerHTML ='';
}
function open_home() {
    window.location.href = 'index.html';
}
function show_full_table() {
    const table_card = document.getElementById("table_card");
    if (table_card.style.display === 'none') {
        table_card.style.display = "flex";
        generate_table();
    } else {
        table_card.style.display = "none";
        empty_table();
    }
}

function show_num_table() {
    const num_input = document.getElementById("num_input");
    const num = parseInt(num_input.value);

    empty_table();
    const table_card = document.getElementById("table_card");
    table_card.append(create_number_block(num));
    if (table_card.style.display === 'none') {
        table_card.style.display = "flex";
    } else {
        table_card.style.display = "none";
        empty_table();
    }
}

function regenerate_num_table () {
    const num_input = document.getElementById("num_input");
    const num = parseInt(num_input.value);

    empty_table();
    const table_card = document.getElementById("table_card");
    table_card.append(create_number_block(num));
}
