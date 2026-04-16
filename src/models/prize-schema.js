module.exports = (db) => 
    db.model(
        'Prizes',
        db.Schema({
            prizeId: Number,
            name: String,
            quota: Number,
            initialQuota: Number
        })
    );