import Dotenv from "dotenv";
import Bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

const {
	SECRET
} = process.env;

export default {
	GeneratePassword: async(Password) => {
		return await Bcrypt.hash(Password, 10);
	},
	ValidatePassword: async(CPassword, Password) => {
		return await Bcrypt.compare(Password, CPassword);
	},
	SignJwt: (User) => {		
		return Jwt.sign(JSON.parse(JSON.stringify(User)), SECRET, {algorithm: "HS512", expiresIn: "1 days"});
	}
}