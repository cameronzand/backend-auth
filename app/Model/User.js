'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  links () {
  	return this.hasMany('App/Model/Link')
  }

}

module.exports = User
