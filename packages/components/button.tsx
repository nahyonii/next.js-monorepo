import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  border: 1px solid red;
  background: white;
`;

const Button = () => {
  const handleClickButton = () => {
    console.log('test');
  };

  return (
    <ButtonStyle type="button" onClick={handleClickButton}>
      버튼
    </ButtonStyle>
  );
};

export default Button;
