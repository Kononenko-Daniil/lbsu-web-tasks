function pr_ch(n) {
	for (i=2; i*i<=n;i++) {
		if ((n % i) ==0) {
			return 0;
        }
    }

	return 1;
}

let number_count = prompt("Введите количество выводимых чисел", [100]);
if(!parseInt(number_count)) {
    number_count = 100;
}

let prost_numbers = [];
for (chislo=2; chislo<number_count; chislo++) {		
    if (pr_ch(chislo)) {
        prost_numbers.push(chislo);

        document.write('<span class="myred"> '+ chislo +' '+ '</span>');
    } else {
        document.write('<span class="myblue"> '+ chislo +' '+ '</span>'); 
    } 
}   

document.write('<h3>Простые числа</h3>');

let symbol_counter = 0;
const symbol_per_string = 10;
prost_numbers.forEach((number) => {
    document.write('<span>' + number + '; ' + '</span>');
    symbol_counter++;

    if(symbol_counter % symbol_per_string == 0) {
        document.write('<br>');
    }
});