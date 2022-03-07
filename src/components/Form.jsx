import React, {useRef} from 'react'
import styled from 'styled-components'
import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';
import Grid from './Grid';
import GridItem from './GridItem';
import Container from './Container';
import emailjs from '@emailjs/browser';

const StyledForm = styled.form`
    
`


const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mlig7wc', 'template_z0kus7a', form.current, '7ALpP9Ao0xf8bSVkG')
            .then((result) => {
              console.log(result.text);
            }).catch(e => {
              console.log(e.text)
            });


    
  };

  return (
    <Container size="md">
      <StyledForm onSubmit={sendEmail} ref={form}>
        <Grid>        
          <GridItem width={6}><Input label="Name" name="from_name"/></GridItem>
          <GridItem width={6}><Input label="Email" name="email"/></GridItem>
          <GridItem width={6}><Input label="Name"/></GridItem>
          <GridItem width={6}><Input label="Name"/></GridItem>
          <GridItem width={12}><TextArea label="Message" name="message"/></GridItem>
          <GridItem width={12} justify="right"><Button text="Send"/></GridItem>
        </Grid>
      </StyledForm>
    </Container>
  )
}

export default Form;