import initialState from "./initialState";

const roundFormReducer = (state = initialState.roundForm, action) => {
    switch (action.type) {
        case 'UPDATE_ROUND_FORM_R': {
            const newR = action.payload;
            return [{ ...state[0], 
                r: newR, 
                p: Math.ceil(Math.PI * newR * newR * 100) / 100 
            }];
        }
        default:
            return state;
    }
};

export default roundFormReducer;