export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after dev
    token: "BQBwVdBt01DZMoGJZi51Tvns0UJa3dBLLg-p51V1CoYiqQrzBGlQiJHOy0wOpBzva-hIUP7iCnqtUTsXVWhn4iCdXzPKQQMhLQTWgKl1sH4BbhYosYAZV_9MPeWMBBJHeWSbjxq01av_IgGlN1TPA-gwwiQ7MGxlMqaFwf0ogj4BQA_w",
};


const reducer = (state, action) => {
    console.log(action);
    
    //Action -> type, [payload]

    switch(action.type) {
        case "SET_USER": 
            return {
                ...state,
                user: action.user
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };
        default:
            return state;
    }
};

export default reducer;