
const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())


app.get('/', (req, res)=>{
    res.send('Hello backend page')
})



const errorHandler = (error, req, res, next) => {
  console.log(error.message)

  if(error.name === 'CastError'){
    return res.status(400).send({ error: 'malformed id' })
  }
  else if(error.name === 'ValidationError'){
    return response.status(400).json({ error: error.message })
  }
  next(error)
}

app.use(errorHandler)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})
