import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';
import Grid from './Grid';
import GridItem from './GridItem';
import Container from './Container';
import ErrorMessage from './ErrorMessage';
import emailjs from '@emailjs/browser';
import {Formik} from 'formik';
import Reaptcha from 'reaptcha';

const StyledForm = styled.form`
    
`


const Form = () => {

  const form = useRef();
  const [captchaVerified, setCaptchaVerified] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mlig7wc', 'template_z0kus7a', form.current, '7ALpP9Ao0xf8bSVkG')
            .then((result) => {
              console.log(result.text);
            }).catch(e => {
              console.log(e.text)
            });
  };

  const onVerify = () => {
    setCaptchaVerified(true);
  }

  console.log('aaa', process.env.REACT_APP_RECAPTCHA_SITE_KEY);
  
  return (
    <Container size="md">
      <Formik
       initialValues={{ email: '', message: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if(!values.message) {
           errors.message = 'Required';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         console.log('aa');
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
      <StyledForm onSubmit={handleSubmit} ref={form}>
        <Grid>      
          <GridItem width={6} vertical align="top"><Input label="Name" name="from_name"/>
          <ErrorMessage></ErrorMessage>
          </GridItem>
          <GridItem width={6} vertical align="top"><Input label="Email" type="email" name="email" onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}/>
             <ErrorMessage>{errors.email && touched.email && errors.email}</ErrorMessage>
          </GridItem>
          <GridItem width={12} vertical align="top"><TextArea label="Message" name="message" onChange={handleChange}
             onBlur={handleBlur}
             value={values.message}/>
             <ErrorMessage>{errors.message && touched.message && errors.message}</ErrorMessage>
          </GridItem>
          <GridItem width={6} justify="left"><Reaptcha sitekey="6LeGksweAAAAALjr6hBAQrcvJFuI1Ub-6yBI2rCm" onVerify={onVerify} /></GridItem>
          <GridItem width={6} justify="right"><Button  text="Send" disabled={isSubmitting}/></GridItem>
        </Grid>
      </StyledForm>
       )}
       </Formik>
    </Container>
  )
}

export default Form;