export let initialBoardData = {
  items: {
    "item-1": {
      id: "item-1",
      title: "Todo Number: 1.",
      description: "Description text 1",
      status: "open",
      created: 1646581923,
    },
    "item-2": {
      id: "item-2",
      title: "Todo Number: 2.",
      description: "Description text 2",
      status: "open",
      created: 1646581923,
    },
    "item-3": {
      id: "item-3",
      title: "Todo Number: 3.",
      description: "Description text 3",
      status: "open",
      created: 1646581923,
    },
    "item-4": {
      id: "item-4",
      title: "Todo Number: 4.",
      description: "Description text 4",
      status: "open",
      created: 1646581923,
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Open",
      itemsIds: ["item-1", "item-2", "item-3", "item-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      itemsIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Complete",
      itemsIds: [],
    },
  },
  columnsOrder: ["column-1", "column-2", "column-3"],
};
