import "dotenv/config";
import Mongoose from "mongoose";

class Mongo {
	constructor() {
		const {
			MONGO_HOST,
			MONGO_USER,
			MONGO_PASS,
			MONGO_DB,
			MONGO_PORT,
			MONGO_POOLSIZE
		} = process.env;

		Mongoose.set("useCreateIndex", true);
		const MongoURI = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?poolSize=${MONGO_POOLSIZE}`;
		this.Pool = Mongoose.createConnection(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
		this.Pool.once("open", () => console.log("Mongoose Connection"));
		this.Pool.on("error", (err) => console.error("Mongoose Error"));
	}
} 

export default new Mongo();