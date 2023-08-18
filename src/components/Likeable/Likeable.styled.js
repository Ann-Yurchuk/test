import styled from '@emotion/styled';
import backgroundLeft from '../../assets/img/background-left.png';
import backgroundLeft2 from '../../assets/img/background-left@2x.png';
import backgroundRight from '../../assets/img/background-right.png';
import backgroundRight2 from '../../assets/img/background-right@2x.png';
import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';
import { ReactComponent as None } from '../../assets/icons/Close.svg';

export const Box = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 350px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 1px;
  }
`;
export const BoxLeft = styled.div`
  position: absolute;
  z-index: 5;
  top: 261px;
  left: 0;
  width: 78px;
  height: 114px;
  background-image: url('${backgroundLeft}');
  background-size: 78px 114px;
  background-position: bottom 0px left 0px;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    top: 195px;
    width: 156px;
    height: 228px;
    background-image: url('${backgroundLeft2}');
    background-size: 156px 228px;
    background-position: bottom 0px left 0px;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    top: 305px;
    width: 156px;
    height: 228px;
  }
`;

export const BoxRight = styled.div`
  position: absolute;
  z-index: 5;
  top: 205px;
  right: 0;
  width: 78px;
  height: 114px;
  background-image: url('${backgroundRight}');
  background-size: 78px 114px;
  background-position: bottom 0px right 0px;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    top: 55px;
    width: 156px;
    height: 228px;
    background-image: url('${backgroundRight2}');
    background-size: 156px 228px;
    background-position: bottom 0px right 0px;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    top: 175px;
    right: calc(-680px + 1vw);
    width: 156px;
    height: 228px;
  }
`;

export const Btn = styled.button`
  background-color: transparent;
`;

export const IconHeart = styled(Heart)`
  position: absolute;
  bottom: 45px;
  right: 35px;
  display: inline-block;
  cursor: pointer;
  width: 26px;
  height: 26px;

  &:active,
  &:focus,
  &:hover * {
    fill: var(--active-color);
  }

  @media screen and (min-width: 768px) {
    width: 42px;
    height: 42px;
    bottom: 90px;
    right: 90px;
  }
`;

export const IconNone = styled(None)`
  position: absolute;
  bottom: 45px;
  left: 35px;
  display: inline-block;
  cursor: pointer;
  width: 26px;
  height: 26px;

  &:active,
  &:focus,
  &:hover * {
    stroke: var(--secondary-icon);
  }

  @media screen and (min-width: 768px) {
    width: 42px;
    height: 42px;
    bottom: 90px;
    left: 90px;
  }
`;
