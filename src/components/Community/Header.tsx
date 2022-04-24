import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { FaReddit } from 'react-icons/fa';
import { Community } from '../../atoms/communtiesAtom';

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  const isJoined = false;
  return (
    <Flex direction='column' width='100%' height='140px'>
      <Box height='50%' bg='blue.400' />
      <Flex justify='center' bg='white' flexGrow={1}>
        <Flex width='95%' maxWidth='860px'>
          {communityData.imageUrl ? (
            <Image src={communityData?.imageUrl} alt='community' />
          ) : (
            <Icon
              as={FaReddit}
              fontSize={64}
              position='relative'
              top={-3}
              color='blue.400'
              border='4px solid white'
              borderRadius='50%'
            />
          )}
          <Flex padding='10px 16px'>
            <Flex direction='column' mr={6}>
              <Text fontWeight={800} fontSize='16pt'>
                {communityData.id}
              </Text>
              <Text color='gray.400' fontWeight={600} fontSize='10pt'>
                r/{communityData.id}
              </Text>
            </Flex>
            <Button
              onClick={() => {}}
              variant={isJoined ? 'outline' : 'solid'}
              height='30px'
              pr={6}
              pl={6}
            >
              {isJoined ? 'Joined' : 'Join'}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
