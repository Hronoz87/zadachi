function zadacha1() {
    var n = Math.floor(Math.random() * 1000000);
    var y = Math.floor(Math.random() * 10);
    var p = 12 / 100;
    var m = (n * p * Math.pow((1 + p), y)) / (12 * Math.pow((1 + p), y) - 1);
    var s = (m * 12) * y;
    console.log(m);
    console.log(s);
}
function zadacha2() {
    var a = Math.floor(Math.random() * 10);
    var b = Math.floor(Math.random() * 100);
    var c = Math.floor(Math.random() * 100);
    var D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        console.log("Корней нет");
    }
    else if (D == 0) {
        console.log("Один корень");
        var x = -b + Math.sqrt(D) / 2 * a;
        console.log(x);
    }
    else if (D > 0) {
        console.log("Два корня");
        var x1 = -b + Math.sqrt(D) / 2 * a;
        var x2 = -b - Math.sqrt(D) / 2 * a;
        console.log(x1, x2);
    }
}
function zadacha3() {
    var a1 = Math.floor(Math.random() * 10);
    var b1 = Math.floor(Math.random() * 10);
    var a2 = Math.floor(Math.random() * 10);
    var b2 = Math.floor(Math.random() * 10);
    var k = (b1 - b2) / (a1 - a2);
    var b3 = b2 - k * a2;
    console.log(" y =" + k + "x" + " - " + b3);
}
function zadacha4() {
    var min1 = -10;
    var max1 = 10;
    var d = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    var e = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    var f = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    var d1 = d * e * f;
    var e1 = d + e + f;
    console.log(d1);
    console.log(e1);
    if (d1 >= e1) {
        console.log(d1 + 3);
    }
    else {
        console.log(e1 + 3);
    }
}
function zadacha5() {
    var min2 = -100;
    var max2 = 100;
    var a5 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
    var b5 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
    if (a5 / b5) {
        console.log("Делиться", a5 % b5, Math.floor(a5 / b5));
    }
    else {
        console.log("Не делиться");
    }
}
function zadacha6() {
    var max1 = 10, min1 = (-10);
    var a7 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    var b7 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    if (a7 >= 0 && b7 >= 0) {
        console.log(a7, b7, "Точка принадлежит 1 четверти");
    }
    else if (a7 == 0 && b7 == 0) {
        console.log(a7, b7, "Начало координат");
    }
    else if (a7 < 0 && b7 > 0) {
        console.log(a7, b7, "Точка принадлежит 2 четверти");
    }
    else if (a7 < 0 && b7 < 0) {
        console.log(a7, b7, "Точка принадлежит 3 четверти");
    }
    else if (a7 > 0 && b7 < 0) {
        console.log(a7, b7, "Точка принадлежит 4 четверти");
    }
}
function zadacha7() {
    var min3 = -15;
    var max3 = 15;
    var x1 = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;
    var y1 = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;
    var r = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;
    var c1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2)); 
    if (Math.floor(c1 < r)) {
        console.log("Точка принадлежит кругу");
    }
    else {
        console.log("Точка не принадлежит кругу");
    }
}
function zadacha8() {
    var j = 1;
    var x4 = 10;
    var up = 1;
    while (j < x4) {
        console.log(j, x4);
        y = -0.23 * Math.pow(j, 2) + j;
        console.log(j, y);
        j += up;
    }
}
function zadacha9() {
    var x5 = 222222;
    var res = 0;
    var res1 = 1;
    for (var i = 0; i < x5.length; i++) {
        res += Number(x5[i]);
    }
    for (var i = 0; i < x5.length; i++) {
        res1 *= Number(x5[i]);
    }
    console.log(res);
    console.log(res1);
}
function zadacha10() {
    var n3 = Math.floor(Math.random() * 100);
    ;
    var sum1 = 0;
    var sum2 = 0;
    for (var i = 1; i <= n3; i++) {
        sum1 += i;
    }
    for (var i = 1; i <= n3; i++) {
        sum2 = i * (i + 1) / 2;
    }
    console.log(sum1 === sum2);
    console.log(sum1);
}
function zadacha11() {
    var n2 = 123456;
    console.log(n2);
    var m2 = 0;
    while (n2 > 0) {
        m2 = Math.floor(m2 * 10 + n2 % 10);
        n2 = Math.floor(n2 / 10);
    }
    console.log(m2);
}
function zadacha12() {
}
function zadacha13() {
    var rand = 1000;
    var q = 0;
    for (var i = 0; i < rand; i++) {
        var temp = Math.floor(Math.random() * 1001) % 2;
        if (temp == 0) {
            q = q + 1;
        }
        else { }
    }
    console.log(q / rand * 100 + "%");
}
function zadacha14() {
}
function zadacha15() {
    var val3 = prompt("Введите количество чисел Фибоначчи");
    var val4 = 1;
    var val5 = 1;
    console.log(val4);
    console.log(val5);
    for (var i = 3; i <= val3; i++) {
        var temp = val4 + val5;
        val4 = val5;
        val5 = temp;
        console.log(temp);
    }
}
function zadacha16() {
    var arr1 = [], arr1Lenght = Math.floor(Math.random() * 11);
    for (var index = 0; index < arr1Lenght; index++) {
        arr1[index] = Math.floor(Math.random() * 101);
    }
    console.log(arr1);
    var arr4 = arr1;
    arr4.reverse();
    console.log(arr4);
}
function zadacha17() {
    var arr_new = [], arr_newlenght = 11;
    minArrValue = -100, maxArrValue = 100;
    for (var i = 0; i < arr_newlenght; i++) {
        arr_new[i] = Math.floor(Math.random() * (maxArrValue - minArrValue + 1)) + minArrValue;
    }
    arr2lenght = Math.floor(arr_newlenght / 2);
    console.log(arr_new);
    var arr3 = arr_new;
    for (var i = 0; i < arr_newlenght - 6; i++) {
        var temp = arr3[i];
        arr_new[i] = arr_new[arr_newlenght - arr2lenght + i];
        arr_new[arr_newlenght - arr2lenght + i] = temp;
    }
    console.log(arr3);
}
function zadacha18() {
    var array1 = [];
    array1Length = 11;
    for (var i = 0; i < array1Length; i++) {
        array1[i] = Math.floor(Math.random() * (100 - (-20) + 1)) - 20;
    }
    var sum = 0;
    var sr_sum = 0;
    for (var i = 0; i < array1Length; i++) {
        sum += array1[i];
        sr_sum = sum / array1Length;
    }
    var array2 = [];
    for (var i = 0; i < array1Length; i++) {
        if (sr_sum > array1[i]) {
            var temp = array1[i];
            array2[i] = temp;
        }
        else
            continue;
    }
    console.log(array1);
    console.log(sum);
    console.log(sr_sum);
    console.log(array2);
}
function zadacha19() {
    function isEven(n) {
        if (n == 0) {
            return true;
        }
        else if (n == 1) {
            return false;
        }
        else if (n < 0) {
            return isEven(-n);
        }
        else {
            return isEven(n - 2);
        }
    }
    console.log(isEven(50));
    console.log(isEven(75));
    console.log(isEven(-1));
}
function zadacha20() {
    function arrayToList(array) {
        var list = {};
        var lastRest = list;
        array.forEach(function (elem) {
            lastRest.value = elem;
            lastRest.rest = {};
            lastRest = lastRest.rest;
        });
        lastRest.rest = null;
        return list;
    }
    function listToArray(list, array) {
        array = array || [];
        if (list.rest != null) {
            array.push(list.value);
            list = list.rest;
            return listToArray(list, array);
        }
        else {
            return array;
        }
    }
    function prepend(elem, list) {
        return { value: elem, rest: list };
    }
    function nth(list, index, current) {
        current = current || 0;
        if (index == current) {
            return list.value;
        }
        else {
            if (list != null) {
                return nth(list.rest, index, current + 1);
            }
            else {
                return undefined;
            }
        }
    }
    console.log(arrayToList([10, 20]));
    console.log(listToArray(arrayToList([10, 20, 30])));
    console.log(prepend(10, prepend(20, null)));
    console.log(nth(arrayToList([10, 20, 30]), 1));
}
function zadacha21() {
    function deepEqual(obj1, obj2) {
        if (typeof obj1 == typeof obj1) {
            if (typeof obj1 == "object" && obj1 != null) {
                var equals = true;
                for (var property in obj1) {
                    if (obj1.hasOwnProperty(property) && obj2.hasOwnProperty(property)) {
                        if (!deepEqual(obj1[property], obj2[property])) {
                            equals = false;
                        }
                    }
                    else {
                        equals = false;
                    }
                }
                return equals;
            }
            else {
                return obj1 === obj2;
            }
        }
        else {
            return false;
        }
    }
    var obj = { here: { is: "an" }, object: 2 };
    console.log(deepEqual(obj, obj));
    console.log(deepEqual(obj, { here: 1, object: 2 }));
    console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
}
