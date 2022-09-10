const Web3 = require('web3');

const web3 = new Web3("https://rinkeby.infura.io/v3/8532d41190484ebbb4be7d7d8ac90609");

const eth_transaction = async (amount, toAddress, privateKey) => {
  const value = web3.utils.toWei(amount, 'ether');

  const SingedTransaction = await web3.eth.accounts.signTransaction({
    to: toAddress,
    value: value,
    gas: "2000000",
  }, privateKey);

  await web3.eth.sendSignedTransaction(SingedTransaction.rawTransaction);
}

module.exports = {
  doTransaction: eth_transaction
}