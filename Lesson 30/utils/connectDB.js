import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = 'mongodb+srv://thecodefather:codefather123@node-aztu.89eib7f.mongodb.net/?retryWrites=true&w=majority&appName=node-aztu'
export const client = new MongoClient(uri,{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true
    }
})
