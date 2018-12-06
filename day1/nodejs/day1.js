const calculateFrequency = (input) => {
    const regex = /([+-]?)(\d*)/;
    operations = input.split('\n').map(value => regex.exec(value)).map(value => ({ operator: value[1], value: Number(value[2])}));
    
    var result = 0;
    
    operations.forEach(operation => {
        switch(operation.operator) {
            case '+':
                result += operation.value;
                break;
            case '-':
                result -= operation.value;
                break;
        }
    })
    
    return result;
}

exports.calculateFrequency = calculateFrequency;