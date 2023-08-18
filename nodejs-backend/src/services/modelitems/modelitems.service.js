const { Modelitems } = require('./modelitems.class');
const createModel = require('../../models/modelitems.model');
const hooks = require('./modelitems.hooks');


module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/modelitems', new Modelitems(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('modelitems');

  service.find()
  .then(data => {
    console.log('All data:', data)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  service.hooks(hooks);
};