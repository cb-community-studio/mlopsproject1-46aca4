const assert = require('assert');
const app = require('../../src/app');

describe('\'modelitems\' service', () => {
  it('registered the service', () => {
    const service = app.service('modelitems');

    assert.ok(service, 'Registered the service (modelitems)');
  });
});
