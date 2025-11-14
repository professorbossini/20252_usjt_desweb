require('dotenv').config()
const axios = require('axios')
const cors = require('cors')
const express = require('express')
const app = express()
const { PEXELS_KEY } = process.env

app.use(cors())

app.get('/search', async (req, res) => {
  try{
    const pexelsClient = axios.create({
      baseURL: 'https://api.pexels.com/v1',
      headers: {
        Authorization: PEXELS_KEY
      }
    })
    const { data } = await pexelsClient.get('/search', {
      params: {
        query: req.query.query
      }
    })
    res.status(200).json({photos: data.photos})
  }
  catch(e){
    console.log(e)
    res.status(500).end()
  }

})


const port = 3000
app.listen(port, () => console.log(`Back OK. Porta ${port}.`))
