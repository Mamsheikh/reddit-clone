import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  return (
    <Flex direction='column' width='100%' mb={4}>
      <Button
        variant='oauth'
        mb={2}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src='/images/googlelogo.png' alt='logo' mr={2} height='20px' />
        Continue with Google
      </Button>
      <Button onClick={() => signInWithGithub()}>Some other provider</Button>
      {error && <Text>{error?.message}</Text>}
    </Flex>
  );
};
export default OAuthButtons;
