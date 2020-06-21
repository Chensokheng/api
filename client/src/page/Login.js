import React from 'react';
import { Container, Title } from '../components/shared';
import {
  ButtonLogin,
  Typography,
  SubContainer,
  Text,
  Box,
} from '../components/login';
export default function Login() {
  return (
    <Container>
      <SubContainer>
        <Box>
          <ButtonLogin>
            <img src="assets/github.png" alt="" height="60px" width="60px" />
            <Typography>Github</Typography>
          </ButtonLogin>
          <ButtonLogin>
            <img src="assets/facebook.png" alt="" height="60px" width="60px" />
            <Typography>Facebook</Typography>
          </ButtonLogin>
        </Box>
        <Box>
          <Title>Register</Title>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </Text>
        </Box>
      </SubContainer>
    </Container>
  );
}
