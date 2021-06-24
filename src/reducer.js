export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after dev
    // token: "BQDgCDSp5mAWcd37E2qk0wjcv7PqmtUL9krLnXsGMATLO8YJew0QaUfU_u_XIrp9beW7JNxFqZGzl-xQKMnmNrbrr9SvvajeQkYX0itFFfPlhZa1GLXovvxPYZqGKnJUzFQjCsCJrjM4ynjIARhYtMHkp_ld-RlIq44MwD1vTotcm_D5"


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

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }

        default:
            return state;
    }
};

export default reducer;