const FIREBASE_DOMAIN = 'https://react-http-d1e1f-default-rtdb.firebaseio.com';

export async function getAllTodos() {
  const response = await fetch(`${FIREBASE_DOMAIN}/todo.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch toodos.');
  }

  const transformedTodos = [];

  for (const key in data) {
    const todoObj = {
      id: key,
      ...data[key],
    };

    transformedTodos.push(todoObj);
  }

  return transformedTodos;
}

export async function getSingleTodo(todoId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/todo/${todoId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch todo.');
  }

  const loadedTodo = {
    id: todoId,
    ...data,
  };

  return loadedTodo;
}

export async function addTodo(todoData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/todo.json`, {
    method: 'POST',
    body: JSON.stringify(todoData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create todo.');
  }

  return null;
}

export async function addDescription(requestData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/description/${requestData.todoId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.descriptionData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add description.');
  }

  return { descriptionId: data.name };
}

export async function getAllDescriptions(todoId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/description/${todoId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get descriptions.');
  }

  const transformedDescriptions = [];

  for (const key in data) {
    const descriptionObj = {
      id: key,
      ...data[key],
    };

    transformedDescriptions.push(descriptionObj);
  }

  return transformedDescriptions;
}


