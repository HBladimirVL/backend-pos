//importamos el Modelo
import FacturaModel from "../models/FacturaModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllFacturas = async (req, res) => {
    try {
        const factura = await FacturaModel.findAll()
        res.json(factura)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getFactura = async (req, res) => {
        try {
            const factura = await FacturaModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(factura[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createFactura = async (req, res) => {
    try {
       await FacturaModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateFactura = async (req, res) => {
    try {
        await FacturaModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deleteFactura = async (req, res) => {
    try {
        await FacturaModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}