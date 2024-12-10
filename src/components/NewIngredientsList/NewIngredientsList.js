import React from 'react';
import { useSelector } from 'react-redux';
import styles from './NewIngredientsList.module.scss';

const NewIngredientsList = () => {
    const ingredients = useSelector(state => state.ingredients);
    const rectForm = useSelector(state => state.rectForm[0]);
    const newRectForm = useSelector(state => state.newRectForm[0]);
    const roundForm = useSelector(state => state.roundForm[0]);
    const newRoundForm = useSelector(state => state.newRoundForm[0]);
    const selectedShape = useSelector(state => state.selectedShape);
    const selectedNewShape = useSelector(state => state.selectedNewShape);

    const originalP = selectedShape === 'rect' ? rectForm.p : roundForm.p;
    const newP = selectedNewShape === 'rect' ? newRectForm.p : newRoundForm.p;

    const scaleFactor = originalP !== 0 ? newP / originalP : 1;

    return (
        <div className={styles.new__ingr__list}>
            {ingredients
                .filter(ingredient => ingredient.ingName && ingredient.amount)
                .map((ingredient) => (
                    <div className={styles.new__single__ingr} key={ingredient.id}>
                        <span className={styles.ing__name}>{ingredient.ingName}</span>
                        <span className={styles.ing__amount}>{(ingredient.amount * scaleFactor).toFixed(2)}</span>
                        <span className={styles.ing__unit}>{ingredient.unit}</span>
                    </div>
                ))}
        </div>
    );
};

export default NewIngredientsList;