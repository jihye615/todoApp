import React from 'react';
import styled from 'styled-components';
import {
  MdCheckCircle,
  MdOutlineRadioButtonUnchecked,
  MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;
  return (
    <TodoItemWrapper>
      <CheckBox className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
        {checked ? <MdCheckCircle /> : <MdOutlineRadioButtonUnchecked />}
        <div className="text">{text}</div>
      </CheckBox>
      <Remove onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  font-family: 'Gamja Flower', cursive;
  font-size: 20px;
  &:nth-child(even) {
    background: #f8f7fc;
  }
  & + & {
    border-top: 2px dashed #dee2e6;
  }
`;

const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
  .text {
    margin-left: 0.5rem;
    flex: 1;
  }
  &.checked {
    svg {
      color: #5e22d0;
    }
    .text {
      color: #adb5bd;
      text-decoration: line-through #ff6b6b;
    }
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

export default TodoListItem;