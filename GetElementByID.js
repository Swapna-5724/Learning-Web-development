#document
#document
document.getElementById('chicken')
document.getElementById('checken')
document.getElementById('banner')
const banner = document.getElementById('banner')
console.dir(banner)

document.getElementById('toc')
const toc = document.getElementById('toc')
console.dir(toc)

                                                                    // Video :-> 252 getElementByIdTagName & className

                                                                    document.getElementsById('img')
                                                                    const allImages = document.getElementByIdTagName('img')
                                                                    allImages
                                                                    allImages[0]

                                                                    console.dir(allImages[1])
                                                                    allImages.map
                                                                    allImages.askdkjaslkdjas
                                                                    allImages.length
                                                                    const allImages = document.getElementByTagName('img')



// Video :-> 252 getElementByIdTagName & className

const allImages = document.getElementByTagName('img');

for (let img of allImages) {
    img.src = 
}

const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikipedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}


//  in console:

documnet.getElementByIdClassName('sqardsd')
document.getElementById('asdsd')



//   video:-> 253  querySelector &querySelectorAll

const links = document.querySelectorAll('p a');

for(let link of links) {
    console.log(link.href)
}

// In console:

document.querySelector('p')
document.getElementsByTagName('p')
document.querySelector('#banner')
document.querySelector('.square')
document.querySelector('img:nth-of-type(2)')

document.querySelector('a[title="Java"]')
document.querySelectorAll('p')
document.querySelector('p')
document.querySelectorAll('img')
document.querySelectorAll('a')
document.querySelectorAll('p a')


// video:-> 254 innerHTML,textContent, &innerText

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'I AM A LINK!!!!!'
}


// In console:-
document.querySelector('h1')
const h1 = document.querySelector('h1')
console.dir(h1)
document.querySelector('p').innerText = 'lolololol'
document.querySelector('p').textContent
document.querySelector('p').innerText

document.querySelector('h1').innerText = <i>askdjas<i/>

document.querySelector('h1').innerHTML
document.querySelector('h1').innerText
document.querySelector('p').innerText

document.querySelector('h1').innerText = '<i>askdjas<i/>'
document.querySelector('h1').innerHTML = '<i>askdjas<i/>'
document.querySelector('h1').innerHTML
document.querySelector('h1').innerHTML += '<sup>asjdsa</sup>'
document.querySelector('p').innerText = '<b>askdjas</b>'
document.querySelector('p').innerText = <b>aklsjdas</b>



//  255:- attributes





//  In console:-
document.querySelector('#banner')
document.querySelector('#banner').id
document.querySelector('#banner').id 
document.querySelector('#banner').id = 'whoops'
document.querySelector('#banner').id = 'banner'
document.querySelector('#whoops').id = 'banner'
document.querySelector('#banner').src
document.qurerySelector('a').href
document.querySelector('a').title
const firstLink = document.querySelector('a')
firstLink.href
firstLink.getAttributes('href')
firstLink.getAttributes('id')
firstLink.getAttributes('class')
firstLink.getAttributes('title')
firstLink.setAttributes('href','http://www.google.com')

document.querySelector('input')
document.querySelectorAll('input')[1]
document.querySelector('input[type ="text"]')
const input = document.querySelector('input[type="text"]')
input.type
input.type = 'password'
input.type = 'color'
input.setAttributes('type', 'text')




// 256 :-  Changing Styles

h1 {
    color: olive;
}

for(let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}




// Console:


const h1 = document.querySelector('h1');
h1
h1.style
font-size

h1.style.color
h1.style

h1.style.color = 'green'

h1.style.fontsize = '3em'

h1.style.border = '2px solid pink'


const h1 =
document.querySelector('h1')
h1.style.fontSize
window.getComputedStyle(h1)

window.getComputedStyle(h1).color
window.getComputedStyle(h1).fontSize
window.getComputedStyle(h1).fonFamily
window.getComputedStyle(h1).marginLeft
window.getComputedStyle(h1).margin


// video:- 257: ClassList

In console:

const h2 = document.querySelector(history)
h2.getAttribute('class')
h2.setAttribute('class', 'purple')
h2.setAttribute('class', 'border')
let currentClasses = h2.getAttribute('class')
currentClasses
h2.setAttribute('class', `${currentClasses} purple`)

const h2 = document.querySelector('h2')
h2.ClassList
h2.ClassList
h2.classList.add('purple')
h2.classList.add('border')
h2.classList.remove('border')
h2.classList.contains('purple')

h2.classList.toggle('purple')
h2.classList.toggle('purple')
h2.classList.toggle('purple')


h2.getAttribute('class')





// video:- 258 Traversing Parent/Child/Sibling

const firstBold = document.querySelector('b')
firstBold
firstBold.ParentElement
firstBold.ParentElement.ParentElement
firstBold.ParentElement.ParentElement.ParentElement
const paragraph = firstBold.ParentElement
paragraph.children
paragraph.children[0]
paragraph.children[0].ParentElement


const squareImg = document.querySelector('.square')
squareImg.ParentElement
squareImg.children

{/* Sibling Properties */}

squareImg
squareImg.previousElementSibling
squareImg.nextElementSibling
squareImg.nextSibling
squareImg.previousSibling
sqaureImg.nextElementSibling
sqaureImg.previousElementSibling



//  video:- 259  Append & AppendChild

In Console:

document.createElement('img')
const newImg = document.createElement('img')
console.dir(newImg)

document.body.appendChild(newImg)
newImg.classList.add('square')
const newH3 = document.createElement('h3')
newH3
newH3.innerText = 'I am new!'
document.body.appendChild(newH3)

const p = document.querySelector('p')
p.append('i am new text yaaaaaaaaayy!!!')
p.appendChild('i am new text yaaaaaaaaayy!!!')
p.appendChild('i am new text yaaaaaaaaayy!!!', 'asdasdasdasdasdasdasdasd')
const newB = document.createElement('b')
newB.append('Hi')
newBp.prepend(newB)


const h2 = document.createElement('h2')
h2.append("Are adorable chickens")
h2
const h1 = document.querySelector('h1')
h1.insertAdjacentElement()
h1.insertAdjacentElement('afterend', h2)
h1.nextElementSibling

const h3 = document.createElement('h3')
h3.innerText = 'I am h3';
h1.after(h3)