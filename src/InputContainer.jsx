import { useDispatch, useSelector } from 'react-redux';

import { addTask, updateTaskTitle } from './actions';

import Input from './Input';

const InputContainer = () => {
  const dispatch = useDispatch();

  const taskTitle = useSelector((state) => state.taskTitle);

  const handleChangeTitle = (event) => dispatch(updateTaskTitle(event.target.value));

  const handleClickAddTask = () => dispatch(addTask());

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
};

export default InputContainer;
