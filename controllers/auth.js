import bcrypt from "bcrypt";
import User from "../models/auth.js";
import { config } from "../config/utils.js";

export const Home = async (req, res) => res.json(config(process.env))
export const Register = async(req, res) => {
    const { password } = req.body
    const hash = await bcrypt.hash(password[0], 8)
    const user = new User({...req.body, password: hash})
    if (password[0] != password[1]) res.json({
        ...config(process.env), err: 'RegisterError: Verifique que la contraseña cumpla con los requisitos de complejidad y sea la misma en ambos campos del formulario',  message: "Error de Contraseña" })
    user.save()
    .then(data => res.json({ 
        ...config(process.env), data, message: 'Usuario creado con éxito' }))
    .catch(err => res.json({ 
        ...config(process.env), err, message: 'Error al registrar el Usuario' }))
}
export const Validate = async(req, res) =>{
    const { username, password } = req.body
    const users = await User.find({username})
    if(users.length > 0){
        const match = await bcrypt.compare(password, users[0].password);
        if (match) res.json({...config(process.env), users, message: "acceso concedido"})
    }
    else res.json({
        ...config(process.env), message: "Usuario o contraseña incorrectos", 
        err: "LoginError: Revise los que los datos ingresados sean correctos, en caso de no poseer cuenta, recuerde que puede registrarse desde el enlace de abajo"
    })
}