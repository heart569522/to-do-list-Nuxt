export interface Task {
  id: number;
  title: string;
  detail: string | null;
  status: string;
  tag: string;
  date: string;
}

export interface ToDoItem {
  id: number;
  todoName: string;
  todoDetail: string | null;
  todoDate: string;
  task: Task[];
}

export const toDoData: ToDoItem[] = [
  {
    id: 1,
    todoName: "Work Everyday",
    todoDetail: "list of work everyday i do",
    todoDate: "2024-05-28",
    task: [
      {
        id: 1,
        title: "Meeting with clients",
        detail: "Discuss project requirements and timelines.",
        status: "Pending",
        tag: "Important",
        date: "2024-05-28",
      },
      {
        id: 2,
        title: "Prepare presentation",
        detail: "Create slides for tomorrow's meeting.",
        status: "In Progress",
        tag: "Urgent",
        date: "2024-05-28",
      },
      {
        id: 3,
        title: "Review project documentation",
        detail: "Check project specs and update as needed.",
        status: "Completed",
        tag: "Low priority",
        date: "2024-05-27",
      },
    ],
  },
  {
    id: 2,
    todoName: "Home Do",
    todoDetail: "in home need i do",
    todoDate: "2024-05-29",
    task: [
      {
        id: 1,
        title: "Grocery shopping",
        detail: "Buy vegetables, fruits, and household items.",
        status: "Pending",
        tag: "Essential",
        date: "2024-05-29",
      },
      {
        id: 2,
        title: "Clean the house",
        detail: "Sweep, mop, and dust all rooms.",
        status: "In Progress",
        tag: "Household",
        date: "2024-05-29",
      },
      {
        id: 3,
        title: "Fix leaking faucet",
        detail: "Call plumber to repair the kitchen faucet.",
        status: "Pending",
        tag: "Maintenance",
        date: "2024-05-29",
      },
      {
        id: 4,
        title: "Organize garage",
        detail: "Arrange tools and equipment neatly.",
        status: "Pending",
        tag: "Organizational",
        date: "2024-05-29",
      },
    ],
  },
];
