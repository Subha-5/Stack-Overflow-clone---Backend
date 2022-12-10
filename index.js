import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoutes from './routes/users.js'

const app = express()
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
// app.use(cors({origin: true, credentials: true}))

// app.options("*", cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));
// app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));


app.get('/', (req, res) => {
    res.send("This is a stack overflow clone API")
})

app.use('/user', userRoutes)

const PORT = process.env.PORT || 5000

const CONNECTION_URL = "mongodb+srv://admin:admin@stack-overflow-clone.nzkeuyz.mongodb.net/myDatabase?retryWrites=true&w=majority"

// mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`server running on port ${PORT}`) }))
    .catch((err) => console.log(err.message))