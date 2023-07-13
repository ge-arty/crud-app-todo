import { useNavigate } from "react-router-dom";
import ToDoForm from "../components/ToDoForm";
import useRequest from "../hooks/useRequest";

const CreateTask = () => {
  const { loading, sendRequest } = useRequest("/api/v1/tasks", "POST");
  const navigate = useNavigate();
  const onFormSubmit = (task, name, date, isCompleted) => {
    sendRequest([{ task, name, date, isCompleted }])
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (loading) return <p>Loading ... </p>;

  return <ToDoForm onFormSubmit={onFormSubmit} />;
};

export default CreateTask;
