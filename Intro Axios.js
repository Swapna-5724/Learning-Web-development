// axios
//  .get("http://swapi.dev/api/people/1/")
//  .then(res => {
//     console.log("RESPONSE: ", res);
//     })
//     .catch((e) => {
//     console.log("ERROR!", e);
//     });

const getStarWarsPerson = async () => {
        const res = await axios.get("http://swapi.dev/api/people/${id/");
        console.log(res.data);
};


getStarWarsPerson();

// getStarWarsPerson(5);
// getStarWarsPerson(10);