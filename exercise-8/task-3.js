function handleObject(obj, key, action) {
  const actions = {
    get: () => obj[key],
    add: () => (obj[key] = ""),
    delete: () => delete obj[key],
  };

  return Object.keys(actions).includes(action) ? actions[action]() : obj;
}

const obj = { id: 1, title: "title" };

console.log(handleObject(obj, "id", "get"));
