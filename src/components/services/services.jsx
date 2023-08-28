import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi';
const services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list__icon"/>
            <p>UX Design</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>User Research & Analysis</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>Customer Journey Mapping</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>UI and Interaction Design</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>User Testing</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>Mobile First and Responsive Design</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>Rapid and Interactive Prototyping</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>Wireframe & Interactive Prototyping</p>
          </li>          
        </ul>
        {/* End of UI/UX */}
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list__icon"/>
            <p>Git</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>Responsive Design</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>SEO</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>Problem Solving</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>Creativity</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>UI/UX Design</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>Back-end Basics</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>JavaScript</p>
          </li>          
        </ul>
        {/* Web Development Creation */}
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list__icon"/>
            <p>Content Creation</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>Research</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>SEO</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>content promotion</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>Content Creation</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>Research</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>SEO</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>content promotion</p>
          </li>
          <li>
            <BiCheck className="service__list__icon"/>
            <p>SEO</p>
          </li>
          
        </ul>
        {/* End of Content Creation */}
      </article>

    </div>
    </section>
  )
}

export default services