import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import fetchSearch from "./fetchSearch";
import Results from "./Results";
import useBreedList from "./useBreedList";

const Animals = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  // eslint-disable-next-line no-unused-vars
  const [adoptedPet, _] = useContext(AdoptedPetContext);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        {
          adoptedPet ? (
            <div className="pet image-container">
              <img src={adoptedPet.images[0]} alt={adoptedPet.name}/>
            </div>
          ) : null
        }

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name={location}
          placeholder="Location"
        />
        <br />

        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          value="animal"
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
        >
          <option></option>
          {Animals.map((animal) => (
            <option key={animal}>{animal}</option>
          ))}
        </select>
        <br />

        <label htmlFor="breed">Breed</label>
        <select id="breed" name="breed" disabled={breeds.length === 0}>
          <option></option>
          {breeds.map((breed) => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
        <br />

        <button>Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
