const User = require('../models/user');
const createUserService = async (name,password,email)=>{
    try {
        let res = await User.create({
            name:name,
            password:password,
            email:email,
            role:"123abc"
        })
        return res
    } catch (error) {
      console.log('>>>this err',error)
      return null 
    }
}
module.exports = {
    createUserService
}