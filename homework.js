// -------------------------- Home work #4 --------------------------
// -------------------------- Vasilenko Max --------------------------

// ----- Function Tasks -----

// Task #1

function multiply() {
    let res = 1;
    if (arguments.length === 0) {
        res = 0
    }
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            return console.log('Error')
        }
        res *= arguments[i];
    }
    return console.log(res);
}

// multiply();


// Task #2


function reverseString() {
    let arr = [];
    let str = '';
    let newStr = '';

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'string') {
            return console.log('Error')
        }
        str += arguments[i];
        arr = str.split('');
        newStr += arr.reverse().join('');
    }
    return console.log(newStr);
}

// reverseString('max max max');


// Task 3


function getCodeFromString() {

    let str = '';
    let resStr = '';

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'string') {
            return console.log('Error')
        }
        str = arguments[i];
    }
    for (let i = 0; i < str.length; i++) {
        resStr += str.charCodeAt(i) + ' ';
    }
    return console.log(resStr);
}

// getCodeFromString('hello');


// Task 4

function game() {

    let guestNumb = +prompt('Введите число от 1 до 10');
    let randomNumb = Math.floor(Math.random() * 10) + 1;

    if (typeof guestNumb !== 'number') {
        console.log('Это не число');
    } else if (guestNumb > 10) {
        console.log('Число больше 10');
    } else if (guestNumb < 1) {
        console.log('Число меньше 1');
    } else if (guestNumb === randomNumb) {
        console.log('А вы счасливчик молодой человек')
    } else {
        console.log(
            `Вы не угадали, ваше число ${guestNumb}, а выпало число ${randomNumb}`
        );
    }
}

// Task 5

function getArray(n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        if (typeof n !== 'number') {
            return console.log('Not a number')
        }
        arr[i] = arr.push(i);
    }
    return console.log(arr);

}

// getArray(6);


// Task 6
function doubleArray(arr) {
    if (typeof arr !== 'object') {
        return console.log('Not a object')
    }
    return Array.prototype.concat.apply(arr, arr);
}

// Task 7

function changeArray() {

    let arr = [];
    let str = '';


    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'object') {
            return console.log('Error')
        }
        arr[i] = arguments[i];
        arr[i] = arr[i].slice(1);
        str = arr.join(',');

    }
    return console.log(arr)
}

// changeArray([1,2,3]);

// Task 8
users = [{name: 'Denis', age: 29, gender: 'male'}, {name: 'Ivan', age: 20, gender: 'male'}];

function funcGetUsers(arr, key, value) {
    rez = arr.filter(function (item) {
        return item[key] === value;
    });
    return console.log(rez)
}

// funcGetUsers(users, 'age', 29);

// High-Order Func
// Task 1

function processArray(arr, callback) {
    if (!Array.isArray(arr)) return console.log('Передайте массив');
    let newStr = 'New value : ';
    return console.log(newStr += callback(arr));
}

function handler1(item) {
    let str = item.join(' ');
    let arr = str.split(' ');
    let newStr = '';
    for (let i = 0; i < arr.length; i++) {
        newStr += arr[i][0].toUpperCase() + arr[i].slice(1) + '';
    }
    return newStr
}

function handler2(arr){
    let arr2 = arr.map(function (item) {
        return item*10;
    });
    return arr2;
}

function handler3(arr){
    rez = arr.map(function (item) {
        return `${item.name} is ${item.age}`;
    });
    return rez
}

function handler4(arr){
    rez = arr.map(function (item) {
        return item.split('').reverse().join('')
    });
    return rez
}

processArray(['My','name','is','Trinity'], handler1);
processArray([10,20,30], handler2);
processArray([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3);
processArray(['abc', '123'], handler4);





