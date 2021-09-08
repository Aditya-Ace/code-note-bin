const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  const code = `Welcome to Code & Note Bin.
Where you create stuffs and save them for your future purpose.`
  res.status(200).send({ code })
})

app.listen(PORT, () => {
  console.log('Server has been started on the PORT ' + PORT)
})
