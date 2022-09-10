

function RealizarTransaccion(amount, toAddress, privateKey){
    eth_transaction(amount, toAddress, privateKey);
  }
  
  const Web3  =  require('web3');
  
  const web3  =  new Web3("https://rinkeby.infura.io/v3/8532d41190484ebbb4be7d7d8ac90609");
  
  const eth_transaction = async(amount, toAddress, privateKey) => {
    const value=web3.utils.toWei(amount,'ether');
  
    const SingedTransaction = await web3.eth.accounts.signTransaction({
         to:  toAddress,
         value: value,
         gas: "2000000",
    },  privateKey  );
  
    web3.eth.sendSignedTransaction(SingedTransaction.rawTransaction).then((receipt) => {
      console.log(receipt);
      console.log(`Transaction successful with hash: ${receipt.transactionHash}`);
      }).catch((err) => {
        console.log(err);
      });
  }
  const amount = "0.001";
  const toAddress = "0xad9794507c544A8eE449c84e65575E605F106781";
  const privateKey = "3d71c2d7c9506cb0c838e24cb0a232821c79275d74b1ff0757486249cca31041";
  eth_transaction(amount, toAddress, privateKey);
  
  
  module.exports = {
      RealizarTransaccion
  }