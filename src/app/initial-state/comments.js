import users from './users';
import posts from './posts';
//import moment from 'moment-es6';

let maxDepth = 3;
let maxSiblings = 5;
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus pharetra nibh, at pellentesque justo rhoncus a. Integer semper felis nec ultricies dignissim. Ut rutrum ipsum ut tortor vulputate, ultrices vehicula neque eleifend. Nam dolor est, volutpat a fringilla congue, lobortis a ligula. Curabitur at fermentum ex. Vestibulum sagittis est vel massa faucibus vestibulum. Maecenas in lacus non lorem vehicula aliquam. Sed euismod magna ut lectus iaculis"
let loremIpsumLength = loremIpsum.length;
let numberOfUsers = users.length
let commentId = 0;

function generateComments(depth, siblings, parentId, date) {
    let siblingComments = [];

    for (let s = 0; s < random(0, siblings); s++) {
        let id = `comment_${commentId++}`;
        let initialSubstring = loremIpsum.substring(0, random(0, loremIpsumLength));
        let content = initialSubstring.substring(random(0, initialSubstring.length), initialSubstring.length);
    
        let comment = [{
            id: id,
            content: content,
            author: users[random(0, numberOfUsers)],
            date: date,
            parentId:  parentId,
            likes: random(1, 1000),
            childComments: [],
            isVisible: true
          }];
    
        if (depth === 0 || depth < random(0, maxDepth)) return comment;

        let newDate = new Date(date - random(million(3), million(500)));
        siblingComments = siblingComments.concat([...comment, ...generateComments(depth - 1, siblings , id, newDate)]);
    }

    return siblingComments;
}

function random(from, to) {
    return Math.floor(Math.random() * (to - from) + from);
}

function million(n) {
    return n * 1000000;
}

const postObjects = posts.map(p => { 
        const postComments = generateComments(maxDepth, maxSiblings, p.id, p.date);
        return {
            post: {...p, childComments: postComments.filter(c => c.parentId === p.id).map(c => c.id)},
            postComments: postComments
        } });

const postsWithComments = postObjects.map(p => p.post);
const comments = postObjects
    .map(postObject => postObject.postComments
        .map(postComment => { 
            return {
                ...postComment, 
                childComments: postObject.postComments
                    .filter(c => c.parentId === postComment.id)
                    .map(c => c.id) }}))
    .reduce((agg, postComments) => agg.concat(postComments));

export { postsWithComments, comments };