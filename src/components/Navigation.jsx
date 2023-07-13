import { LinkButton, NavWrapper } from "../styles/styled";

const Navigation = () => {
  return (
    <NavWrapper>
      <LinkButton to={"/crud-app-todo"}>Home</LinkButton>
      <LinkButton to={"/finished"}>Finished Tasks</LinkButton>
      <LinkButton to={"/post"}>Create</LinkButton>
    </NavWrapper>
  );
};
export default Navigation;
