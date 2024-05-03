import { faker } from "@faker-js/faker";

export const ratingMeterList = [
  {
    name: "GCP Usages",
    uid: "AccountId + TransactionDate",
    description: "GCP usage data definition",
    status: "Inactive",
  },
  {
    name: "Azure Usages",
    uid: "AccountId + TransactionDate",
    description: "Azure usage data definition",
    status: "Active",
  },
];

export const barData = [
  {
    name: "Q1 24",
    Actual: 590,
    Plan: 800,
    Forecast: 900,
  },
  {
    name: "Q2 24",
    Actual: 868,
    Plan: 967,
    Forecast: 1000,
  },
  {
    name: "Q3 24",
    Plan: 1098,
    Forecast: 1100,
  },
  {
    name: "Q4 24",
    Plan: 1200,
    Forecast: 1300,
  },
];

export const barData2 = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

export const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export const makeData = (numberOfRows) =>
  [...Array(numberOfRows).fill(null)].map(() => ({
    firstName: {
      value: faker.person.firstName(),
      locked: faker.datatype.boolean(),
    },
    middleName: {
      value: faker.person.firstName(),
      locked: faker.datatype.boolean(),
    },
    lastName: {
      value: faker.person.lastName(),
      locked: faker.datatype.boolean(),
    },
    email: { value: faker.internet.email(), locked: faker.datatype.boolean() },
    phoneNumber: {
      value: faker.phone.number(),
      locked: faker.datatype.boolean(),
    },
    address: {
      value: faker.location.streetAddress(),
      locked: faker.datatype.boolean(),
    },
    zipCode: {
      value: faker.location.zipCode(),
      locked: faker.datatype.boolean(),
    },
    city: { value: faker.location.city(), locked: faker.datatype.boolean() },
    state: { value: faker.location.state(), locked: faker.datatype.boolean() },
    country: {
      value: faker.location.country(),
      locked: faker.datatype.boolean(),
    },
    petName: { value: faker.animal.cat(), locked: faker.datatype.boolean() },
    age: {
      value: faker.number.float({ min: 0, max: 100 }),
      locked: faker.datatype.boolean(),
    },
    salary: {
      value: faker.number
        .float({ min: 0, max: 1000000 })
        .toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
      locked: faker.datatype.boolean(),
    },
    dateOfBirth: {
      value: faker.date.past({ years: 50 }).toDateString(),
      locked: faker.datatype.boolean(),
    },
    dateOfJoining: {
      value: faker.date.past({ years: 20 }).toDateString(),
      locked: faker.datatype.boolean(),
    },
  }));

export const camel2title = (camelCase) =>
  camelCase
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim();
