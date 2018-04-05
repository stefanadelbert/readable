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

## Use

Change to the `readable/api-server` directory and start the backend server with `node server.js`.
Change to the `readable/frontend` directory and start the development server with `npm start`.

```
cd readable/api-server
node server.js
cd ../frontend
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
