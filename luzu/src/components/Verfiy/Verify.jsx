import React from 'react'
import { useParams } from 'react-router-dom'
import * as paymentService from '../../services/payment'

export default function Verify({logout, isAuthenticated}) {
  const {transactionId} = useParams()

  if (!isAuthenticated) {
    window.location.replace('https://www.zulu.io/')
  }

  const processPayment = () => {
    paymentService.acceptTransaction(transactionId)
  }

  const cancelPayment = () => {
    paymentService.rejectTransaction(transactionId)
  }

  return (
    <div>
      <h1>Please verify your payment</h1>

      <button onClick={processPayment}>Accept</button>
      <button onClick={cancelPayment}>Reject</button>

      <button onClick={logout}>Logout</button>
    </div>
  )
}
