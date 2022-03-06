import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

type BoardItemProps = {
  index: number;
  item: any;
};

type BoardItemStylesProps = {
  isDragging: boolean;
  children: React.ReactElement;
};

const BoardItemEl = styled.div<BoardItemStylesProps>`
  padding: 8px;
  background-color: ${(props) => (props.isDragging ? "#d3e4ee" : "#fff")};
  border-radius: 4px;
  transition: background-color 0.25s ease-out;

  &:hover {
    background-color: #f7fafc;
  }

  & + & {
    margin-top: 4px;
  }
`;

export const BoardItem = (props: BoardItemProps) => {
  return (
    <Draggable draggableId={props.item.id} index={props.index}>
      {(provided, snapshot) => (
        <BoardItemEl
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {/* The content of the BoardItem */}
          {props.item.content}
        </BoardItemEl>
      )}
    </Draggable>
  );
};