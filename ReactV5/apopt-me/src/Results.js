import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  console.log(pets);
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No Results Found!!</h1>
      ) : (
        pets.map(pet => {
          return (
            <Pet
              key={pet.id}
              id={pet.id}
              name={pet.name}
              breed={pet.breeds.primary}
              media={pet.photos}
              location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
              animal={pet.type}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
