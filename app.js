const people = [
    { name: 'Anu', year: 1986 },
    { name: 'Ash', year: 1986 },
    { name: 'Tassh', year: 1970 },
    { name: 'Irsh', year: 2015 },
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'It my fav food ever', id: 123523 },
];


/*Some and Every Checks */
// Array.prototype.some() is at least one person 19?
 const isAdult = people.some(person => ((new Date()).
 getFullYear()) - person.year >= 19 );

 console.log({isAdult});

// Array.prototype.every() is everyone 19?
const allAdult = people.every(person => ((new Date()).
 getFullYear()) - person.year >= 19 );

 console.log({allAdult});


/*find and fineIndex */
// Array.prototype.find()
// Find is like filter, but instead return just the one you are looking for.
// find the comment with th id of 823423

const comment = comments.find(comment => comment.id === 823423);
console.log(comment);


// Array.prototype.findIndex()
// find the comment with this ID 
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

// Delete the comment with the ID of 823423
 comments.splice(index, 1);
 console.table(comments);
