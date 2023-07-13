import { useNavigate, useParams } from "react-router-dom";
import ToDoForm from "../components/ToDoForm";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";
import { FinishBtn, UpdatePageWrapper } from "../styles/styled";

const UpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { response, error, loading } = useFetch(`/api/v1/tasks/${id}`, "GET");

  const { sendRequest } = useRequest(`/api/v1/tasks/${id}`, "PUT");

  const onSubmit = (task) => {
    sendRequest({ task })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const finishTask = () => {
    sendRequest({ isCompleted: true })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading && !response) return <div>Loading...</div>;
  if (error || !response) return <div>Something went wrong</div>;

  return (
    <UpdatePageWrapper>
      <ToDoForm onFormSubmit={onSubmit} task={response?.task} />
      <FinishBtn onClick={() => finishTask()}>Finish Task</FinishBtn>
    </UpdatePageWrapper>
  );
};
export default UpdatePage;
