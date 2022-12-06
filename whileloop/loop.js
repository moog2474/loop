//1. 10 хүртэлх натурал тоог хэвлэх программ бич

let number = 1;
let result = '';
while (number <= 10) {
    result += "\n" + number;
    number++;
}
console.log(result);

//2. 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич

let result1 = "";
let number1 = 0;

while (number1 < 10) {
    if (number1 % 2 == 1) {
        result1 += number1 + "\n";
    }
    number1++;
}
console.log(result1);

//3. 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич

let result2 = "";
let number2 = 1;

while (number2 <= 10) {
    if (number2 % 2 == 0) {
        result2 += number2 + "\n";
    }
    number2++;
}
console.log(result2);

//4. 100 хүртэлх натурал тооны нийлбэрийг олох программ бич
let a = 0;
let digit = 100;
let i = 1;

while (i <= digit) {
    a = a + i;
    i++;
}
console.log(a);

//5. N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич

let c = 1;
let res = '';
let resnum = prompt('too oruulna uu');
while (c <= resnum) {
    res += "\n" + c;
    c++;
}
console.log(res);

let d = 0;
let f = resnum;
let g = 1;

while (g <= f) {
    d = d + g;
    g++;
}
console.log(d);

//6. Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич

let t = prompt("duriin too oruulna uu");
let y = true;
if (t === 1) {
    console.log(`${t} ni anhnii too mun baina`);
}
else if (t > 1) {
    for (let i = 2; i < t; i++) {
        if (t % i == 0) {
            y = false;
            break;
        }
    }
    if (y) {
        console.log(`${t} bol anhnii too mun`);
    } else {
        console.log(`${t} bol anhnii TOO BISHH`);
    }
}
else {
    console.log("bol anhnii TOO BISHH");
}

//7. Өгөгдсөн интервал дахь анхны тоог хэвлэх программ бич

let as = 10;
let ad = 30;
for (let i = as; i <= ad; i++) {
    let asd = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            asd = 1;
            break;
        }
    }
    if (i > 1 && asd == 0) {
        console.log(i);
    }
}