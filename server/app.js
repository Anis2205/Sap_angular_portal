const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors({
    origin: ['http://localhost:4200', 'http:127.0.0.1:4200'],
    credentials: true
}))

//for passing json data to route
app.use(express.json())

app.use('/',require('./routes/customer'))
app.use('/vendor',require('./routes/vendor'))
app.use('/employee',require('./routes/employee'))

//listening on port
app.listen(PORT, () => {
    console.log("Server is running on port : "+PORT)
})


