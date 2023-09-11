const Model = require('../models/curso')

const fs = require('fs');
const path = require('path');

const controller = {
	
	homeCurso: function(req, res){
		return res.status(200).send({
			message: 'Soy la home de curso'
		});
	},

	testCurso: function(req, res){
		return res.status(200).send({
			message: "Soy el metodo o accion test del controlador de curso"
		});
	},

	saveCurso: function(req, res){
		const curso = new Model();

		const params = req.body;
		curso.nombre_usuario = params.nombre_usuario;
		curso.tarea_code = params.tarea_code;
		curso.tarea_description = params.tarea_description;
		curso.puntuacion = params.puntuacion;
		curso.estado = params.estado;
		

		curso.save((err, cursoStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el documento.'});

			if(!projectStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto.'});

			return res.status(200).send({curso: cursoStored});
		});
	},

	getCurso: function(req, res){
		var cursoId = req.params.id;

		if(cursoId == null) return res.status(404).send({message: 'El usuario no existe.'});

		User.findById(cursoId, (err, curso) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!curso) return res.status(404).send({message: 'El usuario no existe.'});

			return res.status(200).send({
				curso
			});

		});
	},

	getcurso2: function(req, res){

		curso.find({}).sort('-year').exec((err, curso) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!projects) return res.status(404).send({message: 'No hay usuarios que mostrar.'});

			return res.status(200).send({projects});
		});

	},

	updateCurso: function(req, res){
		var cursoId = req.params.id;
		var update = req.body;

		User.findByIdAndUpdate(cursoId, update, {new:true}, (err, cursoUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!cursoUpdated) return res.status(404).send({message: 'No existe el usuario para actualizar'});

			return res.status(200).send({
				curso: cursoUpdated
			});
		});

	},

	deleteCurso: function(req, res){
		var cursoId = req.params.id;

		User.findByIdAndRemove(cursoId, (err, cursoRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el curso'});

			if(!cursoRemoved) return res.status(404).send({message: "No se puede eliminar ese curso."});

			return res.status(200).send({
				curso: cursoRemoved
			});
		});
	},

};

module.exports = controller;