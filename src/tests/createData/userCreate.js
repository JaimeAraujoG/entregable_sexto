const User = require("../../models/User")

const userCreate = async () => {

    await User.create(
        {
            firstName: "John", 
            lastName: "De Jesus",
            email: "john.dejesus@gmail.com",
            password: "jhon123",
            phone: "+5421481"
        }
    )

}

module.exports = userCreate