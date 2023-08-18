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
    height: 229px;
    padding: 24px 18px 0 18px;
  }

  @media (min-width: 1140px) {
    max-width: 1440px;
    height: 189px;
    padding: 24px 18px 0 18px;
    background-image: linear-gradient(
      to bottom,
      rgba(26, 26, 26, 5),
      rgba(26, 26, 26, 0)
    );
  }
`;

export const Btn = styled.button`
  background-color: transparent;
`;

export const IconSlidersHorizontal = styled(SlidersHorizontal)`
  display: inline;
  cursor: pointer;
  width: 28px;
  height: 28px;
  stroke: var(--primary-icon);

  &:active,
  &:focus,
  &:hover * {
    stroke: var(--active-color);
    transform: translateY(-2px);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  @media (min-width: 768px) {
    width: 42px;
    height: 42px;
  }

  @media (min-width: 1440px) {
    width: 52px;
    height: 52px;
  }
`;

export const IconBellRinging = styled(BellRinging)`
  display: inline;
  cursor: pointer;
  width: 28px;
  height: 28px;
  stroke: var(--primary-icon);

  &:active,
  &:focus,
  &:hover * {
    stroke: var(--active-color);
    transform: translateY(-2px);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  @media (min-width: 768px) {
    width: 42px;
    height: 42px;
  }

  @media (min-width: 1440px) {
    width: 52px;
    height: 52px;
  }
`;
