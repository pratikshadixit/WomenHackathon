'use strict';

import errors from './components/errors';
import path from 'path';

export default function(app) {
  // Insert routes below
  app.use('/api/questions', require('./api/question'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
 
 
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}
