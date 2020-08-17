
function example() {
  console.log(1);
};
//undefined

function example() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
};
/* undefined

example();
VM1487:2 1
VM1487:3 2
VM1487:4 3
VM1487:5 4
VM1487:6 5
undefined */

function blockFun() {
  console.log(1);
  console.log(2);

  setInterval(function() {
      console.log("3, This callback fun using annonymous fun.")
  },3000);

  console.log(4);
  console.log(5);

};

/* undefined
blockFun();
VM1794:2 1
VM1794:3 2
VM1794:9 4
VM1794:10 5
undefined
4VM1794:6 3, This callback fun using annonymous fun. */