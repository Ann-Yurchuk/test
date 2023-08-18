import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 15px;
  }
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
  background-color: var(--btn-background);

  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &:active {
    background-color: var(--background-color);
    color: var(--primary-text);
    transform: translateY(-3px);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    padding: 10px 30px;
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 170px;
    padding: 20px 50px;
    font-size: 24px;
  }
`;
