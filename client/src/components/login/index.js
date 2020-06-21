import styled from 'styled-components';

const ButtonLogin = styled.div`
  display: flex;
  align-items: center;
  background: #ddd;
  width: 300px;
  margin: 10px;
  background: #3e3c3f;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background: #7d73f9;
  }
`;

const Typography = styled.h1`
  letter-spacing: 5px;
  font-size: 1.2rem;
  margin: 0 auto;
  margin-left: 10%;
  color: #fff;
  flex-grow: 1;
  text-algin: center;
  user-select: none;
`;
const SubContainer = styled.div`
  display: flex;
  width: 600px;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

const Text = styled.p`
  color: #000;
`;

const Box = styled.div`
  margin: 10px;
`;

export { ButtonLogin, Typography, SubContainer, Text, Box };
