import React from "react";
import moment from "moment";
const UserContext = React.createContext({
  userId: 123,
  fname: "Caleb",
  lname: "Kirkwood",
  email: "ckirkwood94@gmail.com",
  groups: [
    {
      groupId: 1,
      groupName: "Sleeping People",
      members: ["Caleb", "Akshay", "Simon", "Boniface"],
      admin: 123,
      adminName: "Caleb Kirkwood",
      betAmount: 50,
      startDate: moment()
        .add(5, "days")
        .format("M/DD/YYYY"),
      endDate: moment()
        .add(12, "days")
        .format("M/DD/YYYY"),
      potTotal: 150,
      message:
        "It's time for us to start getting the sleep we need. If you're like me, you're feeling sluggish and slow all day. Let's compete and get the sleep we need! Call me mama bear because I'm going to hibernate and win this thing!",
    },
    {
      groupId: 2,
      groupName: "Insomniacs",
      members: [
        {
          fname: "Caleb",
          lname: "Kirkwood",
          progress: 30,
          paid: true,
          last_five: [8, 13, 20, 24, 30],
        },
        {
          fname: "Jonathan",
          lname: "Holloway",
          progress: 39,
          paid: true,
          last_five: [7, 13, 23, 32, 39],
        },
        {
          fname: "John",
          lname: "Schmidt",
          progress: 42,
          paid: true,
          last_five: [10, 18, 25, 33, 42],
        },
        {
          fname: "Mary",
          lname: "Smith",
          progress: 31,
          paid: true,
          last_five: [8, 15, 22, 26, 31],
        },
      ],
      admin: 423,
      adminName: "Jonathan Holloway",
      betAmount: 25,
      startDate: moment()
        .subtract(5, "days")
        .format("M/DD/YYYY"),
      endDate: moment()
        .add(22, "days")
        .format("M/DD/YYYY"),
      potTotal: 100,
      message:
        "It's time for us to start getting the sleep we need. If you're like me, you're feeling sluggish and slow all day. Let's compete and get the sleep we need! Call me mama bear because I'm going to hibernate and win this thing!",
    },
    {
      groupId: 3,
      groupName: "Sleepers",
      members: [
        {
          fname: "Caleb",
          lname: "Kirkwood",
          progress: 0,
          paid: true,
          last_five: [0, 0, 0, 0, 0],
        },
        {
          fname: "Jonathan",
          lname: "Holloway",
          progress: 0,
          paid: true,
          last_five: [0, 0, 0, 0, 0],
        },
        {
          fname: "John",
          lname: "Schmidt",
          progress: 0,
          paid: true,
          last_five: [0, 0, 0, 0, 0],
        },
        {
          fname: "Mary",
          lname: "Smith",
          progress: 0,
          paid: true,
          last_five: [0, 0, 0, 0, 0],
        },
      ],
      admin: 423,
      adminName: "Jonathan Holloway",
      betAmount: 25,
      startDate: moment()
        .add(5, "days")
        .format("M/DD/YYYY"),
      endDate: moment()
        .add(22, "days")
        .format("M/DD/YYYY"),
      potTotal: 100,
      message:
        "It's time for us to start getting the sleep we need. If you're like me, you're feeling sluggish and slow all day. Let's compete and get the sleep we need! Call me mama bear because I'm going to hibernate and win this thing!",
    },
  ],
});
export { UserContext };
