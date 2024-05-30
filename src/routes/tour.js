const Tour = require('../controllers/tour');

module.exports = function(app) {
    app.route('/tours').get(async (req, res, next) => {
        try {
            return res.json(await Tour.getAllTours());
        } catch (err) {
            return next(err);
        }
    });

    app.route('/tour/matches').get(async (req, res, next) => {
        try {
            const params = {
                name: req.query.name,
                limit: req.query.limit,
                cursor: req.query.cursor
            };
            const result = await Tour.getMatchesByTourName(params);
            return res.json(result);
        } catch (error) {
            return next(error);
        }
    });
}