import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('goal', 'Goal', {
  // Specify the other units that are required for this test.
  needs: ['model:step']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
