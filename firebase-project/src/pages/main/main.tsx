import {getDocs, collection} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { Post } from './post';

export interface post {
    id: string;
    userId: string;
    title: string;
    username: string;
    description: string;
}

export const Main = ()=>{
    const [postsList, setPostList] = useState<post[] | null>(null);
    const postRef = collection(db, "posts");

    const getPosts = async() =>{
    const data = await getDocs(postRef);
   setPostList(data.docs.map((doc)=>({...doc.data(), id: doc.id})) as post[]);
    };
    
    useEffect(()=>{
    getPosts();
    });

    return <div>{postsList?.map((post) =>
    <Post post = {post}/>)}</div>
}