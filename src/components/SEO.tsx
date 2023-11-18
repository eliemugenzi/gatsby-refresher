import { Helmet } from 'react-helmet';
import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';


type SEOProps = {
    title?: string;
    description?: string;
    image?: string;
    path?: string;
}



const SEO: React.FC<SEOProps> = (props)=>{
    const data = useStaticQuery(
        graphql`
        query GetSiteMetadata {
            site {
                siteMetadata {
                    title
                    description
                    image
                    siteUrl
                }
            }
        }
        `
    )

    const defaults = data?.site?.siteMetadata;
    
    const title = props?.title || defaults?.title;
    const description = props?.description || defaults?.description;
    const image = new URL(props.image || defaults.image, defaults.siteUrl);
    const url = new URL(props.path || '/', defaults.siteUrl);

    return (
        <Helmet>
            <title>{title}</title>
            <meta  name='description' content={description}/>
            <link rel="canonical" href={url} />
            {image && <meta name='image' content={image} />}

            {/* Facebook Metadata */}
            <meta property='og:url' content={url} />
            <meta property='og:type' content='Website' />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            {image && <meta  name='og:image' content={image}/>}
            
            {/* Twitter Metadata */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={title} />
            <meta name='description' content={description} />
            {image && <meta name='twitter:image' content={image} />}
        </Helmet>
    )
};

export default SEO;
