
let arr = [];
//undefined

let arr = [1,2,3];
//undefined

let arr = [1.1,2.2,3.3];
//undefined

let arr = ["cdac","dac","awp"];
//undefined

let arr = [1,"dac",1.2];
//undefined

let arr = [1,"dac",1.2,function() {}, true, () => {}];
//undefined

let demo = ["CDAC", "DAC", "JUHU", "KHARGHAR", "PG-DAC"];
//undefined

let ele1 = arr[0];
//undefined

let ele2 = arr[4];
//undefined

ele1;
//1

ele2;
//true

demo;
/* (5) ["CDAC", "DAC", "JUHU", "KHARGHAR", "PG-DAC"]0: "CDAC"1: "DAC"2: "JUHU"3: "KHARGHAR"4: "PG-DAC"length: 5__proto__: Array(0) */

arr;
/* (6) [1, "dac", 1.2, ƒ, true, ƒ]0: 11: "dac"2: 1.23: ƒ ()4: true5: () => {}length: 6__proto__: Array(0) */

for( let i = 0; i <= length.demo; i++ ) {
    const ele = demo[i];
    console.log(ele);
};
//undefined

demo;
/* (5) ["CDAC", "DAC", "JUHU", "KHARGHAR", "PG-DAC"]
demo.push("FEB20");
6 */

demo;
/* (6) ["CDAC", "DAC", "JUHU", "KHARGHAR", "PG-DAC", "FEB20"] */

demo.pop();
//"FEB20"

demo.splice(1,0,"2020","AWP");
// []length: 0__proto__: Array(0)

demo;
/* (7) ["CDAC", "2020", "AWP", "DAC", "JUHU", "KHARGHAR", "PG-DAC"] */

demo.splice(4,1);
//["JUHU"]

demo;
/* (6) ["CDAC", "2020", "AWP", "DAC", "KHARGHAR", "PG-DAC"] */

let demo01 = [1,2,3,4,5];
for( let i = 0; i <= demo01.length; i++ ) {
    let ele = demo01[i];
    console.log(ele);
};
//undefined