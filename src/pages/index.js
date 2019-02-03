import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import headerBackground from '../images/header-compressor.png'
import projectOne from '../images/card_image.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section id="home-header-section">
        <div class="wrapper">
            <div class="home-header-section__left">
                <h1 class="large">UX/UI DESIGNER AND DEVELOPER </h1>
                <p>i am a Full Stack Web Developer with some basic knowledege of UI/UX web design.</p>
                <a href="https://github.com/Mister-maker" target="blank"><i class="fab fa-github"></i></a>
                <a href="https://twitter.com/Man_of_focus" target="blank"> <i class="fab fa-twitter"></i></a>
                <a href="https://dribbble.com/Mister-maker" target="blank"> <i class="fab fa-dribbble"></i></a>
                <a href="https://www.linkedin.com/in/man-of-focus" target="blank"> <i class="fab fa-linkedin"></i></a>
            </div>
            <div class="home-header-section__right">
                <div class="illustration"><img src={headerBackground} /></div>
            </div>
        </div>
    </section>
    <section id="home-projects-section">
        <div class="wrapper">
            <div class="project__heading">
                <h3>CURRENT PROJECTS</h3>
                <p>Go to my current projects to learn about me and my kool work.</p>
            </div>
            <div class="project__row">
                <div class="project__col-1">
                    <div class="inner-project">
                        <div class="project__card__image"><img src={projectOne} alt=""/></div>
                        <div class="project__card__content"><span>about project</span>
                            <h3>this is for trevel website</h3><a href="#">see now </a>
                        </div>
                    </div>
                </div>
                <div class="project__col-2">
                    <div class="inner-project">
                        <div class="project__card__image"><img src={projectOne} alt=""/></div>
                        <div class="project__card__content"><span>about project</span>
                            <h3>this is for trevel website</h3><a href="#">see now </a>
                        </div>
                    </div>
                </div>
                <div class="project__col-3">
                    <div class="inner-project">
                        <div class="project__card__image"><img src={projectOne} alt=""/></div>
                        <div class="project__card__content"><span>about project</span>
                            <h3>this is for trevel website</h3><a href="#">see now </a>
                        </div>
                    </div>
                </div>
                <div class="project__col-4">
                    <div class="inner-project">
                        <div class="project__card__image"><img src={projectOne} alt=""/></div>
                        <div class="project__card__content"><span>about project</span>
                            <h3>this is for trevel website</h3><a href="#">see now </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </Layout>
)

export default IndexPage
