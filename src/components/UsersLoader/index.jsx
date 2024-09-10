import { getUsers } from "../../api";
import { useLoadData } from "../../hooks";

const UsersLoader = () => {
  const { data, isLoading, error } = useLoadData(getUsers);

  const renderUsers = data.map((user) => (
    <article key={user.id}>
      <h2>{user.name}</h2>
      <p>
        emial: <a href={`mailto:${user.email}`}>{user.email}</a>
      </p>
    </article>
  ));

  return (
    <div>
      <h1>Users:</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>error...</div>}
      {renderUsers}
    </div>
  );
};

export default UsersLoader;
