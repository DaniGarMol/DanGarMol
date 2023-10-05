import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/usuario.interface"
import Usuarios from "../models/UsuariosModel"
import { encriptar, verificar } from "../utils/bcryptjs.handle"
import { generarToken } from "../utils/jwt.handle"

const registroNuevoUser = async ({email, password, nombre}: User) => {
    const CheckIs = await Usuarios.findOne({email})
    if (CheckIs) return "Ya existe el Usuario"
    const passHash = await encriptar(password)
    const registroNuevoUser = await Usuarios.create({email, password: passHash, nombre})
    return registroNuevoUser
}

const accesoUser = async ({ email, password}: Auth) => {
    const checkIS = await Usuarios.findOne({email})
    if (!checkIS) return "No existe el usuario"

    const passwordHash = checkIS.password
    const esCorrecto = await verificar(password, passwordHash)

    if(!esCorrecto) return "Contraseña Incorrecta"
    const token = generarToken(checkIS.email)
    const data = {
        token,
        user: checkIS,
    }
    return data 
}

export { registroNuevoUser, accesoUser};