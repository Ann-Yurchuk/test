import { ButtonList, ButtonItem, Button } from './Buttons.styled';

export const Buttons = () => {
  return (
    <ButtonList>
      <ButtonItem>
        <Button>актер</Button>
      </ButtonItem>
      <ButtonItem>
        {' '}
        <Button>игры</Button>
      </ButtonItem>
      <ButtonItem>
        {' '}
        <Button>пицца</Button>
      </ButtonItem>
    </ButtonList>
  );
};
