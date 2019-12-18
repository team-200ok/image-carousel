# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage
Run the following commands in terminal:


Install all other dependencies:

```sh
 npm install //To install dependencies
```
```sh
  mysql -u student -p < schema.sql  // password is student
```

```sh
  npm run seed //To seed database
  npm run start //To run server on http://localhost:3002/
```


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### CRUD API

Create/POST : n/a

READ/GET : /api/carousel/:resterauntId -> gets joined table info for commentors tied to images which are tied to specific resterauntId

Update/PUT : /api/helpful/:resterauntId -> updates number of helpful count of the image by +1 or -1

Update/PUT : /api/notHelpful/:resterauntId -> updates number of not_helpful count of image by +1 or -1

Delete/DELETE : n/a
