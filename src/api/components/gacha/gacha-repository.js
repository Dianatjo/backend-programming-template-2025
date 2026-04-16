const { Prizes, GachaLogs } = require('../../../models');

async function getPrizeById(id) {
  return Prizes.findOne({ prizeId: id });
}

async function updatePrizeQuota(id, newQuota) {
  return Prizes.updateOne({ prizeId: id }, { quota: newQuota });
}

async function createGachaLog(data) {
  return GachaLogs.create(data);
}

async function countUserLogsToday(userId) {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(23, 59, 59, 999);

  return GachaLogs.countDocuments({
    userId: userId,
    playDate: { $gte: start, $lte: end },
  });
}

module.exports = {
  getPrizeById,
  updatePrizeQuota,
  createGachaLog,
  countUserLogsToday,
};