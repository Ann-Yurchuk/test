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

  /* @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
    background-image: url(${background2});
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 100px;
    background-image: url(${background2});
  } */
`;
