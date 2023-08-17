import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const ButtonItem = styled.li`
  display: flex;
`;

export const Button = styled.button`
  width: 78px;
  padding: 5px 20px;

  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 15.85px;

  border-radius: 50px;
  color: var(--secondary-text);
  background-color: rgba(26, 26, 26, 0.6);

  &:hover,
  &:focus,
  &:active {
    background-color: rgba(26, 26, 26, 0.9);
    color: var(--primary-text);
  }
`;
