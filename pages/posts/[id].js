import Image from 'next/image'
import Head from 'next/head';
import Layout from '../../components/layout';
import { getWebService } from '../../helpers/utils';
// import { getAllPostIds } from '../../lib/posts'

const YourComponent = () => (
  <Image
    src="/images/profile.jpeg"
    height={144}
    width={144}
    alt="Profile Picture"
  />
);

export default function FirstPost({ data }) {
  console.log(data);

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <YourComponent />
    </Layout>
  );
};

// export async function getStaticPaths() {
//   const paths = getAllPostIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

export async function getStaticProps ({ params }) {
  console.log(params);

  // Get external data from the file system, API, DB, etc.
  const response = await getWebService(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const data = response.data;

  // The value of the `props` key will be
  //  passed to the `FirstPost` component
  return {
    props: {
      data
    }
  };
};

// OR

/* export async function getServerSideProps (context) {
  // Get external data from the file system, API, DB, etc.
  const response = await getWebService('https://jsonplaceholder.typicode.com/users/1');
  const data = response.data;

  // The value of the `props` key will be
  //  passed to the `FirstPost` component
  return {
    props: {
      data
    }
  };
}; */