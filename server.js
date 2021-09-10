require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors({ origin: '*' }))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const Document = require('./models/Document')

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  const code = `Welcome to Code & Note Bin.
Where you create stuffs and save them for your future purpose.`
  res.status(200).send({ code })
})

app.post('/save', async (req, res) => {
  const { value } = req.body
  try {
    const document = await Document.create({ value })
    res.status(201).send({ msg: 'Thanks! we got it.', data: document })
    console.log('New Document Saved.')
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Issue somewhere, We can't save it right now." })
    console.error(error)
  }
})

app.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const document = await Document.findById(id).exec()
    res.status(200).send({ msg: 'Here is your document', data: document })
  } catch (error) {
    res
      .status(404)
      .send({ msg: "Issue somewhere, We can't save it right now." })
    console.error(error)
  }
})

app.get('/all', async (req, res) => {
  try {
    const document = await Document.find({})
    res.status(200).send({ msg: 'Here is your document', data: document })
  } catch (error) {
    res
      .status(404)
      .send({ msg: "Issue somewhere, We can't save it right now." })
    console.error(error)
  }
})

app.listen(PORT, () => {
  console.log('Server has been started on the PORT ' + PORT)
})
