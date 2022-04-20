import { Flex, Icon, MenuItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GrAdd } from 'react-icons/gr';
import CreateCommunity from '../../Modal/CreateCommunity';

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CreateCommunity open={open} handleClose={() => setOpen(false)} />
      <MenuItem
        width={'100%'}
        fontSize='10pt'
        _hover={{ bg: 'gray.100' }}
        onClick={() => setOpen(true)}
      >
        <Flex align='center'>
          <Icon as={GrAdd} mr={2} fontSize={20} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};
export default Communities;
