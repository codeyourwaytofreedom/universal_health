import { MongoClient} from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(process.env.DB_URL);
  return client;
}

export async function closeDatabaseConnection(client) {
  try {
    // Close the MongoDB client
    await client.close();
    console.log("MongoDB connection closed successfully.");
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
  }
}
