

function fun1(fun) {
  fun();
};
//undefined

// Case 1 : Error
fun1();
/* VM137:2 Uncaught TypeError: fun is not a function
    at fun1 (<anonymous>:2:5)
    at <anonymous>:1:1 */

// Case 2 : Error
fun1(1);
/* VM137:2 Uncaught TypeError: fun is not a function
  at fun1 (<anonymous>:2:5)
  at <anonymous>:1:1 */

// Case 3 : Error  
fun1("cdac");
/* VM137:2 Uncaught TypeError: fun is not a function
  at fun1 (<anonymous>:2:5)
  at <anonymous>:1:1 */

fun1(function() {} );
//undefined

fun1( () => {} );
//undefined