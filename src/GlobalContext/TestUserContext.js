import React from "react";
import moment from "moment";
const TestUserContext = React.createContext({
  userId: 123,
  fname: "Caleb",
  lname: "Kirkwood",
  email: "ckirkwood94@gmail.com",
  groups: [
    // admin not started
    {
      groupId: 1,
      groupName: "Sleeping People",
      members: [
        {
          fname: "Caleb",
          lname: "Kirkwood",
          progress: 30,
          paid: true,
          last_five: [8, 13, 20, 24, 30],
          receipt: true,
        },
        {
          fname: "Jonathan",
          lname: "Holloway",
          progress: 39,
          paid: true,
          last_five: [7, 13, 23, 32, 39],
          receipt: true,
        },
        {
          fname: "John",
          lname: "Schmidt",
          progress: 42,
          paid: false,
          last_five: [10, 18, 25, 33, 42],
          receipt: true,
        },
        {
          fname: "Mary",
          lname: "Smith",
          progress: 31,
          paid: false,
          last_five: [8, 15, 22, 26, 31],
          receipt: true,
        },
        {
          fname: "Akshay",
          lname: "Gadkari",
          progress: 37,
          paid: false,
          last_five: [7, 16, 24, 30, 37],
          receipt: false,
        },
        {
          fname: "Boniface",
          lname: "Makau",
          progress: 39,
          paid: false,
          last_five: [8, 17, 24, 32, 39],
          receipt: false,
        },
        {
          fname: "Simon",
          lname: "Davis",
          progress: 41,
          paid: true,
          last_five: [10, 18, 25, 33, 41],
          receipt: true,
        },
      ],
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
    // user comp running
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
        {
          fname: "Akshay",
          lname: "Gadkari",
          progress: 37,
          paid: true,
          last_five: [7, 16, 24, 30, 37],
        },
        {
          fname: "Boniface",
          lname: "Makau",
          progress: 39,
          paid: true,
          last_five: [8, 17, 24, 32, 39],
        },
        {
          fname: "Simon",
          lname: "Davis",
          progress: 41,
          paid: true,
          last_five: [10, 18, 25, 33, 41],
        },
      ],
      admin: 423,
      adminName: "Jonathan Holloway",
      betAmount: 25,
      startDate: moment()
        .subtract(1, "days")
        .format("M/DD/YYYY"),
      endDate: moment()
        .add(3, "days")
        .format("M/DD/YYYY"),
      potTotal: 100,
      message:
        "It's time for us to start getting the sleep we need. If you're like me, you're feeling sluggish and slow all day. Let's compete and get the sleep we need! Call me mama bear because I'm going to hibernate and win this thing!",
    },
    // user not started
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
    // user finished comp
    {
      groupId: 4,
      groupName: "Something Something",
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
        {
          fname: "Akshay",
          lname: "Gadkari",
          progress: 37,
          paid: true,
          last_five: [7, 16, 24, 30, 37],
        },
        {
          fname: "Boniface",
          lname: "Makau",
          progress: 39,
          paid: true,
          last_five: [8, 17, 24, 32, 39],
        },
        {
          fname: "Simon",
          lname: "Davis",
          progress: 41,
          paid: true,
          last_five: [10, 18, 25, 33, 41],
        },
      ],
      admin: 423,
      adminName: "Jonathan Holloway",
      betAmount: 25,
      startDate: moment()
        .subtract(10, "days")
        .format("M/DD/YYYY"),
      endDate: moment()
        .subtract(1, "days")
        .format("M/DD/YYYY"),
      potTotal: 100,
      message:
        "It's time for us to start getting the sleep we need. If you're like me, you're feeling sluggish and slow all day. Let's compete and get the sleep we need! Call me mama bear because I'm going to hibernate and win this thing!",
    },
  ],
});
export { TestUserContext };
