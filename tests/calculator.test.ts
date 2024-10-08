import { calculate } from '../src/calculator';


describe('\nMain Functionality', () => {
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

  test('input "123,456" should return 579' , () => {
    expect(calculate("123,456")).toBe(579);
  });

  test('input "1,456,90,1000000000" should return 547' , () => {
    expect(calculate("1,456,90,1000000000")).toBe(547);
  });

  test('input "1\\n2,3" should return 6' , () => {
    expect(calculate("1\n2,3")).toBe(6);
  });

  test('input "1\\n2,3\\n4" should return 10' , () => {
    expect(calculate("1\n2,3\n4")).toBe(10);
  });

  test('input "//;\\n1;2" where the delimiter is ";" should return 3' , () => {
    expect(calculate("//;\n1;2")).toBe(3);
  });

  test('input "-1" should return "negative numbers not allowed -1"' , () => {
    expect(() => calculate("-1")).toThrow("negative numbers not allowed -1");
  });

  test('input "-1,-2" should return "negative numbers not allowed -1,-2"' , () => {
    expect(() => calculate("-1,-2")).toThrow("negative numbers not allowed -1,-2");
  });

  test('input "-1,2,-3" should return "negative numbers not allowed -1,-3"' , () => {
    expect(() => calculate("-1,2,-3")).toThrow("negative numbers not allowed -1,-3");
  });

  test('Numbers bigger than 1000 should be ignored' , () => {
    expect(calculate("2,1000")).toBe(2);
  });

  test('input "//[***]\\n1***2***3" should return 6' , () => {
    expect(calculate("//[***]\n1***2***3")).toBe(6);
  });

  test('input "//[*][%]\\n1*2%3" should return 6' , () => {
    expect(calculate("//[*][%]\n1*2%3")).toBe(6);
  });

  test('input "//[***][%]\\n1***2%3" should return 6' , () => {
    expect(calculate("//[***][%]\n1***2%3")).toBe(6);
  });

  test('input "//[***][%][;;;]\\n1***2%3" should return 6' , () => {
    expect(calculate("//[***][%][;;;]\n1***2%3")).toBe(6);
  });

  test('input "//[***][%][,,]\\n1***2%3,,4" should return 10' , () => {
    expect(calculate("//[***][%][,,]\n1***2%3,,4")).toBe(10);
  });
});


describe('\nEdge cases',() => {
  test('input ",,," should return 0' , () => {
    expect(calculate(",,,")).toBe(0);
  });

  test('input " , , , " should return 0' , () => {
    expect(calculate(" , , , ")).toBe(0);
  });

  test('input " , , ,a" should return NaN' , () => {
    expect(calculate(" , , ,a")).toBe(NaN);
  });

  test('input " ,asdf, ,a" should return NaN' , () => {
    expect(calculate(" ,asdf, ,a")).toBe(NaN);
  });

  test('input "1\\n2,\\n3" should return 6' , () => {
    expect(calculate("1\n2,\n3")).toBe(6);
  });

  test('input "//;" where the delimiter is ";" but the string is empty should return 0' , () => {
    expect(calculate("//;")).toBe(0);
  });

  test('input "//" where the delimiter is "" and the string is empty should return 0' , () => {
    expect(calculate("//")).toBe(0);
  });

  test('input "/" where the input is an non-numeric character should return NaN' , () => {
    expect(calculate("/")).toBe(NaN);
  });
});
