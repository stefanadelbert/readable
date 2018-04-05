# Readable Project

Readable is a single paged web app which manages posts and comments.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* git
* npm (bundled with `node`)

On Ubuntu:
```
sudo apt-get install git
sudo apt-get install nodejs
```

### Installing

Clone the git repository and install all project dependencies with `npm install`.

```
git clone https://github.com/stefanadelbert/readable
npm install
```

#### Server

```
cd readable/api-server
npm install
```

#### Frontend

```
cd readable/frontend
npm install
```

## Use

### Server

In a terminal, change to the `readable/api-server` directory and start the backend server with `node server.js`.

```
cd readable/api-server
node server.js
```

Navigate to the documentation page served by the backend server at <http://localhost:3001> to confirm that it is running.

### Frontend

In a terminal, change to the `readable/frontend` directory and start the development server with `npm start`.

```
cd readable/frontend
npm start
```

Navigate to the page served by the development server at <http://localhost:3000>.

## Running the tests

To run the tests,

```
npm test
```

## Built With

* [React](http://www.dropwizard.io/1.0.2/docs/) - The web framework used

## Authors

* **Stefan Adelbert** - [GitHub](https://github.com/stefanadelbert)
