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
import {deviceSizes} from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const StyledForm = styled.form`
    ${GridItem} {
      width: 100%;
    }
    display: ${props => props.formSent ? 'none' : 'block'};
`;
const FormButton = styled(Button)`
    @media (max-width: ${deviceSizes.tablet}){
      margin-top: 40px;
    }
`;
const StyledFormContainer = styled.div`
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;
const StyledIcon = styled(FontAwesomeIcon)`
    transform: scale(${props => props.formSent ? 1  : 0});
    transition: transform .5s ease-in-out;
    font-size: 8rem;
    position: absolute;

`


const Form = () => {

  const form = useRef();
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [formSent, setFormSent] = useState(false);
  let mql = window.matchMedia("all and (max-width: 767px)");

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm('service_mlig7wc', 'template_z0kus7a', form.current, '7ALpP9Ao0xf8bSVkG')
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              setFormSent(true);
            }).catch(error => {
              console.log('FAILED...', error);
            });
  };

  const onVerify = () => {
    setCaptchaVerified(true);
  }

  console.log('aaa', process.env.REACT_APP_RECAPTCHA_SITE_KEY);
  
  return (
    <StyledFormContainer> 
      <StyledIcon formSent={formSent} color='#00B01D' icon={faCircleCheck}/> 
      <Formik
      enableReinitialize
       initialValues={{ email: '', message: '', recaptcha: '' }}
       validate={values => {
        const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if(!values.message){
          errors.message = 'Required';
         }
         console.log(captchaVerified)
         if(!values.recaptcha){
           errors.recaptcha = 'Required'
         }
         return errors;
       }}
       onSubmit={()=>sendEmail()}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         setFieldValue
         /* and other goodies */
       }) => (
      <StyledForm onSubmit={handleSubmit} ref={form} formSent={formSent}>
        <Grid>      

          <GridItem width={6} vertical align="top">
            <Input label="Name" name="from_name"/>
            <ErrorMessage></ErrorMessage>
          </GridItem>
          <GridItem width={6} vertical align="top">
            <Input label="Email" type="email" name="email" onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}/>
             <ErrorMessage>{errors.email && touched.email && errors.email}</ErrorMessage>
          </GridItem>
          <GridItem width={12} vertical align="top">
            <TextArea label="Message" name="message" onChange={handleChange}
             onBlur={handleBlur}
             value={values.message}/>
             <ErrorMessage>{errors.message && touched.message && errors.message}</ErrorMessage>
          </GridItem>
          {console.log(errors)}
          <GridItem width={12} vertical align="top"><Reaptcha   id="recaptcha" name="recaptcha" value={captchaVerified} sitekey="6LeGksweAAAAALjr6hBAQrcvJFuI1Ub-6yBI2rCm" onVerify={recaptchaResponse => {
            console.log(recaptchaResponse);
            setFieldValue("recaptcha", recaptchaResponse);
          }} onExpire={recaptchaResponse => {
            setFieldValue("recaptcha", '');
          }} />             <ErrorMessage>{errors.recaptcha}</ErrorMessage></GridItem>
          <GridItem width={12}  justify="right"><FormButton type="submit"  text="Send" wide  disabled={isSubmitting}/></GridItem>
        </Grid>
      </StyledForm>
      )}
      </Formik>
      </StyledFormContainer>
  )
}

export default Form;