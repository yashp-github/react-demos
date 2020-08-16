import React, {useMemo} from 'react';
import PropTypes from 'prop-types';

function TodoList({todos}) {
  const getTodos = useMemo(() =>
      todos.map(
        (todo) => <li className="list-group-item">{todo}</li>
      ),
    [todos]);

  return (
    <div className="row">
      <div className="col-sm-12">
        <ul className="list-group">
          {getTodos}
        </ul>
      </div>
    </div>
  );
}

TodoList.propTypes = {
  todos : PropTypes.array,
};

TodoList.defaultProps = {
  todos : [],
};

export default React.memo(TodoList);