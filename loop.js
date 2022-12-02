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

