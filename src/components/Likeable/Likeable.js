import {
  Box,
  BoxLeft,
  BoxRight,
  Btn,
  IconHeart,
  IconNone,
} from './Likeable.styled';

export const Likeable = () => {
  return (
    <Box>
      <BoxLeft>
        <Btn type="button">
          <IconNone />
        </Btn>
      </BoxLeft>
      <BoxRight>
        <Btn type="button">
          <IconHeart />
        </Btn>
      </BoxRight>
    </Box>
  );
};
