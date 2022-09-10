// import Moralis from 'moralis-v1/types/index';
import React from 'react'
import { Navigate, useParams } from 'react-router-dom';

export default function Login({authenticate, isAuthenticated}) {
const {transactionId} = useParams()

  if (isAuthenticated) {
    return <Navigate to={`/verify-payment/${transactionId}`} />
  }

  return (
    <div>
      <h1>Welcome to Luzu</h1>
      <button onClick={authenticate}>Authenticate with Moralis</button>
    </div>
  );
}
