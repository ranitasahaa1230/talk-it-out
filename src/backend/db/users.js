import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Ranita",
    lastName: "Saha",
    username: "ranitaasaha",
    password: "ranitasaha@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ria",
    lastName: "Singh",
    username: "riassingh145",
    password: "riasingh@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Cindrella",
    lastName: "Rose",
    username: "rosyy123",
    password: "cindrella@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Keshav",
    lastName: "Tarak",
    username: "keshavtarakk123",
    password: "keshavtarak@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Rohan",
    lastName: "Dubey",
    username: "dubeyRoh",
    password: "rohandubey@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Nidhi",
    lastName: "Vasa",
    username: "nidhiivasaa",
    password: "nidhivasa@345",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ishita",
    lastName: "Verma",
    username: "Kishitaa",
    password: "vermaishh@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ede",
    lastName: "Quitt",
    username: "edeeQuitt45",
    password: "edequitt@13",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
