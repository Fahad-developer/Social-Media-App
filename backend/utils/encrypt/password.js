import bcrypt from 'bcryptjs'

export const hashpass = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(pass, salt)
    return password
}


export const comparePassword = async (pass1, pass2) => {
    const compare = await bcrypt.compare(pass1, pass2)
    return compare
}