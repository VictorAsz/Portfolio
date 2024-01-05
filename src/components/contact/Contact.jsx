import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
            <h2 className="section_title">Get in touch</h2>
            <span className="section_subtitle">Contact Me</span>

            <div className="contact_container container grid">
                <div className="contact_content">
                    <h3 className="contact_title">Talk to me</h3>
                    <div className="contact_info">
                        <div className="contact_card">
                            <i className="bx bx-mail-send"></i>
                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">victor.a.schumann@gmail.com</span>

                            <a href="mailto:victor.a.schumann@gmail.com" className="contact_button">{" "}Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bxl-whatsapp contact_card-icon"></i>
                            <h3 className="contact_card-title">Whatsapp</h3>
                            <span className="contact_card-data">+55 (54) 9 8428-9836</span>

                            <a target="_blank" href="https://api.whatsapp.com/send?phone=5554984289836&text=Ol%C3%A1,%20temos%20interesse%20em%20contratar%20voc%C3%AA." className="contact_button">{" "}Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bxl-linkedin contact_card-icon"></i>
                            <h3 className="contact_card-title">Linkedin</h3>
                            <span className="contact_card-data">Victor Assunção</span>

                            <a href="https://www.linkedin.com/in/victoraszs/" target="_blank" className="contact_button">{" "} Write me<i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                        </div>


                    </div>

                </div>

            <div className="contact_content">
                <h3 className="contact_title">Write me your project</h3>

                <form action="" className="contact_form">
                    <div className="contact_form-div">
                        <label htmlFor="" className="contact_form-tag">Name</label>
                        <input 
                        type="text" 
                        name='name' 
                        lassName='contact_form-input' 
                        placeholder='Insert your name'
                        />
                    </div>
                    <div className="contact_form-div">
                        <label htmlFor="" className="contact_form-tag">Name</label>
                        <input 
                        type="email"
                        name='email' 
                        className='contact_form-input' 
                        placeholder='Insert your email'
                        />
                    </div>
                    <div className="contact_form-div">
                        <label htmlFor="" className="contact_form-tag">Project</label>
                        <textarea 
                        name="project" cols="30" rows="10"
                        className="contact_form-input" placeholder="write your project"
                            
                        ></textarea>
                    </div>

                    <button className="button button--flex">
                      Send Message
                      <i class="uil uil-arrow-right message_icon"></i>       
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact