const log = console.log.bind(console);

async function getData() {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json());
  return log(result);
}
getData();
