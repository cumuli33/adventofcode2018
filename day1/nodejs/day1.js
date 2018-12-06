const calculateFrequency = (input) => {
    const operations = parseInputToOperations(input);    
    return executeOperations(operations);
}

const parseInputToOperations = (input) =>  {
    const regex = /([+-]?)(\d*)/;
    return input.split('\n')
            .map(value => regex.exec(value))
            .map(value => ({ operator: value[1], value: Number(value[2])}));
}

const executeOperations = (operations, result = 0, verifyFunction) => {
    operations.some(operation => {
        switch(operation.operator) {
            case '+':
                result += operation.value;
                break;
            case '-':
                result -= operation.value;
                break;
        }
        if(verifyFunction) {
            return verifyFunction(result,operation);
        } else {
            return false;
        }
    });
    return result;
}

const findRepeatingFrequency = (input) => {
    const operations = parseInputToOperations(input);

    let visitedFrequencys = {0:true};
    let currentFrequency = 0;
    let result;
    while(result === undefined){
        currentFrequency = executeOperations(operations,currentFrequency,(value,operation) => {
            if(visitedFrequencys[value]){
                result = value;
                return true;
            } else {
                visitedFrequencys[value] = true;
                return false;
            }
        });
    }
    
    return result;
}

exports.findRepeatingFrequency = findRepeatingFrequency;
exports.calculateFrequency = calculateFrequency;