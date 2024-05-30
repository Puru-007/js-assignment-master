const { createNews, getNewsByMatchId, getNewsByTourId, getNewsBySportId } = require('../models/news');
const News = require('../models/news');

const createNewsController = async (params) => {
    const { title, description, matchId, tourId } = params;
    if (!title || !description) {
        throw new Error('Missing required parameters: title or description');
    }
    await createNews({ title, description, matchId, tourId });
};

const getAllNews = async () => {
    return await News.getAllNews();
}

const getNewsByMatchIdController = async matchId => {
    if (!matchId) {
        throw new Error('Missing required parameter: matchId');
    }
    return await News.getNewsByMatchId(matchId);
};

const getNewsByTourIdController = async tourId => {
    if (!tourId) {
        throw new Error('Missing required parameter: tourId');
    }
    return await News.getNewsByTourId(tourId);
};

const getNewsBySportIdController = async sportId => {
    if (!sportId) {
        throw new Error('Missing required parameter: sportId');
    }
    return await News.getNewsBySportId(sportId);
};

module.exports = {
    createNews: createNewsController,
    getAllNews: getAllNews,
    getNewsByMatchId: getNewsByMatchIdController,
    getNewsByTourId: getNewsByTourIdController,
    getNewsBySportId: getNewsBySportIdController
};
