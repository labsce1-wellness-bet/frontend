import React from "react";
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
    },
    {
      groupId: 2,
      groupName: "Insomniacs",
      members: ["Caleb", "Jonathan", "Eric", "Brian"],
      admin: 423,
    },
  ],
});
export { UserContext };
