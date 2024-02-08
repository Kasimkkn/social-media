import { Account,Databases,Storage,Client,Avatars } from "appwrite";

export const appwriteConfig = {
   projectId:'65434366ab042aed1b1f',
   url:'https://cloud.appwrite.io/v1',  
   databaseId:'654490291d95ddb435b4',
   userCollectionId:'65449031a36a1448e80b',
   postCollectionId:'654522e777abb2600430',
   savesCollectionId:'6545293acd35f7aa3d76',
   storageId:'654523616d279414ebe2' 
}  


export const client = new Client();
client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);