


import { userTransformer } from "../../transformer/user"
import {createUser} from "../../db/users" 
import {sendErorr} from "h3"

export default defineEventHandler(async (event) => {

    const body = readBody(event)

    const {username, password, repeatPassword, email ,name} = body 

    if (password != repeatPassword){
        return sendError(event, creatError({statusCode: 400, statusMessage: "Password don't match"}))
    }

    if (!username || !password || !repeatPassword || !email || !name){
        return sendError(event, creatError({statusCode: 400, statusMessage: "Invalid Params"}))
    }

    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

    if(!regexExp.text(email)){
        return sendError(event, createError({statusCode: 400, statusMessage: "Invalid Email"}))
    }

    const userData = {
        username,
        password,
        email,
        name,
        profileImage: "https//picsum.photos/200/200",
    }

    const user = await userCreate(userData)

    return{
        body: userTransformer(user)
    }
})