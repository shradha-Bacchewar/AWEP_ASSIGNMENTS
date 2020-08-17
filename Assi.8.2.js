
setInterval( function () {
  console.log("This is the setInterval fun.");
},1000);
/* 8
74VM635:2 This is the setInterval fun. */

setInterval( () => {
  console.log("This is setInterval fun using arrow fun.");
}, 5000);

let setIntrVar = function() {
  console.log("This is setInterval fun using annonymous fun; via variable.");
};
//undefined

setInterval(setIntrVar, 5000);
/* 8
4VM1043:2 This is setInterval fun using annonymous fun; via variable. */

let setIntrVar = () => {
  console.log("This is setInterval fun using arrow fun; via variable.");
};
/* undefined
3VM1043:2 This is setInterval fun using annonymous fun; via variable.
setInterval(setIntrVar, 5000);
9 */