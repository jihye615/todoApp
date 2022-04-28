import React from 'react';
import styled from "styled-components";

const TodoTemplate = ({children}) => {
    return (
        <TodoWrapper>
            <AppTile>Todo List</AppTile>
            <Content>{children}</Content>
        </TodoWrapper>
    );
};
const TodoWrapper = styled.div`
    width: 512px;
    margin: 6rem auto 0;
    border-radius: 4px;
    overflow: hidden;
`;

const AppTile = styled.div`
    background: #e7e5f3;
    color: #412e63;
    font-size: 40px;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Permanent Marker', cursive;
`;

const Content = styled.div`
    background: #e7e5f3;
`;

export default TodoTemplate;