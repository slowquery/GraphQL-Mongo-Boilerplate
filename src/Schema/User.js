import { gql } from "apollo-server-express";

export default gql`
	type Query {
		Users: [User!]
	}

	type Mutation {
		AddUser(
			Name: String!
			Email: String!
			Password: String!
		): Token!
		LoginUser(
			Email: String!
			Password: String!
		): Token!
	}

	type Token {
		AccessToken: String!
	}

	type User {
		_id: ID!
		Name: String!
		Email: String!
	}
`;