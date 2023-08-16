import styled from '@emotion/styled';
import background from '../../assets/img/man.jpg';
import background2 from '../../assets/img/man@2x.jpg';

export const ContainerStyle = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 24px 16px;

  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 393px),
    screen and (min-resolution: 192dpi) and (min-width: 393px),
    screen and (min-resolution: 2dppx) and (min-width: 393px) {
    & {
      background-image: url('${background2}');
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
    background-image: url(${background2});
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 100px;
    background-image: url(${background2});
  }
`;
