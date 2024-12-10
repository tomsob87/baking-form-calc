const initialState = 'rect';

const selectedNewShapeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_NEW_SHAPE':
            return action.payload;
        default:
            return state;
    }
};

export default selectedNewShapeReducer;