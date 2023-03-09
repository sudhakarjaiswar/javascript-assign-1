// Question - 1

// let password = "confirmpassword";

// if (password == "confirmpassword") {
//     console.log("password validation successful.");
// } else  {
//     console.log("password validation unsuccessful.");
// }




//  Question -2


// program for a simple calculator
// let answer; 

// take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${answer}`);
//         break;

//     case '-':
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${answer}`);
//         break;

//     case '*':
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${answe}`);
//         break;

//     case '/':
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${answer}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }


//Question - 3 

// function colorMix (color1, color2) {
//     if ((color1 == "red" && color2 == "blue") || (color1 == "blue" && color2 == "red")) { 
//         return "violet";
//     } else if ((color1 == "red" && color2 == "yellow") || (color1 == "yellow" && color2 == "red")) { 
//         return "orange";
//     } else if ((color1 == "blue" && color2 == "yellow") || (color1 == "yellow" && color2 == "blue")) { 
//         return "green";
//     }
// }

// let myColor = colorMix("red", "yellow");
// console.log(`The color created is: ${myColor}`);

// Question 4

// const marks = [25, 35, 85, 75, 45];

// marks[0] == 33 ? console.log("lowesmarks")
// : marks[2] == 85 ? console.log("highestmarks = 85")
// : console.log("none of the them");

// question 5 

function capitaliseFLetter() {
    var input = document.getElementById("input");
    var x = document.getElementById("div");
    var string = input.value;
    x.innerHTML = string[0].toUpperCase() + string.slice(1);
};

// question 6

// function countVowel(str) {
//     const count = string.match(/[aeiou]/gi).length;
//     return count;
// }

// const str = prompt("Enter a string: ");
// const result = countVowel(str);
// console.log(result);

// //Question 7

// let arr = ["apple", "mango", "apple", "orange", "mango", "orange"];

// function removeDuplicates(arr) {
//     return arr.filter((item,index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates(arr));

// Question 8 

// let n = 6;
// let string = "";

// for ( let i = 0; i < n; i++) {
//     for ( let k = 0; k < n - i; k++) {
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// Question 9

// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 == 0) {
//         console.log(numbers[i]);
//     } else if (numbers[i] % 2 != 0) {
//         console.log(numbers[i]);
//     }
// }

// Question 11

// const celsius = prompt("Enter a celsius value: ");

// const fahrenheit = (celsius * 1.8) + 32 

// console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

// Question 13

const billDivideForm = document.getElementById('bill-divider-form');

billDivideForm.addEventListener('submit', billDividerHandler);

function billDividerHandler(event){
    event.preventDefault();
    const inputs = getInputs();
    showCalculatedOutput(inputs);
}

// get all the inputs for the bill divider
function getInputs(){
    let subtotal = document.getElementById('subtotal').value;
    let tipPercent = document.getElementById('tip').value;
    let noOfPerson = document.getElementById('no-of-person').value;
    return {subtotal, tipPercent, noOfPerson};
}

//calculate the bill divider info
function showCalculatedOutput(input){
    billDivideForm.reset();

    let totalTip = (parseFloat(input.subtotal) * parseFloat(input.tipPercent)) / 100;
    let totalAmount = parseFloat(input.subtotal) + totalTip;
    let tipPerPerson = totalTip / parseFloat(input.noOfPerson);
    let billPerPerson = totalAmount / parseFloat(input.noOfPerson);
    // console.log(totalTip, totalAmount, tipPerPerson, billPerPerson);

    document.getElementById('total-bill').innerHTML = `$ ${totalAmount.toFixed(2)}`;
    document.getElementById('bill-per-person').innerHTML = `$ ${billPerPerson.toFixed(2)}`;
    document.getElementById('total-tip').innerHTML = `$ ${totalTip.toFixed(2)}`;
    document.getElementById('tip-per-person').innerHTML = `$ ${tipPerPerson.toFixed(2)}`;
}

// Generate random number //

let x;
let y;
let z;
document.getElementById("rollbutton").onclick = function(){
    x = Math.floor(Math.random() *100) + 1;
    y = Math.floor(Math.random() *100) + 1;
    z = Math.floor(Math.random() *100) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}


// Todo list //

window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});

// change random color //

const btn = document.getElementById("button1");

const randomColor = () => {
	let val = "0123456789ABCDEF";
	let cons = "#";

	for (let i = 0; i < 6; i++) {
		cons = cons + val[Math.floor(Math.random() * 16)];
	}
	return cons;
};
console.log(randomColor);

function changeRandomColor() {
	document.body.style.backgroundColor = randomColor();
}
btn.addEventListener("click", changeRandomColor);

// highlight search text //

const p = document.getElementById("p");

function search() {
	let input = document.getElementById("input").value;

	if (input !== "") {
		let regExp = new RegExp(input, "gi");
		p.innerHTML = (p.textContent).replace(regExp, "<mark>$&</mark>");
	}
}