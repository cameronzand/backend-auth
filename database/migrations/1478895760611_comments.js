'use strict'

const Schema = use('Schema')

class CommentsTableSchema extends Schema {

  up () {
    this.create('comments', (table) => {
      table.increments()
      table.text('comment')
      table.integer('link_id')
      table.integer('user_id')
    })
  }

  down () {
    this.drop('comments')
  }

}

module.exports = CommentsTableSchema
