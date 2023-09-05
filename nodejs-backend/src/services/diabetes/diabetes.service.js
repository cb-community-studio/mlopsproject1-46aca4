// Initializes the `diabetes` service on path `/diabetes`
const { Diabetes } = require('./diabetes.class');
const createModel = require('../../models/diabetes.model');
const hooks = require('./diabetes.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/diabetes', new Diabetes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('diabetes');

  service.hooks(hooks);
};
