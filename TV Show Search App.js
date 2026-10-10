const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // console.log("SUBMITTED")
    // console.log("Form")          // Error
    // console.dir(form) 
    // console.log(form.elements.query.value)
    const searchTerm = form.elements.query.value;
    // axios.get(`http://api.tvmaze.com/search/shows?q=girls`)
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
    // console.log(res.data[0].show.image.medium);
    console.log();
    const img = document.createElement('IMG');
    img.src = res.data[0].show.image.medium;
    document.body.append(img)
})



//   02


const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm, }}
    // const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = '';
})

// const makeImages = (Shows) => {                    //01
//     for(let result of shows){
//         console.log(result)
//         // const img = document.createElement('IMG');
//         // img.src = result.show.image.medium;
//         // document.body.append(img)
//     }
// }



// const makeImages = (Shows) => {                    //02
//     for(let result of shows){
//         console.log(result)
//     }
// }



const makeImages = (Shows) => {                    //03
    for(let result of shows){
        if(result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
                document.body.append(img)
        }
    }
}