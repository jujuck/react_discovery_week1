import "./App.css";
import CardId from "./components/CardId";

const peoples = [
  {
    firstname: "Marc",
    lastname: "Philippe",
    age: 42,
    hobbies: ["Foot", "Basket", "Food"],
    isGraduate: false,
    adress: {
      street: "Une rue parmis d'autres",
      zipcode: 12345,
      city: "Paris",
    },
  },
  {
    firstname: "Bob",
    lastname: "Martin",
    age: 35,
    hobbies: ["Guitar", "Books"],
    isGraduate: true,
    adress: {
      street: "Une autre rue parmis d'autres",
      zipcode: 12345,
      city: "Paris BIS",
    },
  },
  {
    firstname: "Pierre",
    lastname: "Michel",
    age: 35,
    hobbies: ["Guitar", "Books"],
    isGraduate: true,
    adress: {
      street: "Une autre rue parmis d'autres",
      zipcode: 12345,
      city: "Paris BIS",
    },
  },
  {
    firstname: "Philippe",
    lastname: "Zinclair",
    age: 35,
    hobbies: ["Guitar", "Books"],
    isGraduate: false,
    adress: {
      street: "Une autre rue parmis d'autres",
      zipcode: 12345,
      city: "Paris BIS",
    },
  },
];

function App() {
  return (
    <>
      <h1>Le Bon demo n°2</h1>
      <div>
        {peoples.map((people) => (
          <CardId people={people} />
        ))}
      </div>
    </>
  );
}

export default App;

/**
 * const CardId = (name, age) => {
 *      return 'Hello'
 *
 * }
 *
 * CardID("toto", 5)
 *
 *
 *
 *
 * peoples => Array
 * people[i] => onePeople (Object)
 * cardId : onePeople => people
 */
