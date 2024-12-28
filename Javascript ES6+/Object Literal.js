function addressMaker(city, state) {
  const newAdress = { newCity: city, newState: state };

  console.log(newAdress);
}

function addressGenerator(city, state) {
  const newAdress = { city, state };

  console.log(newAdress);
}

addressMaker("Austin", "Texas");
addressGenerator("Bandung", "West Java");

// Challenge
function addressCreator(address) {
  const { city, state } = address;
  const newAddress = {
    city,
    state,
    country: "United States",
  };

  console.log(newAddress);
  console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);
}

addressCreator({ city: "Austin", state: "Texas" });
