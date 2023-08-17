import styled from '@emotion/styled';
import backgroundLeft from '../../assets/img/background-left.png';
// import backgroundLeft2 from '../../assets/img/background-left@2x.png';
import backgroundRight from '../../assets/img/background-right.png';
// import backgroundRight2 from '../../assets/img/background-right@2x.png';
import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';
import { ReactComponent as None } from '../../assets/icons/Close.svg';

export const Box = styled.div`
  position: relative;
  width: 393px;
  height: 350px;
  display: flex;
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
    fill: var(--primary-icon);
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
`;
