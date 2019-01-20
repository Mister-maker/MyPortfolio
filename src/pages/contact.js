import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import emailImage from '../images/email.svg'

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <section id="about-page">
        <div class="wrapper">
            <div class="about-page-section">
                <div class="about-page-section__left">
                  <img src={emailImage} alt="Mail Image" />
                </div>
                <div class="about-page-section__right">
                    <form name="portfolio-contact-form" method="post" netlify-honeypot="bot-field" data-netlify="true">
                        <div class="input-group">
                          <input type="hidden" name="form-name" value="portfolio-contact-form" /> 
                          <input type="text" name="name" placeholder="Your Name" />
                          <input type="email" name="email" placeholder="Your Email" />
                          <textarea name="message" placeholder="Remember, be nice!"></textarea>
                          <button class="btn" type="submit">Send </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>   
  </Layout>
)

export default SecondPage
