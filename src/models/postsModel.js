import 'dotenv/config'; 
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Conectar con la base de datos
const { db } = await conectarAoBanco();

// Função assíncrona para buscar todos os posts do banco de dados
export async function getTodosPosts() {
    // Selecciona la colección 'posts'
    const colecao = db.collection("posts");
    // Retorna todos los documentos de la colección
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set: novoPost});
}
