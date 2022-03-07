import Board from "react-trello";
import { useNavigate, Link } from "react-router-dom";

export const data = {
  lanes: [
    {
      cards: [
        {
          description: "2 Gallons of milk at the Deli store",
          id: "Plan1",
          label: "15 mins",
          laneId: "PLANNED",
          title: "Buy milk",
        },
        {
          description: "Sort out recyclable and waste as needed",
          id: "Plan2",
          label: "10 mins",
          laneId: "PLANNED",
          title: "Dispose Garbage",
        },
        {
          description: "Can AI make memes?",
          id: "Plan3",
          label: "30 mins",
          laneId: "PLANNED",
          title: "Write Blog",
        },
        {
          description: "Transfer to bank account",
          id: "Plan4",
          label: "5 mins",
          laneId: "PLANNED",
          title: "Pay Rent",
        },
      ],
      currentPage: 1,
      id: "PLANNED",
      title: "Planned Tasks",
    },
    {
      cards: [
        {
          description:
            "Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses",
          id: "Wip1",
          label: "30 mins",
          laneId: "WIP",
          title: "Clean House",
        },
      ],
      currentPage: 1,
      droppable: false,
      id: "WIP",
      title: "Work In Progress (Not Droppable)",
    },
    {
      cards: [],
      currentPage: 1,
      id: "COMPLETED",

      style: {
        width: 280,
      },
      title: "Completed (Droppable)",
    },
  ],
};

export default function Boards() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1 className="bg-green-200">Vroom Test</h1>
      <Board
        data={data}
        editable
        onCardClick={(cardId) => navigate(`/ticket/${cardId}`)}
      />
    </div>
  );
}
