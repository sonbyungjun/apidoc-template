import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import { CreateUserDto } from '../dtos/users.dto';
import Route from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';

class UsersRoute implements Route {
  public path = '/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    /**
     * @api {get} /users Find All Users
     * @apiDescription Find All Users
     *
     * @apiPermission none
     * @apiVersion 0.1.0
     * @apiName list
     * @apiGroup User
     *
     * @apiSuccess {Object[]}  data  data Object list
     * @apiSuccess {Integer}  data.id  id
     * @apiSuccess {String}  data.email  email
     * @apiSuccess {String}  data.password  password
     * @apiSuccess {String}  message  message
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "data": [
     *         {
     *           "id": 1,
     *           "email": "lim@gmail.com",
     *           "password": "$2b$10$hmrwtGwC.QlfWt6YWaT3S.FP9CarS3.V9n3Qr.d9y2ovcan0oxs56"
     *         }
     *       ],
     *       "message": "findAll"
     *     }
     *
     * @apiSampleRequest /users
     */
    this.router.get(`${this.path}`, this.usersController.getUsers);

    /**
     * @api {get} /users/:id Find User By Id
     * @apiDescription Find User By Id
     *
     * @apiPermission none
     * @apiVersion 0.1.0
     * @apiName detail
     * @apiGroup User
     *
     * @apiParam (Query String) {Integer} id User ID
     *
     * @apiParamExample {query} Request-Example:
     *     /users/1
     *
     * @apiSuccess {Object}  data  data Object
     * @apiSuccess {Integer}  data.id  id
     * @apiSuccess {String}  data.email  email
     * @apiSuccess {String}  data.password  password
     * @apiSuccess {String}  message  message
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "data": {
     *         "id": 4,
     *         "email": "choi@gmail.com",
     *         "password": "$2b$10$hmrwtGwC.QlfWt6YWaT3S.FP9CarS3.V9n3Qr.d9y2ovcan0oxs56"
     *       },
     *       "message": "findOne"
     *     }
     *
     * @apiSampleRequest /users
     */
    this.router.get(`${this.path}/:id(\\d+)`, this.usersController.getUserById);

    /**
     * @api {post} /users Add User
     * @apiDescription Add User
     *
     * @apiPermission none
     * @apiVersion 0.1.0
     * @apiName register
     * @apiGroup User
     *
     * @apiParam (Request Body) {String} email email
     * @apiParam (Request Body) {String} password password
     *
     * @apiParamExample {json} Request-Example:
     *     {
     *       "email": "string",
     *       "password": "string"
     *     }
     *
     * @apiSuccess {Object}  data  data object
     * @apiSuccess {Boolean}  data.id  id
     * @apiSuccess {Boolean}  data.email  email
     * @apiSuccess {Boolean}  data.password  password
     * @apiSuccess {String}  message  message
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "data": {
     *         "id": 5,
     *         "email": "test@test.com",
     *         "password": "$2b$10$3soFnsldPQ7cuoRN8HlqROuRz3nJjO201.zgP2Q52UWHAlyEWwe2a"
     *       },
     *       "message": "created"
     *     }
     *
     * @apiSampleRequest /users
     */
    this.router.post(`${this.path}`, validationMiddleware(CreateUserDto), this.usersController.createUser);

    /**
     * @api {put} /users/:id Update User By Id
     * @apiDescription Update User By Id
     *
     * @apiPermission none
     * @apiVersion 0.1.0
     * @apiName update
     * @apiGroup User
     *
     * @apiParam (Query String) {Integer} id User ID
     *
     * @apiParamExample (Query String) {query} Request-Example:
     *     /users/1
     *
     * @apiParam (Request Body) {String} [email] email
     * @apiParam (Request Body) {String} [password] password
     *
     * @apiParamExample (Request Body) {json} Request-Example:
     *     {
     *       "email": "string",
     *       "password": "string"
     *     }
     *
     * @apiSuccess {Object[]}  data  data Object list
     * @apiSuccess {Integer}  data.id  id
     * @apiSuccess {String}  data.email  email
     * @apiSuccess {String}  data.password  password
     * @apiSuccess {String}  message  message
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "data": [
     *         {
     *           "id": 1,
     *           "email": "lim@gmail.com",
     *           "password": "$2b$10$hmrwtGwC.QlfWt6YWaT3S.FP9CarS3.V9n3Qr.d9y2ovcan0oxs56"
     *         }
     *       ],
     *       "message": "updated"
     *     }
     *
     * @apiSampleRequest /users/:id
     */
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateUserDto, true), this.usersController.updateUser);

    /**
     * @api {delete} /users/:id Delete User By Id
     * @apiDescription Delete User By Id
     *
     * @apiPermission none
     * @apiVersion 0.1.0
     * @apiName delete
     * @apiGroup User
     *
     * @apiParam (Query String) {Integer} id User ID
     *
     * @apiParamExample (Query String) {query} Request-Example:
     *     /users/1
     *
     * @apiSuccess {Object[]}  data  data Object list
     * @apiSuccess {Integer}  data.id  id
     * @apiSuccess {String}  data.email  email
     * @apiSuccess {String}  data.password  password
     * @apiSuccess {String}  message  message
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "data": [
     *         {
     *           "id": 1,
     *           "email": "lim@gmail.com",
     *           "password": "$2b$10$hmrwtGwC.QlfWt6YWaT3S.FP9CarS3.V9n3Qr.d9y2ovcan0oxs56"
     *         }
     *       ],
     *       "message": "updated"
     *     }
     *
     * @apiSampleRequest /users/:id
     */
    this.router.delete(`${this.path}/:id(\\d+)`, this.usersController.deleteUser);
  }
}

export default UsersRoute;
