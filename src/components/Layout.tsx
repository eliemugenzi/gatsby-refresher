import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import SEO from "./SEO";

import styles from '../styles/layout.module.css';

import '../styles/global.css';

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  path?: string;
}

const Layout: React.FC<Props> = ({ children, ...rest }) => {
  const data = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const meta = data?.site?.siteMetadata ?? {};
  return (
    <>
      <SEO
        title={rest.title}
        description={rest.description}
        image={rest.image}
        path={rest.path}
      />
      <header className={styles.header}>
        <Link to="/">{meta.title}</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className={styles.content}>{children}</main>
    </>
  );
};

export default Layout
