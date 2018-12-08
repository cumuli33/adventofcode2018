const countOverlappingClaims = (fabric) => {
    let count = 0;

    fabric.forEach(column => {
        column.forEach(cell => cell === 'X' ? count++ : true)
    })
    return count;
}

const constructFabric = (claims, completeClaims) => {
    let fabric = [];
    let claimIds = {};
    claims.forEach(claim => {
        claimIds[claim.id] = '';
        addClaimToFabric(fabric,claim,(fields) => {
            delete claimIds[fields[0]];
            delete claimIds[fields[1]];
        })
    });
    if(completeClaims)completeClaims(Object.keys(claimIds));
    return fabric;
}

const addClaimToFabric = (fabric,claim,conflictCallback) => {
    for(i = 0; i < claim.width; i++) {
        for(j = 0; j < claim.height; j++) {
            fillSquare(fabric,claim.coordinates.x + i,claim.coordinates.y + j, claim.id,conflictCallback);
        }
    }
}

const fillSquare = (fabric,x,y,id,conflictCallback) => {
    if(!fabric[y]) fabric[y] = [];

    if(fabric[y][x] === undefined){
        fabric[y][x] = id;
    } else {
        if(conflictCallback)conflictCallback([fabric[y][x],id]);
        fabric[y][x] = 'X';
    }
}

exports.countOverlappingClaims = countOverlappingClaims;
exports.constructFabric = constructFabric;