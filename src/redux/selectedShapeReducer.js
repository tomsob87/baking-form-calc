const initialState = 'rect';

const selectedShapeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_SHAPE':
            return action.payload;
        default:
            return state;
    }
};

export default selectedShapeReducer;