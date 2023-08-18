import styled from '@emotion/styled';

export const SliderBox = styled.div`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  &::before {
    content: '';
    position: absolute;
    top: 33px;
    right: 57%;
    z-index: 2;
    display: block;
    width: 32px;
    height: 6px;
    border-radius: 50px;
    background-color: var(--color-slide);

    @media screen and (min-width: 768px) {
      top: 37px;
      right: 58%;
      width: 42px;
      height: 10px;
    }

    @media screen and (min-width: 1440px) {
      top: 38px;
      left: 17%;
      width: 52px;
      height: 15px;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    gap: 25px;
  }
`;

export const Item = styled.li`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 25%;
    z-index: 2;
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50px;
    background-color: var(--primary-text);

    @media screen and (min-width: 768px) {
      top: 13px;
      width: 10px;
      height: 10px;
    }

    @media screen and (min-width: 1440px) {
      top: 15px;
      left: -330px;
      width: 12px;
      height: 12px;
    }
  }
`;
