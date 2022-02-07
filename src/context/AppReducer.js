// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case 'ADD_TO_ANIMELIST':
        return{
                ...state,
                watchlist: [action.payload, ...state.watchlist],
            }
            default:
            return state;
    }
};