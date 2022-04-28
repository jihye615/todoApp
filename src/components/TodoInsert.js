import React, {useCallback, useState} from 'react';
import {MdAdd} from "react-icons/md";
import styled from "styled-components";

const Todoinsert = ({onInsert}) => {
    const[value, setValue] = useState ("");

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    }, [onInsert, value]);
    
    return (
        <TodoInsertWrapper onSubmit={onSubmit}>
            <input 
                value={value} 
                type="text" 
                placeholder='할 일을 입력하세요' onChange={onChange} 
            />
            <button type='submit'>
                <MdAdd />
            </button>
            
        </TodoInsertWrapper>
    );
};

const TodoInsertWrapper = styled.form`
  display: flex;
  background: #7b4a8b;
  input{
    background: none;
    outline:none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: #fff;
    &::placeholder {
        color: #fff;
        font-family: 'Gamja Flower', cursive;
        text-indent: 15px;
    }
    flex: 1;
  }
  button{
    background: #7a71a8;
    outline: none;
    border: none;
    color: #fff;
    padding:0 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor:pointer;
    transition: 0.1s background ease-in;
    &:hover{
      background: #7a80a1;
    }
  }
`;

export default Todoinsert;