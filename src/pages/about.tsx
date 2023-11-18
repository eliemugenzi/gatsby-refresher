import { HeadFC, Link, PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';

const About: React.FC<PageProps> = () => {
  return (
   <Layout>
        <h1>About Me</h1>
        <Link to='/'>Go back home</Link>
  
   </Layout>
  )
}

export default About;


export const Head: HeadFC = ()=> <title>About Page</title>