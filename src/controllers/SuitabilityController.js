const { suitability_profile, suitability_table} = require('../utils/constants')

module.exports = {
    store(req, res) {
        const {questions} = req.body;
        let points = 0;

        if(!questions) throw "Questionário de suitability não informado!";

        suitability_table.map((element, index) => {
            const answer = questions[index]

            const point = element[answer];

            if(point) {
                points += point;
            }
        });

        
        return res.json(suitability_profile(points));

    }
}