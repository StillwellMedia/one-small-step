import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('step', 'Step', {
  // Specify the other units that are required for this test.
  needs: ['model:goal']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
