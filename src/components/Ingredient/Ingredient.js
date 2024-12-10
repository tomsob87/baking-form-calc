import React from 'react';
import { useDispatch } from 'react-redux';
import { updateIngredient } from '../../redux/actions';
import styles from './Ingredient.module.scss';

const Ingredient = ({ id, ingName, amount, unit }) => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateIngredient(id, name, value));
    };

    return (
        <div className={styles.ingr__container}>
            <input type="text" name="ingName" value={ingName} onChange={handleChange} />
            <input type="number" name="amount" value={amount} onChange={handleChange} />
            <select name="unit" value={unit} onChange={handleChange}>
                <option value="">--wybierz--</option>
                <option value="kg">kg</option>
                <option value="dag">dag</option>
                <option value="g">g</option>
                <option value="l">l</option>
                <option value="ml">ml</option>
                <option value="szklanki">szklanek</option>
                <option value="sztuki">sztuk</option>
            </select>
        </div>
    );
};

export default Ingredient;