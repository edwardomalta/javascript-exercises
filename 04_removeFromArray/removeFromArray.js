const removeFromArray = function(...myArgs) {
    let array = myArgs[0];

    if (myArgs.length < 2) return array;

    for (let i = 1; i < myArgs.length; i++) {
        let index = 0;
        while (index > -1){
            index = array.indexOf(myArgs[i]);
            if (index === -1) break;
            array.splice(index, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
