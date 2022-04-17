import { render, fireEvent } from '@testing-library/react';

import List from './List';

describe('List', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClickDelete = jest.fn();

  function renderList(tasks) {
    return render((
      <List
        tasks={tasks}
        onClickDeleteTask={handleClickDelete}
      />
    ));
  }

  context('with tasks', () => {
    const tasks = [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ];

    it('renders tasks', () => {
      const { queryByText } = renderList(tasks);

      expect(queryByText(/Task-1/)).not.toBeNull();
      expect(queryByText(/Task-2/)).not.toBeNull();
    });

    it('renders “완료” button to delete a task', () => {
      const { getAllByText } = renderList(tasks);

      const buttons = getAllByText('완료');

      fireEvent.click(buttons[0]);

      expect(handleClickDelete).toBeCalledWith(1);
    });
  });

  context('without tasks', () => {
    it('renders no task message', () => {
      const tasks = [];

      const { queryByText } = renderList(tasks);

      expect(queryByText(/할 일이 없어요/)).not.toBeNull();
    });
  });
});
