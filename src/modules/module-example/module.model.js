import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const { Schema, model } = mongoose

// Schema
const demoSchema = Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

demoSchema.plugin(mongoosePaginate)

demoSchema.methods.toJSON = function () {
    const { __v, ...demo } = this.toObject()
    return {
        ...demo,
    }
}

export default model('Demo', demoSchema)
