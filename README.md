# Calculator Challenge Backend

Test URL:

https://calculator-challenge-back.onrender.com/

Test users:

username: "testA@email.com"
password: "password"

username: "testB@email.com"
password: "password"

username: "testC@email.com"
password: "password"

#### Instalation

- Install the dependencies with **npm install**
- Create a **.env** file with you enviroments variables.
- Run the migrations with **npm migrate**
- Run the seed files with **npm seed-run**
- Add a new user to the DB
- Run the application with **npm dev**

#### Commands

- **npm install**: Installs the dependencies
- **npm dev**: Runs the application
- **npm test**: Run the tests
- **npm migrate**: Runs the DB migrations
- **npm make "name"**: Creates a new migration
- **npm seed-run**: Runs the DB seeds
- **npm seed-make "name"**: Creates a new seed file

#### Routes

**/users/login**: Method POST

Values:
**username**: The user's email.
**password**: The user's password.

Example data:
```
{
    "username": "testA@email.com",
    "password": "password"
}
```

Example response:
```
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkwMjczMjIzLCJleHAiOjE2OTA4NzMyMjN9.96wcC5tgxRL9EzfmfK8_nleWpdMqHbuxTXwrAOtKeUI",
    "user": {
        "username": "testA@email.net",
        "id": 1,
        "status": "active"
    }
}
```

**/operation**: Method POST (Requires Token)

Values:
**operandOne**: First operand, also defines the lenght of the strings of the "random_string" operation
**operandTwo**: Second operand, also defines the amount of the strings of the "random_string" operation
**operator**: The operator. ("addition", "subtraction", "multiplication", "division", "square_root" and "random_string")

Example data:
```
{
    "operandOne": "5",
    "operandTwo": 0.5,
    "operator": "addition"
}
```

Example response:
```
{
    "status": 200,
    "result": 5.5,
    "cost": 1
}
```

Example user without the required credits:
```
{
    "error": {
        "status": 403,
        "message": "Not enough credit",
        "code": "LOW_CREDIT"
    }
}
```

**/users/records**: Method GET (Requires Token)

Possible query params:
**page**: Result's page. Default value is 0.
**limit**: Items per page. Default value is 10.
**sort**: Column used to sort the results.
**order**: "asc" or "desc"
**recordId**: Filters by an ID in particular.
**operationId**: Filters by the operation ID.

Example response:
```
{
    "status": 200,
    "records": [
        {
            "id": 1,
            "operation_id": 1,
            "user_id": 1,
            "amount": 1,
            "user_balance": 29,
            "operation_response": "5.5",
            "deleted_at": null
        },
        {
            "id": 2,
            "operation_id": 1,
            "user_id": 1,
            "amount": 1,
            "user_balance": 28,
            "operation_response": "\"55\"",
            "deleted_at": null
        }
    ]
}
```

**/users/records/ID**: Method DELETE (Requires Token)

Reeplace "ID" with the id of the record that you wish to delete. You can only delete your own records.

### Author:

- Sergio Damian Echevarria