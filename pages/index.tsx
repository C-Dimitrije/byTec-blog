import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, Header } from '../components'

import { getPosts } from '../services';
import PostWidget from "../components/PostWidget"


export default function Home({ posts }) {
  return (
    <div className="display">
   
      <Head>
      <script src="https://kit.fontawesome.com/dd4ecbb228.js" crossOrigin="anonymous"></script>
      </Head>
      <div className='landing-blog-desc'>
        <h3>Postani deo naše zajednice!
          <i className="fa-solid fa-people-group"> </i>
          <br></br> Budi u toku sa najnovijim postovima, ostavi svoj komentar i podeli na društvenim mrežama!</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
        <div className="lg:col-span-8 col-span-1 post-radius">
          {posts.map((post) => (
            <PostCard key={post.title} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1 rightside">
          <div className="lg:sticky relative top-28">
            {/* <PostWidget slug={slug}/> */}
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}