import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Hi from the second page</h1>
    <p>Welcome to Contact Page </p>
    <p>Please leave a message for me.. </p>
    <form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true">
      <p><input type="hidden" name="form-name" value="contact" />  </p>
      <p><input type="text" name="name" placeholder="Your Name"/></p>
      <p><input type="email" name="email" placeholder="Your Email"/></p>
      <p><textarea name="message">Yor Message </textarea></p>
      <p><input type="submit" value="submit"/></p>
    </form>     
  </Layout>
)

export default SecondPage
