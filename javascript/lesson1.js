var result = 0;

function sum(a) {

    function f(nextValue) {
        if (nextValue !== undefined) {
            result += nextValue;
        }
        return f;
    }

    f.toString = function() {
        return result;
    };

    if (a === undefined) {
        return f;
    }
    else {
        result += a;
        return f;
    }
}

sum(1)(2); //3
sum(); //3
sum(2)(2); //7
sum(1)()(1); //9