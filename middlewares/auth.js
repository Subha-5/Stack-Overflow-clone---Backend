import jwt from "jsonwebtoken";
const {JWT_SECRET} = require('../config/keys')


const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]

        let decodeData = jwt.verify(token, JWT_SECRET)
        req.userId = decodeData?.id
        
        next()
    } catch (error) {
        console.log(error)
    }
}

export default auth