import axios from "axios"

export const acceptTransaction = async (transactionId) => {
  const url = '/process-transaction'

  axios.post(url, {
    userId: 'tPyKolatq5dfjoxjag1vBCwUG',
    transactionId
  })
}

export const rejectTransaction = async (transactionId) => {
  const url = '/reject-transaction'

  axios.post(url, {
    userId: 'tPyKolatq5dfjoxjag1vBCwUG',
    transactionId
  })
}
