'use strict'

const Schema = use('Schema')

class LinksTableSchema extends Schema {

  up () {
    this.create('links', (table) => {
      table.increments()
      table.string('title')
      table.text('url')
      table.integer('user_id')
      table.timestamps()

    })
  }

  down () {
    this.drop('links')
  }

}

module.exports = LinksTableSchema
