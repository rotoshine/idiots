require('dotenv').config()

const express = require('express')
const next = require('next')

const { PORT = 3000, NODE_ENV } = process.env
const dev = NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/live/:liveId', (req, res) => {
    return app.render(req, res, '/live', { liveId: req.params.liveId })
  })
  
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})