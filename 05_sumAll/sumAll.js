const sumAll = function(...myArgs) {
    let sum = 0;
    if (myArgs.length < 2 && myArgs[0] !== NaN) return myArgs;
    
    for (arg of myArgs) {
        if (arg === NaN) return "ERROR";
        if (arg < 0) return "ERROR";
        if (!Number.isInteger(arg)) return "ERROR";
    }
    // with this out of the way, we sure have at least two numbers
    // we should go throught the minor one until the greater one,
    // but in this frist versión we are going to asume that they are in orther
    // so we are going to do it stright from the beggining. 

    // we start wit the first number lets say it is 4 and add to our sum variable
    // we ++ the index, and add it to sum;
    // repeat it until we get to the last: lets say it is 6, and then return it
    // so before we get more trouble, we should order them:
    let menor, mayor = 0;
    if (myArgs[0] < myArgs[1]) {
        menor = myArgs[0];
        mayor = myArgs[1];
    } else {
        menor = myArgs[1];
        mayor = myArgs[0];
    }

    for (let i = menor; i <= mayor; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
