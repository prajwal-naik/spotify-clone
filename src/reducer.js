export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after dev
    token: "BQBUNmLDFkv1IKJDLhc8pU6cvSHQlVXG_SO_0HaQumxzksHC5XuIx7J3i7VRIDIx76RAyUsjPUzfHtViF6s-oLxXDoTovCPB7czGNv76wUFzzckmc_H6cCjWy4N0ej1xJal9HwGLO8TwMTbZzh9IupTVAjOdKeNRCf7vc665rZrsfygz"
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
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            };

        default:
            return state;
    }
};

export default reducer;