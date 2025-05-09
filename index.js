const express = require(`express`)
const app = express()
app.set('view engine', 'ejs')

const PORT = 8080



app.get('/', (req, res) => {
    res.render('test')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`)
})