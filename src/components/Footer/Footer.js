import React from 'react'

function Footer() {
  return (
    <div style={{textAlign:'center', marginBottom: 10}}>
        Made with ♥ by {" "}
        <a
            href='https://www.quizizz.com'
            style={{cursor: 'pointer'}}
        >
            MyQuiz
        </a>
    </div>
  )
}

export default Footer