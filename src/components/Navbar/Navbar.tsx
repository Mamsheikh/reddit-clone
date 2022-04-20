import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import RightContent from './RightContent';
import SearchInput from './SearchInput';

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex bg='white' height={'44px'} padding='6px 12px'>
      <Flex align={'center'}>
        <Image src='/images/redditFace.svg' alt='logo' height={'30px'} />
        <Image
          src='/images/redditText.svg'
          alt='logo-text'
          height={'46px'}
          display={{ base: 'none', md: 'unset' }}
        />
      </Flex>
      <SearchInput />
      <RightContent user={user} />
      {/* <Directory /> */}
    </Flex>
  );
};
export default Navbar;
