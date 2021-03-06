import React from "react";
import PropTypes from "prop-types";
import {Link, graphql} from "gatsby";

import Layout from "../components/Layout";
// import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
// import profile_pic from "../../static/img/profile-pic.png";

export const IndexPageTemplate = ({image, title, heading, subheading, mainpitch, description, intro}) => (
    <div>
        {/* <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div> */}
        <header>
            <div className="container">
                <div className="profile-image">
                    <figure className="image is-150x150">
                        <img
                            className="is-rounded"
                            src={
                                !!image.childImageSharp
                                    ? image.childImageSharp.fluid.src
                                    : image
                            }
                            alt="profile-pic"
                        />
                    </figure>
                </div>
                <div className="intro">
                    <div className="name">Hello , I'm Irham</div>
                    <p className="subtitle">
                        A professional software engineer from Indonesia who talk Java, Python,
                        Javascript, PHP, and love to implement <a
                        href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" target="_blank"
                        rel="noopener noreferrer">DRY</a> and <a
                        href="https://www.oreilly.com/library/view/clean-code/9780136083238/" target="_blank"
                        rel="noopener noreferrer">Clean
                        Code</a> method.
                    </p>
                </div>
            </div>
        </header>
        <div className="quote-div">
            <hr/>
        </div>
        <section className="section-index section--gradient">
            <div className="container">
                <div className="section-index">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content">
                                <div className="content">
                                    <blockquote className="groucho">
                                        Any fool can write code that a computer can understand. Good programmers write
                                        code that humans can understand.
                                        <footer>Martin Fowler</footer>
                                    </blockquote>
                                    {/* <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div> */}
                                </div>
                                {/*<div className="columns">*/}
                                {/*    <div className="column is-12">*/}
                                {/*        <h3 className="has-text-weight-semibold is-size-2">*/}
                                {/*            {heading}*/}
                                {/*        </h3>*/}
                                {/*        <p>{description}</p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<Features gridItems={intro.blurbs}/>*/}
                                {/*<div className="columns">*/}
                                {/*    <div className="column is-12 has-text-centered">*/}
                                {/*        <Link className="btn" to="/products">*/}
                                {/*            See all products*/}
                                {/*        </Link>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className="column is-12">
                                    <h3 className="has-text-weight-semibold is-size-2">
                                        Latest stories
                                    </h3>
                                    <BlogRoll/>
                                    <div className="column is-12 has-text-centered">
                                        <Link className="button is-link is-outlined" to="/blog">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array
    })
};

const IndexPage = ({data}) => {
    const {frontmatter} = data.markdownRemark;

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                subheading={frontmatter.subheading}
                mainpitch={frontmatter.mainpitch}
                description={frontmatter.description}
                intro={frontmatter.intro}
            />
        </Layout>
    );
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object
        })
    })
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                heading
                subheading
                mainpitch {
                    title
                    description
                }
                description
                intro {
                    blurbs {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 240, quality: 64) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        text
                    }
                    heading
                    description
                }
            }
        }
    }
`;
