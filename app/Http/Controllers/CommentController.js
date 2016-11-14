'use strict'

const Comment = use('App/Model/Comment')
const Link = use('App/Model/Link')
// const User = use('App/Model/User')

class CommentController {

	* index (request,response) {
		let id = request.param('link_id')
		// pull comments out of the database where the link id for the comment is ^id
		// send that back as json
		//let comment = yield Comment.find(id)
		let link = yield Link.find(id)
		let comments = yield link.comments()


		response.json(comments)

	}

	* post (request,response) {

		let data = request.only('comment')
		let user = request.authUser
		data.user_id = user.id
		let comment = yield Comment.create(data)

		response.json(comment)
	}

}

module.exports = CommentController
