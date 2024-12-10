import initialState from './initialState';

const ingredientsReducer = (state = initialState.ingredients, action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            return [
                ...state,
                { id: state.length + 1, ingName: '', amount: 0, unit: '' }
            ];
        case 'UPDATE_INGREDIENT':
            return state.map(ingredient =>
                ingredient.id === action.payload.id
                    ? { ...ingredient, [action.payload.name]: action.payload.value }
                    : ingredient
            );
        default:
            return state;
    }
};

export default ingredientsReducer;