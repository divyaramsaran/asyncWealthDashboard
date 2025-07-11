const isUserPresent = (users, id) => String(users[id]) !== "undefined";

const validateAndGetUserId = () => {
  const userId = Number(prompt("Enter User Id"));

  return isNaN(userId) ? validateAndGetUserId() : userId;
};

const exractProfile = (users, userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching data for user ID:${userId}...`);
    }, 1000);

    setTimeout(
      (resolve, reject) => {
        if (isUserPresent(users, userId)) {
          resolve(users[userId]);
        }

        reject("User not found. Please check the User ID and try again.");
      },
      2000,
      resolve,
      reject
    );
  });
};

const getUserProfile = async () => {
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
  const user = await exractProfile(users, userId);

  return [user, userId];
};

const printUser = (user) => {
  return `User:${user.name} (${user.email})`;
};

const extractStocks = (portfolio, userId) => {
  return new Promise((resolve) => {
    setTimeout(
      (resolve) => {
        resolve(portfolio[userId]);
      },
      1000,
      resolve
    );
  });
};

const stockMessage = (stocks) => {
  return stocks.map((stock) => {
    return `${stock.symbol}  ${stock.quantity}  ${stock.price}  ${
      stock.quantity * stock.price
    }`;
  });
};

const getUSerPortfolio = async () => {
  const portfolio = {
    0: [
      { symbol: "AAPL", quantity: 10, price: 150 },
      { symbol: "GOOGL", quantity: 5, price: 2800 },
    ],

    1: [
      { symbol: "FACBOOK", quantity: 8, price: 350 },
      { symbol: "YAHOO", quantity: 5, price: 2800 },
    ],
    2: [
      { symbol: "BING", quantity: 10, price: 150 },
      { symbol: "DUCKBDUCK", quantity: 5, price: 2800 },
    ],
  };

  const [user, id] = await getUserProfile();
  console.log(printUser(user));
  const stocks = await extractStocks(portfolio, id);
  return stocks;
};

const getStocks = async () => {
  const stocks = await getUSerPortfolio();
  console.log(`Symbol	Quantity	Price	Value`);
  stockMessage(stocks).forEach((stock) => console.log(stock));
  return stocks;
};

const main = async () => {
  try {
    const stocks = await getStocks();
    console.log(
      `Total Value: ${stocks.reduce(
        (acc, stock) => acc + stock.quantity * stock.price,
        0
      )}`
    );
    console.log("Thank you for using our service!");
  } catch (error) {
    console.error(error);
  }
};

main();
