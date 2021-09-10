import { useState } from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import { useHistory } from 'react-router-dom'
import Buttons from './Buttons'

const New = () => {
  const [value, setValue] = useState('')
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (value.length >= 10) {
      try {
        const response = await window.fetch('http://localhost:5000/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ value }),
        })
        const data = await response.json()
        console.log(data)
        history.push(`/${data?.data?._id}`)
      } catch (e) {
        console.log(
          'There is some issue while saving your document. Please try again later.'
        )
      }
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Buttons />
      <div className="wrapper">
        <div className="line-numbers">&gt;</div>
        <TextareaAutosize
          autoFocus
          name="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          {value}
        </TextareaAutosize>
      </div>
    </form>
  )
}

export default New
