import { calculate } from '../src/calculator';


describe('String calculator TDD kata', () => {
  test('input "" should return 0', () => {
    expect(calculate("")).toBe(0);
  });

  test('input "0" should return 0' , () => {
    expect(calculate("0")).toBe(0);
  });

  test('input "1" should return 1' , () => {
    expect(calculate("1")).toBe(1);
  });
});

