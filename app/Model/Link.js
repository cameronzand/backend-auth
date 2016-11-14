'use strict'

const Lucid = use('Lucid')

class Link extends Lucid {

	comments () {
		return this.hasMany('App/Model/Comment')
	}

	user () {
		return this.belongsTo('App/Model/User')
	}

}

module.exports = Link
