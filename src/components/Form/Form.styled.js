import styled from '@emotion/styled';

export const Forma = styled.form`
  position: absolute;
  z-index: 8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 90%;
  padding: 2em;
  border-radius: 10px;
  border: 1px solid #293e52;
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background-color: var(--form-background);
  background-color: --webkit-gradient(
    left top,
    right top,
    color-stop(0%, #293e52),
    color-stop(29%, #a3b9d1),
    color-stop(50%, #a3b9d1),
    color-stop(71%, #a3b9d1),
    color-stop(100%, #293e52)
  );
  background-color: -webkit-linear-gradient(
    left,
    #293e52 0%,
    #a3b9d1 29%,
    #a3b9d1 50%,
    #a3b9d1 71%,
    #293e52 100%
  );
  background-color: linear-gradient(
    to right,
    #293e52 0%,
    #a3b9d1 29%,
    #a3b9d1 50%,
    #a3b9d1 71%,
    #293e52 100%
  );

  @media (min-width: 768px) {
    width: 95%;
    height: 70%;
    gap: 15px;
  }

  @media (min-width: 1440px) {
    width: 97%;
    height: 65%;
    gap: 10px;
  }
`;

export const Label = styled.label`
  color: var(--primary-text);
  font-size: 0.8rem;
  font-family: 'Montserrat', sans-serif;
  text-shadow: 1px 1px 1px #232323;
`;

export const Input = styled.input`
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 1em 2em;
  border: 1px solid grey;
  width: 100%;
  box-sizing: border-box;
  color: var(--primary-text);
  font-size: 0.8rem;
  font-family: 'Montserrat', sans-serif;
  text-shadow: 1px 1px 1px #232323;
  border-radius: 25px;
  background-color: var(--form-background);
  background-color: --webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, #293e52),
    color-stop(100%, #fa5846)
  );
  background-color: -webkit-linear-gradient(top, #293e52 0%, #fa5846 100%);
  background-color: linear-gradient(to bottom, #293e52 0%, #fa5846 100%);

  &:focus {
    outline: none;
    -webkit-transition: -webkit-transform 0.15s ease;
    transition: -webkit-transform 0.15s ease;
    transition: transform 0.15s ease;
    transition: transform 0.15s ease, -webkit-transform 0.15s ease;
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
  }
`;

export const Button = styled.button`
  padding: 1em;
  width: 100%;
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background-color: var(--form-btn);
  background-color: --webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, #ffbf00),
    color-stop(100%, #fa9f17)
  );
  background-color: -webkit-linear-gradient(top, #ffbf00 0%, #fa9f17 100%);
  background-color: linear-gradient(to bottom, #ffbf00 0%, #fa9f17 100%);
  border: 0;
  border-radius: 30px;
  color: var(--secondary-text);
  margin-top: 50px;
  font-size: 0.85em;
  font-weight: 500;
  text-shadow: -1px -1px #b86200, 0 1px 0 #ecb76b;

  &:focus {
    outline: none;
    -webkit-transition: -webkit-transform 0.15s ease;
    transition: -webkit-transform 0.15s ease;
    transition: transform 0.15s ease;
    transition: transform 0.15s ease, -webkit-transform 0.15s ease;
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
  }
`;

export const Error = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: var(--error);
`;
