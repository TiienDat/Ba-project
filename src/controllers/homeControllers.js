const {createUserService} = require("../services/userService")
const getHomePage = (req, res) => {
    return res.status(200).json('Hello World this getHomePage api')
}
const getHome = (req, res) => {
    return res.render('sample.ejs')
}
const createUser = async (req, res) => {
    const {name, password,email}= req.body
    const data = await createUserService(name, password,email)
    return res.status(200).json(data)
}
module.exports = {
    getHomePage,getHome,
    createUser
}