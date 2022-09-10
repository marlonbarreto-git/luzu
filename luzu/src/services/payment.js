import axios from "axios"

export const processTransaction = async () => {
  const url = '/process-transaction'

  axios.post(url, {
    transactionId: '1662829787536Ifon39',
    userId: 'tPyKolatq5dfjoxjag1vBCwUG'
  })
}
