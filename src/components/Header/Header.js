import { useState } from 'react';
import { Slider } from 'components/Slider/Slider';
import { Form } from '../Form/Form';
import {
  HeaderBox,
  IconSlidersHorizontal,
  IconBellRinging,
  IconClose,
  OpenModalButton,
  Btn,
} from './Header.styled';

export const Header = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const handleModal = () => {
    setExtendNavbar(curr => !curr);
    if (!extendNavbar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <HeaderBox>
      <OpenModalButton type="button" onClick={handleModal}>
        {!extendNavbar ? (
          <>
            <IconSlidersHorizontal />
          </>
        ) : (
          <>
            <IconClose />
          </>
        )}
      </OpenModalButton>
      {extendNavbar && <Form />}
      <Slider />
      <Btn type="button">
        <IconBellRinging />
      </Btn>
    </HeaderBox>
  );
};
