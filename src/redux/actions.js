export const updateRectFormA = (value) => ({
    type: 'UPDATE_RECT_FORM_A',
    payload: value
});

export const updateRectFormB = (value) => ({
    type: 'UPDATE_RECT_FORM_B',
    payload: value
});

export const updateNewRectFormA = (value) => ({
    type: 'UPDATE_NEW_RECT_FORM_A',
    payload: value
});

export const updateNewRectFormB = (value) => ({
    type: 'UPDATE_NEW_RECT_FORM_B',
    payload: value
});

export const updateRoundFormR = (value) => ({
    type: 'UPDATE_ROUND_FORM_R',
    payload: value
});

export const updateNewRoundFormR = (value) => ({
    type: 'UPDATE_NEW_ROUND_FORM_R',
    payload: value
});

export const addIngredient = () => ({
    type: 'ADD_INGREDIENT'
});

export const updateIngredient = (id, name, value) => ({
    type: 'UPDATE_INGREDIENT',
    payload: { id, name, value }
});

export const setSelectedShape = (shape) => ({
    type: 'SET_SELECTED_SHAPE',
    payload: shape
});

export const setSelectedNewShape = (shape) => ({
    type: 'SET_SELECTED_NEW_SHAPE',
    payload: shape
});