const gachaRepository = require('./gacha-repository');

async function playGacha(userId) {
  const todayCount = await gachaRepository.countUserLogsToday(userId);

  if (todayCount >= 5) {
    return null;
  }

  const randomNum = Math.floor(Math.random() * 100) + 1;
  let wonPrize = null;
  let isWin = false;

  if (randomNum <= 30) {
    const randomId = Math.floor(Math.random() * 5) + 1;
    const prize = await gachaRepository.getPrizeById(randomId);

    if (prize && prize.quota > 0) {
      wonPrize = prize.name;
      isWin = true;
      await gachaRepository.updatePrizeQuota(randomId, prize.quota - 1);
    }
  }

  const logData = {
    userId: userId,
    isWin,
    prizeWon: wonPrize,
  };

  await gachaRepository.createGachaLog(logData);
  return logData;
}

module.exports = {
  playGacha,
};