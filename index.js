/********************
 * Helper utilities *
 ********************/

function entriesFromCollection(collection) {
  if (Array.isArray(collection)) {
    return collection.map((val, idx) => [idx, val]);
  }
  return Object.entries(collection);
}

function valuesFromCollection(collection) {
  return Array.isArray(collection)
    ? collection
    : Object.values(collection);
}

/********************
 * Collection funcs *
 ********************/

function myEach(collection, callback) {
  const entries = entriesFromCollection(collection);

  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    callback(value, key, collection);
  }

  return collection;
}

function myMap(collection, callback) {
  const result = [];
  const entries = entriesFromCollection(collection);

  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    result.push(callback(value, key, collection));
  }

  return result;
}

function myReduce(collection, callback, acc) {
  const values = valuesFromCollection(collection);
  let startIndex = 0;
  let accumulator = acc;

  if (accumulator === undefined) {
    accumulator = values[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < values.length; i++) {
    accumulator = callback(accumulator, values[i], collection);
  }

  return accumulator;
}

function myFind(collection, predicate) {
  const entries = entriesFromCollection(collection);

  for (let i = 0; i < entries.length; i++) {
    const [, value] = entries[i];
    if (predicate(value)) return value;
  }

  return undefined;
}

function myFilter(collection, predicate) {
  const result = [];
  const entries = entriesFromCollection(collection);

  for (let i = 0; i < entries.length; i++) {
    const [, value] = entries[i];
    if (predicate(value)) result.push(value);
  }

  return result;
}

function mySize(collection) {
  return Array.isArray(collection)
    ? collection.length
    : Object.keys(collection).length;
}

/********************
 * Array funcs      *
 ********************/

function myFirst(array, n) {
  return n === undefined ? array[0] : array.slice(0, n);
}

function myLast(array, n) {
  return n === undefined
    ? array[array.length - 1]
    : array.slice(array.length - n);
}

/********************
 * Object funcs     *
 ********************/

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}

/********************
 * EXPORTS (CRITICAL)
 ********************/

module.exports = {
  myEach,
  myMap,
  myReduce,
  myFind,
  myFilter,
  mySize,
  myFirst,
  myLast,
  myKeys,
  myValues
};
