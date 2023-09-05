const users = require("./users/users.service.js");
const modelitems = require("./modelitems/modelitems.service.js");
const diabetes = require('./diabetes/diabetes.service.js');
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(modelitems);
  // ~cb-add-configure-service-name~
  app.configure(diabetes);
};
