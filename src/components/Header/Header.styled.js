import styled from '@emotion/styled';
import { ReactComponent as SlidersHorizontal } from '../../assets/icons/sliders-horizontal.svg';
import { ReactComponent as BellRinging } from '../../assets/icons/bell-ringing.svg';

export const HeaderBox = styled.header`
  max-width: 393px;
  margin: 0 auto;
  background-color: transparent;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1140px) {
    max-width: 1440px;
  }
`;

export const IconSlidersHorizontal = styled(SlidersHorizontal)`
  display: inline;
  cursor: pointer;
  width: 28px;
  height: 28px;
  fill: var(--primary-icon);

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const IconBellRinging = styled(BellRinging)`
  display: inline;
  cursor: pointer;
  width: 28px;
  height: 28px;
  fill: var(--primary-icon);

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
