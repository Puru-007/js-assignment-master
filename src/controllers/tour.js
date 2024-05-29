const Tour = require('../models/tour');

const getAllTours = async () => {
    return await Tour.getAllTours();
}

const getMatchesByTourName = async params => {
    const { name } = params;

    if (!name) {
        throw new Error('Missing required parameter: name');
    }

    return await Tour.getMatchesByTourName(params);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}



// const Tour = require('../models/tour');

// const getAllTours = async () => {
//     return await Tour.getAllTours();
// }

// const getMatchesByTourName = async params => {
//     const {name, limit = 2, cursor } = params;

//     // console.log("Name- " + name)

//     if (!name) {
//         throw new Error('Missing required parameter: name');
//     }

//     const matches = await Tour.getMatchesByTourName(name, parseInt(limit), cursor);
//     let nextCursor = null;

//     console.log("Matches- " + matches.length)
//     if (matches.length > 0) {
//         nextCursor = matches[matches.length - 1].id;
//     }

//     console.log("nextCursor- " + nextCursor)

//     return {
//         matches: matches,
//         nextCursor: nextCursor
//     };
// }

// module.exports = {
//     getMatchesByTourName: getMatchesByTourName
// }
