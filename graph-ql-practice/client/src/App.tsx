import "./App.css";
import { gql, useQuery } from "@apollo/client";

type TodoType = {
  id: number;
  title: string;
  completed: boolean;
  user: {
    name: string;
    email: string;
  };
};

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
      completed
      user {
        name
        email
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_TODOS);

  console.log({ data, loading, error });

  if (loading) return <h1>loading...</h1>;
  if (error) return <>Fail to fetch....</>;
  return (
    <div>
      {data.todos.map((todo: TodoType) => {
        return (
          <table>
            <tbody>
              <tr>
                <th>{todo.title}</th>
                <td>Created by {todo?.user?.name}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default App;
