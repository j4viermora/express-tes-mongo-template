import demo from './module.model.js'

export const sayHello = (req, res) => {
    return res.send('Hello World from module-example!')
}

export const demoCreate = async (req, res) => {
    try {
        const { name } = req.query

        const newDemo = new demo({
            name,
        })

        const data = await newDemo.save()
        return res.status(201).send(data)
    } catch (err) {
        return err
    }
}
