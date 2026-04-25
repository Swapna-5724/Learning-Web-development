// alert("amdudndbx")

let input = prompt("What would you like to do")
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
// while(input !== 'quit') {
while(input !== 'quit' && input !== 'q') {
    if(input == 'list') {
        console.log('**********')
        for(let i = 0; i < todos.length; i++) {
            // console.log('')
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**********')
    } else if (input == 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt('what would you like to do?')
}
console.log('OK QUIT THE APP!')





     
//     } else if (input == 'new') {                                     -> FROM THE LINE 14th
        // const newTodo = prompt('Ok, what is the new todo?');
        // todos.push(newTodo);
        // console.log(`${newTodo} added to the list!`)
    // } else if (input === 'delete') {
        // const index = parseInt(prompt('Ok, enter an indexx to delete:'));
//         // const indexStr = prompt('Ok, enter an index to delete:');
//         // const index = parseInt(indexStr);
//         // const index = parseInt(prompt('Ok, enter an index to delete:'));
//         const index = prompt('Ok, enter an index to delete:');
//         // parseInt(index);
//         const index = parseInt(indexStr);
//         // console.log(index);
//        // if (!Number.isNaN(index)) {
//             const deleted = todos.splice(index, 1);
//             console,log(`Ok, deleted ${deleted[0]}`);
//         // }
//     } else {
//             console.log('Unknown index')
//         }
//     }
//     input = prompt("what would you like to do?")

// console.log('OK QUIT THE APP!')



// IN console

// const nums = [1,2,3,4,5]

// nums.splice(2,1)
// nums

// ['a','b','c'].splice('sdfjsdf', 1)
// parseInt('23')
// parseInt('asdjasd')
// parseInt('0')
// Number.isNaN(NaN)