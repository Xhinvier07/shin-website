const name = "sample";

function call() {
  return "from " + name;
}

function hello() {
  return <h1>Hello, There! {call()}</h1>;
}

export default hello;
