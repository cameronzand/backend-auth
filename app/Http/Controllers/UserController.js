'use strict'

const User = use('App/Model/User')
const Hash = use('Hash')


class UserController {
	* signup (request, response){
		let data = request.only('email', 'username', 'password')
		data.password = yield Hash.make(data.password)
		let user = yield User.create(data)

		response.json(user)
	}

	* signin (request, response){
		let data = request.only('username', 'password')

		try {

			let user = yield User.findBy('username', data.username)
				if (!user){
					throw new Error("No user found for that username.")
				}
			let verify = yield Hash.verify(data.password, user.password)
				if (!verify){
					throw new Error("Invalid Password!")

				}
				console.log("Req auth", request.auth)
				user.accesstoken = yield request.auth.generate(user)
				response.json(user)


		} catch(error){
			response.status(401).json({ error: error.message })
		}

	}

}

module.exports = UserController
