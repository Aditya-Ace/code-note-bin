import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Document = () => {
  const [document, setDocument] = useState('')

  const { id } = useParams()
  useEffect(() => {
    const getDocumentById = async () => {
      const response = await window.fetch(`http://localhost:5000/${id}`)
      const document = await response.json()
      setDocument(document.data.value)
    }
    getDocumentById()
  })
  return (
    <div className="wrapper">
      <div className="line-numbers">
        {/* {lineNumbers.map((line, i) => (
          <div key={i}>{line}</div>
        ))} */}
      </div>
      <pre>
        <code id="code-display" className="language-plaintext">
          {document}
        </code>
      </pre>
    </div>
  )
}

export default Document
