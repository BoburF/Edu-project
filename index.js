const express = require('express')
const app = express()
const { create } = require('express-handlebars')
require('dotenv').config()
const path = require('path')

const exhbs = create({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
})

require('./helper/db')('mongodb://localhost:27017/edu')

app.engine('hbs', exhbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

const adminRouter = require('./routes/admin/home')

app.use('/api', adminRouter)


const port = normalizePort(process.env.PORT || 5000)
app.set('port', port)
try {
    app.listen(port, () => {
        console.log(`Server working on ${port}`, app.get('port'))
    })
} catch (error) {
    console.log(error)
}

function normalizePort(val) {
    const res = parseInt(val, 10)
    if(isNaN(res)){
        return val
    }

    if(res > 0){
        return res
    }

    return false
}