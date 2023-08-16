import { MenuBox, MenuList, MenuItem, MenuBtn } from './Menu.styled';

export const Menu = () => {
  return (
    <MenuBox>
      <MenuList>
        <MenuItem>
          <MenuBtn></MenuBtn>
        </MenuItem>
        <MenuItem>
          {' '}
          <MenuBtn></MenuBtn>
        </MenuItem>
        <MenuItem>
          {' '}
          <MenuBtn></MenuBtn>
        </MenuItem>
        <MenuItem>
          {' '}
          <MenuBtn></MenuBtn>
        </MenuItem>
        <MenuItem>
          {' '}
          <MenuBtn></MenuBtn>
        </MenuItem>
      </MenuList>
    </MenuBox>
  );
};
