import { ButtonList, ButtonItem, Button } from './Buttons.styled';

export const Buttons = () => {
  return (
    <ButtonList>
      <ButtonItem>
        <Button>Актер</Button>
      </ButtonItem>
      <ButtonItem>
        {' '}
        <Button>Игры</Button>
      </ButtonItem>
      <ButtonItem>
        {' '}
        <Button>Пицца</Button>
      </ButtonItem>
    </ButtonList>
  );
};
