'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/users', 'UserController.signup')
Route.post('/users/login', 'UserController.signin')

Route.get('/users/:user_id/links', 'LinkController.index')
Route.post('/users/:user_id/links', 'LinkController.create').middleware('auth')

Route.get('/links/:link_id/comments', 'CommentController.index')
Route.post('/links/:link_id/comments', 'CommentController.post').middleware('auth')
