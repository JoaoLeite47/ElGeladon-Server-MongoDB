import express from 'express'; // importa o express

import {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
} from '../controllers/paletas.controller.js'; // importa o controller

import { validId, validObjectBody } from '../middlewares/paleta.middleware.js'; // importa o middleware

export const route = express.Router(); // instancia o router do express

route.get('/all-paletas', findAllPaletasController); // rota para listar todas as paletas (GET ALL)

route.get('/paleta/:id', validId, findByIdPaletaController); // rota para listar uma paleta (GET BY ID)

route.post('/create', validObjectBody, createPaletaController); // rota para criar uma paleta (POST)

route.put('/update/:id', validId, validObjectBody, updatePaletaController); // rota para atualizar uma paleta (PUT)

route.delete('/delete/:id', validId, deletePaletaController); // rota para deletar uma paleta (DELETE)
