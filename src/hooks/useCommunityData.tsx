import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import {
  Community,
  CommunitySnippet,
  communityState,
} from '../atoms/communtiesAtom';
import { auth, firestore } from '../firebase/clientApp';

const useCommunityData = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(communityState);

  const onJoinOrLeaveCommunity = (
    communityData: Community,
    isJoined: boolean
  ) => {
    if (isJoined) {
      leaveCommunity(communityData.id);
      return;
    }
    joinCommunity(communityData);
  };

  const getMySnippets = async () => {
    setLoading(true);
    try {
      const snippetDocs = await getDocs(
        collection(firestore, `users/${user?.uid}/communitySnippets`)
      );

      const snippets = snippetDocs.docs.map((doc) => ({ ...doc.data() }));
      console.log('snippets', snippets);
      setCommunityStateValue((prev) => ({
        ...prev,
        mySnippets: snippets as CommunitySnippet[],
      }));
    } catch (error) {
      console.log('getMySnipetsERror', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!user) return;
    getMySnippets();
  }, [user]);

  const joinCommunity = (communityData: Community) => {};

  const leaveCommunity = (communityId: string) => {};

  return {
    communityStateValue,
    onJoinOrLeaveCommunity,
    loading,
  };
};
export default useCommunityData;
