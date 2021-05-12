import { checkForName } from '../src/client/js/nameChecker'

test('tests the name checker', () => {
  expect(checkForName("Archer")).toBe(1);
});