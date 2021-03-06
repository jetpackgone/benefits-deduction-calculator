# Employee Benefits Deduction Calculator

## About

A simple web application that calculates the employee benefit deductions employee paychecks with the following rules and assumptions:

### Rules

- The cost of benefits is $1000/year for each employee
- Each dependent (children and possibly spouses) incurs a cost of $500/year
- Anyone whose name starts with 'A' gets a 10% discount, employee or dependent

### Assumptions

- All employees are paid $2000 per paycheck before deductions
- There are 26 paychecks in a year

Filling out employee name and dependent names will cause the benefits deduction preview to update and display the gross, deduction, and net pay on an annual vs per-paycheck basis.

## How to Run

### Prerequisites

Before running the parser or tests, complete the following:

1. Install the latest [NodeJS/NPM](https://nodejs.org/en/).
2. Run `npm install` to install dependencies.

### Local

Use the following to run at `localhost:3000`:

```
npm start
```

### Tests

Run tests with the following:

```
npm test
```
