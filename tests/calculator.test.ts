import { calculate } from '../src/calculator';


describe('Main calculator Functionality', () => {
  test('input "" should return 0', () => {
    expect(calculate("")).toBe(0);
  });

  test('input "0" should return 0' , () => {
    expect(calculate("0")).toBe(0);
  });

  test('input "1" should return 1' , () => {
    expect(calculate("1")).toBe(1);
  });

  test('input "2" should return 2' , () => {
    expect(calculate("2")).toBe(2);
  });

  test('input "1,2" should return 3' , () => {
    expect(calculate("1,2")).toBe(3);
  });

  test('input "10,20" should return 30' , () => {
    expect(calculate("10,20")).toBe(30);
  });

  test('input "123,456" should return 30' , () => {
    expect(calculate("123,456")).toBe(579);
  });

  test('input "1,456,90,1000000000" should return 30' , () => {
    expect(calculate("1,456,90,1000000000")).toBe(1000000547);
  });

  test('input ",,," should return 0' , () => {
    expect(calculate(",,,")).toBe(0);
  });

  test('input " , , , " should return 0' , () => {
    expect(calculate(" , , , ")).toBe(0);
  });

  test('input " , , ,a" should return 0' , () => {
    expect(calculate(" , , ,a")).toBe(NaN);
  });

  test('input " ,asdf, ,a" should return 0' , () => {
    expect(calculate(" ,asdf, ,a")).toBe(NaN);
  });

  test('input "1\\n2,3" should return 6' , () => {
    expect(calculate("1\n2,3")).toBe(6);
  });

  test('input "1\\n2,3\\n4" should return 10' , () => {
    expect(calculate("1\n2,3\n4")).toBe(10);
  });
});

