import express from 'express';

import helmet from 'helmet';
import Session from 'express-session';

class App extends express {
  constructor() {
    super();
    this.use(helmet());
    this.use(
      Session({
        secret: 'uncle bob went to the market, you should change this!!',
      })
    );
  }

  async getAuthorized(path, callback) {
    return this.get(path, (req, res, next) => {
      if (!req.session.authorized) {
        return res
          .status(401)
          .json({error: true, status: 401, message: 'Unauthorized.'});
      }

      callback(req, res, next);
    });
  }
}

const app = new App();
