const generateTransactionId = () => {
  var transactionId = new Date().valueOf();
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;

  for ( var i = 0; i < 6; i++ ) {
    transactionId += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

   return transactionId;
}

module.exports = {
  generateTransactionId
}