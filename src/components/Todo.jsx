import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
  const tasks = [
    {id: 'task-1', title: 'Купить молоко', IsDone: false},
    {id: 'task-2', title: 'Погладить кота', IsDone: true},
  ]

  const deleteAllTasks = () => {
    console.log('Удаляем все задачи!');
  }

  const deleteTask = (taskId) => {
    console.log(`Удаляем задачу с id: ${taskId}`);
  }

  const toggleTaskComplete = (taskId, IsDone) => {
    console.log(`Задача ${taskId} ? ${IsDone ? 'выполнена':'не выполнена'}`)
  }

  const filterTasks = (query) => {
    console.log(`Поиск: ${query}`);
  }

  const addTask = () => {
    console.log('Задача добавлена!')
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask}/>
      <SearchTaskForm onSearchInput ={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({IsDone}) => IsDone).length}
        onDeleteAllButtonClick = {deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick = {deleteTask}
        onTaskCompeleChange = {toggleTaskComplete}
      />
    </div>
  )
}

export default Todo