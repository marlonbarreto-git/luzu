const { doTransaction } = require('../utils/Transaction');
const { generateTransactionId } = require('../utils/generateTransaction');
const { db, createDocument, getDocumenById } = require('../services/db/db');

class Service {
    constructor(){
        this.luzuPublicKey = '0xad9794507c544A8eE449c84e65575E605F106781';
    }

    async createTransaction(ecommerceId, amount) {
        const ecommerceInfo = await getDocumenById(db, ecommerceId);
        const currencyInfo = await getDocumenById(db, 'cop');

        const usdc = amount / currencyInfo.trm;
        const comissionCrypto = usdc - (usdc * ecommerceInfo.comission);
        const transactionId = generateTransactionId();

        const transactionInfo = {
            merchantId: ecommerceId,
            status: 'pending',
            createdAt: new Date(),
            fiat: amount,
            currency: 'cop',
            comissionFiat: comissionCrypto * ecommerceInfo.comission,
            comissionCrypto,
            transactionId,
            usdc,
        };

        await createDocument(db, transactionId, transactionInfo);
        return transactionId;
    }

    async processTransaction(transactionId, userId) {
        const transactionInfo = await getDocumenById(db, transactionId);
        const userInfo = await getDocumenById(db, `user_${userId}`);

        try {
            await doTransaction(transactionInfo.usdc.toFixed(6), this.luzuPublicKey, userInfo.privateKey);
            transactionInfo.status = 'approved';
        } catch (err) {
            console.log({ err });
            transactionInfo.status = 'failed';
        }

        await createDocument(db, transactionId, transactionInfo);
        return transactionInfo;
    }

    async rejectTransaction(transactionId) {
        const transactionInfo = await getDocumenById(db, transactionId);
        await createDocument(db, transactionId, { ...transactionInfo, status: 'rejected' });
    }
}

module.exports = new Service();