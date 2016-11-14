'use strict'

const Lucid = use('Lucid')

class Comment extends Lucid {

	link () {
		return this.belongsTo('App/Model/Link')
	}

	user () {
		return this.belongsTo('App/Model/User')
	}

	static get createTimestamp () {
    	return null
  }

    static get updateTimestamp () {
    	return null
  }

}

module.exports = Comment
