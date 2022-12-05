import {useState}  from 'react';
import PropTypes from "prop-types";
import { Header, Form, FormBtn, Input } from "./Searchbar.styled";
import { FaSearch } from 'react-icons/fa';

export const Searchbar = ({onSubmit}) => {

  const [imgName, setImgName] = useState('');

    const handleSubmitForm = event => {
      event.preventDefault();
      onSubmit(imgName);
    }
    
    return (
      <Header >
    <Form onSubmit = {handleSubmitForm}>
      <FormBtn type="submit" >
        <FaSearch color={'#000'} size={'20px'}/>          
      </FormBtn>

      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        required
        onChange={event => setImgName(event.target.value.toLowerCase())}
        />
    </Form>
  </Header>)
  }

Searchbar.propTypes = {
 onSubmit:PropTypes.func 
} 