const routes = require('./src/routes/index.js')
const connectDB = require('./src/config/database.js')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Middleware para parsear JSON
app.use(express.json())
// Rutas
app.use('/', routes)
// Middleware para manejo de errores
app.use(errorHandler)
// Iniciar servidor
app.listen(port, async () => {
  await connectDB()
  console.log(`http://localhost:${port}`)
})
