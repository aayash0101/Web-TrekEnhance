const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb//locolhost:27017/mydb',
            {
                userNewUrlParser: true,
                useUnifiesTopology: true,
            }
        )

    } catch (err) {
        console.error(err)
    }
}
module.exports = connectDB