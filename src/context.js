/**
 * GraphQL API Example (https://graphqlstart.com)
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

export class Context {
  constructor(req) {
    this._req = req;
  }

  get user() {
    return this._req.user;
  }

  get hostname() {
    return this._req.hostname;
  }
}
