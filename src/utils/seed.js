const { Prizes } = require('../models');

async function seedPrizes() {
    try{

        await new Promise((resolve) => setTimeout( resolve, 2000));

        const count = await Prizes.countDocuments();
        if (count > 0) {
            console.log('Data sudah ada.');
            process.exit(0);
        }

        const prizesData = [
            { prizeId: 1, name: 'Emas 10 gram', quota: 1, initialQuota: 1 },
            { prizeId: 2, name: 'Smartphone X', quota: 5, initialQuota: 5 },
            { prizeId: 3, name: 'Smartwatch Y', quota: 10, initialQuota: 10 },
            { prizeId: 4, name: 'Voucher Rp100.000', quota: 100, initialQuota: 100 },
            { prizeId: 5, name: 'Pulsa Rp50.000', quota: 500, initialQuota: 500 },
        ];

        await Prizes.insertMany(prizesData);

        console.log('Seeding prizes success!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedPrizes();