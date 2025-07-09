const isUserPresent = (users, id) => String(users[id]) !== "undefined";

const validateAndGetUserId = () => {
  const userId = Number(prompt("Enter User Id"));

  return isNaN(userId) ? validateAndGetUserId() : userId;
};

const getUserProfile = () => {
  const users = {
    0: {
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
    },
    1: {
      name: "Jane Smith",
      age: 25,
      email: "jane.smith@example.com",
    },
    2: {
      name: "Alice Johnson",
      age: 28,
      email: "alice.johnson@example.com",
    },
  };

  const userId = validateAndGetUserId();

  if (isUserPresent(users, userId)) return users[userId];

  throw "User not found. Please check the User ID and try again.";
};

console.log(getUserProfile());
