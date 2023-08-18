import styled from '@emotion/styled';

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 361px;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 421px;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 551px;
    gap: 30px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 17px;
  line-height: 20.72px;
  color: var(--primary-text);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 40.72px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 55px;
    line-height: 60.72px;
    color: var(--btn-background);
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17.07px;
  color: var(--primary-text);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 20.72px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 30.72px;
    color: var(--btn-background);
  }
`;
