const countOverlappingClaims = (claims) => {
    let fabric = [];
    let count = 0;
    claims.forEach(claim => addClaimToFabric(fabric,claim));
    
    fabric.forEach(column => {
        column.forEach(cell => cell === 'X' ? count++ : true)
    })
    return count;
}

const addClaimToFabric = (fabric,claim) => {
    for(i = 0; i < claim.width; i++) {
        for(j = 0; j < claim.height; j++) {
            fillSquare(fabric,claim.coordinates.x + i,claim.coordinates.y + j, claim.id);
        }
    }
}

const fillSquare = (fabric,x,y,id) => {
    if(!fabric[y]) fabric[y] = [];

    if(fabric[y][x] === undefined){
        fabric[y][x] = id;
    } else {
        fabric[y][x] = 'X';
    }
}

exports.countOverlappingClaims = countOverlappingClaims;