import styled from '@emotion/styled';
import { ReactComponent as House } from '../../assets/icons/House.svg';
import { ReactComponent as ClipboardText } from '../../assets/icons/ClipboardText.svg';
import { ReactComponent as Heart } from '../../assets/icons/Heart2.svg';
import { ReactComponent as ChatTeardropDots } from '../../assets/icons/ChatTeardropDots.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/UserIcon.svg';

export const MenuBox = styled.div`
  width: 361px;
  border-radius: 100px;
  background-color: var(--background-color);

  @media screen and (min-width: 768px) {
    width: 421px;
  }

  @media screen and (min-width: 1440px) {
    width: 521px;
  }
`;

export const MenuList = styled.ul`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 50px;
  }
`;

export const MenuItem = styled.li`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 25%;
    z-index: 2;
    display: block;
    width: 22px;
    height: 4px;
    border-radius: 50px;
    background-color: var(--active-color);
    opacity: 0;
    -webkit-transform: translateY(-28%);
    transform: translateY(-28%);
    -webkit-transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width: 768px) {
      bottom: -10px;
      left: 20%;
      width: 32px;
      height: 8px;
    }

    @media screen and (min-width: 1440px) {
      bottom: -15px;
      left: 15%;
      width: 42px;
      height: 10px;
    }
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transition: transform(250ms cubic-bezier(0.4, 0, 0.2, 1));
  }
`;

export const MenuBtn = styled.button`
  background-color: transparent;
`;

export const IconHouse = styled(House)`
  display: inline-block;
  cursor: pointer;
  width: 32px;
  height: 32px;

  &:active,
  &:focus,
  &:hover * {
    fill: var(--primary-icon);
  }

  @media screen and (min-width: 768px) {
    width: 42px;
    height: 42px;
  }

  @media screen and (min-width: 1440px) {
    width: 52px;
    height: 52px;
  }
`;

export const IconClipboardText = styled(ClipboardText)`
  display: inline-block;
  cursor: pointer;
  width: 32px;
  height: 32px;

  &:active,
  &:focus,
  &:hover * {
    fill: var(--primary-icon);
  }

  @media screen and (min-width: 768px) {
    width: 42px;
    height: 42px;
  }

  @media screen and (min-width: 1440px) {
    width: 52px;
    height: 52px;
  }
`;

export const IconHeart = styled(Heart)`
  display: inline-block;
  cursor: pointer;
  width: 32px;
  height: 32px;

  &:active,
  &:focus,
  &:hover * {
    fill: var(--primary-icon);
  }

  @media screen and (min-width: 768px) {
    width: 42px;
    height: 42px;
  }

  @media screen and (min-width: 1440px) {
    width: 52px;
    height: 52px;
  }
`;

export const IconChatTeardropDots = styled(ChatTeardropDots)`
  display: inline-block;
  cursor: pointer;
  width: 32px;
  height: 32px;

  :active,
  :focus,
  :hover * {
    fill: white;
    fill: var(--primary-icon);
  }

  @media screen and (min-width: 768px) {
    width: 42px;
    height: 42px;
  }

  @media screen and (min-width: 1440px) {
    width: 52px;
    height: 52px;
  }
`;

export const IconUser = styled(UserIcon)`
  display: inline-block;
  cursor: pointer;
  width: 32px;
  height: 32px;

  &:active,
  &:focus,
  &:hover * {
    fill: var(--primary-icon);
  }

  @media screen and (min-width: 768px) {
    width: 42px;
    height: 42px;
  }

  @media screen and (min-width: 1440px) {
    width: 52px;
    height: 52px;
  }
`;

export const Box = styled.div`
  width: 100vw;
  height: 391px;
  padding: 0 16px 20px 16px;
  position: absolute;
  z-index: 1;
  top: 461px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 30px;
  background: transparent;
  background-image: linear-gradient(
    to bottom,
    rgba(26, 26, 26, 0),
    rgba(26, 26, 26, 0.8)
  );

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    height: 563px;
    padding: 0 18px 24px 18px;
  }

  @media screen and (min-width: 1440px) {
    height: 510px;
    top: 400px;
    width: 720px;
    padding: 0 50px 50px 120px;
    gap: 190px;
    background-image: none;
  }
`;
