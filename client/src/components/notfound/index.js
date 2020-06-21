import styled from 'styled-components';

const Title = styled.h1`
  color: #000;
`;

const Image = styled.img`
  width: 500px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const RedirectLink = styled.a`
  font-size: 1.2rem;
  text-decoration: underline;
  color: #000;
`;

export { Title, Image, RedirectLink };
