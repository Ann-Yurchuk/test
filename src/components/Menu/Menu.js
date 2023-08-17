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
          <MenuBtn>
            <IconHouse />
          </MenuBtn>
        </MenuItem>
        <MenuItem>
          {' '}
          <MenuBtn>
            <IconClipboardText />
          </MenuBtn>
        </MenuItem>
        <MenuItem>
          {' '}
          <MenuBtn>
            <IconHeart />
          </MenuBtn>
        </MenuItem>
        <MenuItem>
          {' '}
          <MenuBtn>
            <IconChatTeardropDots />
          </MenuBtn>
        </MenuItem>
        <MenuItem>
          {' '}
          <MenuBtn>
            <IconUser />
          </MenuBtn>
        </MenuItem>
      </MenuList>
    </MenuBox>
  );
};
