const express   = require('express')
const useragent = require('express-useragent')
const path      = require('path')

const publicPath = path.join(__dirname + '/../public')
const port = process.env.PORT || 3000
const app = express()

app.use(express.static(publicPath))
app.use(useragent.express())

app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip
  const language = req.acceptsLanguages()
  const software = `OS: ${req.useragent.os}, Browser: ${req.useragent.browser}`

  res.json({ipaddress, language: language[0], software})
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})