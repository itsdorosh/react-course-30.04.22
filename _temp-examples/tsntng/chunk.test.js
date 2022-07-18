import {chunk} from "./chunk.js";

describe('chunk functionality', () => {
  it('should return an array', function () {
    const result = chunk([1,2,3], 2);
    console.log(result);
    expect(chunk([1,2,3])).toBeTruthy();
    expect(Array.isArray(chunk([1,2,3]))).toBeTruthy();
  });

  it('should return [[1,2,3]] from given [1,2,3] and chunkSize = 3', () => {
    const expectResult = [[1,2,3]];
    expect(chunk([1,2,3], 3)).toEqual(expectResult);
  });

  it('should return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]] from given [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and chunkSize = 3', () => {
    const initialData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expectResult = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];
    expect(chunk(initialData, 3)).toEqual(expectResult);
    expect(chunk(initialData, 3).length).toBe(4);
    expect(chunk(initialData, 3)[3]).toEqual([10]);
  });

  xit('should throw an Error when chunkSize is NaN', function () {
    expect(chunk([], NaN)).toThrow('Chunk size cannot be NaN');
  });
});
