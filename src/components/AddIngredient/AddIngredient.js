import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Ingredient from '../Ingredient/Ingredient';
import { addIngredient } from '../../redux/actions';
import styles from './AddIngredient.module.scss';

const AddIngredient = () => {
    const dispatch = useDispatch();
    const ingredients = useSelector(state => state.ingredients);

    const handleAddIngredient = () => {
        dispatch(addIngredient());
    };

    return (
        <div className={styles.add__ingr__container}>
            <button className={styles.button__add} onClick={handleAddIngredient}>Dodaj składnik</button>
            {ingredients.map((ingredient) => (
                <Ingredient key={ingredient.id} {...ingredient} />
            ))}
        </div>
    );
};

export default AddIngredient;