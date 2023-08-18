import {
  MenuBox,
  MenuList,
  MenuItem,
  MenuBtn,
  IconHouse,
  IconClipboardText,
  IconHeart,
  IconChatTeardropDots,
  IconUser,
} from './Menu.styled';

export const Menu = () => {
  return (
    <MenuBox>
      <MenuList>
        <MenuItem>
          <MenuBtn type="button">
            <IconHouse />
          </MenuBtn>
        </MenuItem>
        <MenuItem>
          {' '}
          <MenuBtn type="button">
            <IconClipboardText />
          </MenuBtn>
        </MenuItem>
        <MenuItem>
          {' '}
          <MenuBtn type="button">
            <IconHeart />
          </MenuBtn>
        </MenuItem>
        <MenuItem>
          {' '}
          <MenuBtn type="button">
            <IconChatTeardropDots />
          </MenuBtn>
        </MenuItem>
        <MenuItem>
          {' '}
          <MenuBtn type="button">
            <IconUser />
          </MenuBtn>
        </MenuItem>
      </MenuList>
    </MenuBox>
  );
};
