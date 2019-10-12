import Mongoose from "mongoose";

const UserModel = new Mongoose.Schema({
	Email: {
		type: String,
		required: true,
		unique: true,
		index: true
	},
	Name: {
		type: String,
		required: true
	},
	Password: {
		type: String,
		required: true
	}
},
{
	collection: "User"
});

export default UserModel;