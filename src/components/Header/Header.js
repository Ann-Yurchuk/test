import {
  HeaderBox,
  IconSlidersHorizontal,
  IconBellRinging,
  Btn,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderBox>
      <Btn type="button">
        <IconSlidersHorizontal />
      </Btn>
      <Btn type="button">
        <IconBellRinging />
      </Btn>
    </HeaderBox>
  );
};
