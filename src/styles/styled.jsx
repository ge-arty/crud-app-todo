import { Link } from "react-router-dom";
import styled from "styled-components";

// ------
export const LinkButton = styled(Link)`
  font-weight: bold;
  color: #d6542c;
  background-color: #124c81;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 20%;
`;

// ----
export const AppWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  min-height: 100vh;
  background-color: #99a8bb;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const NavWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 1rem 0;

  display: flex;
  justify-content: space-between;
`;

export const MainPageWrapper = styled.div`
  width: 100%;
  max-width: 800px;

  padding: 1rem 0;
  gap: 1rem;

  display: flex;
  flex-direction: column;
`;

export const TaskWrapper = styled.div`
  background-color: #eda28a;
  border-radius: 5px;
  padding: 1rem;
  gap: 1rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TaskFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TaskTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const TaskText = styled.p`
  color: #3c345c;
  font-weight: 500;
`;
export const UpdatePageWrapper = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const SubmitBtn = styled.button`
  padding: 0.5rem;
  background-color: #99a8bb;
  color: #fff;
  font-weight: bold;
  border-radius: 20%;

  cursor: pointer;
`;

// Form

export const FormWrapper = styled.form`
  padding: 1rem;
  gap: 1rem;
  background-color: #124c81;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
`;

export const DeleteBtn = styled.button`
  padding: 0.5rem;
  background-color: #d6542c;
  color: #fff;
  font-weight: bold;
  border-radius: 20%;

  cursor: pointer;
`;

export const FinishBtn = styled.button`
  padding: 0.5rem;
  background-color: #3c345c;
  color: #fff;
  font-weight: bold;
  border-radius: 20%;

  cursor: pointer;
`;
