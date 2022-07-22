export function chunk(list, chunkSize = list.length) {
  if (isNaN(chunkSize)) throw new Error('Chunk size cannot be NaN');

  return list.reduce((result, item, index) => {
    if (index % chunkSize === 0) result.push([]);
    result[result.length - 1].push(item);
    return result;
  }, []);
}
