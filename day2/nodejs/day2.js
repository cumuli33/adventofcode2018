const findLetterCount = (id) => {
    const chars = id.split('');

    let countChars = {};
    chars.forEach(char => {
        if(countChars[char] !== undefined){
            countChars[char]++;
        } else {
            countChars[char] = 1;
        }
    });
    return Object.values(countChars).reduce((acc,curr) => {
        [twiceLetter, threeTimesLetter] = acc;
        if(curr === 2) {
            twiceLetter = true;
        }else if(curr === 3) {
            threeTimesLetter = true;
        }
        return [twiceLetter, threeTimesLetter];
    },[false,false]);
}

const calculateCheckSum = (ids) => {
    let twiceLetterCount = 0;
    let threeTimesLetterCount = 0;
    ids.forEach(id => {
        [twiceLetter, threeTimesLetter] = findLetterCount(id);
        if(twiceLetter) twiceLetterCount++;
        if(threeTimesLetter) threeTimesLetterCount++;
    });
    return twiceLetterCount * threeTimesLetterCount;
}

exports.findLetterCount = findLetterCount;
exports.calculateCheckSum = calculateCheckSum;