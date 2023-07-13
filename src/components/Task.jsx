import {
  LinkButton,
  TaskFlexContainer,
  TaskWrapper,
  TaskText,
  TaskTextWrapper,
  DeleteBtn,
} from "../styles/styled";
const Task = ({ task, onDelete, changeStatus }) => {
  return (
    <TaskWrapper>
      <TaskTextWrapper>
        <TaskText>Task:</TaskText>
        <TaskText>{task.task}</TaskText>
      </TaskTextWrapper>
      <TaskTextWrapper>
        <TaskText>Task ID:</TaskText>
        <TaskText>{task.id}</TaskText>
      </TaskTextWrapper>
      <TaskTextWrapper>
        <TaskText>Task Owner:</TaskText>
        <TaskText>{task.name}</TaskText>
      </TaskTextWrapper>
      <TaskTextWrapper>
        <TaskText>Task date:</TaskText>
        <TaskText>{task.date}</TaskText>
      </TaskTextWrapper>
      <TaskTextWrapper>
        <TaskText>Task Status:</TaskText>
        <TaskText>
          {task.isCompleted ? "Task is Finished" : "Task in progress"}
        </TaskText>
      </TaskTextWrapper>

      <TaskFlexContainer>
        <LinkButton to={`/update/${task.id}`}>Update Task</LinkButton>
        <DeleteBtn onClick={() => onDelete(task.id)}>Delete</DeleteBtn>
      </TaskFlexContainer>
    </TaskWrapper>
  );
};

export default Task;
