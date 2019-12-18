const express = require('express');
const connectDB = require('./config/db')
const app = express();

// Connect Database
connectDB();

// Init MiddleWare
app.use(express.json({ extended: true }))

app.get('/', (req, res) => {
    res.json({ msg: 'Welcometo the contacKeeper api' })
})


// Import Routes
const userRoute = require('./routes/users')
const contactsRoute = require('./routes/contacts')
const authRoute = require('./routes/auth')

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/contacts', contactsRoute)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server started on port', PORT))
