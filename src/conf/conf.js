

const conf={
 Appwriteurl: String(import.meta.env.VITE_APPWRITE_URL),
 AppwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
 AppwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
 AppwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
 AppwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf
