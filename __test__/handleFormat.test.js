import { handleSubmit } from '../src/client/js/formHandler'
import { sum } from '../src/client/js/formHandler'

test('tests the form Handler', () => {
  expect(sum(1,4)).toBe(5);
});