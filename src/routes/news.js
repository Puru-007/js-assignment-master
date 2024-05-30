const News = require('../controllers/news');

module.exports = function (app) {
    app.route('/news').get(async (req, res, next) => {
        try {
            return res.json(await News.getAllNews());
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news').post(async (req, res, next) => {
        try {
            const params = {
                title: req.query.title,
                description: req.query.description,
                matchId: req.query.matchId,
                tourId: req.query.tourId
            }
            return res.json(await News.createNews(params));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/match').get(async (req, res, next) => {
        try {
            return res.json(await News.getNewsByMatchId(req.query.matchId));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour').get(async (req, res, next) => {
        try {
            return res.json(await News.getNewsByTourId(req.query.tourId));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/sport').get(async (req, res, next) => {
        try {
            return res.json(await News.getNewsBySportId(req.query.sportId));
        } catch (err) {
            return next(err);
        }
    });
}

