import Dotenv from "dotenv";
import Express from "express";
import { ApolloServer } from "apollo-server-express";
import { Mongo } from "./Lib";
import Schema from "./Schema";
import Resolver from "./Resolver";

Dotenv.config();

const {
	APP_PORT
} = process.env;

const Application = Express();
const Server = new ApolloServer({ 
	typeDefs: Schema,
	resolvers: Resolver,
	context: async({ req }) => {
		return {
			Mongo: Mongo.Pool
		}
	}
});

Server.applyMiddleware({ app: Application });

Application.listen(APP_PORT, () => {
	console.log(`LISTEN PORT ${APP_PORT}`);
});