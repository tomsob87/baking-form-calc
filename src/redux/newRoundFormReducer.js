import initialState from "./initialState";

const newRoundFormReducer = (state = initialState.newRoundForm, action) => {
    switch (action.type) {
        case 'UPDATE_NEW_ROUND_FORM_R': {
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

export default newRoundFormReducer;