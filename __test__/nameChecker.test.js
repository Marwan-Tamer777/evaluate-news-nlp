import { checkForName } from '../src/client/js/nameChecker'

test('tests the name checker', () => {
  expect(checkForName("https://www.cdc.gov/coronavirus/2019-ncov/long-term-effects.html")).toBe(1);
});