import styled from '@emotion/styled';
import { ReactComponent as SlidersHorizontal } from '../../assets/icons/SlidersHorizontal.svg';
import { ReactComponent as BellRinging } from '../../assets/icons/BellRinging.svg';

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100vw;
  height: 129px;
  margin: 0 auto;
  padding: 22px 16px 0 16px;
  background-color: transparent;
  background-image: linear-gradient(
    to bottom,
    rgba(26, 26, 26, 1),
    rgba(26, 26, 26, 0)
  );

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1140px) {
    max-width: 1440px;
  }
`;

export const Btn = styled.button`
  background-color: transparent;
`;

export const Slider = styled.span``;

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
