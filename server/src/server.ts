import express from 'express'

const app = express()
app.get('/', (req,res)=>{
    res.send('backend ')
})

app.listen(3001,()=>console.log('server started...')
)