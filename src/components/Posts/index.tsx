import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Community } from '../../atoms/communtiesAtom';
import { firestore } from '../../firebase/clientApp';

type PostsProps = {
  communityData: Community;
};

const Posts: React.FC<PostsProps> = ({ communityData }) => {
  const [loading, setLoading] = useState(false);
  const getPosts = async () => {
    try {
      const postsQuery = query(
        collection(firestore, 'posts'),
        where('communityId', '==', communityData.id),
        orderBy('createdAt', 'desc')
      );
      const postsDoc = await getDocs(postsQuery);
      const posts = postsDoc.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log('posts', posts);
    } catch (error: any) {
      console.log('getPosts error', error.message);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return <div>Have a good coding</div>;
};
export default Posts;
