import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
  const tasks = [
    {id: 'task-1', title: 'Купить молоко', IsDone: false},
    {id: 'task-2', title: 'Погладить кота', IsDone: true},
  ]

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({IsDone}) => IsDone).length}
      />
      <TodoList  tasks={tasks} />
    </div>
  )
}

export default Todo