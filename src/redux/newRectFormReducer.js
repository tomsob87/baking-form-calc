import initialState from "./initialState";

const newRectFormReducer = (state = initialState.newRectForm, action) => {
    switch (action.type) {
        case 'UPDATE_NEW_RECT_FORM_A': {
            const newA = action.payload;
            const newB = state[0].b;
            return [{ ...state[0], a: newA, p: newA * newB }];
        }
        case 'UPDATE_NEW_RECT_FORM_B': {
            const newB = action.payload;
            const newA = state[0].a;
            return [{ ...state[0], b: newB, p: newA * newB }];
        }
        default:
            return state;
    }
};

export default newRectFormReducer;