let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', countLike: 25},
            {id: 2, message: 'It`s my first post?', countLike: 32}],
        newPostText: "it-sirius"
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
        dialogs: [
            {id: 1, name: 'Sirius'},
            {id: 2, name: 'Aragorn'},
            {id: 3, name: 'Criss'},
            {id: 4, name: 'Veronica'},
            {id: 5, name: 'Nick'}
        ]
    },
    sideBar: {
        friends: [
            {id: 1, name: 'Sirius'},
            {id: 2, name: 'Aragorn'},
            {id: 3, name: 'Criss'}
        ]
    }
}

export const addPost = (postMessage) => {

    let newPost = {
        id: 5,
        message: postMessage,
        countLike: 0
    };

    state.profilePage.posts.push(newPost);
   rerenderEntireTree();
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; //наблюдатель
}

export default state;