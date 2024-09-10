import React from 'react';
import { useLoadData } from '../../hooks';
import { getComments } from '../../api';

const CommentsLoader = () => {
  console.log('render');

  const { data, isLoading, error } = useLoadData(getComments);
  return (
    <div>
      <h2>Coommnets:</h2>
      {isLoading && <div>ERROR</div >}
      {
        data.map(comment => (
          <section key={comment.id}>
            <h2>{comment.name}</h2>
            <h2>{comment.body}</h2>
          </section>
        ))
      }
    </div>
  );
}

export default CommentsLoader;
