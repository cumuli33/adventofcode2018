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

const findNearlyEqualIds = (ids) => {
    var result = '';
    ids.forEach((id, i) => {
        ids.forEach((otherId,j) => {
            const idChars = [...id];
            const otherIdChars = [...otherId];

            const diff = idChars.reduce((acc,curr, index) => acc + (curr === otherIdChars[index] ? 0 : 1),0);
            
            if(diff === 1) {
                result = idChars.reduce((acc,curr, index) => acc + (curr === otherIdChars[index] ? curr : ''),'');
            }
        });
    });
    return result;
}

exports.findNearlyEqualIds = findNearlyEqualIds;
exports.findLetterCount = findLetterCount;
exports.calculateCheckSum = calculateCheckSum;