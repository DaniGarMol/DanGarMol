// resizeBy.send({data: 'Esto viene de Rutas'})

const Model = require('../models/cursos')

// exports.getData = (req, res) =>{

//     model.find({}, (err, docs)=>{
//         res.send({
//             docs: docs
//         })
//     }).then(function(list){
//         Return.list
//     })
// }
const fs = require('fs');
const path = require('path');

const controller = {
	
	homeCursos: function(req, res){
		return res.status(200).send({
			message: 'Soy la home de cursos'
		});
	},

	testCursos: function(req, res){
		return res.status(200).send({
			message: "Soy el metodo o accion test del controlador de cursos"
		});
	},

	saveCursos: function(req, res){
		const cursos = new Model();

		const params = req.body;
		cursos.name = params.name;
		cursos.description = params.description;
		cursos.category = params.category;
		cursos.year = params.year;
		cursos.langs = params.langs;
		cursos.image = null;

		cursos.save((err, cursosStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el documento.'});

			if(!projectStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto.'});

			return res.status(200).send({cursos: cursosStored});
		});
	},

	getCurso: function(req, res){
		var cursosId = req.params.id;

		if(cursosId == null) return res.status(404).send({message: 'El usuario no existe.'});

		User.findById(cursosId, (err, cursos) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!cursos) return res.status(404).send({message: 'El usuario no existe.'});

			return res.status(200).send({
				cursos
			});

		});
	},

	getCursos: function(req, res){

		cursos.find({}).sort('-year').exec((err, cursos) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!projects) return res.status(404).send({message: 'No hay usuarios que mostrar.'});

			return res.status(200).send({projects});
		});

	},

	updateCursos: function(req, res){
		var cursosId = req.params.id;
		var update = req.body;

		User.findByIdAndUpdate(cursosId, update, {new:true}, (err, cursosUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!cursosUpdated) return res.status(404).send({message: 'No existe el usuario para actualizar'});

			return res.status(200).send({
				cursos: cursosUpdated
			});
		});

	},

	deleteCursos: function(req, res){
		var cursosId = req.params.id;

		User.findByIdAndRemove(cursosId, (err, cursosRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el usuario'});

			if(!cursosRemoved) return res.status(404).send({message: "No se puede eliminar ese usuario."});

			return res.status(200).send({
				cursos: cursosRemoved
			});
		});
	},

};

module.exports = controller;