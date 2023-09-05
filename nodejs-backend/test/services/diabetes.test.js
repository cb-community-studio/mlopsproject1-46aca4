const assert = require('assert');
const app = require('../../src/app');

describe('\'diabetes\' service', () => {
  it('registered the service', () => {
    const service = app.service('diabetes');

    assert.ok(service, 'Registered the service');
  });
});
