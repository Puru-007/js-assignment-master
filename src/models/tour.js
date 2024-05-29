const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async (name, limit, cursor) => {
    let statement = 'select matches.id , matches.name as Match_Name , tours.name as Tour_Name , matches.status , matches.format , matches.startTime , matches.endTime  from matches left join tours on matches.tourId = tours.id where tours.name = ?';
    
    const queryParams = [name];

    if (cursor) {
        statement += ' AND matches.id > ?';
        queryParams.push(cursor);
    }

    statement += ' ORDER BY matches.id ASC LIMIT ?';
    queryParams.push(limit);
    
    console.log(statement);
    console.log(queryParams);

    return await mysql.query(statement, queryParams);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}
