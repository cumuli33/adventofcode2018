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

const executeOperations = (operations, result = 0) => {
    operations.forEach(operation => {
        switch(operation.operator) {
            case '+':
                result += operation.value;
                break;
            case '-':
                result -= operation.value;
                break;
        }
    });
    return result;
}

const findRepeatingFrequency = (input) => {
    return 0;
}

exports.findRepeatingFrequency = findRepeatingFrequency;
exports.calculateFrequency = calculateFrequency;