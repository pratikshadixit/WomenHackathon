'use strict';



export default function(app) {
  // Insert routes below
  app.use('/mentors/', require('./mentor'));
  app.use('/mentors/add', require('./mentor/add'));

  app.use('/auth', require('./auth'));
 
 
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}
