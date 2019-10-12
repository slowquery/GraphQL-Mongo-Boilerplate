import { UserInputError } from "apollo-server-express";
import { UserModel } from "../Model";
import { Util } from "../Lib";

export default {
	Query: {
		Users: async(parent, args, { Mongo }) => {
			const MUser = Mongo.model("User", UserModel);
			return await MUser.find();
		}
	},
	Mutation: {
		AddUser: async(
			Parent,
			{ Name, Email, Password },
			{ Mongo }
		) => {
			const MUser = Mongo.model("User", UserModel);
			const User = new MUser({
				Name,
				Email,
				Password: await Util.GeneratePassword(Password)
			});
			
			const Result = await User.save();
			return {AccessToken: Util.SignJwt(Result)};
		},
		LoginUser: async(
			Parent,
			{ Email, Password },
			{ Mongo }
		) => {
			const MUser = Mongo.model("User", UserModel);
			const LoginUser = await MUser.findOne({Email: Email});

			if(!LoginUser) {
				throw new UserInputError("이메일 또는 비밀번호가 존재하지 않습니다");
			}
			
			const IsPassword = await Util.ValidatePassword(LoginUser.Password, Password);

			if(!IsPassword) {
				throw new UserInputError("이메일 또는 비밀번호가 존재하지 않습니다");
			}

			return {AccessToken: Util.SignJwt(LoginUser)};
		}
	}
}