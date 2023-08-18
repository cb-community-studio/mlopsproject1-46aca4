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

  const itemId = "64dc72297ed83d1b9bc49266";

  service.get(itemId)
  .then(item => {
    console.log('Model name:', item);
  })
  .catch(error => {
    console.error('Error fetching item:', error);
  });

  service.hooks(hooks);
};