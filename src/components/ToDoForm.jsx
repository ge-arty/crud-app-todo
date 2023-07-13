import { useRef } from "react";
import { FormWrapper, SubmitBtn } from "../styles/styled";

const ToDoForm = ({ onFormSubmit, task }) => {
  const taskRef = useRef();
  const nameRef = useRef();
  const dateRef = useRef();
  const isCompleted = false;

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(
      taskRef.current.value,
      nameRef.current.value,
      dateRef.current.value,
      isCompleted
    );
  };
  return (
    <FormWrapper onSubmit={onSubmit}>
      <label htmlFor="task">
        Task:
        <input
          type="text"
          placeholder="Enter task"
          ref={taskRef}
          defaultValue={task}
          id="task"
        />
      </label>
      <label htmlFor="task">
        Name:
        <input type="text" placeholder="Enter Name" ref={nameRef} id="name" />
      </label>
      <label htmlFor="task">
        Deadline:
        <input type="date" ref={dateRef} id="deadline" />
      </label>
      <SubmitBtn>Submit</SubmitBtn>
    </FormWrapper>
  );
};

export default ToDoForm;
