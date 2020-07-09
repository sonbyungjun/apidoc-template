define({ "api": [
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete User By Id",
    "description": "<p>Delete User By Id</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "name": "delete",
    "group": "User",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "(Query String) {query} Request-Example:",
          "content": "/users/1",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data Object list</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.password",
            "description": "<p>password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      \"id\": 1,\n      \"email\": \"lim@gmail.com\",\n      \"password\": \"$2b$10$hmrwtGwC.QlfWt6YWaT3S.FP9CarS3.V9n3Qr.d9y2ovcan0oxs56\"\n    }\n  ],\n  \"message\": \"updated\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/:id"
      }
    ],
    "filename": "/Users/byungjun/Dropbox/toy/apidoc-template/src/routes/users.route.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Find User By Id",
    "description": "<p>Find User By Id</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "name": "detail",
    "group": "User",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "/users/1",
          "type": "query"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>data Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.password",
            "description": "<p>password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"id\": 4,\n    \"email\": \"choi@gmail.com\",\n    \"password\": \"$2b$10$hmrwtGwC.QlfWt6YWaT3S.FP9CarS3.V9n3Qr.d9y2ovcan0oxs56\"\n  },\n  \"message\": \"findOne\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users"
      }
    ],
    "filename": "/Users/byungjun/Dropbox/toy/apidoc-template/src/routes/users.route.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Find All Users",
    "description": "<p>Find All Users</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "name": "list",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data Object list</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.password",
            "description": "<p>password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      \"id\": 1,\n      \"email\": \"lim@gmail.com\",\n      \"password\": \"$2b$10$hmrwtGwC.QlfWt6YWaT3S.FP9CarS3.V9n3Qr.d9y2ovcan0oxs56\"\n    }\n  ],\n  \"message\": \"findAll\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users"
      }
    ],
    "filename": "/Users/byungjun/Dropbox/toy/apidoc-template/src/routes/users.route.ts",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Add User",
    "description": "<p>Add User</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "name": "register",
    "group": "User",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"string\",\n  \"password\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>data object</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.email",
            "description": "<p>email</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.password",
            "description": "<p>password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"id\": 5,\n    \"email\": \"test@test.com\",\n    \"password\": \"$2b$10$3soFnsldPQ7cuoRN8HlqROuRz3nJjO201.zgP2Q52UWHAlyEWwe2a\"\n  },\n  \"message\": \"created\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users"
      }
    ],
    "filename": "/Users/byungjun/Dropbox/toy/apidoc-template/src/routes/users.route.ts",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update User By Id",
    "description": "<p>Update User By Id</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "name": "update",
    "group": "User",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User ID</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "(Query String) {query} Request-Example:",
          "content": "/users/1",
          "type": "json"
        },
        {
          "title": "(Request Body) {json} Request-Example:",
          "content": "{\n  \"email\": \"string\",\n  \"password\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data Object list</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.password",
            "description": "<p>password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      \"id\": 1,\n      \"email\": \"lim@gmail.com\",\n      \"password\": \"$2b$10$hmrwtGwC.QlfWt6YWaT3S.FP9CarS3.V9n3Qr.d9y2ovcan0oxs56\"\n    }\n  ],\n  \"message\": \"updated\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/:id"
      }
    ],
    "filename": "/Users/byungjun/Dropbox/toy/apidoc-template/src/routes/users.route.ts",
    "groupTitle": "User"
  }
] });
