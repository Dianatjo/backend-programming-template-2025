module.exports = (db) => 
    db.model(
        'GachaLogs',
        db.Schema({
            userId: String,
            isWin: Boolean,
            prizeWon: String,
            playDate: { type: Date, default: Date.now}
        })
    );