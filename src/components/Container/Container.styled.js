import styled from '@emotion/styled';
import background from '../../assets/img/man.jpg';
import background2 from '../../assets/img/man@2x.jpg';

export const ContainerStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-image: url('${background}');
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${background2}');
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    background-image: url('${background2}');
    background-position: left 0;
    background-size: 118%;
    background-repeat: no-repeat;
    object-fit: cover;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    background-image: linear-gradient(
        to bottom,
        rgba(26, 26, 26, 0),
        rgba(26, 26, 26, 0.6)
      ),
      url('${background2}');
    background-position: right 7px top 10px;
    background-size: 50%;
    background-repeat: no-repeat;
    object-fit: cover;
  }
`;
