import styled from 'styled-components';

const Title = styled.h1`
  color: white;
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
  color: #fff;
`;

export { Title, Image, RedirectLink };
