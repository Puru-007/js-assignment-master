const Sport = require('../models/sport');

const getAllSportsToursAndMatches = async () => {
    const matches = await Sport.getAllSportsToursAndMatches();
    console.log("This are my matches - " + matches)
    const res = {};
    matches.forEach(match => {
        const { id, sportName, tourName, matchName, startTime } = match;
        if (!res[sportName]) {
            res[sportName] = {};
        }
        if (!res[sportName][tourName][id]) {
            res[sportName][tourName] = [];
        }
        res[id][sportName][tourName].push(matchName);
    });
    return res;
}

module.exports = {
    getAllSportsToursAndMatches: getAllSportsToursAndMatches
}