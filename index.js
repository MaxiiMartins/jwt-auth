const { conn } = require('./src/db.js');
const server = require('./src/app.js');
const PORT = process.env.PORT || 3001;

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto: ${PORT}`);
    console.log(`=> http://localhost:${PORT}`);
  });
});