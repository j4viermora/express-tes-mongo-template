import mongoose from 'mongoose'
import colors from 'colors'

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(colors.green('DB connected'))
    } catch (error) {
        // console.log(colors.red(error))
        throw new Error(colors.red('DB connection failed'))
    }
}
