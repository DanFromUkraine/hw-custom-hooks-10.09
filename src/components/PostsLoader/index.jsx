import { getPosts } from '../../api';
import { useLoadData } from '../../hooks';

const PostsLoader = () => {
  const {data, isLoading, error} = useLoadData(getPosts, 15);

  const renderPosts = data.map(({ id, title }) => (
    <li key={id}>{title}</li>
  ));

  return (
    <div>
      <h1>Posts:</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>error...</div>}
      <ul>{renderPosts}</ul>
    </div>
  );
}

export default PostsLoader;
