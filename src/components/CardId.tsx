import React, { useState } from "react";

interface Adress {
  street: string;
  zipcode: number;
  city: string;
}

type CardIdProps = {
  people: {
    firstname: string;
    lastname: string;
    age: number;
    isGraduate: boolean;
    adress: Adress;
    hobbies: Array<string>;
  };
};

function CardId({ people }: CardIdProps) {
  const [index, setIndex] = useState(false);

  const displayAdress = () => {
    setIndex(!index);
    //console.log(index);
  };

  return (
    <div className="card">
      <h2>
        Je suis {people.firstname} {people.lastname} et j'ai {people.age} ans
      </h2>
      .<h4>Voici mes loisirs : {people.hobbies.join(", ")}.</h4>
      <h5>{people.isGraduate ? "Je suis diplomé" : ""}.</h5>
      {index ? (
        <p>
          J'habite {people.adress.street}, {people.adress.zipcode}
          {people.adress.city}
        </p>
      ) : (
        <p>Détails sont masqués</p>
      )}
      <button type="button" onClick={() => displayAdress()}>
        Afficher/masquer les détails
      </button>
    </div>
  );
}

export default CardId;
