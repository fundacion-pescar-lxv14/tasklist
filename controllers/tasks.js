import { Task } from "../models/tasks.js";
import { Resolve } from '../config/utils.js'

export const getTasks = ({params:{_id}}, res) => 
    Resolve(Task.find(_id?{_id}:{}), res)
export const createTask = ({body}, res) => 
    Resolve(Task(body).save(), res)
export const updateTask = ({params:{_id}, body}, res) => 
    Resolve(Task.updateOne({_id},body), res)
export const deleteTask = ({params:{_id}}, res) => 
    Resolve(Task.deleteOne({_id}), res)