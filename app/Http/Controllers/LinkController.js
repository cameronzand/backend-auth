'use strict'

const Link = use('App/Model/Link')
const User = use('App/Model/User')

class LinkController {

	* index (request,response){
		let user_id = request.param('user_id')
		let user = yield User.find(user_id)
		let userLinks = yield user.links().orderBy('created_at', 'desc')

		response.json(userLinks)

	}

	* create (request,response){
		let data = request.only('title', 'url')
		let user = request.authUser
		data.user_id = user.id
		let link = yield Link.create(data)

		response.json(link)

	}

}

module.exports = LinkController
