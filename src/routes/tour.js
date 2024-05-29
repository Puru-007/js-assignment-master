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
        // try {
        //     const limit = parseInt(req.query.limit, 1) || 1;
        //     const cursor = req.query.cursor;
        
        //     const matches = await Tour.getMatchesByTourName(cursor, limit);
        //     const nextCursor = matches.length ? matches[matches.length - 1].matchId : null;
        //     res.status(200).send({ cursor: nextCursor, matches });
        //   } catch (error) {
        //     console.error('Error fetching matches:', error);
        //     res.status(500).send({ error: 'Internal Server Error' });
        //   }
////////////////

        // try {
        //     const params = {
        //         name: req.query.name,
        //         limit: req.query.limit,
        //         cursor: req.query.cursor
        //     };
        //     const result = await Tour.getMatchesByTourName(params);
        //     console.log("Res" + result);
        //     return res.json(result);
        // } catch (error) {
        //     return next(error);
        //     // return res.status(500).json({ error: error.message });
        // }





        ///////////////
        try {
            let params = req.query;
            let result = await Tour.getMatchesByTourName(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
}