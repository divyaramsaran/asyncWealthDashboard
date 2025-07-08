# AsyncWealthDashboard

## Problem Statement

As a developer at AsyncAwait Finance, your mission is to build a modern JavaScript application that fetches, processes, and displays financial data using the `async`/`await` syntax. The project simulates real-world asynchronous operations, including API calls for user portfolios, stock prices, and transaction histories. Your goal is to design a robust, readable, and maintainable codebase that leverages `async`/`await` for clear and efficient asynchronous workflows.

---

## Project Specifications

### Project Name

**AsyncAwait Finance Dashboard**

---

### Functional Requirements

- **Asynchronous Data Fetching:**  
  Use `async`/`await` to fetch user portfolio data, current stock prices, and recent transactions from simulated APIs.
- **Sequential and Parallel Operations:**  
  Fetch user profile and portfolio sequentially, then fetch stock prices for all holdings in parallel.
- **Error Handling:**  
  Implement try/catch blocks for robust error handling and display user-friendly error messages.
- **Data Aggregation:**  
  Combine portfolio and price data to calculate the total portfolio value.
- **User Interaction:**  
  Allow the user to enter a user ID and display their dashboard with holdings, prices, and total value.
- **Loading and Status Indicators:**  
  Show loading messages while data is being fetched and clear status updates upon completion or error.

---

### Input

1. **User ID:**  
   Numeric input (e.g., 1, 2, 3).  
   Used to fetch the user’s profile and portfolio.

2. **Simulated APIs:**
   - `getUserProfile(userId)` — Returns user name and email.
   - `getUserPortfolio(userId)` — Returns an array of holdings (stock symbols and quantities).
   - `getStockPrice(symbol)` — Returns the latest price for a stock symbol.
   - `getTransactions(userId)` — Returns a list of recent transactions.

---

### Output

- **User Dashboard:**  
  Display the following information:
  - User name and email.
  - Table of holdings: symbol, quantity, current price, and holding value.
  - Total portfolio value.
  - List of recent transactions.
  - Status or error messages as appropriate.

#### Example Output

Fetching data for user ID: 1...

User: Alice Smith (alice@example.com)

Portfolio:

| Symbol | Quantity | Price   | Value    |
|--------|----------|---------|----------|
| AAPL   | 10       | $195.2  | $1,952   |
| TSLA   | 5        | $690.1  | $3,450.5 |

Total Portfolio Value: $5,402.5

Recent Transactions:

Bought 5 TSLA @ $670.0

Sold 2 AAPL @ $200.0

Status: Data loaded successfully!

#### Example Error Output

Fetching data for user ID: 99...

Error: User not found. Please check the User ID and try again.