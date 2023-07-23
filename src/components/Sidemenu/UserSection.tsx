import { useSession, signOut } from 'next-auth/react';
import React from 'react';
import { Box } from '~/styles';
import { PSmallRegular } from '~/styles/Text';
import { GiExitDoor } from 'react-icons/gi';
import { useRouter } from 'next/router';

const UserSection = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session?.user) {
    return router.push('/');
  }
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex">
        <button onClick={() => signOut()}>
          <GiExitDoor size={24} />
        </button>
        <PSmallRegular ml={2}>
          {session?.user.name?.split(' ')[0]}
        </PSmallRegular>
      </Box>
      <PSmallRegular mt={2}>{session?.user?.email}</PSmallRegular>
    </Box>
  );
};

export default UserSection;
