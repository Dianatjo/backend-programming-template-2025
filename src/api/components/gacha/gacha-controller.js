const gachaService = require('./gacha-service');

async function playGacha(request, response, next) {
    try {
        const { userId } = request.body;

        if (!userId) {
            return response.status(400).json({ message: 'User ID is requires' });
        }

        const result = await gachaService.playGacha(userId);

        if (!result) {
            return response.status(403).json({
                message: 'Limit harian tercapai. Maksimal 5x gacha per hari.'
            });
        }

        return response.status(200).json({
            message: result.isWin
            ? `Selamat! Hadiah kamu: ${result.prizeWon}`
            : `Zonk! Coba lagi besok.`,
            data: result,
        });
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    playGacha,
};