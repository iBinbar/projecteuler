/* Euler problem 1 */
var total = 0;
for (i = 1; i < 1000; i++) {
    if (i % 3 === 0) {
        total += i;
    } else if (i % 5 === 0) {
        total += i;
    }
};
console.log(total);


/* Euler problem 2 */
var even_total = 0;
var a = 0;
var b = 1;
var f;
   while ( even_total < 4000000 ) {
        f = a + b;
        a = b;
        b = f;
        if ( f % 2 === 0) {
        even_total = even_total + b;
    }
   }
alert(even_total);

/* Euler problem 3*/
var pf = 600851475143;
for (i=2; i<pf; i++) {
    while (pf % i === 0) {
        pf = pf/i;
    }
};
alert(pf);