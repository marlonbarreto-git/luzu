// import Moralis from 'moralis-v1/types/index';
import React from 'react'

export default function Login({authenticate}) {
  return (
    <div>
      <h1>Welcome to Luzu</h1>
      <button onClick={authenticate}>Authenticate with Moralis</button>
    </div>
  );
}
