import Task from "../components/Task";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";
import { MainPageWrapper } from "../styles/styled";

const MainPage = () => {
  const { response, error, loading, resendRequest } = useFetch(
    "/api/v1/tasks",
    "GET"
  );
  const { sendRequest } = useRequest(null, "DELETE");
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const taskList =
    response?.items
      .filter((task) => !task.isCompleted)
      .map((task) => ({
        isCompleted: task.isCompleted,
        task: task.task,
        name: task.name,
        date: task.date,
        id: task._uuid,
      })) || [];

  const onDelete = (id) => {
    sendRequest(null, `/api/v1/tasks/${id}`).then(() => resendRequest());
  };

  return (
    <MainPageWrapper>
      {taskList.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </MainPageWrapper>
  );
};

export default MainPage;
