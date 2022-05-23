

import { Paleta } from '../models/Paleta.js';

export const findAllPaletasService = async () => {
  const paletas = await Paleta.find();
  // serviço para listar todas as paletas
  return paletas; // retorna todas as paletas
};

export const findByIdPaletaService = async(id_Paleta) => {
  // serviço para listar uma paleta
  const paleta = await Paleta.findById(id_Paleta)
  return paleta // busca a paleta com o id e retorna o valor
};

export const createPaletaService = (newPaleta) => {
  //  criar uma paleta
  const newId = paletas.length + 1; // pega o id da paleta mais um
  newPaleta.id = newId; // atribui o id ao novo objeto
  paletas.push(newPaleta); // adiciona o novo objeto ao array de paletas
  return newPaleta; // retorna o novo objeto
};

export const updatePaletaService = (id, paletaEdit) => {
  // serviço para atualizar uma paleta
  paletaEdit['id'] = id; // atribui o id ao objeto editado
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id); // busca o indice da paleta com o id
  paletas[paletaIndex] = paletaEdit; // atualiza o objeto na posição do indice
  return paletaEdit; // retorna o objeto editado
};

export const deletePaletaService = (id_Paleta) => {
  // serviço para deletar uma paleta
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id_Paleta); // busca o indice da paleta com o id
  return paletas.splice(paletaIndex, 1); // remove o objeto na posição do indice
};
