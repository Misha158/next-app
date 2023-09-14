const getTodos = async () => {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => response.json()
  );

  return todos;
};

export default async function Home() {
  const todos = await getTodos();

  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24">
      {todos.map((todo: any) => (
        <div key={todo.id}>
          <div>
            {todo.id}. {todo.title}
          </div>
        </div>
      ))}
    </main>
  );
}
