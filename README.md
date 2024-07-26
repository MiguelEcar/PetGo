# Med Schedule

## Implementation
This repository contains a Pet Adoption application.
The information is stored in a Database.

For testing purposes, it uses H2 Database, which may be easily replaced for production uses.
If changing the Database, Flyway migrations might be adjusted.

Full documentation can be seen at `http://localhost:8080/swagger-ui.html`


## Endpoints
- [GET] `/animal` returns all animals.
- [POST] `/animal` creates a new animal.

## Endpoints

### 1: [GET] `/animal`

Response:
```json
    [
    {
        "id": 1,
        "name": "Boris",
        "description": "Loren Ipsum 1",
        "imageUrl": "https://",
        "category": {
            "id": 1,
            "name": "Dog"
        },
        "birthDate": "2007-12-03",
        "status": false,
        "birthDateConverted": {
            "literal": "2007-12-03T00:00:00",
            "clean": "2007-Dec-03",
            "complete": "2007-12-03 - 00:00:00"
        }
    },
    {
        "id": 2,
        "name": "Dori",
        "description": "Loren Ipsum 2",
        "imageUrl": "https://",
        "category": {
            "id": 2,
            "name": "Cat"
        },
        "birthDate": "2008-12-03",
        "status": false,
        "birthDateConverted": {
            "literal": "2008-12-03T00:00:00",
            "clean": "2008-Dec-03",
            "complete": "2008-12-03 - 00:00:00"
        }
    }
]
```

### 2: [POST] `/animal`

```json
    {
    "name": "Bill",
    "description":"Loren Ipsum 123",
    "imageUrl":"https://",
    "category": {
            "id": 1,
            "name": "Dog"
        },
    "birthDate":"2007-12-03",
    "status": false
}
```
Response: `Status: 201 Created`

## Local Running

First things first:
- Make sure `Java` environment variable is correctly set.
- Make sure `Maven` environment variable is correctly set.
- Make sure `Node.js` and `Yarn` are installed and environment variables correctly set.

After cloning, or download and extract the repository:

### Spring Boot API

In the root folder of Spring Boot project,

On Windows,

```ps
    .\mvnw spring-boot:run
```

On Linux,

```sh
    sudo chmod +x ./mvnw
    sudo ./mvnw spring-boot:run
```


### ReactJS Client

```ps
    yarn
    yarn start
```


### Application defaults

- By default the API runs on port `8080` and front-end client app runs on port `3000`

Other configuration may be change in the [`application.properties`](/PetGo-api/src/main/resources/application.properties).

#### **Attention

If changing the client side app port, remember to change the `cors.origin` in [`application.properties`](/PetGo-api/src/main/resources/application.properties).
