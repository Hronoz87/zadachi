function zadacha1() {
    let n = Math.floor(Math.random()*1000000);
    let y = Math.floor(Math.random()*10);
    let p = 12/100;

    let m = ( n * p * (1+p)** y) / (12 * (1+p)** y-1) ;

    let s = (m*12)*y; 

    console.log(m);
    console.log(s);
}

function zadacha2() {
    let a = Math.floor(Math.random()*10);
    let b = Math.floor(Math.random()*100);
    let c = Math.floor(Math.random()*100);
    
    let D = Math.pow(b, 2) - 4*a*c;
    
    if (D < 0) {
        console.log ("Корней нет");
    }   else if (D == 0) {
        console.log ("Один корень");
        let x = -b + Math.sqrt(D)/2*a;
        console.log (x);
    
    }   else if (D > 0) {
        console.log ("Два корня");
        let x1 = -b + Math.sqrt(D)/2*a;
        let x2 = -b - Math.sqrt(D)/2*a;
        console.log(x1, x2);
    }
}
function zadacha3() {
    let a1 = Math.floor(Math.random()*10);
    let b1 = Math.floor(Math.random()*10);
    let a2 = Math.floor(Math.random()*10);
    let b2 = Math.floor(Math.random()*10);

    let k = (b1 -b2)/(a1 - a2);
    let b3 = b2 - k * a2;
    console.log(" y =" + k + "x" + " - " + b3);
}

function zadacha4() {
    let min1 = -10;
    let max1 = 10; 

    let d = Math.floor(Math.random() * (max1 - min1 +1)) + min1;


    let e = Math.floor(Math.random() * (max1 - min1 +1)) + min1;

    let f = Math.floor(Math.random() * (max1 - min1 +1)) + min1;

    let d1 = d*e*f;
    let e1 = d+e+f;

    console.log (d1);
    console.log (e1);

    if (d1 >= e1) {
        console.log ( d1 + 3);
    } else {
        console.log (e1 + 3);
    }
}
function zadacha5() {
    let min2 = -100;
    let max2 = 100;

    let a5 = Math.floor(Math.random() * (max2 - min2 +1)) + min2;
    let b5 = Math.floor(Math.random() * (max2 - min2 +1)) + min2;

    if (a5/b5) {
        console.log ("Делиться", a5%b5, Math.floor(a5/b5));
    }   else {
        console.log ("Не делиться");
    }
}
function zadacha6() {
    let a7 = Math.floor(Math.random() * (max1 - min1 +1)) + min1;
    let b7 = Math.floor(Math.random() * (max1 - min1 +1)) + min1;

    if (a5 >= 0 && b7 >= 0) {
        console.log(a5, b7, "Точка принадлежит 1 четверти");
    } else if (a5 == 0 && b7 == 0) {
            console.log (a5, b7, "Начало координат");
    } else if (a5 < 0 && b7 > 0) {
            console.log (a5, b7, "Точка принадлежит 2 четверти");
    } else if (a5 < 0 && b7 < 0) {
            console.log (a5, b7, "Точка принадлежит 3 четверти");
    } else if (a5 > 0 && b7 < 0) {
            console.log (a5, b7, "Точка принадлежит 4 четверти");
    }

}
function zadacha7() {
    let min3 = -15;
    let max3 = 15;

    let x1 = Math.floor(Math.random() * (max3 - min3 +1)) + min3;
    let y1 = Math.floor(Math.random() * (max3 - min3 +1)) + min3;
    let r =  Math.floor(Math.random() * (max1 - min1 +1)) + min1;

    let c1 = Math.sqrt(x1**2 + y1**2); // Длина гипотенузы

    if (Math.floor(c1 < r)) {
        console.log("Точка принадлежит кругу");
    } else {
        console.log("Точка не принадлежит кругу");
    }
}
function zadacha8() {
    let j = 1;
    let x4 = 10;
    let up = 1;

    while (j < x4) {
        console.log(j, x4);
        y = -0.23*j**2 + j;
        console.log(j, y );
        j += up;
    }
}
function zadacha9() {
    let x5 = 222222;
    let res = 0;
    let res1 = 1;

    for (let i = 0; i < x5.length; i++) {
        res += Number(x5[i]);
    }
    for (let i = 0; i < x5.length  ; i++) {
        res1 *=Number(x5[i]);
    }
    console.log(res);
    console.log(res1);

}
function zadacha10() {
    let n3 = Math.floor(Math.random()*100);;
    let sum1 = 0;
    let sum2 = 0;
    for ( let i = 1; i <= n3; i++ ) {
        sum1 += i;
    }

    for ( let i = 1; i <= n3; i++) {
        sum2 = i*(i +1) / 2;
    }
    
    console.log (sum1 === sum2);
    console.log (sum1);
}
function zadacha11() {
    let n2 = 123456;
    console.log(n2);
    let m2 = 0;
    while (n2 > 0) {
        m2 = Math.floor(m2*10 + n2%10);
        n2 = Math.floor(n2/10);
    }

    console.log(m2);
}
function zadacha12() {
}    
function zadacha13() {
    let rand = 1000;
    let q = 0;

    for (let i = 0; i < rand; i++) {
    let temp = Math.floor(Math.random()*1001)%2;
    if ( temp == 0) {
        q = q + 1;
    }else{}
    
}
console.log(q/rand*100 + "%");

}
function zadacha14() {
    
}
function zadacha15() {
    let val3 = prompt("Введите количество чисел Фибоначчи");

    let val4 = 1;
    let val5 = 1;
    console.log(val4);
    console.log(val5);

    for (let i = 3; i <= val3; i ++) {
        
        let temp = val4 + val5;
        val4 = val5;
        val5 = temp;
        console.log(temp);
        
    }
}
function zadacha16() {
    let arr1 = [], arr1Lenght = Math.floor(Math.random()*11);

    for (let index = 0; index < arr1Lenght; index++) {
        arr1[index] = Math.floor(Math.random()*101);
        
    }
    console.log(arr1);
    let arr4 = arr1;
    arr4.reverse();
    console.log(arr4);
}
function zadacha17() {
    let arr_new = [], arr_newlenght = 11;
         minArrValue = -100, maxArrValue = 100;
    for (let i = 0; i < arr_newlenght; i ++) {
        arr_new[i] = Math.floor(Math.random() * (maxArrValue - minArrValue +1)) + minArrValue;
    }

    arr2lenght = Math.floor(arr_newlenght / 2);
    console.log(arr_new);
    let arr3 = arr_new;   


    for (let i = 0; i < arr_newlenght-6; i++) {
        
        let temp = arr3[i];
        arr_new[i] = arr_new[arr_newlenght - arr2lenght + i];
        arr_new[arr_newlenght - arr2lenght + i] = temp;
    
    }


console.log(arr3);
}
function zadacha18() {
    let array1 = [];
    array1Length =  11;

    for (let i = 0; i < array1Length; i ++) {
        array1[i] = Math.floor(Math.random()*(100 - (-20) + 1)) - 20;
    } 
    let sum = 0;
    let sr_sum = 0;
    for (let i = 0; i < array1Length; i ++) {
        sum += array1[i];
        sr_sum = sum / array1Length;
    }
    let array2 = [];
    for (let i = 0; i < array1Length; i ++){
        if (sr_sum > array1[i]) {
        let temp = array1[i];
        array2[i] = temp;
        }
        else 
            continue
               
    }
console.log(array1);
console.log(sum);
console.log(sr_sum);
console.log (array2);
}

function zadacha19() {
    function isEven(n) {
        if (n == 0) {
        return true;
      } else if (n == 1) {
        return false;
      } else if (n < 0) {
        return isEven(-n);
      } else {
        return isEven(n - 2);
      }
      }
    
  console.log(isEven(50));
  console.log(isEven(75));
  console.log(isEven(-1));
    
}

function zadacha20() {
        function arrayToList(array)
    {
        let list = {};
        let lastRest = list;
        array.forEach(function(elem){
                        lastRest.value = elem;
                        lastRest.rest = {};
                        lastRest = lastRest.rest;
                    }) ;
        lastRest.rest = null;
        return list;
    }
    function listToArray(list, array)
    {
        array = array || [];
        if(list.rest != null)
        {
            array.push(list.value);
            list = list.rest;
            return listToArray(list, array);
        }
        else
        {
            return array;
        }
    }
    function prepend(elem, list)
    {
        return {value: elem, rest: list};
    }
    function nth(list, index, current)
    {
        current = current || 0;
        if(index == current)
        {
            return list.value;
        }
        else
        {
            if(list != null)
            {
                return nth(list.rest, index, current + 1);
            }
            else
            {
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
    function deepEqual(obj1, obj2)
{
    if(typeof obj1 == typeof obj1)
    {
        if(typeof obj1 == "object" && obj1 != null)
        {
            let equals = true;
            for(let property in obj1)
            {
                if(obj1.hasOwnProperty(property) && obj2.hasOwnProperty(property))
                {
                    if(!deepEqual(obj1[property], obj2[property]))
                    {
                        equals = false;
                    }
                }
                else
                {
                    equals = false;
                }
            }
            return equals;
        }
        else
        {
            return obj1 === obj2;
        }
    }
    else
    {
        return false;
    }
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
}