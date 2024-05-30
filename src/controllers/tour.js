const Tour = require('../models/tour');

const getAllTours = async () => {
    return await Tour.getAllTours();
}

const getMatchesByTourName = async params => {
    const {name, limit = 2, cursor } = params;

    if (!name) {
        throw new Error('Missing required parameter: name');
    }

    const matches = await Tour.getMatchesByTourName(name, parseInt(limit), cursor);
    let nextCursor = null;

    if (matches.length > 0) {
        nextCursor = matches[matches.length - 1].id;
    }

    return {
        matches: matches,
        nextCursor: nextCursor
    };
}

module.exports = {
    getMatchesByTourName: getMatchesByTourName
}
