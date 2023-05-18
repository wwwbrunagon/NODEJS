const log = console.log.bind(console);

async function getData() {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const convertedResult = await result.json();
  return log(convertedResult);
}
getData();
