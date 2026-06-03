

// const tweetForm = document.querySelector("#tweetForm")
// tweetForm.addEventListener('submit', function (e) {
//     // alert("SUBMIT!!");
//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     console.log(tweetForm.elements.username);
//     console.log(usernameInput.value, tweetInput.value);
//     // console.log("SUBMIT!!")
//     e.preventDefault();
// });



// AGAIN CODING:

const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const userbane = tweetForm.elements.username.value;
    const twwet = tweetForm.elements.tweet.value;

    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`)
    console.log(newTweet)
    // console.log("SUBMIT!!")
    // e.preventDefault();
});

// AGAIN CODING:

const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    // 
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';

});

//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`-${tweet}`)
//     tweetsConatiner.append(newTweet);
// });


const addText = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`)
    tweetsConatiner.append(newTweet);
});




{/* <li><b>Colt</b> -astbdhduebefrdbjx</li> */}

// IN CONSOLE:

// document.querySelectorAll('input')[1]
// document.querySelectorAll('input')[1].value
// document.querySelectorAll('input')[1].value = 'NO I DONT'

// tweetForm
// console.dir(tweetForm)
// tweetForm.elements

