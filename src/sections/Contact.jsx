import React from 'react'
import Background from 'three/src/renderers/common/Background.js'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  
  const formRef = useRef();
  const [loading, setloading] = useState(false)
  const [form, setform] = useState({
    name: '',
    email: '',
    message: ''
  })

  // keep track what user is typing in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({
      ...form, 
      [name]: value 
    });
  };

  const handlSubmit = async(e) => {
    
    e.preventDefault();

    setloading(true);

    try {
     await emailjs.sendForm(
        'service_tmijtks', //service ID
        'template_prs90s8', //template ID
         formRef.current, //form ID
        'ZEZTJlskmacuWf_fJ', //user ID
     
        {
          from_name: form.name,
          to_name: 'Rania',
          from_email: form.email,
          to_email: 'ranialouna726@gmail.com',
          message: form.message
        } 
        
      )
      setloading(false);
      alert('Message sent successfully')
      
      setform({
        name: '',
        email: '',
        message: ''
      }) //clear form

    } catch (error) {
      console.log(error)
      setloading(false);
      alert('An error occured, Please try again later')
   
    }
    
  }

  return (
    <section className='c-space my-20 ' id='contact' >

        <div className='relative min-h-screen flex items-center  justify-center flex-col lg:bg-transparent bg-black-200'>

        
            <img src="/assets/terminal.png" alt="terminal"  className='contact-form   absolute min-h-screen lg:flex hidden'/>   

            <div className='contact-container'>
        

                <p className='head-text'>Let’s talk</p>
                <p className='font-light text-white-600 mt-3'>Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.</p>

                <form ref={formRef} onSubmit={handlSubmit} className=' flex flex-col space-y-7'>

                    <label className='space-y-3'>
                      <span className='field-label'>Full name</span>
                      <input 
                        type="text" 
                        placeholder='ex: John Doe' 
                        className='field-input text-white'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        required
                        />
                    </label>

                    <label className='space-y-3'>
                      <span className='field-label'>Email address</span>
                      <input 
                        type="email" 
                        placeholder='ex: john.doe@gmail.com' 
                        className='field-input'
                        name = 'email'
                        value={form.email}
                        onChange={handleChange}
                        required
                        />
                    </label>
                    

                    <label className='space-y-3'>
                      <span className='field-label'>Your message</span>
                      <textarea 
                        type="message" 
                        placeholder='Share your thoughts or inquiries...'  
                        className='field-input'
                        name = 'message'
                        value={form.message}
                        rows={5}
                        onChange={handleChange}
                        required
                        />
                    </label>

                  <button type="submit" disabled={loading} className='field-btn w-full mt-5'>
                    {loading ? 'Sending...' : 'Send message'}
                    <img src="/assets/arrow-up.png" className="field-btn_arrow" alt="" />
                  </button>
                </form>

                
            </div>

        </div>
        
    </section>
  )
    
}

export default Contact