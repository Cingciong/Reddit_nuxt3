import prisma from "."
import bcrypt from "."


export const createUser = (userData) => {

    console.log('user existance: ', checkForUser(user.username))
    if(checkForUser(user.username)){
        throw new Error ('username already exist')
    }

    const finalUserData = {
        ...userData,
        password: bcrypt.hashSync(UserData.password, 10)
    }    
    return prisma.user.create({
        data: finalUserData
    })

    
}

const checkForUser = (username) => {
    return userExists = prisma.$exists.user({
        username: username,
    })
}