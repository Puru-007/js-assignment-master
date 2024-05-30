const mysql = require('../lib/mysql');

const createNews = async (news) => {
    const statement = `
        INSERT INTO news (title, description, matchId, tourId)
        VALUES (?, ?, ?, ?)
    `;
    const { title, description, matchId, tourId } = news;
    return await mysql.query(statement, [title, description, matchId, tourId]);
};

const getAllNews = async () => {
    const statement = 'select * from news;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getNewsByMatchId = async matchId => {
    const statement = 'select * from news where matchId=?';
    return await mysql.query(statement, matchId);
};

const getNewsByTourId = async tourId => {
    const statement = ' SELECT * FROM news WHERE tourId = ?';
    return await mysql.query(statement, [tourId]);

};

const getNewsBySportId = async sportId => {
    const statement = 'SELECT n.* FROM news n INNER JOIN tours t ON n.tourId = t.id WHERE t.sportId = ?';
    return await mysql.query(statement, [sportId]);
};

module.exports = {
    createNews,
    getAllNews,
    getNewsByMatchId : getNewsByMatchId,
    getNewsByTourId,
    getNewsBySportId
};
