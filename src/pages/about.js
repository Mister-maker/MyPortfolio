import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Profile from '../images/profile.jpg'
import Card from '../images/card_image.jpg'

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
      <section id="about-centent-section">
      <div class="wrapper">
          <div class="row">
            <div class="col-about-pic"><img src={Profile} alt="Profile Pic"/></div>
            <div class="col-about-content">
                <h3>Hi there! 👋</h3>
                <p>My name is Mohit Aggarwal and i am a <a href="#">Full Stack Web
                  Developer</a> and <a href="#">UI/UX Web Designer</a>. 
                </p>
                <p>Currently i live in Delhi (india) where 
                  i work as a Frontend Web Developer and Designer for Gyanspectrum.
                </p>
                <p>Currently i am pursuing my graduation in B.VOC software Development 
                  from <a href="#">Ramanujan College Delhi University</a>. 
                  Also I completed my Diploma in IT O Level from National Institute of Electronic and Information Technology Delhi.
                </p>
                <p>In my free time, I enjoy exploring motion design and how to make user friendly websites. 
                  where user can explore what they want to explore.
                </p>
                <p>Want to hear more? I can be reached for freelance opportunities or just to chat at mkaggrawal97@gmail.com. </p>
            </div>
          </div>
          <div class="photos-heading">
            <h1>Latest Photos</h1>
          </div>
          <div class="row-2">
            <div class="col-1"><img src={Card} alt="lates photos" /></div>
            <div class="col-2"><img src={Card} alt="lates photos" /></div>
            <div class="col-3"><img src={Card} alt="lates photos" /></div>
            <div class="col-4"><img src={Card} alt="lates photos" /></div>
            <div class="col-5"><img src={Card} alt="lates photos" /></div>
            <div class="col-6"><img src={Card} alt="lates photos" /></div>
            <div class="col-7"><img src={Card} alt="lates photos" /></div>
            <div class="col-8"><img src={Card} alt="lates photos" /></div>
          </div>
      </div>
    </section> 
  </Layout>
)

export default SecondPage
