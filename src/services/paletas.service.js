import { Paleta } from '../models/Paleta.js';

export const findAllPaletasService = async () => {
  const paletas = await Paleta.find();
  // serviço para listar todas as paletas
  return paletas; // retorna todas as paletas
};

export const findByIdPaletaService = async (id_Paleta) => {
  // serviço para listar uma paleta
  const paleta = await Paleta.findById(id_Paleta);
  return paleta; // busca a paleta com o id e retorna o valor
};

export const createPaletaService = async (newPaleta) => {
  //  criar uma paleta
  const paletaCreated = await Paleta.create(newPaleta); // cria uma paleta
  return paletaCreated; // retorna o novo objeto
};

export const updatePaletaService = async (id, paletaEdit) => {
  // serviço para atualizar uma paleta
  const paletaUpdated = await Paleta.findByIdAndUpdate(id, paletaEdit); // atualiza a paleta
  return paletaUpdated; // retorna o objeto editado
};

export const deletePaletaService = (id_Paleta) => {
  // serviço para deletar uma paleta
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id_Paleta); // busca o indice da paleta com o id
  return paletas.splice(paletaIndex, 1); // remove o objeto na posição do indice
};
