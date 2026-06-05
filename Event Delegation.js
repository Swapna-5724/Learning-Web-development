// const lis = document.querySelectorAll('li');
// for(let li of lis) {
//     lis.addEventListener('click', function(){
//         li.remove();
//     })
// }

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.nextElementSibling.username;
    const tweetInput = tweetForm.nextElementSibling.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsConatiner.append(newTweet);
}

tweetsContainer.addEventListener('click', function (e) {
    // console.log("CLICK ON UL!");
    // console.log(e)
    // e.target.nodeT
    console.dir(e.target)
    // e.target.remove();
    e.target.nodeName === 'LI' && e.target.remove();
})