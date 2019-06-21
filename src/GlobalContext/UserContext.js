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
        .add(3, "days")
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
      members: ["Caleb", "Jonathan", "Eric", "Brian"],
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
