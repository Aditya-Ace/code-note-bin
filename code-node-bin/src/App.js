import { useState, useEffect } from 'react'

function App () {
  const [code, setCode] = useState('')
  const [lineNumbers, setLineNumbers] = useState([])

  useEffect(() => {
    async function getCode () {
      const lines = []
      const response = await window.fetch('http://localhost:5000')
      const codeData = await response.json()
      setCode(codeData.code)
      for (let i = 1; i <= codeData.code.split('\n').length; i++) {
        lines.push(i)
      }
      setLineNumbers(lines)
    }

    getCode()
  }, [])

  return (
    <div className='wrapper'>
      <div className='line-numbers'>
        {lineNumbers.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      <pre>
        <code id='code-display' className='language-plaintext'>
          {code}
        </code>
      </pre>
    </div>
  )
}

export default App
