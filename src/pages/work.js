import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import work from '../images/card_image.jpg'

const SecondPage = () => (
  <Layout>
    <SEO title="Work" />
      <section id="work-section">
        <div class="wrapper">
            <div class="row">
                <div class="col-1"><img src={work} alt="work image" />
                    <div class="image-caption"><span>Now Showing</span>
                        <p>Travel website </p><a href="#">visit Project</a>
                    </div>
                </div>
                <div class="col-2"><img src={work} alt="work image" />
                    <div class="image-caption"><span>Now Showing</span>
                        <p>how are you fine thank you </p><a href="#">visit Project</a>
                    </div>
                </div>
                <div class="col-3"><img src={work} alt="work image" />
                    <div class="image-caption"><span>Now Showing </span>
                        <p>how are you fine thank you </p><a href="#">visit Project</a>
                    </div>
                </div>
                <div class="col-4"><img src={work} alt="work image" />
                    <div class="image-caption"><span>Now Showing </span>
                        <p>how are you fine thank you </p><a href="#">visit Project</a>
                    </div>
                </div>
                <div class="col-5"><img src={work} alt="work image" />
                    <div class="image-caption"><span>Now Showing </span>
                        <p>how are you fine thank you </p><a href="#">visit Project</a>
                    </div>
                </div>
                <div class="col-6"><img src={work} alt="work image" />
                    <div class="image-caption"><span>Now Showing </span>
                        <p>how are you fine thank you </p><a href="#">visit Project</a>
                    </div>
                </div>
            </div>
        </div>
    </section>  
  </Layout>
)

export default SecondPage
