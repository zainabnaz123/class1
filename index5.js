"use strict";
let todos1 = ["class attendance", "lunch", "dinner"];
todos1.splice(0, 1, "snacks");
console.log(todos1);
var index = 0;
console.log("before loop");
while (index <= 10) {
    var num = 5 * index;
    console.log("5 *", +index + "=" + num);
    index = index + 1;
}
console.log("after loop");
